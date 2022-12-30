import { useState } from "react";
import { Loading } from "../loading/Loading";
import { Border, Container, Image } from "./styles";

type PreviewPhotoProps = {
  file: File;
}

export const PreviewPhoto: React.FC<PreviewPhotoProps> = ({file}) => {
  const [preview, setPreview] = useState<any>(null);

  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    setPreview(reader.result);
  }

  return (
    <Border>
      <Container>
        {!preview && (<Loading size={50}/>)}
        {preview && (<Image src={preview}/>)}
      </Container>
    </Border>

  );
}
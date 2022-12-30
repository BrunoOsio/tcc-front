import { Photo } from "../../types"
import { photoStorage } from "../../config/firebase/firebaseConfig";
import { ref, listAll, getDownloadURL, uploadBytes } from "firebase/storage";
import { v4 as uuid} from "uuid";

const PHOTOS_FOLDER_NAME = "images";

const findAll = async (): Promise<Photo[]> => {
  let list: Photo[] = [];

  const imagesFolder = ref(photoStorage, PHOTOS_FOLDER_NAME);
  const photoList = await listAll(imagesFolder);

  for (let photo of photoList.items) {
    const photoUrl = await getDownloadURL(photo);

    list.push({
      name: photo.name,
      url: photoUrl
    });
  }

  return list;
}

const create = async (file: File): Promise<Photo> => {
  const id = uuid();
  const fileReference = ref(photoStorage, `${PHOTOS_FOLDER_NAME}/${id}`);

  const upload = await uploadBytes(fileReference, file);
  const photoUrl = await getDownloadURL(upload.ref);

  const createdPhoto: Photo = {
    name: upload.ref.name,
    url: photoUrl
  }

  return createdPhoto;
}

export default { findAll, create };
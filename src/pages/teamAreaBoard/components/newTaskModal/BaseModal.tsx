import ReactDOM from "react-dom";
import styled from "styled-components";

type ModalProps = {
  onBackDropClick: () => void;
  children: React.ReactNode
}

const Overlay = styled.div`
  background-color: rgb(0,0,0, 0.5);
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BaseModal: React.FC<ModalProps> = ({onBackDropClick, children}) => {
  return ReactDOM.createPortal(
    <Overlay onClick={onBackDropClick}>
      <div onClick={event => event.stopPropagation()}>
        {children}
      </div>
    </Overlay>, 
    document.getElementById("modal-root")!
  );
}
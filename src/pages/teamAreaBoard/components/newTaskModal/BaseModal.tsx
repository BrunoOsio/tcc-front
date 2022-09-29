import ReactDOM from "react-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import "./overlay.css";

type ModalProps = {
  onBackDropClick: () => void;
  children: React.ReactNode
}

const Overlay = styled.div`

`;

export const BaseModal: React.FC<ModalProps> = ({onBackDropClick, children}) => {
  return ReactDOM.createPortal(
    <motion.div 
    initial={{
      opacity: 0,
      scale: 0
    }}
    animate={{
      opacity: 1,
      scale: 1
    }}
    className="overlay"
    onClick={onBackDropClick}>
      <div onClick={event => event.stopPropagation()}>
        {children}
      </div>
    </motion.div>, 
    document.getElementById("modal-root")!
  );
}
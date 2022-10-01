import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import "./overlay.css";

type ModalProps = {
  onBackDropClick: () => void;
  children: React.ReactNode
}

export const BaseModal: React.FC<ModalProps> = ({onBackDropClick, children}) => {
  return ReactDOM.createPortal(
    <motion.div 
    initial={{
      opacity: 0,
    }}
    animate={{
      opacity: 1,
      transition: {
        duration: 0.4
      }
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
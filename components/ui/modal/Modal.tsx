import { ReactNode } from "react";
import styles from "./Modal.module.css";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  content: ReactNode;
};

function Modal({ isOpen, onClose, content }: ModalProps) {
  if (!isOpen) return null;
  return (
    <div className={styles["modal-backdrop"]}>
      <div className={styles["modal-content"]}>
        <button className={styles["modal-close"]} onClick={onClose}>
          &times;
        </button>
        {content}
      </div>
    </div>
  );
}

export default Modal;

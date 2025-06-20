'use client';
import Modal from "@/components/ui/modal/Modal";
import { createContext, ReactNode, useContext, useState } from "react";

type modalCtxType = {
  close: () => void;
  show: (content: ReactNode) => void;
};

const ModalContext = createContext<modalCtxType | null>(null);

import React from "react";

function ModalProvider({ children }: any) {
  const [modalContent, setModalContent] = useState<ReactNode | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const close = () => {
    setIsOpen(false);
    setModalContent(null);
  };

  const show = (content: any) => {
    setModalContent(content);
    setIsOpen(true);
  };

  return (
    <ModalContext.Provider value={{ close, show }}>
      {children}
      <Modal content={modalContent} isOpen={isOpen} onClose={close} />
    </ModalContext.Provider>
  );
}

export default ModalProvider;

export const useModal = () => useContext<modalCtxType | null>(ModalContext);
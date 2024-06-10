import React, { useEffect, useRef, useState } from "react";
import "./Modal.scss";

type Props = {
    isOpen: boolean;
    children: React.ReactNode;
}

const Modal: React.FC<Props> = ({ isOpen, children }) => {
    const [isModalOpen, setModalOpen] = useState<Boolean>(isOpen);
    const modalRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        setModalOpen(isOpen);
    }, [isOpen])

    useEffect(() => {
        const modalElement = modalRef.current;
        if (modalElement) {
            if (isModalOpen) {
                modalElement.showModal();
            }
            else {
                modalElement.close();
            }
        }
    }, [isModalOpen])


    return (
        <dialog 
                className="modal"
                ref={modalRef} 
        >
            {children}
        </dialog>
    )
};

export default Modal;
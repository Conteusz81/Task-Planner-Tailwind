import React from "react";
import { IoMdClose } from "react-icons/io";
import { useModal } from "../utilities/ModalProvider";

const ModalClose = () => {
    const { handleClose } = useModal();

    return (
        <div
            className="modal_close_wrapper"
            onClick={handleClose}
        >
            <IoMdClose className="text-gray-600 text-xl lg:text-3xl" />
        </div>
    );
};

export default ModalClose;

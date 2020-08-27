import React from "react";
import { IoMdClose } from "react-icons/io";
import { useModal } from "../utilities/ModalProvider";

const ModalClose = () => {
    const { handleClose } = useModal();
    return (
        <div
            className="p-2 pr-3 lg:p-4 lg:pr-6 flex justify-end items-center shadow-md bg-gradient-to-r from-gray-200 rounded-b-md cursor-pointer"
            onClick={handleClose}
        >
            <IoMdClose className="text-gray-600 text-xl lg:text-3xl" />
        </div>
    );
};

export default ModalClose;

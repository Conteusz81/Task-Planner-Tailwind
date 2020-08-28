import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import { TransitionProps } from "@material-ui/core/transitions";
import CalendarNav from "./CalendarNav";
import { useModal } from "../utilities/ModalProvider";

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & { children?: React.ReactElement },
    ref: React.Ref<unknown>,
) {
    const { slide } = useModal();
    return <Slide direction={slide} ref={ref} {...props} />;
});

const Modal = () => {
    const { open, navigation, closeModal } = useModal();
    return (
        <div>
            <Dialog fullScreen open={open} onClose={closeModal} TransitionComponent={Transition}>
                <CalendarNav nav={navigation} />
            </Dialog>
        </div>
    );
};

export default Modal;

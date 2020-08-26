import React from "react";
import { formatISO } from "date-fns";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import { TransitionProps } from "@material-ui/core/transitions";
import { useModal } from "../utilities/ModalProvider";
import { useDate } from "../utilities/DateProvider";

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & { children?: React.ReactElement },
    ref: React.Ref<unknown>,
) {
    const { slide } = useModal();
    return <Slide direction={slide} ref={ref} {...props} />;
});

const Modal = () => {
    const { currentDate } = useDate();
    const { open, navigation, handleClose } = useModal();
    console.log("NAV", navigation);
    return (
        <div>
            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <h1 onClick={handleClose}>{formatISO(currentDate)}</h1>
            </Dialog>
        </div>
    );
};

export default Modal;

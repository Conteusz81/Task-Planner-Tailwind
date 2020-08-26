import React, { useContext, useState } from "react";

type Slide = "up" | "left" | "right" | "down";
type Nav = "months" | "years";

interface IModalContext {
    open: boolean;
    slide: Slide;
    navigation: Nav;
    handleDateNavClickOpen: (value: Nav) => void;
    handleClose: () => void;
}

const ModalContext = React.createContext<IModalContext | undefined>(undefined);

const ModalProvider: React.FC = ({ children }) => {
    const [open, setOpen] = useState(false);
    const [slide, setSlide] = useState<Slide>("up");
    const [navigation, setNavigation] = useState<Nav>("years");

    const handleDateNavOpen = (nav: Nav) => {
        setSlide("down");
        setNavigation(nav);
        setOpen(true);
    }

    const value = {
        open,
        slide,
        navigation,
        handleDateNavClickOpen: (nav: Nav) => handleDateNavOpen(nav),
        handleClose: () => setOpen(false)
    }
    return (
        <ModalContext.Provider value={value}>
            {children}
        </ModalContext.Provider>
    );
};

const useModal = () => {
    const context = useContext(ModalContext);
    if (context === undefined) {
        throw new Error('useDate must be used within a Provider');
    }

    return context;
}

export { ModalProvider, useModal };

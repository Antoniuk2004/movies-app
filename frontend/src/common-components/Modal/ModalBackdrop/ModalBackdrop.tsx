import {AnimatePresence, motion} from "framer-motion";
import {ReactNode} from "react";

type ModalBackdropProps = {
    children: ReactNode;
    isVisible: boolean;
}

const ModalBackdrop = (props: ModalBackdropProps) => {
    const {isVisible, children} = props;

    return (
        <AnimatePresence>
            {isVisible &&
                <motion.div
                    className={`fixed flex justify-center items-center bg-modal-backdrop select-none z-50 bg-modal-screen w-full h-svh`}
                >
                    {children}
                </motion.div>}
        </AnimatePresence>
    )
}

export default ModalBackdrop;
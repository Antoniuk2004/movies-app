import {AnimatePresence, motion} from "framer-motion";
import {Dispatch, MutableRefObject, ReactNode, SetStateAction} from "react";

type ModalLayoutProps = {
    children: ReactNode;
    setModalRef: (ref: HTMLDivElement | null) => void;
}

const ModalLayout = (props: ModalLayoutProps) => {
    const {children, setModalRef} = props;

    return (
        <motion.div
            ref={(ref) => setModalRef(ref)}
            initial={{opacity: 0, y: -50}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: 50}}
            transition={{duration: 0.2}}
            className="bg-white w-fit z-50 rounded-lg">
            {children}
        </motion.div>
    )
}

export default ModalLayout;
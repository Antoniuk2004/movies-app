import { LayoutProps } from "@/types/LayoutProps";
import { motion } from "framer-motion";

const ModalLayout = ({ children }: LayoutProps) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={"absolute right-0 bg-bl bg-banner-bottom flex justify-end top-0 z-40 w-screen h-svh overflow-hidden"}>
            <motion.div
                initial={{ x: 100 }}
                animate={{ x: 0 }}
                exit={{ x: 100 }}
                transition={{ duration: 0.2 }}
                className="max-w-110 w-full relative ">
                {children}
            </motion.div>
        </motion.div>
    )
}

export default ModalLayout;
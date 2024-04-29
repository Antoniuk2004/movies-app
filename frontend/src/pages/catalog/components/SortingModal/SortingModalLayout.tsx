import { LayoutProps } from "@/types/LayoutProps";
import { motion } from "framer-motion";

const SortingModalLayout = ({ children }: LayoutProps) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={"absolute top-0 bg-banner-bottom z-30 w-screen h-svh flex items-end justify-center"}>
            <motion.div
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                exit={{ y: 100 }}
                transition={{ duration: 0.2 }}
                className="max-w-110 w-full relative mb-2 px-4">
                {children}
            </motion.div>
        </motion.div>
    )
}

export default SortingModalLayout;
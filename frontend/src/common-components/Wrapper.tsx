import {LayoutProps} from "@/types/LayoutProps";
import {motion} from "framer-motion";

const Wrapper = ({children}: LayoutProps) => {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.3, ease: "easeIn"}}
            className="w-full h-full flex items-center">
            <div className="mx-auto w-full h-full max-w-wrapper">
                {children}
            </div>
        </motion.div>
    )
}

export default Wrapper;
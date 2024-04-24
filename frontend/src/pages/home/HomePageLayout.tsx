import {LayoutProps} from "@/types/LayoutProps";
import { motion } from "framer-motion";

const HomePageLayout = ({children}: LayoutProps) => {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.3, ease: "easeIn"}}
            className={"min-h-svh"}>
            {children}
        </motion.div>
    )
}

export default HomePageLayout;
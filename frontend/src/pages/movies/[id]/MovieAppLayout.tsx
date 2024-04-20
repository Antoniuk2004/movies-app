import {LayoutProps} from "@/types/LayoutProps";
import { motion } from "framer-motion";

const MovieAppLayout = ({children} : LayoutProps) => {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.3, ease: "easeIn"}}
            className="grid responsive:px-0 responsive:min-h-svh responsive:gap-y-[15px] responsive:grid-cols-movie-short responsive:grid-rows-movie-short select-none text-neutral-800 z-20 mt-4 wrapper:mt-0 px-4 grid-rows-movie-full grid-cols-movie-full gap-y-4 gap-x-8 w-full">
            {children}
        </motion.div>
    )
}

export default MovieAppLayout;
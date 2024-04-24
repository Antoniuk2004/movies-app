import {AnimatePresence, motion} from "framer-motion";

type TimelineCursorProps = {
    percentage: number;
    isHovered: boolean;
}

const TimelineCursor = (props: TimelineCursorProps) => {
    const {percentage, isHovered} = props;

    return (
        <AnimatePresence>
            {isHovered && (
                <motion.div
                    initial={{scale: 0.3}}
                    animate={{scale: 1}}
                    exit={{scale: 0.3}}
                    transition={{duration: 0.2}}
                    style={{left: `calc(${percentage}%)`}}
                    className="absolute cursor-pointer -ml-2 responsive:mb-0 -mb-[5px] left-0 bg-white size-4 rounded-full">
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default TimelineCursor;
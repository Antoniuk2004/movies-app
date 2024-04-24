import {AnimatePresence, motion} from "framer-motion";

type VolumeCursorProps = {
    isMuted: boolean;
    volume: number;
    isCursorShown: boolean;
}

const VolumeCursor = (props: VolumeCursorProps) => {
    const {isMuted, volume, isCursorShown} = props;

    return (
        <AnimatePresence>
            {isCursorShown && (
                <motion.div
                    initial={{scale: 0.3}}
                    animate={{scale: 1}}
                    exit={{scale: 0.3}}
                    transition={{duration: 0.2}}
                    style={{left: isMuted ? '-8px' : `calc(${volume * 100}% - 8px)`}}
                    className="absolute left-0 bg-white size-4 rounded-full">
                </motion.div>)}
        </AnimatePresence>
    )
}

export default VolumeCursor;
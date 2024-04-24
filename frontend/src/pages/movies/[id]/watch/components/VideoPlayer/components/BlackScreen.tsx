import {AnimatePresence, motion} from "framer-motion";

type BlackScreenProps = {
    isShown: boolean;
}

const BlackScreen = (props: BlackScreenProps) => {
    const {isShown} = props;

    return (
        <AnimatePresence>
            {isShown && (
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: 0.2}}
                    className={"bg-black absolute top-0 left-0 w-full h-full"}>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default BlackScreen;
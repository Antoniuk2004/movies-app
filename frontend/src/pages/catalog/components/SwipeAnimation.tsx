import {LayoutProps} from "@/types/LayoutProps";
import {AnimatePresence, motion} from "framer-motion";

type SwipeAnimationProps = LayoutProps & {
    isHidden: boolean;
};

const SwipeAnimation = (props: SwipeAnimationProps) => {
    const {children, isHidden} = props;

    return (
        <AnimatePresence>
                <motion.div
                    className={"h-full w-full"}
                    animate={{translateX: !isHidden ? 0 : -330}}
                    transition={{duration: 0.3, ease: "easeOut"}}
                >
                    {children}
                </motion.div>
            {/*)}*/}
        </AnimatePresence>
    )
}

export default SwipeAnimation;
import {LayoutProps} from "@/types/LayoutProps";
import {AnimatePresence, motion} from "framer-motion";

type SwipeAnimationProps = LayoutProps & {
    isHidden: boolean;
};

const MobileSwipeAnimation = (props: SwipeAnimationProps) => {
    const {children, isHidden} = props;

    return (
        <AnimatePresence>
                <motion.div
                    className={"relative h-full w-full"}
                    animate={{translateX: !isHidden ? 0 : -440}}
                    transition={{duration: 0.3, ease: "easeOut"}}
                >
                    {children}
                </motion.div>
        </AnimatePresence>
    )
}

export default MobileSwipeAnimation;
import {LayoutProps} from "@/types/LayoutProps";
import {AnimatePresence, motion} from "framer-motion";
import {useContext} from "react";
import {DropDownContext} from "@/common-components/Dropdown/Dropdown";

type OptionListLayoutProps = LayoutProps & {
    isOpen: boolean;
};

const OptionListLayout = (props: OptionListLayoutProps) => {
    const {children, isOpen} = props;
    const {optionListRef} = useContext(DropDownContext);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    ref={optionListRef}
                    initial={{opacity: 0, y: 10}}
                    animate={{opacity: 1, y: 0}}
                    exit={{opacity: 0, y: 10}}
                    transition={{duration: 0.2}}
                >
                    <div className={"absolute top-full bg-white mt-1 rounded-md shadow-dropdown w-full p-1.5"}>
                        {children}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default OptionListLayout;
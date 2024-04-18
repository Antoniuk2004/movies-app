import {motion} from "framer-motion";
import SelectionLineLayout from "./SelectionLineLayout";

const SelectionLine = () => {
    return (
        <SelectionLineLayout>
            <motion.div
                initial={{translateY: 1, scaleY: 0}}
                animate={{translateY: 0, scaleY: 1}}
                transition={{duration: 0.2, ease: "easeOut"}}
                className="w-full h-[3px] bg-primary rounded-t">
            </motion.div>
        </SelectionLineLayout>
    )
}

export default SelectionLine;
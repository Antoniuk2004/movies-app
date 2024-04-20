import {motion} from "framer-motion";
import ProgressbarLayout from "./ProgressbarLayout";

type ProgressbarProps = {
    percentage: number;

}

const Progressbar = (props: ProgressbarProps) => {
    const {percentage} = props;

    return (
        <ProgressbarLayout>
            <motion.div
                initial={{width: 0}}
                animate={{width: `${percentage}%`}}
                transition={{duration: 0.5}}
                className={"bg-primary rounded-md h-full"}>
            </motion.div>
        </ProgressbarLayout>
    )
}

export default Progressbar;
import {motion} from "framer-motion";
import ProgressbarLayout from "./ProgressbarLayout";

type ProgressbarProps = {
    percentage: number;
    bgColor?: string;
    animate?: boolean;
    mx? : string;
}

const Progressbar = (props: ProgressbarProps) => {
    const {percentage, bgColor, animate, mx} = props;

    if(animate === false) return (
        <ProgressbarLayout mx={mx} bgColor={bgColor}>
            <div className={"bg-primary rounded-md h-full"} style={{width: `${percentage}%`}}/>
        </ProgressbarLayout>
    )
    else return (
        <ProgressbarLayout mx={mx} bgColor={bgColor}>
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
import {Dispatch, FormEvent, ReactNode, RefObject, SetStateAction} from "react";
import { motion } from "framer-motion";
import {DataType} from "@/types/DataType";

type SignLayoutProps = {
    children: ReactNode;
    submitFunction: (e: FormEvent<HTMLFormElement>,
                     data: DataType,
                     setData: Dispatch<SetStateAction<DataType>>,
                     buttonRef: RefObject<HTMLButtonElement>) => void;
    data: DataType;
    setData: Dispatch<SetStateAction<DataType>>;
    buttonRef: RefObject<HTMLButtonElement>;
}

const SingLayout = (props: SignLayoutProps) => {
    const {children, submitFunction, data, setData, buttonRef} = props;

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.2}}
            className="w-full h-screen flex items-center justify-center">
            <form
                onSubmit={(e) => submitFunction(e, data, setData, buttonRef)}
                className="flex relative flex-col bg-white px-8 pt-16 pb-8 rounded-2xl" action="">
                {children}
            </form>
        </motion.div>
    )
}

export default SingLayout;
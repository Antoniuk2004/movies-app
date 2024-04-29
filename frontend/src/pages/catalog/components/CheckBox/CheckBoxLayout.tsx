import {LayoutProps} from "@/types/LayoutProps";
import {Dispatch, SetStateAction} from "react";
import {handleButtonClick} from "@/pages/catalog/handlers";

type CheckBoxPropsLayout = LayoutProps & {
    firstId: string;
    secondId?: string;
    index: number;
    setCheckBoxState: Dispatch<SetStateAction<number>>
    title: string;
}

const CheckBoxLayout = (props: CheckBoxPropsLayout) => {
    const {children, title, firstId, secondId, index, setCheckBoxState} = props;

    return (
        <button
            type={"button"}
            onClick={() =>
                handleButtonClick(setCheckBoxState, index, firstId, secondId)}
            className={"flex gap-x-2 items-center text-sm font-normal"}>
            {children}
            <span>{title}</span>
        </button>
    )
}

export default CheckBoxLayout;
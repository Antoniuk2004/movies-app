import {useContext} from "react";
import {DropDownContext} from "@/common-components/Dropdown/Dropdown";

type OptionProps = {
    value: string;
}

const Option = (props: OptionProps) => {
    const {value} = props;

    const {setSelected, setIsOpen, onElementClick} = useContext(DropDownContext);

    return (
        <div
            onClick={() => {
                setSelected(value);
                setIsOpen(false);
                onElementClick(value);
            }}
            className={"text-sm hover:bg-hover-light duration-200 ease-out rounded-md font-normal px-3.5 py-2 mb-0.5 cursor-pointer"}>
            <span>{value}</span>
        </div>
    )
}

export default Option;
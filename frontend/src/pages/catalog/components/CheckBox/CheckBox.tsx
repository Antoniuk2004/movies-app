import {IoMdCheckmark, IoMdClose} from "react-icons/io";

type CheckBoxProps = {
    value: number;
}

const CheckBox = (props: CheckBoxProps) => {
    const {value} = props;
    const commonClasses = "size-4 flex rounded text-normal text-white items-center justify-center";

    if (value === 0 || value === undefined || value === null) return (
        <div className={`${commonClasses} ring-1 ring-btn-light`}></div>
    )
    else if (value === 1) return (
        <div className={`${commonClasses} bg-green-500`}>
            <IoMdCheckmark/>
        </div>
    )
    else return (
            <div className={`${commonClasses} bg-red-500`}>
                <IoMdClose/>
            </div>
        )
}

export default CheckBox;
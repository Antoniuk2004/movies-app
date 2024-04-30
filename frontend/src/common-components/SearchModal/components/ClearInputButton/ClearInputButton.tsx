import ClearInputButtonLayout from "./ClearInputButtonLayout";
import {IoMdClose} from "react-icons/io";

type ClearInputButtonProps = {
    searchValue: string;
}

const ClearInputButton = (props: ClearInputButtonProps) => {
    const {searchValue} = props;

    return (
        <ClearInputButtonLayout searchValue={searchValue}>
            <IoMdClose className={"text-xl"}/>
        </ClearInputButtonLayout>
    )
}

export default ClearInputButton;
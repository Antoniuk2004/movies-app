import OptionListLayout from "./OptionListLayout";
import Option from "@/common-components/Dropdown/components/Option/Option";
import {Fragment} from "react";

type OptionListProps = {
    options: string[];
    isOpen: boolean;
}

const OptionList = (props: OptionListProps) => {
    const {options, isOpen} = props;

    return (
        <OptionListLayout isOpen={isOpen}>
            <Fragment>
                {options.map((option, index) => (
                    <Option value={option} key={index}/>
                ))}
            </Fragment>
        </OptionListLayout>
    )
}

export default OptionList;
import OptionListLayout from "./OptionListLayout";
import Option from "@/common-components/Dropdown/components/Option/Option";
import {Fragment} from "react";
import Separator from "@/common-components/Dropdown/components/Separator";
import AdditionalCase from "@/common-components/Dropdown/components/AdditionalCase/AdditionalCase";

type OptionListProps = {
    options: string[];
    isOpen: boolean;
    additionalClasses?: string[];
}

const OptionList = (props: OptionListProps) => {
    const {options, isOpen, additionalClasses} = props;

    return (
        <OptionListLayout isOpen={isOpen}>
            <Fragment>
                {options.map((option, index) => (
                    <Option value={option} key={index}/>
                ))}
                <Separator additionalClasses={additionalClasses}/>
                {additionalClasses && additionalClasses.map((option, index) => (
                    <AdditionalCase value={option} key={index}/>
                ))}
            </Fragment>
        </OptionListLayout>
    )
}

export default OptionList;
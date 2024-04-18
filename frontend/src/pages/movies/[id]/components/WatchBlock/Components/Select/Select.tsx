import SelectLayout from "./SelectLayout";
import {FaCheck, FaPlus} from "react-icons/fa6";
import SelectButton from "@/pages/movies/[id]/components/WatchBlock/Components/SelectButton/SelectButton";
import {IoChevronDown} from "react-icons/io5";
import Block from "@/common-components/Block";
import {WatchingStatus} from "@/types/WatchingStatus";
import SelectedValue from "@/pages/movies/[id]/components/WatchBlock/Components/SelectedValue";

type SelectProps = {
    selected: WatchingStatus
}

const Select = (props: SelectProps) => {
    const {selected} = props;

    return (
        <SelectLayout>
            <Block flex={true}>
                <SelectButton>
                    {selected ? <FaCheck/> : <FaPlus className={"text-neutral-800"}/>}
                </SelectButton>
                <SelectedValue selected={selected}/>
            </Block>
            <SelectButton
                borderLeft={true}
                textColor={'text-neutral-800'}>
                <IoChevronDown/>
            </SelectButton>
        </SelectLayout>
    )
}

export default Select;
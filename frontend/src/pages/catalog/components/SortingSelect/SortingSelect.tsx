import SortingSelectLayout from "./SortingSelectLayout";
import Dropdown from "@/common-components/Dropdown/Dropdown";
import {useState} from "react";
import {Sort} from "@/types/Sort";
import {FaCaretDown} from "react-icons/fa6";
import SortIcon from "@/pages/catalog/components/SortingSelect/components/SortIcon";
import LeftSide from "@/pages/catalog/components/SortingSelect/components/LeftSide";

const SortingSelect = () => {
    const [selected, setSelected] = useState(Sort.RATING);
    const [additionalCase, setAdditionalCase] = useState(Sort.DESC);

    return (
        <Dropdown
            setAdditionalCase={setAdditionalCase}
            additionalClasses={Object.values(Sort).slice(5, 7)}
            options={Object.values(Sort).slice(0, 5)}
            setSelected={setSelected}
            onElementClick={() => console.log("lol")}>
            <SortingSelectLayout>
                <LeftSide>
                    <SortIcon additionalCase={additionalCase}/>
                    <span>{selected}</span>
                </LeftSide>
                <FaCaretDown/>
            </SortingSelectLayout>
        </Dropdown>
    )
}

export default SortingSelect;
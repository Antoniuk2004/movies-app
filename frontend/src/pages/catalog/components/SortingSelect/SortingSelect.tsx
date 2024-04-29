import SortingSelectLayout from "./SortingSelectLayout";
import Dropdown from "@/common-components/Dropdown/Dropdown";
import {useState} from "react";
import {Sort} from "@/types/Sort";
import {FaCaretDown} from "react-icons/fa6";
import SortIcon from "@/pages/catalog/components/SortingSelect/components/SortIcon";
import LeftSide from "@/pages/catalog/components/SortingSelect/components/LeftSide";
import {getInitialOrder, getInitialOrderType, getKeyByValue} from "@/pages/catalog/helpers";
import {useRouter} from "next/navigation";
import {useFormContext} from "react-hook-form";
import {handleOrderSelect, handleOrderTypeSelect} from "@/pages/catalog/handlers";
import {catalogParamsSignal} from "@/pages/catalog/signals/catalog-params-signal";

const SortingSelect = () => {
    const [selected, setSelected] = useState(getInitialOrderType() as Sort);
    const [additionalCase, setAdditionalCase] = useState(getInitialOrder() as Sort);
    const router = useRouter();
    const data = useFormContext().getValues();

    return (
        <Dropdown
            setAdditionalCase={setAdditionalCase}
            additionalClasses={Object.values(Sort).slice(5, 7)}
            options={Object.values(Sort).slice(0, 5)}
            setSelected={setSelected}
            onAdditionalCaseClick={(value) => handleOrderSelect(value, data, router)}
            onElementClick={(value) => handleOrderTypeSelect(value, data, router)}>
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
import FilterSelectLayout from "./FilterSelectLayout";
import RightFilterSelectSide from "@/pages/catalog/components/RightFilterSelectSide/RightFilterSelectSide";
import {Dispatch, SetStateAction, useState} from "react";
import CheckboxList from "@/pages/catalog/components/CheckboxList/CheckboxList";
import {Genre} from "@/types/Genre";
import {Person} from "@/types/Person";
import {Studio} from "@/types/Studio";
import {CountryType} from "@/types/CountryType";

type FilterSelectProps = {
    options: Genre[] | Person[] | Studio[] | CountryType[];
    title: string;
    setIsHidden: Dispatch<SetStateAction<boolean>>;
    id: string;
    mobile: boolean;
}

const FilterSelect = (props: FilterSelectProps) => {
    const {options, title, setIsHidden, id, mobile} = props;
    const [isSelected, setIsSelected] = useState<boolean>(false);

    return (
        <>
            <FilterSelectLayout setIsSelected={setIsSelected} setIsHidden={setIsHidden}>
                <span>{title}</span>
                <RightFilterSelectSide id={id}/>
            </FilterSelectLayout>
            <CheckboxList
                mobile={mobile}
                setIsHidden={setIsHidden}
                setIsSelected={setIsSelected}
                isSelected={isSelected}
                title={title}
                options={options}
                id={id}
            />
        </>
    )
}

export default FilterSelect;
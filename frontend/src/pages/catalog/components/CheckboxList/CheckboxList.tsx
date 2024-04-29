import CheckboxListLayout from "./CheckboxListLayout";
import ListHeader from "@/pages/catalog/components/CheckboxList/components/ListHeader/ListHeader";
import {Dispatch, SetStateAction} from "react";
import CheckboxSection from "@/pages/catalog/components/CheckboxSection/CheckboxSection";
import {Genre} from "@/types/Genre";
import {Person} from "@/types/Person";
import {Studio} from "@/types/Studio";
import {CountryType} from "@/types/CountryType";
import ListsApplyButton from "@/pages/catalog/components/ListsApplyButton/ListsApplayButton";

type CheckboxListProps = {
    title: string;
    options: Genre[] | Person[] | Studio[] | CountryType[];
    id: string;
    isSelected: boolean;
    setIsSelected: Dispatch<SetStateAction<boolean>>;
    setIsHidden: Dispatch<SetStateAction<boolean>>;
    mobile: boolean;
}

const CheckboxList = (props: CheckboxListProps) => {
    const {title, isSelected, setIsSelected, setIsHidden, options, id, mobile} = props;

    if (!isSelected) return null;
    return (
        <>
            <CheckboxListLayout mobile={mobile}>
                <ListHeader
                    setIsHidden={setIsHidden}
                    setIsSelected={setIsSelected}
                    title={title}
                />
                <CheckboxSection mobile={mobile} id={id} options={options}/>
            </CheckboxListLayout>
            <ListsApplyButton mobile={mobile}/>
        </>
    )
}

export default CheckboxList;
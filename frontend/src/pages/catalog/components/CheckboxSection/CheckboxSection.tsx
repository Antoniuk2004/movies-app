import CheckboxSectionLayout from "./CheckboxSectionLayout";
import {Genre} from "@/types/Genre";
import {Person} from "@/types/Person";
import {Studio} from "@/types/Studio";
import {CountryType} from "@/types/CountryType";
import CheckItem from "@/pages/catalog/components/CheckItem/CheckItem";
import {check, convertToListOfIntegers, getListTitle} from "@/pages/catalog/helpers";
import {Key} from "react";
import {catalogParamsSignal} from "@/pages/catalog/signals/catalog-params-signal";

type CheckboxSectionProps = {
    options: Genre[] | Person[] | Studio[] | CountryType[];
    id: string;
    mobile: boolean;
}

const getId = (option: Genre | Person | Studio | CountryType) => {
    if ('id' in option) return option.id;
    if ('genreId' in option) return option.genreId;
    if ('studioId' in option) return option.studioId;
    if ('countryId' in option) return option.countryId;
}

const CheckboxSection = (props: CheckboxSectionProps) => {
    const {options, id, mobile} = props;

    const values = catalogParamsSignal.value;
    const firstValues = convertToListOfIntegers(values[id]);

    return (
        <>
            <CheckboxSectionLayout mobile={mobile}>
                {options.map((option: Genre | Person | Studio | CountryType, index: Key) => (
                    <CheckItem
                        key={index}
                        title={getListTitle(option)}
                        firstId={id}
                        objectId={getId(option)}
                        firstInitialState={check(firstValues, getId(option))}
                    />
                ))}
            </CheckboxSectionLayout>
        </>
    )
}

export default CheckboxSection;
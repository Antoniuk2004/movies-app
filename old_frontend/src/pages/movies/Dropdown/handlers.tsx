import {Dispatch, MutableRefObject, SetStateAction} from "react";
import {SortingType} from "@/pages/movies/Dropdown/SortingType";
import {ClickOutsideProps} from "@/pages/movies/Dropdown/props/ClickOutsideProps";

export const handleDropdownClick = (setIsDropdownHidden: Dispatch<SetStateAction<boolean>>) => {
    setIsDropdownHidden(prevState => !prevState);
}

export const handleClickOutside = (props: ClickOutsideProps) => {
    if (props.event) {
        if (props.dropdownRef.current && !props.dropdownRef.current.contains(props.event.target as Node)) {
            props.setIsDropdownHidden(true);
        } else if (props.event.srcElement instanceof HTMLOptionElement) {
            props.setIsDropdownHidden(true);
            const value = props.event.srcElement.value;
            props.setCurrentSortingType(value as SortingType);
        }
    }
}
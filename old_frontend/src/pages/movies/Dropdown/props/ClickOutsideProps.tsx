import {Dispatch, MutableRefObject, SetStateAction} from "react";
import {SortingType} from "@/pages/movies/Dropdown/SortingType";

export type ClickOutsideProps = {
    setCurrentSortingType: Dispatch<SetStateAction<SortingType>>,
    dropdownRef: MutableRefObject<null | HTMLDivElement>,
    setIsDropdownHidden: Dispatch<SetStateAction<boolean>>,
    event: null | MouseEvent
}
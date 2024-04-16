import {SortingType} from "@/pages/movies/Dropdown/SortingType";
import {Dispatch, SetStateAction} from "react";

export type DropdownProps = {
    currentSortingType: SortingType;
    setCurrentSortingType: Dispatch<SetStateAction<SortingType>>
}
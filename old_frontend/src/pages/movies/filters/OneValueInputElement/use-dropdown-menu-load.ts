import {Dispatch, SetStateAction, useEffect} from "react";
import {dropdownMenusSignal} from "@/pages/movies/filters/dropdown-signal/dropdown-menus-signal";

export const useDropdownMenuLoad = (elementsContainer: null | HTMLDivElement,
                                    setSelected: Dispatch<SetStateAction<boolean>>) => {
    useEffect(() => {
        if (!elementsContainer) return;

        const prev = dropdownMenusSignal.value;
        dropdownMenusSignal.value = [...prev, {
            element: elementsContainer,
            setSelected: setSelected
        }];
    }, [elementsContainer]);
}
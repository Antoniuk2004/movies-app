import {Dispatch, SetStateAction} from "react";

export type DropdownMenu = {
    element: HTMLDivElement | null,
    setSelected: Dispatch<SetStateAction<boolean>>
}
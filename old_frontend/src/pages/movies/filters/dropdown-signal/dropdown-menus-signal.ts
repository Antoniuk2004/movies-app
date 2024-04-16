import {signal} from "@preact/signals-react";
import {DropdownMenu} from "@/pages/movies/filters/dropdown-signal/dropdown-menu";

export const dropdownMenusSignal = signal<Array<DropdownMenu>>([]);
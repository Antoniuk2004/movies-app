import {signal} from "@preact/signals-react";
import {FilterParams} from "@/types/FilterParams";

export const catalogParamsSignal = signal<null | FilterParams>(null);
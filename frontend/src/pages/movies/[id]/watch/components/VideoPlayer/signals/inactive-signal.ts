import {signal} from "@preact/signals-react";

type InactiveSignal = {
    value: boolean;
    mouseTimer: any;
}

export const inactiveSignal = signal<InactiveSignal>({
    mouseTimer: null,
    value: false
});
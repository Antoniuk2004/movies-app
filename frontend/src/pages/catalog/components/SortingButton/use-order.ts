import {useEffect, useRef, useState} from "react";
import {catalogParamsSignal} from "@/pages/catalog/signals/catalog-params-signal";
import {effect} from "@preact/signals-react";
import {Sort} from "@/types/Sort";

export const useOrder = () => {
    const [order, setOrder] = useState<Sort | null>(catalogParamsSignal.value && catalogParamsSignal.value.order as Sort);
    const prevOrder = useRef();

    useEffect(() => {
        effect(() => {
            if (!catalogParamsSignal.value) return;
            const value = Sort[catalogParamsSignal.value.order as Sort];

            if (value === prevOrder.current) return;
            prevOrder.current = value;

            setOrder(value);
        })
    }, []);

    return order;
}
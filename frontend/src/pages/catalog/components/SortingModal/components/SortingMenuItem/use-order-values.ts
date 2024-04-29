import {useEffect, useRef, useState} from "react";
import {Sort} from "@/types/Sort";
import {effect} from "@preact/signals-react";
import {catalogParamsSignal} from "@/pages/catalog/signals/catalog-params-signal";

type OrderValues = {
    selectedOrder: Sort;
    selectedOrderType: Sort;
}

export const useOrderValues = () => {
    const [orderValues, setOrderValues] = useState<null | OrderValues>(null);
    const prevValues = useRef<OrderValues>({selectedOrder: null, selectedOrderType: null});

    useEffect(() => {
        effect(() => {
            if (!catalogParamsSignal.value) return;

            const {order, orderType} = catalogParamsSignal.value;

            if (order === prevValues.current.selectedOrder &&
                orderType === prevValues.current.selectedOrderType) return;

            setTimeout(() => {
                prevValues.current = {selectedOrder: order, selectedOrderType: orderType} as OrderValues;
                setOrderValues({selectedOrder: order, selectedOrderType: orderType} as OrderValues);
            })
        })
    }, []);

    return orderValues;
}
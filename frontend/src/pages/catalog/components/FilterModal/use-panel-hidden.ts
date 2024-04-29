import {useEffect, useState} from "react";
import {filterModalOpenSignal} from "@/pages/catalog/components/FilterModal/filter-modal-open-signal";
import {effect} from "@preact/signals-react";

export const usePanelHidden = () => {
    const [isPanelHidden, setIsPanelHidden] = useState<boolean>(false);

    useEffect(() => {
        effect(() => {
            if (!filterModalOpenSignal.value) {
                document.body.style.overflow = 'auto';
                setIsPanelHidden(false);
            }
            else document.body.style.overflow = 'hidden';
        })
    }, []);

    return {isPanelHidden, setIsPanelHidden};
}
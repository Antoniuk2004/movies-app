import {useEffect} from "react";
import {useDisclosure} from "@mantine/hooks";
import {effect} from "@preact/signals-react";
import {openSearchModalSignal} from "@/common-components/SearchModal/signals/open-search-modal-signal";

export const useModalFunctions = () => {
    const [opened, {open, close}] = useDisclosure(false);

    useEffect(() => {
        effect(() => {
            if (openSearchModalSignal.value) {
                open();
            }
        })
    }, []);

    return {opened, open, close};
}
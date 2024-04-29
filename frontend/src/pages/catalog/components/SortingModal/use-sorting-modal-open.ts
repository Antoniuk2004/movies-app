import { useEffect, useState } from "react";
import { useClickOutside } from "@mantine/hooks";
import { effect } from "@preact/signals-react";
import { sortingModalOpenSignal } from "./sorting-modal-open-signal";

export const useSortingModalOpen = () => {
    const [opened, setOpened] = useState<boolean>(sortingModalOpenSignal.value);
    const ref = useClickOutside(() => sortingModalOpenSignal.value = false);

    useEffect(() => {
        effect(() => {
            if(sortingModalOpenSignal.value) document.body.style.overflow = "hidden";
            else document.body.style.overflow = "auto";

            setOpened(sortingModalOpenSignal.value);
        })
    }, []);

    return { ref, opened };
}
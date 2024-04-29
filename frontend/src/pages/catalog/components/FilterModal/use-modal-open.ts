import { useEffect, useState } from "react";
import { useClickOutside } from "@mantine/hooks";
import { effect } from "@preact/signals-react";
import { filterModalOpenSignal } from "./filter-modal-open-signal";

export const useModalOpen = () => {
    const [opened, setOpened] = useState<boolean>(filterModalOpenSignal.value);
    const ref = useClickOutside(() => filterModalOpenSignal.value = false);

    useEffect(() => {
        effect(() => {
            setOpened(filterModalOpenSignal.value);
        })
    }, []);

    return { ref, opened };
}
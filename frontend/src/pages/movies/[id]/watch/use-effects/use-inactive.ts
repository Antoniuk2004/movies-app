import {useEffect, useState} from "react";
import {inactiveSignal} from "@/pages/movies/[id]/watch/components/VideoPlayer/signals/inactive-signal";
import {effect} from "@preact/signals-react";

export const useInactive = () => {
    const [inactive, setInactive] = useState(inactiveSignal.value);

    useEffect(() => {
        effect(() => {
            setInactive(inactiveSignal.value);
        })
    }, []);

    return inactive;
}
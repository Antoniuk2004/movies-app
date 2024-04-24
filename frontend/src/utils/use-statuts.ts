import {useEffect, useState} from "react";
import {effect} from "@preact/signals-react";
import {statusSignal} from "@/signals/status-signal";

export const useStatus = () => {
    const [status, setStatus] = useState<null | number>(null);

    useEffect(() => {
        effect(() => setStatus(statusSignal.value));
    }, []);

    return status;
}
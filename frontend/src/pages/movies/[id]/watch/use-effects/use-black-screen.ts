import {useEffect, useState} from "react";
import {effect} from "@preact/signals-react";
import {blackScreenSignal} from "@/pages/movies/[id]/watch/components/VideoPlayer/signals/black-screen-signal";

export const useBlackScreen = () => {
    const [isShown, setIsShown] = useState<boolean>(true);

    useEffect(() => {
        effect(() => {
            setIsShown(blackScreenSignal.value)
        });
    }, []);

    return isShown;
}
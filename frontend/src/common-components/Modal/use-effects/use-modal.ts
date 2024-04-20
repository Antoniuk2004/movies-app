import {useEffect} from "react";

export const useModal = (
    element: HTMLDivElement | null,
    action: (value?: boolean) => void,
    parentElement: HTMLElement | null,
    isVisible: boolean
) => {
    if(element && isVisible) {
        document.body.style.overflow = "hidden";
    }

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if(!isVisible) return;
            if (parentElement && parentElement.contains(e.target as Node)) return;

            if (element && !element.contains(e.target as Node)) {
                document.body.style.overflow = "auto";
                action(false);
            }
        };

        if (!element) return;
        document.addEventListener("click", handleClick);

        return () => document.removeEventListener("click", handleClick);
    }, [element]);
};

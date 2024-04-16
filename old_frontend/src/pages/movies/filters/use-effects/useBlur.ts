import {useEffect} from "react";
import {dropdownMenusSignal} from "@/pages/movies/filters/dropdown-signal/dropdown-menus-signal";

export const useBlur = () => {
    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            const {clientX, clientY} = e;

            dropdownMenusSignal.value.forEach((value) => {
                if (!value.element) return;
                const rect = value.element.getBoundingClientRect();

                if (
                    clientX < rect.left || clientX > rect.right ||
                    clientY < rect.top || clientY > rect.bottom
                ) value.setSelected(false);
            })
        }

        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, []);
}
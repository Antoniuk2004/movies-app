import {useEffect, useRef, useState} from "react";

export const useDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const optionListRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (optionListRef.current && !optionListRef.current.contains(e.target as Node)) {
                if (buttonRef.current && !buttonRef.current.contains(e.target as Node)) {
                    setIsOpen(false);
                }
            }
        }

        document.addEventListener("click", (e) => handleClick(e))

        return () => document.removeEventListener("click", (e) => handleClick(e))
    }, []);

    return {isOpen, setIsOpen, optionListRef, buttonRef};
}
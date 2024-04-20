import { useRef, useState, useEffect } from "react";
import { LayoutProps } from "@/types/LayoutProps";

const Slider = ({ children }: LayoutProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startPosition, setStartPosition] = useState(0);
    const [startScrollLeft, setStartScrollLeft] = useState(0);

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            if (!isDragging) return;
            const deltaX = event.pageX - startPosition;
            const newScrollLeft = startScrollLeft - deltaX;
            if (containerRef.current) {
                containerRef.current.scrollLeft = newScrollLeft;
            }
        };

        const handleMouseUp = () => {
            setIsDragging(false);
        };

        if (isDragging) {
            window.addEventListener("mousemove", handleMouseMove);
            window.addEventListener("mouseup", handleMouseUp);
        }

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, [isDragging, startPosition, startScrollLeft]);

    const handleMouseDown = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setIsDragging(true);
        setStartPosition(event.pageX);
        setStartScrollLeft(containerRef.current?.scrollLeft || 0);
    };

    return (
        <div
            ref={containerRef}
            onMouseDown={handleMouseDown}
            style={{ scrollbarWidth: "none"}}
            className={"flex gap-4 overflow-x-auto select-none"}
        >
            {children}
        </div>
    );
};

export default Slider;

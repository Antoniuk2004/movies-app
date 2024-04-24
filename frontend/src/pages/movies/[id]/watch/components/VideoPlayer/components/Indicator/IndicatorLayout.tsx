import {LayoutProps} from "@/types/LayoutProps";
import {useRef} from "react";

type IndicatorLayoutProps = LayoutProps & {
    leftOffset: number;
    mb: string;
}

const IndicatorLayout = (props: IndicatorLayoutProps) => {
    const {leftOffset, children, mb} = props;
    const elementRef = useRef<null | HTMLDivElement>(null);
    const elementOffset = elementRef.current && elementRef.current.clientWidth / 2;

    return (
        <div
            ref={elementRef}
            style={{left: `calc(${leftOffset}% - ${elementOffset}px)`}}
            className={`${elementOffset ? 'opacity-100' : 'opacity-0'} 
            ${mb} absolute responsive:hidden font-['Roboto']  rounded-md bg-white px-2 py-1 text-sm`}>
            {children}
        </div>
    )
}

export default IndicatorLayout;
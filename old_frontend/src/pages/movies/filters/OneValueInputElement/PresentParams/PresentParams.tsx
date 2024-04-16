import {OneValueInputElementProps} from "@/pages/movies/filters/OneValueInputElement/OneValueInputElementProps";
import FilterElement from "@/pages/movies/filters/OneValueInputElement/PresentParams/FilterElement/FilterElement";
import {useEffect, useLayoutEffect, useRef, useState} from "react";

const PresentParams = (props: OneValueInputElementProps) => {
    // @ts-ignore
    const paramsIndexes = props.filterParams[props.title];
    const containerRef = useRef<null | HTMLDivElement>(null);


    if (!paramsIndexes)
        return (
            <div className="flex flex-grow text-sm">
                <input type="text" placeholder={props.title}
                       className="flex w-full bg-transparent flex-grow focus:outline-0 placeholder:capitalize"/>
            </div>
        )

    return (
        <div className="flex flex-wrap gap-x-2">
            {paramsIndexes.length > 1 ?
                <div
                    ref={(ref) => containerRef.current = ref}
                    className="text-sm text-nowrap items-center flex flex-wrap gap-x-1 opacity-90 cursor-pointer">
                    {paramsIndexes.map((element, index) => (
                        <FilterElement key={index} data={props.data} element={element} title={props.title}/>
                    ))}
                </div>
                :
                <div className="text-sm text-nowrap items-center flex gap-x-1 opacity-90 cursor-pointer">
                    <FilterElement data={props.data} element={paramsIndexes} title={props.title}/>
                </div>
            }
            <input
                style={{width: `calc(100% - ${containerRef.current?.offsetWidth}px - 20px)`}}
                type="text"
                className={`flex  text-sm bg-transparent focus:outline-0`}/>
        </div>
    );
};

export default PresentParams;
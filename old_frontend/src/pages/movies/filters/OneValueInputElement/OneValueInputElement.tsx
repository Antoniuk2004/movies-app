import {FaChevronDown, FaChevronUp} from "react-icons/fa6";
import {OneValueInputElementProps} from "@/pages/movies/filters/OneValueInputElement/OneValueInputElementProps";
import {useRef, useState} from "react";
import PresentParams from "@/pages/movies/filters/OneValueInputElement/PresentParams/PresentParams";
import {checkIfPresent, getParameterValue} from "@/pages/movies/filters/OneValueInputElement/helpers";
import {handleItemClick} from "@/pages/movies/filters/OneValueInputElement/handlers";
import {useDropdownMenuLoad} from "@/pages/movies/filters/OneValueInputElement/use-dropdown-menu-load";
import {useRouter} from "next/navigation";

const OneValueInputElement = (props: OneValueInputElementProps) => {
    const [selected, setSelected] = useState(false);
    const optionCSS = "px-4 border-b border-borderColor py-2 cursor-pointer hover:bg-hoverColor";
    const elementsContainer = useRef<null | HTMLDivElement>(null);
    const router = useRouter();
    useDropdownMenuLoad(elementsContainer.current, setSelected);

    if (!props.data) return null;
    return (
        <div className="w-full relative mb-2" ref={elementsContainer}>
            <div
                className="flex border bg-white border-borderColor rounded-xl w-full px-4 py-3 items-center justify-between"
                onClick={() => setSelected(true)}>
                <PresentParams title={props.title} filterParams={props.filterParams} data={props.data}/>
                <div className="text-[12px] justify-self-end">
                    {selected ? <FaChevronUp/> : <FaChevronDown/>}
                </div>
            </div>
            {selected ?
                <div
                    style={{marginTop: `${elementsContainer.current?.clientHeight}px`}}
                    className="selection absolute max-h-[200px] overflow-auto top-0 rounded-l shadow left-0 z-10 bg-white w-full first-letter:uppercase">
                    {props.data.map((element, index) => (
                        <div key={index}
                                onClick={() => handleItemClick(props, router, element)}
                                className={`${optionCSS} ${checkIfPresent(props, index) ? ` border-b-0 text-white bg-primaryColor ` : ``} `}
                                >{getParameterValue(element)}</div>
                    ))}
                </div>
                : null}
        </div>
    )
}

export default OneValueInputElement
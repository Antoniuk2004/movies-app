import {MdClose} from "react-icons/md";
import {
    FilterElementProps
} from "@/pages/movies/filters/OneValueInputElement/PresentParams/FilterElement/FilterElementProps";
import {getParameterValue} from "@/pages/movies/filters/OneValueInputElement/PresentParams/FilterElement/helpers";

const FilterElement = (props: FilterElementProps) => {
    const elem = props.data[parseInt(props.element) - 1];
    return (
        <span className="text-sm text-nowrap items-center flex gap-x-1 opacity-70 cursor-pointer">
            {getParameterValue(props, elem)}
            <MdClose className=""/>
        </span>
    )
}

export default FilterElement;
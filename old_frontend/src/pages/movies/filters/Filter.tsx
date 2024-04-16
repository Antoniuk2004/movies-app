import OneValueInputElement from "@/pages/movies/filters/OneValueInputElement/OneValueInputElement";
import TwoValuesInputElement from "@/pages/movies/filters/TwoValuesInputElement/TwoValuesInputElement";
import {FilterProps} from "@/pages/movies/filters/FilterProps";
import {useInitialFilterValues} from "@/pages/movies/filters/use-effects/useInitialFilterValues";
import {ageLimit} from "@/pages/movies/filters/AgeLimit";
import {useBlur} from "@/pages/movies/filters/use-effects/useBlur";

const Filter = (props: FilterProps) => {
    const initialFilterValues = useInitialFilterValues(props.router);
    const labelCSS = "label first-letter:uppercase mb-2 mt-4";
    useBlur();

    if (!initialFilterValues) return null;
    return (
        <div className="flex flex-col w-[300px]">
            <div className="include flex items-center flex-col">
                <OneValueInputElement title={"genres"} data={initialFilterValues.genres} filterParams={props.filterParams}/>
                <OneValueInputElement title={"actors"} data={initialFilterValues.actors} filterParams={props.filterParams}/>
                <OneValueInputElement title={"directors"} data={initialFilterValues.directors} filterParams={props.filterParams}/>
                <OneValueInputElement title={"ageLimit"} data={ageLimit} filterParams={props.filterParams}/>
            </div>
            <div className={labelCSS}>
                <span>release year</span>
            </div>
            <TwoValuesInputElement/>
            <div className={labelCSS}>
                <span>rating</span>
            </div>
            <TwoValuesInputElement/>
            <div className={labelCSS}>
                <span>exclude</span>
            </div>
            <div className="exclude flex items-center flex-col">
                <OneValueInputElement title={"genres"} data={initialFilterValues.genres} filterParams={props.filterParams}/>
                <OneValueInputElement title={"actors"} data={initialFilterValues.actors} filterParams={props.filterParams}/>
                <OneValueInputElement title={"directors"} data={initialFilterValues.directors} filterParams={props.filterParams}/>
            </div>
        </div>
    )
}

export default Filter
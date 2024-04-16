import {
    FilterElementProps
} from "@/pages/movies/filters/OneValueInputElement/PresentParams/FilterElement/FilterElementProps";

export const getParameterValue = (props: FilterElementProps, elem: any) => {
    if (props.title === 'genres' || props.title == 'ageLimit')
        return elem.title;
    else
        return `${elem.firstName} ${elem.surname}`;
}
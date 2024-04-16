import {OneValueInputElementProps} from "@/pages/movies/filters/OneValueInputElement/OneValueInputElementProps";
import {FilterParams} from "@/pages/movies/filters/FilterParams";

export const checkIfPresent = (props: OneValueInputElementProps, index: number) => {


    // @ts-ignore
    const selectedId = props.filterParams[props.title];

    if (!selectedId) return false;
    const id = getIdType(props, index);
    if (typeof selectedId === 'string') {
        // @ts-ignore
        return props.data[index][id] === parseInt(selectedId);
    } else {
        for (let selectedIdElement of selectedId) {
            // @ts-ignore
            if (props.data[index][id] === parseInt(selectedIdElement)) return true;
        }
    }

    return false;


}

const getIdType = (props: OneValueInputElementProps, index: number) => {
    const ids = ['genreId', 'actorId', 'directorId'];

    for (let id of ids) {
        if(id in props.data[index]) return id;
    }

    return 'id';
}

export const makeNewURL = (id: number, filterParams: FilterParams, title: string) => {
    let url = "";

    console.log(filterParams);

    for (let key of Object.keys(filterParams)) {
        // @ts-ignore
        const value = filterParams[key];
        if (!value) continue;
        url = addOneTypeParams(url, key, value);
    }
    url += `&${title}=${id}`;

    return "/movies?" + url.slice(1, url.length);
}

const addOneTypeParams = (url: string, title: string, params: string | string[]) => {

    if (typeof params === 'string') {
        url += `&${title}=${params}`
    } else {
        params.forEach((value) => {
            url += `&${title}=${value}`
        })
    }

    return url;
}
export const getParameterValue = (element: any) => {
    if ('firstName' in element) return `${element.firstName} ${element.surname}`;
    else return element.title;
}
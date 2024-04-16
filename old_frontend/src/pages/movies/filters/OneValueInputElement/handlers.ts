import {OneValueInputElementProps} from "@/pages/movies/filters/OneValueInputElement/OneValueInputElementProps";
import {Dispatch, MutableRefObject, SetStateAction} from "react";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {makeNewURL} from "@/pages/movies/filters/OneValueInputElement/helpers";

export const handleItemClick = (props: OneValueInputElementProps,
                                router: AppRouterInstance,
                                element: any) => {
    let id = element.id;
    if ('genreId' in element) id = element.genreId;
    else if ('actorId' in element) id = element.actorId;
    else if ('directorId' in element) id = element.directorId;

    const newURL = makeNewURL(id, props.filterParams, props.title);
    router.push(newURL);
}
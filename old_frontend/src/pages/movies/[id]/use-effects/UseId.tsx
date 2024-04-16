import {Dispatch, SetStateAction, useEffect} from "react";
import {Params} from "next/dist/shared/lib/router/utils/route-matcher";

export const UseId = (params: Params, setId: Dispatch<SetStateAction<number | null>>) => {
    useEffect(() => {
        if (params) {
            setId(Number.parseInt(params.id as string));
        }

    }, [params]);
}
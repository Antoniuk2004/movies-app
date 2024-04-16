import {MutableRefObject, useEffect} from "react";
import Cookies from "js-cookie";

export const UseJWT = (jwtRef: MutableRefObject<string>) => {
    useEffect(() => {
        const jwt = Cookies.get("JWT");
        if (jwt) {
            jwtRef.current = jwt;
        }
    }, []);
}
import {Component, useEffect, useState} from "react";

export const UseHeader = (currentPage: string) => {
    const [hideHeader, setHideHeader] = useState(true);
    const pagesToHideOn = ["SignInPage", "SingUpPage"];

    useEffect(() => {
        if (!pagesToHideOn.includes(currentPage)) setHideHeader(false);
        else setHideHeader(true);
    }, [currentPage]);

    return hideHeader;
}
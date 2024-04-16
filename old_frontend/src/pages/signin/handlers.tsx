import {ChangeEvent, Dispatch, FormEvent, SetStateAction} from "react";
import {FieldsProps} from "@/pages/signin/FieldsProps";
import {makeRequestToSignIn} from "@/pages/signin/helpers";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import Cookies from "js-cookie";

export const handleInput = (event: ChangeEvent<HTMLInputElement>, setFields: Dispatch<SetStateAction<FieldsProps>>) => {
    const value = event.currentTarget.value;
    const id = event.currentTarget.id;

    setFields((prev) => ({
        ...prev,
        [id == 'username' ? 'username' : 'password']: value
    }))
}

export const handleSubmit = async (e: FormEvent<HTMLFormElement>, fields: FieldsProps, router: AppRouterInstance) => {
    e.preventDefault();
    await makeRequestToSignIn(fields).then((r) => {
        Cookies.set('JWT', r.data.jwt);
        router.push("/");
    });
}
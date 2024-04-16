import {ChangeEvent, Dispatch, FormEvent, SetStateAction} from "react";
import {FieldsProps} from "@/pages/signup/FieldsProps";
import {makeRequestToSignUp} from "@/pages/signup/helpers";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";


export const handleSubmit = async (e: FormEvent<HTMLFormElement>, fields: FieldsProps, router: AppRouterInstance) => {
    e.preventDefault();
    await makeRequestToSignUp(fields).then(() => {
        router.push("/");
    });
}
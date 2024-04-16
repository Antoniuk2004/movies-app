import {Dispatch, SetStateAction} from "react";
import {FieldsProps} from "@/pages/signin/FieldsProps";

export type InputProps = {
    fields: FieldsProps,
    setFields: Dispatch<SetStateAction<FieldsProps>>,
    placeholder: string
}
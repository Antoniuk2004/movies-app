import {ChangeEvent, Dispatch, FormEvent, MutableRefObject, RefObject, SetStateAction} from "react";
import {DataType} from "@/types/DataType";
import {loginUser} from "@/api/sign-in-request";
import {registerUser} from "@/api/sign-up-request";

export const handleFocus = (setData: Dispatch<SetStateAction<DataType>>) => {
    setData((prev) => ({
        ...prev,
        wrong: false
    }))

}

export const handleDataInput = (e: ChangeEvent<HTMLInputElement>,
                                setData: Dispatch<SetStateAction<DataType>>) => {
    const id = e.currentTarget.id;
    const value = e.currentTarget.value;

    setData((prev) => ({
        ...prev,
        [id]: value
    }))
}

export const handleSingInFormSubmit = (e: FormEvent<HTMLFormElement>,
                                       data: DataType,
                                       setData: Dispatch<SetStateAction<DataType>>,
                                       buttonRef: RefObject<HTMLButtonElement>) => {
    e.preventDefault();
    if (!shouldRequestBeMade(data, setData)) return;

    loginUser(data, setData).then(r => {
        if (buttonRef.current) {
            buttonRef.current.blur();
        }
    });
}

export const handleSignUpFormSubmit = (e: FormEvent<HTMLFormElement>,
                                       data: DataType,
                                       setData: Dispatch<SetStateAction<DataType>>,
                                       buttonRef: RefObject<HTMLButtonElement>) => {
    e.preventDefault();
    if (!shouldRequestBeMade(data, setData)) return;

    registerUser(data, setData).then(r => {
        if (buttonRef.current) {
            buttonRef.current.blur();
        }
    });
}

const shouldRequestBeMade = (data: DataType,
                             setData: Dispatch<SetStateAction<DataType>>) => {
    if (data.username === '' || data.password === '') {
        setData((prev) => ({
            ...prev,
            wrong: true
        }))

        return false;
    }

    return true;
}
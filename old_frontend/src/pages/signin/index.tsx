'use client'

import {useEffect, useState} from "react";
import {FieldsProps} from "@/pages/signin/FieldsProps";
import InputElement from "@/pages/signin/input-element/InputElement";
import {handleSubmit} from "@/pages/signin/handlers";
import {useRouter} from "next/navigation";

export default function SignInPage() {
    const [fields, setFields] = useState<FieldsProps>({username: '', password: ''});
    const router = useRouter();

    return (
        <div className="sign-in-page flex h-screen justify-center items-center bg-bgColor">
            <form
                onSubmit={(e) => handleSubmit(e, fields, router)}
                className="flex flex-col content-center w-[450px] p-5 bg-white rounded-xl drop-shadow-md">
                <p className="select-none text-3xl py-2 opacity-80 font-medium">Sign In</p>
                <InputElement fields={fields} setFields={setFields} placeholder="username"/>
                <InputElement fields={fields} setFields={setFields} placeholder="password"/>
                <button
                    type={"submit"}
                    className="hover:opacity-80 select-none hover:duration-200 bg-primaryColor text-white font-medium p-2 my-2 rounded-md"
                > Sign In
                </button>
                <div className="flex gap-x-2 justify-center select-none">
                    <p>Don&rsquo;t have an account?</p>
                    <a
                        onClick={() => router.push("signup")}
                        className="cursor-pointer hover:opacity-80 hover:duration-200 text-primaryColor">Sign Up</a>
                </div>
            </form>
        </div>
    )
}
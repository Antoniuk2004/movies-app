import {useRef, useState} from "react";
import {initialData} from "@/common-components/Sign/initialData";
import {handleSignUpFormSubmit} from "@/common-components/Sign/handlers";
import {useRouter} from "next/navigation";
import SignElement from "@/common-components/Sign/SignElement/SignElement";
import {DataType} from "@/types/DataType";
import {useInitialUsername} from "@/pages/signup/use-initial-username";

const SignUp = () => {
    const {data, setData} = useInitialUsername();
    const buttonRef = useRef<HTMLButtonElement>(null);

    if (data === null || data?.username === null) return null;
    return (
        <SignElement
            data={data}
            setData={setData}
            buttonRef={buttonRef}
            submitFunction={handleSignUpFormSubmit}
            buttonText={'sign up'}
            haveAccount={true}
        />
    )
}

export default SignUp;
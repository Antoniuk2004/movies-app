import {useRef, useState} from "react";
import {initialData} from "@/common-components/Sign/initialData";
import {handleSignUpFormSubmit} from "@/common-components/Sign/handlers";
import {useRouter} from "next/navigation";
import SignElement from "@/common-components/Sign/SignElement/SignElement";
import {DataType} from "@/types/DataType";

const SignIn = () => {
    const router = useRouter();
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [data, setData] = useState<DataType>(initialData(router));

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

export default SignIn;
import {useRef, useState} from "react";
import {DataType} from "@/types/DataType";
import {initialData} from "@/common-components/Sign/initialData";
import {handleSingInFormSubmit} from "@/common-components/Sign/handlers";
import {useRouter} from "next/navigation";
import SignElement from "@/common-components/Sign/SignElement/SignElement";

const SignIn = () => {
    const router = useRouter();
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [data, setData] = useState<DataType>(initialData(router));

    return (
        <SignElement
            data={data}
            setData={setData}
            buttonRef={buttonRef}
            submitFunction={handleSingInFormSubmit}
            buttonText={'sign in'}
            haveAccount={false}
        />
    )
}

export default SignIn;
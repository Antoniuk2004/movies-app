import TopUser from "@/common-components/Sign/TopUser/TopUser";
import InvalidData from "@/common-components/Sign/DataInput/InvalidData";
import DataInput from "@/common-components/Sign/DataInput/DataInput";
import {FaLock, FaUser} from "react-icons/fa";
import SignButton from "@/common-components/Sign/SignButton/SignButton";
import SingLayout from "@/common-components/Sign/layout";
import {Dispatch, FormEvent, MutableRefObject, RefObject, SetStateAction} from "react";
import AccountPresence from "@/common-components/Sign/AccountPresence/AccountPresence";
import {DataType} from "@/types/DataType";

type SignContentProps = {
    data: DataType;
    setData: Dispatch<SetStateAction<DataType>>;
    buttonRef: MutableRefObject<HTMLButtonElement | null>;
    submitFunction: (e: FormEvent<HTMLFormElement>,
                     data: DataType,
                     setData: Dispatch<SetStateAction<DataType>>,
                     buttonRef: RefObject<HTMLButtonElement>) => void;
    buttonText: string;
    haveAccount: boolean
}

const SignElement = (props: SignContentProps) => {
    const {haveAccount, data, setData, buttonRef, submitFunction, buttonText} = props;

    return (
        <SingLayout
            data={data}
            setData={setData}
            buttonRef={buttonRef}
            submitFunction={submitFunction}>
            <TopUser/>
            <InvalidData wrong={data.wrong}/>
            <DataInput
                icon={<FaUser/>}
                type={'text'}
                id={'username'}
                value={data.username}
                setData={setData}/>
            <InvalidData wrong={data.wrong}/>
            <DataInput
                icon={<FaLock/>}
                type={'password'}
                id={'password'}
                value={data.password}
                setData={setData}/>
            <SignButton buttonRef={buttonRef} text={buttonText}/>
            <AccountPresence haveAccount={haveAccount}/>
        </SingLayout>
    )
}

export default SignElement;
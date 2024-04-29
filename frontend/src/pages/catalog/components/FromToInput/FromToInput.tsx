import FromToInputLayout from "./FromToInputLayout";
import InputElement from "@/pages/catalog/components/InputElement";
import InputsLayout from "@/pages/catalog/components/InputsLayout";

type FromToInputProps = {
    title: string;
    fromId: string;
    toId: string;
}

const FromToInput = (props: FromToInputProps) => {
    const {title, fromId, toId} = props;

    return (
        <FromToInputLayout>
            <span>{title}</span>
            <InputsLayout>
                <InputElement
                    id={fromId}
                    placeholder={"From"}
                />
                <span>—</span>
                <InputElement
                    id={toId}
                    placeholder={"To"}
                />
            </InputsLayout>
        </FromToInputLayout>
    )
}

export default FromToInput;
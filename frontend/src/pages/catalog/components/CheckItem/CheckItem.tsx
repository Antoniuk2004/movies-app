import {useEffect, useState} from "react";
import CheckBox from "@/pages/catalog/components/CheckBox/CheckBox";
import CheckBoxLayout from "@/pages/catalog/components/CheckBox/CheckBoxLayout";

type CheckItemProps = {
    title: string;
    objectId: number;
    firstId: string;
    secondId?: string;
    firstInitialState: boolean | undefined;
    secondInitialState?: boolean | undefined
}

const getInitialStateValue = (first: boolean | undefined, second: boolean | undefined) => {
    if(first === undefined && second === undefined) return 0;
    if(second)  return 2;
    if(first) return 1;
    else return 0;
}

const CheckItem = (props: CheckItemProps) => {
    const {title, firstId, secondId, objectId, firstInitialState, secondInitialState} = props;
    const [checkBoxState, setCheckBoxState] = useState<number>
    (getInitialStateValue(firstInitialState, secondInitialState));

    useEffect(() => {
        setCheckBoxState(getInitialStateValue(firstInitialState, secondInitialState));
    }, [secondInitialState, firstInitialState]);

    return (
        <>
            <CheckBoxLayout
                title={title}
                index={objectId}
                firstId={firstId}
                secondId={secondId}
                setCheckBoxState={setCheckBoxState}
            >
                <CheckBox value={checkBoxState}/>
            </CheckBoxLayout>
        </>
    );
}

export default CheckItem;
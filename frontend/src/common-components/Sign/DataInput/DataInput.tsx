import {handleDataInput, handleFocus} from "@/common-components/Sign/handlers";
import React, {Dispatch, ReactNode, SetStateAction} from "react";
import DataInputLayout from "@/common-components/Sign/DataInput/layout";
import IconLayout from "@/common-components/Sign/DataInput/IconLayout";
import {DataType} from "@/types/DataType";

type DataInputProps = {
    setData: Dispatch<SetStateAction<DataType>>
    value: string
    type: string
    id: string
    icon: ReactNode;
}

const DataInput = (props: DataInputProps) => {
    const {value, setData, type, id, icon} = props;

    return (
        <DataInputLayout>
            <IconLayout>
                {icon}
            </IconLayout>
            <input
                onFocus={() => handleFocus(setData)}
                onChange={(e) => handleDataInput(e, setData)}
                id={id}
                value={value}
                autoComplete={"off"}
                className="focus:outline-0 placeholder:capitalize"
                type={type}
                placeholder={id}/>
        </DataInputLayout>
    )
}

export default DataInput;
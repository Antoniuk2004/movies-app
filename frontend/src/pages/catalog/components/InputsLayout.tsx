import {LayoutProps} from "@/types/LayoutProps";

const InputsLayout = ({children}: LayoutProps) => {
    return (
        <div className={"flex gap-x-2.5 items-center font-normal"}>
            {children}
        </div>
    )
}

export default InputsLayout;
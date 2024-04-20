import {LayoutProps} from "@/types/LayoutProps";

const Value = ({children}: LayoutProps) => {
    return (
        <div className={"text-sm truncate select-text"}>
            {children}
        </div>
    )
}

export default Value;
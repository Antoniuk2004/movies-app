import {LayoutProps} from "@/types/LayoutProps";

const Value = ({children}: LayoutProps) => {
    return (
        <div className={"font-['Roboto'] select-text"}>
            {children}
        </div>
    )
}

export default Value;
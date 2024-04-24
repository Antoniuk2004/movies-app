import {LayoutProps} from "@/types/LayoutProps";

const TextBlockLayout = ({children}: LayoutProps) => {
    return (
        <div className={"responsive:w-11/12"}>
            {children}
        </div>
    )
}

export default TextBlockLayout;
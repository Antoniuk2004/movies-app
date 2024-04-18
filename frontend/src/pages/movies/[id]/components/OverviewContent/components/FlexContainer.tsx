import {LayoutProps} from "@/types/LayoutProps";

const FlexContainer = ({children}: LayoutProps) => {
    return (
        <div className={"flex"}>
            {children}
        </div>
    )
}

export default FlexContainer;
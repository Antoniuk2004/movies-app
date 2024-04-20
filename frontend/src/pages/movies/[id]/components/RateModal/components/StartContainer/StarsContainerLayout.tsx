import {LayoutProps} from "@/types/LayoutProps";

const StarsContainerLayout = ({children}: LayoutProps) => {
    return (
        <div className={"grid grid-cols-10 px-3 py-6 responsive:px-1"}>
            {children}
        </div>
    )
}

export default StarsContainerLayout;
import {LayoutProps} from "@/types/LayoutProps";

const LeftSideLayout = ({children}: LayoutProps) => {
    return (
        <div className={"responsive:mx-1.5 flex items-center"}>
            {children}
        </div>
    )
}

export default LeftSideLayout;
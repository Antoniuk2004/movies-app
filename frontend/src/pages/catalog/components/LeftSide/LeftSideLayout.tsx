import {LayoutProps} from "@/types/LayoutProps";

const LeftSideLayout = ({children}: LayoutProps) => {
    return (
        <div className={"w-full bg-white rounded-lg min-h-inherit"}>
            {children}
        </div>
    )
}

export default LeftSideLayout;
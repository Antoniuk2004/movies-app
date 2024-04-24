import {LayoutProps} from "@/types/LayoutProps";

const LeftSideLayout = ({children}: LayoutProps) => {
    return (
        <div className={"w-full h-full bg-white rounded-lg"}>
            {children}
        </div>
    )
}

export default LeftSideLayout;
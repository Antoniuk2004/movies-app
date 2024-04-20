import {LayoutProps} from "@/types/LayoutProps";

const BottomBarLayout = ({children}: LayoutProps) => {
    return (
        <div className={"absolute bottom-0 w-full px-3"}>
            {children}
        </div>
    )
}

export default BottomBarLayout;
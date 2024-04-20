import {LayoutProps} from "@/types/LayoutProps";

const BottomBarLayout = ({children}: LayoutProps) => {
    return (
        <div className={"absolute justify-between flex bottom-0 w-full px-1.5"}>
            {children}
        </div>
    )
}

export default BottomBarLayout;
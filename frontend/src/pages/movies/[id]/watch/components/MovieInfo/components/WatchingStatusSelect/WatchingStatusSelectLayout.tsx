import {LayoutProps} from "@/types/LayoutProps";

const WatchingStatusSelectLayout = ({children}: LayoutProps) => {
    return (
        <div className={"z-20 min-w-52"}>
            {children}
        </div>
    )
}

export default WatchingStatusSelectLayout;
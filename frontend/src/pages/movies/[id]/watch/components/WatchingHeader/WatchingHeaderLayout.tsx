import {LayoutProps} from "@/types/LayoutProps";

const WatchingHeaderLayout = ({children}: LayoutProps) => {
    return (
        <div className={"hidden responsive:flex justify-between bg-header items-center h-12 px-1.5"}>
            {children}
        </div>
    )
}

export default WatchingHeaderLayout;
import {LayoutProps} from "@/types/LayoutProps";

const WatchBlockLayout = ({children}: LayoutProps) => {
    return (
        <div className={"flex responsive:gap-x-2 responsive:flex-col-reverse responsive:h-4 responsive:px-2 responsive:grid responsive:grid-cols-2 responsive: responsive:col-start-1 responsive:row-start-4 flex-col gap-y-4 row-start-4"}>
            {children}
        </div>
    )
}

export default WatchBlockLayout;
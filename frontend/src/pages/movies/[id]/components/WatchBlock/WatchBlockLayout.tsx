import {LayoutProps} from "@/types/LayoutProps";

const WatchBlockLayout = ({children}: LayoutProps) => {
    return (
        <div className={"flex flex-col gap-y-4 row-start-4"}>
            {children}
        </div>
    )
}

export default WatchBlockLayout;
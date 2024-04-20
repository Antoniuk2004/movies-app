import {LayoutProps} from "@/types/LayoutProps";

const WatchingPageLayout = ({children}: LayoutProps) => {
    return (
        <div className={"min-h-app-without-normal-header responsive:min-h-svh flex flex-col"}>
            {children}
        </div>
    )
}

export default WatchingPageLayout;
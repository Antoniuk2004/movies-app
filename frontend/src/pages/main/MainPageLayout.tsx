import {LayoutProps} from "@/types/LayoutProps";

const MainPageLayout = ({children}: LayoutProps) => {
    return (
        <div className={"flex flex-col gap-y-4 mt-4"}>
            {children}
        </div>
    )
}

export default MainPageLayout;
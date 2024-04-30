import {LayoutProps} from "@/types/LayoutProps";

const MainHeaderContent = ({children}: LayoutProps) => {
    return (
        <div className={"px-1.5 flex h-12 items-center bg-header shadow-header-shadow"}>
            {children}
        </div>
    )
}

export default MainHeaderContent;
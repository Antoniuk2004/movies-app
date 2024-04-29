import {LayoutProps} from "@/types/LayoutProps";

const HeaderSideLayout = ({children}: LayoutProps) => {
    return (
        <div className={"flex items-center gap-x-2"}>
            {children}
        </div>
    )
}

export default HeaderSideLayout;
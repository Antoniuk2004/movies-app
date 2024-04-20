import {LayoutProps} from "@/types/LayoutProps";

const SideLayout = ({children}: LayoutProps) => {
    return (
        <div className={"flex items-center"}>
            {children}
        </div>
    )
}

export default SideLayout;
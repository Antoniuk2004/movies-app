import {LayoutProps} from "@/types/LayoutProps";

const HeaderContentLayout = ({children}: LayoutProps) => {
    return (
        <div className={"flex justify-between text-2xl items-center h-full"}>
            {children}
        </div>
    )
}

export default HeaderContentLayout;
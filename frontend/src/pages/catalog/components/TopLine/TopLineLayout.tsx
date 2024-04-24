import {LayoutProps} from "@/types/LayoutProps";

const TopLineLayout = ({children}: LayoutProps) => {
    return (
        <div className={"flex flex-col gap-4 px-4 pt-3 pb-2"}>
            {children}
        </div>
    )
}

export default TopLineLayout;
import {LayoutProps} from "@/types/LayoutProps";

const TopUserLayout = ({children}: LayoutProps) => {
    return (
        <div className="icon absolute top-[-34px] bg-white p-1 rounded-full left-[calc(50%-34px)] text-white">
            <div className="container p-2 bg-primary rounded-full">
                {children}
            </div>
        </div>
    )
}

export default TopUserLayout;
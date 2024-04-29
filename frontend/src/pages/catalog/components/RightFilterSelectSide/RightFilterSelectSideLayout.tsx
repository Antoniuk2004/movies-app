import {LayoutProps} from "@/types/LayoutProps";

const RightFilterSelectSideLayout = ({children}: LayoutProps) => {
    return (
        <div className={"flex items-center gap-x-2.5 text-neutral-400 font-normal text-xs"}>
            {children}
        </div>
    )
}

export default RightFilterSelectSideLayout;
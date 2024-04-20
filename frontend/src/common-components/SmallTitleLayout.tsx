import {LayoutProps} from "@/types/LayoutProps";

const SmallTitleLayout = ({children}: LayoutProps) => {
    return (
        <div className={"mb-2.5 text-base font-semibold items-center justify-between flex"}>
            {children}
        </div>
    )
}

export default SmallTitleLayout;
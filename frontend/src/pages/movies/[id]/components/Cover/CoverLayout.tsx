import {LayoutProps} from "@/types/LayoutProps";

const CoverLayout = ({children} : LayoutProps) => {
    return (
        <div className={"w-65  relative rounded-md overflow-hidden z-10 h-90 col-start-1 row-start-2"}>
            {children}
        </div>
    )
}

export default CoverLayout;
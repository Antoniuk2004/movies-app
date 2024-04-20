import {LayoutProps} from "@/types/LayoutProps";

const CoverLayout = ({children}: LayoutProps) => {
    return (
        <div
            className={"relative responsive:mt-[45px] mx-auto responsive:w-fit responsive:h-fit rounded-md overflow-hidden z-10 h-90 responsive:row-start-2 col-start-1 row-start-2"}>
            <div className="responsive:h-65 responsive:w-45">
                {children}
            </div>
        </div>
    )
}

export default CoverLayout;
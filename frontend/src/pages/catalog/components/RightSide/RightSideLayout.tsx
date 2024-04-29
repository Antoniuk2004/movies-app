import {LayoutProps} from "@/types/LayoutProps";

const RightSideLayout = ({children}: LayoutProps) => {
    return (
        <div className={"sticky w-full top-[4.5rem]"}>
            <div
                className={"relative w-full py-1.5 h-catalog-filter overflow-y-scroll  bg-white rounded-lg movies-grid-xl:hidden movies-grid-lg:hidden movies-grid-md:hidden movies-grid-sm:hidden"}>
                    {children}
            </div>
        </div>
    )
}

export default RightSideLayout;
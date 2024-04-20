import {LayoutProps} from "@/types/LayoutProps";

const RatingLayout = ({children} : LayoutProps) => {
    return (
        <div className="flex responsive:py-1 responsive:px-3 gap-y-2 responsive:items-center responsive:rounded-full responsive:bg-white responsive:mx-auto responsive:h-fit responsive:mb-2 responsive:mt-auto items-end responsive:row-start-2 responsive:col-start-1 row-start-2 col-start-3 z-10 h-full flex-col">
            {children}
        </div>
    )
}

export default RatingLayout;
import {LayoutProps} from "@/types/LayoutProps";

const BannerLayout = ({children} : LayoutProps) => {
    return (
        <div className="relative responsive:row-start-1 responsive:row-end-5 responsive:col-end-1 col-start-1 col-end-4 responsive:w-full w-banner responsive:ml-0 -ml-4 h-90 flex items-center responsive:h-auto rounded-xl wrapper:rounded-none responsive:rounded-none overflow-hidden">
            {children}
        </div>
    )
}

export default BannerLayout;
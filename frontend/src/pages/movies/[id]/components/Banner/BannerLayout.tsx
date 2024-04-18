import {LayoutProps} from "@/types/LayoutProps";

const BannerLayout = ({children} : LayoutProps) => {
    return (
        <div className="relative col-start-1 col-end-4 w-banner -ml-4 h-90 flex items-center responsive:h-auto rounded-xl wrapper:rounded-none responsive:rounded-none overflow-hidden">
            {children}
        </div>
    )
}

export default BannerLayout;
import {LayoutProps} from "@/types/LayoutProps";

const HomeBannerLayout = ({children}: LayoutProps) => {
    return (
        <div className={"relative h-175 select-none responsive:h-152 w-full overflow-hidden"}>
            {children}
        </div>
    )
}

export default HomeBannerLayout;
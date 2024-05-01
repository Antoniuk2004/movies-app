import {LayoutProps} from "@/types/LayoutProps";

const BottomMenuLayout = ({children}: LayoutProps) => {
    return (
        <div className={"grid-cols-5 items-center hidden responsive:grid z-30 fixed bg-white bottom-0 w-full shadow-bottom-menu shadow-banner-bottom"}>
            {children}
        </div>
    )
}

export default BottomMenuLayout;
import {LayoutProps} from "@/types/LayoutProps";

const HeaderLayout = ({children}: LayoutProps) => {
    return (
        <header className="responsive:absolute responsive:hidden w-full h-14 bg-header text-black z-20 sticky top-0 shadow-header-shadow">
            <div className="flex h-full w-full items-center">
                {children}
            </div>
        </header>
    )
}

export default HeaderLayout;
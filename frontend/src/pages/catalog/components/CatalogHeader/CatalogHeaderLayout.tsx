import {LayoutProps} from "@/types/LayoutProps";

const CatalogHeaderLayout = ({children}: LayoutProps) => {
    return (
        <header className={"hidden movies-grid-xl:flex movies-grid-lg:flex movies-grid-md:flex movies-grid-sm:flex bg-header sticky z-20 h-12 items-center px-1.5 text-base font-semibold justify-between"}>
            {children}
        </header>
    )
}

export default CatalogHeaderLayout;
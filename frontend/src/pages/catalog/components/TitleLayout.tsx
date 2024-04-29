import {LayoutProps} from "@/types/LayoutProps";

const TitleLayout = ({children}: LayoutProps) => {
    return (
        <div className={"font-semibold text-xl grid gap-x-4 grid-cols-catalog-top-line movies-grid-xl:hidden movies-grid-lg:hidden movies-grid-md:hidden movies-grid-sm:hidden"}>
            {children}
        </div>
    )
}

export default TitleLayout;
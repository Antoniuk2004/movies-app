import {LayoutProps} from "@/types/LayoutProps";

const TitleLayout = ({children}: LayoutProps) => {
    return (
        <div className={"font-semibold text-xl grid gap-x-4 grid-cols-catalog-top-line"}>
            {children}
        </div>
    )
}

export default TitleLayout;
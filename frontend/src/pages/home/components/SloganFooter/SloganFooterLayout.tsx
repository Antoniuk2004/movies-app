import {LayoutProps} from "@/types/LayoutProps";

const SloganFooterLayout = ({children}: LayoutProps) => {
    return (
        <div className={"mt-4 text-2xl responsive:text-lg"}>
            {children}
        </div>
    )
}

export default SloganFooterLayout;
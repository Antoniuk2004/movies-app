import {LayoutProps} from "@/types/LayoutProps";

const SortingMenuListLayout = ({children}: LayoutProps) => {
    return (
        <div className={"flex flex-col p-1.5"}>
            {children}
        </div>
    )
}

export default SortingMenuListLayout;
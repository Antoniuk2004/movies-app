import {LayoutProps} from "@/types/LayoutProps";

const MainHeaderLayout = ({children}: LayoutProps) => {
    return (
        <div className={"hidden responsive:flex"}>
            {children}
        </div>
    )
}

export default MainHeaderLayout;
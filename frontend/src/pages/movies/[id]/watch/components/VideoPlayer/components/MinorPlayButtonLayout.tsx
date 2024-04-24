import {LayoutProps} from "@/types/LayoutProps";

const MinorPlayButtonLayout = ({children}: LayoutProps) => {
    return (
        <div className={"responsive:hidden"}>
            {children}
        </div>
    )
}

export default MinorPlayButtonLayout;
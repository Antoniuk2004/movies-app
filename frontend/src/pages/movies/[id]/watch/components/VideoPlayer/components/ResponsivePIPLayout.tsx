import {LayoutProps} from "@/types/LayoutProps";

const ResponsivePIPLayout = ({children}: LayoutProps) => {
    return (
        <div className={"responsive:hidden"}>
            {children}
        </div>
    )
}

export default ResponsivePIPLayout;
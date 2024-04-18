import {LayoutProps} from "@/types/LayoutProps";

const IconLayout = ({children} : LayoutProps) => {
    return (
        <div className="ml-4">
            {children}
        </div>
    )
}

export default IconLayout;
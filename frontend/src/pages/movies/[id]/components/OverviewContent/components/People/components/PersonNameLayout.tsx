import {LayoutProps} from "@/types/LayoutProps";

const PersonNameLayout = ({children}: LayoutProps) => {
    return (
        <div className={"h-full font-semibold"}>
            {children}
        </div>
    )
}

export default PersonNameLayout;
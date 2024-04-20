import {LayoutProps} from "@/types/LayoutProps";

const PersonCardLayout = ({children}: LayoutProps) => {
    return (
        <div className={"shadow-header-shadow rounded-md flex mb-0.5 gap-3 pr-3 w-fit min-w-80"}>
            {children}
        </div>
    )
}

export default PersonCardLayout;
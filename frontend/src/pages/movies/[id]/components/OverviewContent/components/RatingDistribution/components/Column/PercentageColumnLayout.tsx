import {LayoutProps} from "@/types/LayoutProps";

const PercentageColumnLayout = ({children}: LayoutProps) => {
    return (
        <div className={"text-sm font-semibold font-['Roboto']"}>
            {children}
        </div>
    )
}

export default PercentageColumnLayout;
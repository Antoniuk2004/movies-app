import {LayoutProps} from "@/types/LayoutProps";

const DistributionTitleLayout = ({children}: LayoutProps) => {
    return (
        <div className={"text-lg mb-3 items-center justify-between flex"}>
            {children}
        </div>
    )
}

export default DistributionTitleLayout;
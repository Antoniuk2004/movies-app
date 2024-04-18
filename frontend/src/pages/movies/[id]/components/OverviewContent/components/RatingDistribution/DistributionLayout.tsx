import {LayoutProps} from "@/types/LayoutProps";

const DistributionLayout = ({children}: LayoutProps) => {
    return (
        <div className={"py-3 px-4"}>
            {children}
        </div>
    )
}

export default DistributionLayout;
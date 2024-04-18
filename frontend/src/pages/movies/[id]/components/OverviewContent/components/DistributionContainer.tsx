import {LayoutProps} from "@/types/LayoutProps";

const DistributionContainer = ({children}: LayoutProps) => {
    return (
        <div className="grid grid-cols-2 responsive:grid-cols-1">
            {children}
        </div>
    )
}

export default DistributionContainer;
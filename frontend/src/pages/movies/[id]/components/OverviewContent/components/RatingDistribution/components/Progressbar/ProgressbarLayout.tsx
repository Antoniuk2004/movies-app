import {LayoutProps} from "@/types/LayoutProps";

const ProgressbarLayout = ({children}: LayoutProps) => {
    return (
        <div className={"rounded-md bg-gray-200 w-full h-1.5 mx-1.5"}>
            {children}
        </div>
    )
}

export default ProgressbarLayout;
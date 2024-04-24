import {LayoutProps} from "@/types/LayoutProps";

const LoaderLayout = ({children}: LayoutProps) => {
    return (
        <div className={"absolute top-0 left-0 h-full w-full flex items-center justify-center"}>
            {children}
        </div>
    )
}

export default LoaderLayout;
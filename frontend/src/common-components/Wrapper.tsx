import {LayoutProps} from "@/types/LayoutProps";

const Wrapper = ({children}: LayoutProps) => {
    return (
        <div className="w-full flex items-center">
            <div className="mx-auto max-w-wrapper">
                {children}
            </div>
        </div>
    )
}

export default Wrapper;
import {LayoutProps} from "@/types/LayoutProps";

const DataInputLayout = ({children}: LayoutProps) => {
    return (
        <div className="input-container flex items-center mb-4 gap-x-2 py-4 border-2 border-btn-light text-gray-400">
            {children}
        </div>
    )
}

export default DataInputLayout;
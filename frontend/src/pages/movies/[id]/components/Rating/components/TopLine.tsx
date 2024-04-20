import {LayoutProps} from "@/types/LayoutProps";

const TopLine = ({children}: LayoutProps) => {
    return (
        <div className="text-white responsive:items-center responsive:text-sm responsive:text-neutral-800 leading-5 font-['Roboto'] flex items-end gap-2 text-xl font-semibold">
            {children}
        </div>
    )
}

export default TopLine;
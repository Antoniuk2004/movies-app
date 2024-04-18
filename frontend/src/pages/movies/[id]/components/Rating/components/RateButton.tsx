import {LayoutProps} from "@/types/LayoutProps";

const RateButton = ({children}: LayoutProps) => {
    return (
        <button className="flex active:scale-95 duration-200 rounded-md gap-x-2 w-fit items-center text-gray-900 py-1 px-6 text-sm bg-white">
            {children}
        </button>
    )
}

export default RateButton;
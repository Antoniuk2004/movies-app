import {LayoutProps} from "@/types/LayoutProps";
import {changeRateModalVisibility, setRateButton} from "@/pages/movies/[id]/components/RateModal/helpers";

const RateButton = ({children}: LayoutProps) => {
    return (
        <button
            ref={(ref) => setRateButton(ref)}
            onClick={() => changeRateModalVisibility(true)}
            className="flex responsive:hidden active:scale-95 duration-200 rounded-md gap-x-2 w-fit items-center text-gray-900 py-1 px-6 text-sm bg-white">
            {children}
        </button>
    )
}

export default RateButton;
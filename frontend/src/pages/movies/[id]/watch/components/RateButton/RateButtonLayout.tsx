import {LayoutProps} from "@/types/LayoutProps";
import {changeRateModalVisibility, setRateButton} from "@/pages/movies/[id]/components/RateModal/helpers";

const RateButtonLayout = ({children}: LayoutProps) => {
    return (
        <button
            ref={(ref) => setRateButton(ref)}
            onClick={() => changeRateModalVisibility(true)}
            className={""}>
            {children}
        </button>
    )
}

export default RateButtonLayout;
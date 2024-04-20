import {LayoutProps} from "@/types/LayoutProps";
import {rateModalSignal} from "@/pages/movies/[id]/components/RateModal/use-rate-modal";

type ButtonLayoutProps = LayoutProps & {
    onClick: () => void;
    primary?: boolean;
}

const ButtonLayout = (props: ButtonLayoutProps) => {
    const {onClick, children, primary} = props;

    const {tempRating} = rateModalSignal.value;
    const disabled = primary && tempRating === 0;
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={`
            ${disabled ? 'cursor-not-allowed opacity-30' : 'cursor-pointer'}
            ${primary ? 'bg-primary text-white' : 'bg-gray-200'} 
            duration-200 active:scale-95 rounded-lg w-full h-10 text-sm font-semibold flex items-center justify-center`}>
            {children}
        </button>
    )
}

export default ButtonLayout;
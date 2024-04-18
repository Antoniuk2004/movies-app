import {LayoutProps} from "@/types/LayoutProps";

type SelectButtonProps = LayoutProps & {
    borderLeft?: boolean;
    textColor?: string;
}

const SelectButton = (props: SelectButtonProps) => {
    const {children, borderLeft, textColor} = props;

    return (
        <div className={`
        ${borderLeft ? 'border-l border-btn-light' : ''}
        ${textColor ? textColor : ''}
        size-8 flex items-center justify-center`}>
            {children}
        </div>
    )
}

export default SelectButton;
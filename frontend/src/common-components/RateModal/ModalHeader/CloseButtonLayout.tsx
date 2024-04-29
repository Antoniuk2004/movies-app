import {LayoutProps} from "@/types/LayoutProps";

type CloseButtonLayoutProps = LayoutProps & {
    action: (value: boolean) => void;
}

const handleCloseButtonClick = (action: (value: boolean) => void) => {
    document.body.style.overflow = "auto";
    action(false)
}

const CloseButtonLayout = (props: CloseButtonLayoutProps) => {
    const {children, action} = props;

    return (
        <div
            onClick={() => handleCloseButtonClick(action)}
            className={"text-xl cursor-pointer"}>
            {children}
        </div>
    )
}

export default CloseButtonLayout;
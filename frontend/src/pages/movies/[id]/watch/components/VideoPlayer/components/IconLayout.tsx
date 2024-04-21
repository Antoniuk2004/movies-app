import {LayoutProps} from "@/types/LayoutProps";

type IconLayoutProps = LayoutProps & {
    clickAction: () => void;
}

const IconLayout = (props: IconLayoutProps) => {
    const {children, clickAction} = props;

    return (
        <div
            onClick={clickAction}
            className={"size-11 responsive:hover:text-white hover:text-primary duration-200 ease-in-out cursor-pointer text-[28px] text-white flex items-center justify-center"}>
            {children}
        </div>
    )
}

export default IconLayout;
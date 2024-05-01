import {LayoutProps} from "@/types/LayoutProps";

type BottomMenuItemLayoutProps = LayoutProps & {
    colStart: string;
    clickAction?: () => void;
}

const BottomMenuItemLayout = (props: BottomMenuItemLayoutProps) => {
    const {children, colStart, clickAction} = props;

    return (
        <div
            className={`flex h-14 items-center justify-center text-neutral-600 text-xs font-semibold ${colStart} flex-col`}>
            <div
                onClick={clickAction}
                className={"w-fit cursor-pointer select-none flex items-center flex-col hover:text-neutral-500 active:scale-95 duration-200 ease-in-out"}>
                {children}
            </div>
        </div>
    )
}

export default BottomMenuItemLayout;
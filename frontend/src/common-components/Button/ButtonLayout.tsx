import {LayoutProps} from "@/types/LayoutProps";

type ButtonLayoutProps = LayoutProps & {
    onClickAction?: () => void;
    type? : "button" | "submit" | "reset";
    fontSize?: string;
    px?: string;
    py?: string;
}

const ButtonLayout = (props: ButtonLayoutProps) => {
    const {children, onClickAction, type, fontSize, px, py} = props;

    return (
        <button
            type={type ? type : "button"}
            onClick={onClickAction}
            className={`${fontSize ? fontSize : "text-lg"}
            ${px ? px : "px-4"} ${py ? py : "py-1.5"}
            h-fit w-fit flex gap-x-1 items-center duration-100 ease-in-out font-medium rounded-md cursor-pointer text-white bg-primary active:scale-95`}>
            {children}
        </button>
    )
}

export default ButtonLayout;
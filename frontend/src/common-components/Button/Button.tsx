import { LayoutProps } from "@/types/LayoutProps";
import ButtonLayout from "./ButtonLayout";

type ButtonProps = LayoutProps & {
    onClickAction?: () => void;
    type? : "button" | "submit" | "reset";
    fontSize?: string;
    px?: string;
    py?: string;
}

const Button = (props: ButtonProps) => {
    const {onClickAction, fontSize, type, px, py, children} = props;

    return (
        <ButtonLayout
            px={px}
            py={py}
            fontSize={fontSize}
            type={type}
            onClickAction={onClickAction}
        >
            {children}
        </ButtonLayout>
    )
}

export default Button;
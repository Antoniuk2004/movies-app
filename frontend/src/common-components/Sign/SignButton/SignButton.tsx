import {RefObject} from "react";

type SignButtonProps = {
    buttonRef: RefObject<HTMLButtonElement>;
    text: string
}

const SignButton = (props: SignButtonProps) => {
    const {buttonRef, text} = props;

    return (
        <button
            ref={buttonRef}
            className="mb-4 hover:bg-opacity-90 focus:bg-opacity-70 text-xl capitalize text-white font-semibold bg-primary h-[60px]"
        >{text}
        </button>
    )
}

export default SignButton;
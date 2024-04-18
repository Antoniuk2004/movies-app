import {LayoutProps} from "@/types/LayoutProps";
import {Dispatch, SetStateAction, useContext} from "react";
import {DropDownContext} from "@/common-components/Dropdown/Dropdown";

type DropdownButtonLayoutProps = LayoutProps & {
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const DropdownButtonLayout = (props: DropdownButtonLayoutProps) => {
    const {setIsOpen, children} = props;

    const {buttonRef} = useContext(DropDownContext);

    return (
        <div
            ref={buttonRef}
            onClick={() => setIsOpen(prevState => !prevState)}
            className={"w-full h-full"}>
            {children}
        </div>
    )
}

export default DropdownButtonLayout;
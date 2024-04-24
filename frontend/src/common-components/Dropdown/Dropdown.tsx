import DropdownLayout from "./DropdownLayout";
import OptionList from "@/common-components/Dropdown/components/OptionList/OptionList";
import DropdownButtonLayout from "@/common-components/Dropdown/components/DropdownButton/DropdownButtonLayout";
import {LayoutProps} from "@/types/LayoutProps";
import {useDropdown} from "@/common-components/Dropdown/use-dropdown";
import {createContext, Dispatch, SetStateAction} from "react";

type DropdownProps = LayoutProps & {
    options: string[];
    setSelected: Dispatch<SetStateAction<string>>
    setAdditionalCase?: Dispatch<SetStateAction<string>>;
    onElementClick: (option: string) => void;
    additionalClasses?: string[];
}

export const DropDownContext = createContext({
    optionListRef: null,
    buttonRef: null,
    setSelected: null,
    setAdditionalCase: null,
    setIsOpen: null,
    onElementClick: null
});

const Dropdown = (props: DropdownProps) => {
    const {isOpen, setIsOpen, optionListRef, buttonRef} = useDropdown();
    const {children, options, setSelected, onElementClick, additionalClasses, setAdditionalCase} = props;

    return (
        <DropDownContext.Provider value={{
            onElementClick: onElementClick,
            optionListRef: optionListRef,
            buttonRef: buttonRef,
            setSelected: setSelected,
            setIsOpen: setIsOpen,
            setAdditionalCase: setAdditionalCase
        }}>
            <DropdownLayout>
                <DropdownButtonLayout setIsOpen={setIsOpen}>
                    {children}
                </DropdownButtonLayout>
                <OptionList
                    additionalClasses={additionalClasses}
                    isOpen={isOpen}
                    options={options}
                />
            </DropdownLayout>
        </DropDownContext.Provider>
    )
}

export default Dropdown;
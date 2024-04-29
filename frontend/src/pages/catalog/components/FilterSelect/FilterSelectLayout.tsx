import {LayoutProps} from "@/types/LayoutProps";
import {Dispatch, SetStateAction} from "react";
import {handleListSelect} from "@/pages/catalog/handlers";

type FilterSelectLayoutProps = LayoutProps & {
    setIsHidden: Dispatch<SetStateAction<boolean>>
    setIsSelected: Dispatch<SetStateAction<boolean>>

}

const FilterSelectLayout = (props: FilterSelectLayoutProps) => {
    const {children, setIsHidden, setIsSelected} = props;

    return (
        <div
            onClick={() => handleListSelect(setIsHidden, setIsSelected)}
            className={"p-2 mx-1 items-center cursor-pointer hover:bg-hover-light duration-200 ease-in-out rounded text-sm font-semibold flex justify-between"}>
            {children}
        </div>
    )
}

export default FilterSelectLayout;
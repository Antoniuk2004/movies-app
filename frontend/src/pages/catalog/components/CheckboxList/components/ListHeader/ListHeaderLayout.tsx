import {LayoutProps} from "@/types/LayoutProps";
import {handleListClose} from "@/pages/catalog/handlers";
import {Dispatch, SetStateAction} from "react";

type ListHeaderProps = LayoutProps & {
    setIsSelected: Dispatch<SetStateAction<boolean>>
    setIsHidden: Dispatch<SetStateAction<boolean>>
}

const ListHeaderLayout = (props: ListHeaderProps) => {
    const {children, setIsHidden, setIsSelected} = props;

    return (
        <div className={"px-3 w-full h-10 flex items-center border-b border-b-btn-light"}>
            <div
                onClick={() => handleListClose(setIsHidden, setIsSelected)}
                className={"w-fit flex items-center gap-x-3 font-semibold cursor-pointer"}>
                {children}
            </div>
        </div>
    )
}

export default ListHeaderLayout;
import ListHeaderLayout from "./ListHeaderLayout";
import {FaArrowLeft, FaChevronLeft} from "react-icons/fa6";
import {Dispatch, SetStateAction} from "react";

type ListHeaderProps = {
    title: string
    setIsSelected: Dispatch<SetStateAction<boolean>>
    setIsHidden: Dispatch<SetStateAction<boolean>>
}

const ListHeader = (props: ListHeaderProps) => {
    const {title, setIsSelected, setIsHidden} = props;

    return (
        <ListHeaderLayout
            setIsHidden={setIsHidden}
            setIsSelected={setIsSelected}
        >
            <FaArrowLeft/>
            <span>{title}</span>
        </ListHeaderLayout>
    )
}

export default ListHeader;
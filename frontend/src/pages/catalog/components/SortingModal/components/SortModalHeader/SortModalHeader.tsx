import SortModalHeaderLayout from "./SortModalHeaderLayout";
import {IoMdClose} from "react-icons/io";
import ModalCloseButtonLayout from "@/pages/catalog/components/SortingModal/components/ModalCloseButtonLayout";

const SortModalHeader = () => {
    return (
        <SortModalHeaderLayout>
            <span>Sorting</span>
            <ModalCloseButtonLayout>
                <IoMdClose/>
            </ModalCloseButtonLayout>
        </SortModalHeaderLayout>
    )
}

export default SortModalHeader;
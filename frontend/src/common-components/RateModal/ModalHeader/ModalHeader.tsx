import ModalHeaderLayout from "@/common-components/RateModal/ModalHeader/layout";
import {IoIosClose} from "react-icons/io";
import CloseButtonLayout from "@/common-components/RateModal/ModalHeader/CloseButtonLayout";

type ModalHeaderProps = {
    text: string;
    action: (value: boolean) => void;
}

const ModalHeader = (props: ModalHeaderProps) => {
    const {text, action} = props;

    return (
        <ModalHeaderLayout>
            <p>{text}</p>
            <CloseButtonLayout action={action}>
                <IoIosClose/>
            </CloseButtonLayout>
        </ModalHeaderLayout>
    )
}

export default ModalHeader;
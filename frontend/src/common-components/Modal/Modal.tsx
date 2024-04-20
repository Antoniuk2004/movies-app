import {ReactNode} from "react";
import ModalBackdrop from "@/common-components/Modal/ModalBackdrop/ModalBackdrop";
import ModalHeader from "./ModalHeader/ModalHeader";
import {useModal} from "@/common-components/Modal/use-effects/use-modal";
import ModalLayout from "@/common-components/Modal/ModalLayout";

export type ModalProps = {
    headerText: string;
    children: ReactNode;
    isVisible: boolean;
    element: HTMLDivElement | null;
    action: (value: boolean) => void;
    setModalRef: (ref: HTMLDivElement | null) => void;
    parentElement: HTMLElement | null;
}

const Modal = (props: ModalProps) => {
    const {headerText, children, isVisible, element, action, setModalRef, parentElement} = props;
    useModal(element, action, parentElement, isVisible);

    return (
        <ModalBackdrop isVisible={isVisible}>
            <ModalLayout setModalRef={setModalRef}>
                <ModalHeader action={action} text={headerText}/>
                {children}
            </ModalLayout>
        </ModalBackdrop>
    )
}

Modal.displayName = "Modal";

export default Modal;

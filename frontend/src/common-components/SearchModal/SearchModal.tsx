import {Modal} from "@mantine/core";
import {useModalFunctions} from "@/common-components/SearchModal/use-effects/use-modal-functions";
import {handleSearchModalClose} from "@/common-components/SearchModal/handlers";
import SearchModalHeader from "@/common-components/SearchModal/components/SearchModalHeader/SearchModalHeader";
import ModalSearchbar from "@/common-components/SearchModal/components/ModalSearchbar/ModalSearchbar";
import { useViewportSize } from "@mantine/hooks";

const SearchModal = () => {
    const {opened, close} = useModalFunctions();
    const { height, width } = useViewportSize();

    return (
        <>
            <Modal.Root
                transitionProps={{ transition: 'slide-down' }}
                radius={0}
                yOffset={'1.75rem'}
                size={'46.25rem'}
                fullScreen={width < 1025}
                opened={opened}
                onClose={() => handleSearchModalClose(close)}>
                <Modal.Overlay />
                <Modal.Content>
                    <SearchModalHeader close={close}/>
                    <ModalSearchbar/>
                </Modal.Content>
            </Modal.Root>
        </>
    )
}

export default SearchModal;
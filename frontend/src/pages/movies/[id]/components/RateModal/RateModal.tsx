import Modal from "@/common-components/RateModal/Modal";
import {useRateModal} from "@/pages/movies/[id]/components/RateModal/use-rate-modal";
import {changeRateModalVisibility, setModalRef} from "@/pages/movies/[id]/components/RateModal/helpers";
import RateDisplay from "@/pages/movies/[id]/components/RateModal/components/RateDisplay/RateDisplay";
import StarsContainer from "@/pages/movies/[id]/components/RateModal/components/StartContainer/StarsContainer";
import ButtonsLayout from "@/pages/movies/[id]/components/RateModal/components/ButtonsLayout";
import ButtonLayout from "@/pages/movies/[id]/components/RateModal/components/Button/ButtonLayout";
import {handleCancelButtonClick, handleRateButtonClick} from "@/pages/movies/[id]/components/RateModal/handlers";


const RateModal = () => {
    const {isVisible, parentElement, element, tempRating} = useRateModal();

    return (
        <>
            <Modal
                headerText={'Rate'}
                isVisible={isVisible}
                element={element}
                parentElement={parentElement}
                action={changeRateModalVisibility}
                setModalRef={setModalRef}
            >
                <RateDisplay value={tempRating}/>
                <StarsContainer value={tempRating}/>
                <ButtonsLayout>
                    <ButtonLayout
                        onClick={handleCancelButtonClick}
                    >
                        <span>Cancel</span>
                    </ButtonLayout>
                    <ButtonLayout
                        primary={true}
                        onClick={handleRateButtonClick}
                    >
                        <span>Rate</span>
                    </ButtonLayout>
                </ButtonsLayout>
            </Modal>
        </>
    )
}

export default RateModal;
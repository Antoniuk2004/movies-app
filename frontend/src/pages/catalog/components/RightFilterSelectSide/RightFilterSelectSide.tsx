import RightFilterSelectSideLayout from "./RightFilterSelectSideLayout";
import {FaChevronRight} from "react-icons/fa6";
import {catalogParamsSignal} from "@/pages/catalog/signals/catalog-params-signal";

type RightFilterSelectSideProps = {
    id: string;
}

const RightFilterSelectSide = (props: RightFilterSelectSideProps) => {
    const {id} = props;

    if (!catalogParamsSignal.value) return;

    let length = 0;
    if (catalogParamsSignal.value[id]) {
        length = catalogParamsSignal.value[id].length;
    }

    return (
        <RightFilterSelectSideLayout>
            {length > 0 ? `Selected ${length}` : 'Any'}
            <FaChevronRight/>
        </RightFilterSelectSideLayout>
    )
}

export default RightFilterSelectSide;
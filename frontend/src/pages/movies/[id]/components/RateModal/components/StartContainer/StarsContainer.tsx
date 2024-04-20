import StarsContainerLayout from "./StarsContainerLayout";
import StarLayout from "@/pages/movies/[id]/components/RateModal/components/StarLayout";
import {FaStar} from "react-icons/fa6";

type StarsContainerProps = {
    value: number;
}

const StarsContainer = (props: StarsContainerProps) => {
    const {value} = props;
    const _ = Array(10).fill(undefined);

    return (
        <StarsContainerLayout>
            {_.map((element, index) => (
                <StarLayout
                    value={index}
                    makeOrange={value > index}
                    key={index}
                >
                    <FaStar/>
                </StarLayout>
            ))}
        </StarsContainerLayout>
    )
}

export default StarsContainer;
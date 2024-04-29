import SortingButtonLayout from "./SortingButtonLayout";
import {useOrder} from "@/pages/catalog/components/SortingButton/use-order";
import SortIcon from "@/pages/catalog/components/SortingSelect/components/SortIcon";

const SortingButton = () => {
    const order = useOrder();

    return (
        <SortingButtonLayout>
            <SortIcon additionalCase={order}/>
            <span>Sort</span>
        </SortingButtonLayout>
    )
}

export default SortingButton;
import SortingMenuListLayout from "./SortingMenuListLayout";
import {Sort} from "@/types/Sort";
import {useOrderValues} from "@/pages/catalog/components/SortingModal/components/SortingMenuItem/use-order-values";
import SortingMenuItem from "@/pages/catalog/components/SortingModal/components/SortingMenuItem/SortingMenuItem";
import {Key} from "react";
import Separator from "@/common-components/Dropdown/components/Separator";
import {handleOrderSelect, handleOrderTypeSelect} from "@/pages/catalog/handlers";

const SortingMenuLists = () => {
    const orderTypes = Object.values(Sort).slice(0, 5);
    const orders = Object.values(Sort).slice(5, 7);
    const orderValues = useOrderValues();

    if (!orderValues) return null;
    return (
        <>
            <SortingMenuListLayout>
                {orderTypes && orderTypes.map((element: Sort, index: Key) => (
                    <SortingMenuItem
                        key={index}
                        onClick={handleOrderTypeSelect}
                        value={element}
                        selectedValue={orderValues.selectedOrderType}
                    />
                ))}
            </SortingMenuListLayout>
            <Separator additionalClasses={orders}/>
            <SortingMenuListLayout>
                {orders && orders.map((element: Sort, index: Key) => (
                    <SortingMenuItem
                        key={index}
                        onClick={handleOrderSelect}
                        value={element}
                        selectedValue={orderValues.selectedOrder}
                    />
                ))}
            </SortingMenuListLayout>
        </>
    )
}

export default SortingMenuLists;
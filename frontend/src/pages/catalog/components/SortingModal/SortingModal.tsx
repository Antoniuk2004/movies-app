import SortingModalLayout from "./SortingModalLayout";
import {Paper} from "@mantine/core";
import {useFilterParams} from "../../use-effects/use-filter-params";
import {AnimatePresence} from "framer-motion";
import {useSortingModalOpen} from "@/pages/catalog/components/SortingModal/use-sorting-modal-open";
import SortModalHeader from "@/pages/catalog/components/SortingModal/components/SortModalHeader/SortModalHeader";
import SortingMenuLists from "@/pages/catalog/components/SortingModal/components/SortingMenuList/SortingMenuLists";

const SortingModal = () => {
    const {ref, opened} = useSortingModalOpen();
    const filterParams = useFilterParams();

    if (!filterParams) return null;
    return (
        <AnimatePresence>
            {opened && (
                <SortingModalLayout>
                    <Paper ref={ref} className="bg-white h-full overflow-hidden rounded-xl py-1.5">
                        <SortModalHeader/>
                        <SortingMenuLists/>
                    </Paper>
                </SortingModalLayout>
            )}
        </AnimatePresence>
    )
}

export default SortingModal;
import ModalLayout from "./ModalLayout";
import {useModalOpen} from "@/pages/catalog/components/FilterModal/use-modal-open";
import {Paper} from "@mantine/core";
import {useFilterParams} from "../../use-effects/use-filter-params";
import React, {useState} from "react";
import TopLists from "../TopLists";
import BottomLists from "../BottomLists";
import {AnimatePresence} from "framer-motion";
import FilterModalHeader from "@/pages/catalog/components/FilterModal/components/FilterModalHeader";
import FilterBottomButtons from "@/pages/catalog/components/FilterBottomButtons/FilterBottomButtons";
import MobileSwipeAnimation from "@/pages/catalog/components/MobileSwipeAnimation";
import {usePanelHidden} from "@/pages/catalog/components/FilterModal/use-panel-hidden";

const FilterModal = () => {
    const {ref, opened} = useModalOpen();
    const {isPanelHidden, setIsPanelHidden} = usePanelHidden();
    const filterParams = useFilterParams();

    if (!filterParams) return null;
    return (
        <AnimatePresence>
            {opened && (
                <ModalLayout>
                    <Paper ref={ref} className="bg-white h-full overflow-hidden">
                        <MobileSwipeAnimation isHidden={isPanelHidden}>
                            <FilterModalHeader/>
                            <TopLists
                                mobile={true}
                                filterParams={filterParams}
                                isPanelHidden={isPanelHidden}
                                setIsPanelHidden={setIsPanelHidden}/>
                            <BottomLists
                                filterParams={filterParams}/>
                            <FilterBottomButtons/>
                        </MobileSwipeAnimation>
                    </Paper>
                </ModalLayout>
            )}
        </AnimatePresence>
    )
}

export default FilterModal;
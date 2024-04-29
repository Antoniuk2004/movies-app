import RightSideLayout from "./RightSideLayout";
import {useState} from "react";
import TopLists from "@/pages/catalog/components/TopLists";
import BottomLists from "@/pages/catalog/components/BottomLists";
import FilterBottomButtons from "@/pages/catalog/components/FilterBottomButtons/FilterBottomButtons";
import SwipeAnimation from "@/pages/catalog/components/SwipeAnimation";
import {useFilterParams} from "@/pages/catalog/use-effects/use-filter-params";

const RightSide = () => {
    const [isPanelHidden, setIsPanelHidden] = useState<boolean>(false);
    const filterParams = useFilterParams();

    if(!filterParams) return null;
    return (
        <RightSideLayout>
            <SwipeAnimation isHidden={isPanelHidden}>
                <TopLists
                    mobile={false}
                    filterParams={filterParams}
                    isPanelHidden={isPanelHidden}
                    setIsPanelHidden={setIsPanelHidden}
                />
                <BottomLists
                    filterParams={filterParams}
                />
                <FilterBottomButtons/>
            </SwipeAnimation>
        </RightSideLayout>
    )
}

export default RightSide;
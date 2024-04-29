import FilterSelect from "@/pages/catalog/components/FilterSelect/FilterSelect";
import {Dispatch, SetStateAction} from "react";
import {FilterParams} from "@/types/FilterParams";

type TopListsProps = {
    isPanelHidden: boolean;
    setIsPanelHidden: Dispatch<SetStateAction<boolean>>
    filterParams: FilterParams;
    mobile: boolean;
}

const TopLists = (props: TopListsProps) => {
    const {isPanelHidden, setIsPanelHidden, filterParams, mobile} = props;

    if (!filterParams) return null;
    return (
        <>
            <FilterSelect
                mobile={mobile}
                id={'genres'}
                setIsHidden={setIsPanelHidden}
                options={filterParams.genres}
                title={'Genres'}
            />
            <FilterSelect
                mobile={mobile}
                id={'actors'}
                setIsHidden={setIsPanelHidden}
                options={filterParams.actors}
                title={'Actors'}/>
            <FilterSelect
                mobile={mobile}
                id={'directors'}
                setIsHidden={setIsPanelHidden}
                options={filterParams.directors}
                title={'Directors'}
            />
            <FilterSelect
                mobile={mobile}
                id={'studios'}
                setIsHidden={setIsPanelHidden}
                options={filterParams.studios}
                title={'Studios'}
            />
            <FilterSelect
                mobile={mobile}
                id={'countries'}
                setIsHidden={setIsPanelHidden}
                options={filterParams.countries}
                title={'Countries'}
            />
        </>
    )
}

export default TopLists;
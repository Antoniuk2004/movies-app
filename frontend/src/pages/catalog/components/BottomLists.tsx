import FromToInput from "@/pages/catalog/components/FromToInput/FromToInput";
import TwoCheckLists from "@/pages/catalog/components/TwoCheckLists/TwoCheckLists";
import {FilterParams} from "@/types/FilterParams";

type BottomListsProps = {
    filterParams: FilterParams;
}

const BottomLists = (props: BottomListsProps) => {
    const {filterParams} = props;

    return (
        <>
            <FromToInput
                fromId={'yearFrom'}
                toId={'yearTo'}
                title={'Release Year'}/>
            <FromToInput
                fromId={'ratingFrom'}
                toId={'ratingTo'}
                title={'Rating'}
            />
            <FromToInput
                fromId={'durationFrom'}
                toId={'durationTo'}
                title={'Duration'}
            />
            <TwoCheckLists
                firstId={'mpaaRatings'}
                title={'MPAA Rating'}
                checkList={filterParams.mpaaRatings}/>
            <TwoCheckLists
                firstId={'includedWatchingStatuses'}
                secondId={'excludedWatchingStatuses'}
                title={'Watching Statuses'}
                checkList={filterParams.watchingStatuses}/>
        </>
    )
}

export default BottomLists;
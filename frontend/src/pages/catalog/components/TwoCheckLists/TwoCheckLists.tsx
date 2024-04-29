import TwoCheckListsLayout from "./TwoCheckListsLayout";
import CheckItem from "@/pages/catalog/components/CheckItem/CheckItem";
import {check, convertToListOfIntegers} from "@/pages/catalog/helpers";
import {MpaaRatingType} from "@/types/MpaaRatingType";
import {WatchingStatusType} from "@/types/WatchingStatusType";
import {catalogParamsSignal} from "@/pages/catalog/signals/catalog-params-signal";

type TwoCheckListsProps = {
    title: string;
    checkList: MpaaRatingType[] | WatchingStatusType[];
    firstId: string;
    secondId?: string;
}

const getId = (item: MpaaRatingType | WatchingStatusType) => {
    if ('ratingId' in item) return item.ratingId;
    if ('watchingStatusId' in item) return item.watchingStatusId;
}

const TwoCheckLists = (props: TwoCheckListsProps) => {
    const {title, checkList, firstId, secondId} = props;

    const firstValues = convertToListOfIntegers(catalogParamsSignal.value[firstId]);
    const secondValues = convertToListOfIntegers(catalogParamsSignal.value[secondId]);

    return (
        <TwoCheckListsLayout>
            <span>{title}</span>
            <div className={"grid grid-cols-2 gap-x-3"}>
                {checkList.map((item: MpaaRatingType | WatchingStatusType, index: number) => (
                    <CheckItem
                        firstInitialState={check(firstValues, getId(item))}
                        secondInitialState={check(secondValues, getId(item))}
                        objectId={getId(item)}
                        firstId={firstId}
                        secondId={secondId}
                        title={item.name}
                        key={index}
                    />
                ))}
            </div>
        </TwoCheckListsLayout>
    )
}

export default TwoCheckLists;
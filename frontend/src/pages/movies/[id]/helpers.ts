import {TabSelection} from "@/types/TabSelection";
import {RatingDistribution} from "@/types/RatingDistribution";
import {WatchingStatusDistribution} from "@/types/WatchingStatusDistribution";
import {WatchingStatus} from "@/types/WatchingStatus";
import {Person} from "@/types/Person";
import {getImage} from "@/api/image-request";
import {movieSignal} from "@/signals/movie-signal";
import {FilterParams, lists} from "@/types/FilterParams";
import {Sort} from "@/types/Sort";

export const stringToTabSelection = (value: string): TabSelection | undefined => {
    if (!value) return undefined;

    const lowerCase = value.toLowerCase();

    for (const key in TabSelection) {
        if (Object.hasOwnProperty.call(TabSelection, key) && TabSelection[key].toLowerCase() === lowerCase) {
            return TabSelection[key];
        }
    }

    return undefined;
}

export const formatDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    const hoursString = hours > 0 ? `${hours}h` : '';
    const minutesString = remainingMinutes > 0 ? `${remainingMinutes}min` : '';

    return `${hoursString} ${minutesString}`.trim();
}

export const calcTotalRates = (ratingDistribution: RatingDistribution |
    WatchingStatusDistribution): number => {
    return Object.values(ratingDistribution)
        .reduce((acc, value) =>
            acc + value.count, 0);
}

export const roundNumber = (value: number, digits: number) => {
    const power = Math.pow(10, digits);
    return Math.round(value * power) / power;
}

export const addValuesToRatingDistribution = (ratingDistribution: RatingDistribution,
                                              total: number) => {
    const arrOfRates = [];

    for (let i = 10; i > 0; i--) {
        const elementFromObject = Object.values(ratingDistribution)
            .find((value) => value.rating === i);

        if (elementFromObject) {
            arrOfRates.push({
                ...elementFromObject,
                percentage: roundNumber((elementFromObject.count / total) * 100, 2)
            })
        } else {
            arrOfRates.push({
                rating: i,
                count: 0,
                percentage: 0
            })
        }
    }

    return arrOfRates;
}

export const addValuesToWatchingStatusDistribution =
    (watchingStatusDistribution: WatchingStatusDistribution, total: number) => {
        const arrOfRates = [];

        const statuses = Object.values(WatchingStatus);

        for (let i = 0; i < statuses.length; i++) {
            const elementFromObject = Object.values(watchingStatusDistribution)
                .find((value) => value.watchingStatus
                    === statuses[i]);

            if (elementFromObject) {
                arrOfRates.push({
                    ...elementFromObject,
                    percentage: roundNumber((elementFromObject.count / total)
                        * 100, 2)
                })
            } else {
                arrOfRates.push({
                    watchingStatus: statuses[i],
                    count: 0,
                    percentage: 0
                })
            }
        }

        return arrOfRates;
    }

export const formatDate = (dateAsNumber: number) => {
    const normalDate = new Date(dateAsNumber);
    const month = normalDate.toLocaleString('default', {month: 'long'});
    const year = normalDate.getFullYear();
    const day = normalDate.getDate();

    return `${month} ${day}, ${year}`;
}

export const getImages = async (people: Person[], type: string) => {
    for (let person of people) {
        const id = person.id;
        //@ts-ignore
        person.photo = await getImage(type, id.toString())
    }

    return people;
}

export const changeWatchingStatusDistribution = (newStatus: WatchingStatus) => {
    const prevStatus = movieSignal.value.watchingStatus;

    if (newStatus === prevStatus) return;

    const total = movieSignal.value.totalWatchingStatuses ? movieSignal.value.totalWatchingStatuses : 1;
    const newDistribution = movieSignal.value.watchingStatusDistribution.map((value) => {
        if (value.watchingStatus === prevStatus) {
            value.count--;
            value.percentage = roundNumber((value.count / total) * 100, 2);
        }

        if (value.watchingStatus === newStatus) {
            value.count++;
            value.percentage = roundNumber((value.count / total) * 100, 2);
        }

        return value;

    })

    movieSignal.value = {
        ...movieSignal.value,
        watchingStatus: newStatus,
        watchingStatusDistribution: newDistribution
    }
}

export const changeRatingDistribution = (newRating: number) => {
    const prevRating = movieSignal.value.userRating;

    if (newRating === prevRating) return;

    const total = movieSignal.value.totalRates ? movieSignal.value.totalRates : 1;
    const newDistribution = movieSignal.value.ratingDistribution.map((value) => {
        if (value.rating === prevRating) {
            value.count--;
            value.percentage = roundNumber((value.count / total) * 100, 2);
        }

        if (value.rating === newRating) {
            value.count++;
            value.percentage = roundNumber((value.count / total) * 100, 2);
        }

        return value;

    })

    movieSignal.value = {
        ...movieSignal.value,
        userRating: newRating,
        totalRates: movieSignal.value.totalRates ? movieSignal.value.totalRates : 1,
        ratingDistribution: newDistribution
    }
}

export const calcAvgRating = () => {
    const totalCount = movieSignal.value.totalRates;

    const sum = movieSignal.value.ratingDistribution
        .reduce((acc, value) =>
            acc + (value.count > 0 ? value.rating * value.count : 0), 0);

    return sum / totalCount;
}

export const getBackGroundColor = (value: number) => {
    if (value < 5) return 'bg-red-500';
    if (value > 4 && value < 7) return 'bg-yellow-400';
    else return 'bg-green-400';
}

export const createFilterQuery = (params: FilterParams) => {
    let query = '';

    const order = params.order;
    if (order) query += `?order=${order}`;
    else query += `?order=${Sort.DESC}`;

    const orderType = params.orderType;
    if (orderType) query += `&orderType=${orderType}`;
    else query += `&orderType=${Sort.DESC}`;

    Object.keys(params).forEach((key) => {
        if (key === 'order' || key === 'orderType') return;

        const value = params[key];
        if (!value) return;

        if (Array.isArray(value)) {
            value.forEach((element) => {
                if (!element) return;
                query += `&${key}=${element}`;
            })
        } else {
            query += `&${key}=${value}`;
        }
    });

    return query;
}

export const parseFilterQuery = (query: any) => {
    const keys = Object.keys(query);
    const filteredQuery = {...query};

    const commonElements = findCommonElements(keys, lists);
    commonElements.forEach((element, index) => {
        if (Array.isArray(query[element])) {
            filteredQuery[element] = query[element].map((str: string) =>
                parseInt(str, 10));
        } else filteredQuery[element] = [parseInt(query[element])];
    })

    return filteredQuery;
}

const findCommonElements = (arr1: string[], arr2: string[]) => {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
    // @ts-ignore
    return [...set1].filter(x => set2.has(x));
}
import {TabSelection} from "@/types/TabSelection";
import {RatingDistribution} from "@/types/RatingDistribution";
import {WatchingStatusDistribution} from "@/types/WatchingStatusDistribution";
import {WatchingStatus} from "@/types/WatchingStatus";

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

        console.log(watchingStatusDistribution);

        const statuses = Object.values(WatchingStatus);

        for (let i = 0; i < statuses.length; i++) {
            const elementFromObject = Object.values(watchingStatusDistribution)
                .find((value) => value.watchingStatus === statuses[i]);

            if (elementFromObject) {
                arrOfRates.push({
                    ...elementFromObject,
                    percentage: roundNumber((elementFromObject.count / total) * 100, 2)
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
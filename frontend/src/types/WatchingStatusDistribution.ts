import {WatchingStatus} from "@/types/WatchingStatus";

export type WatchingStatusDistribution = {
    watchingStatus: WatchingStatus,
    count: number,
    percentage: number
}[]
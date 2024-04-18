import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";

export type DataType = {
    username: string,
    password: string,
    wrong: boolean,
    router: AppRouterInstance
}
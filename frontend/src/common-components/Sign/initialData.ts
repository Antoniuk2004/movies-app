import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";

export const initialData = (router: AppRouterInstance, username? : string) => {
    return {
        username: username || '',
        password: '',
        wrong: false,
        router: router
    }
}
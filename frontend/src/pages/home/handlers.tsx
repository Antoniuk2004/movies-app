import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";

export const handleFormSubmit = (data: any, router: AppRouterInstance) => {
    const username = data.username;
    router.push(`/signup?username=${username}`)
}
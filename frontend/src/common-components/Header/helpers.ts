import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {NextRouter} from "next/router";

export const openCatalogPage = (router: AppRouterInstance, infoRouter: NextRouter) => {
    if (infoRouter.pathname === '/catalog') return;
    router.push('/catalog?order=DESC&orderType=RATING');
}

export const openMainPage = (navRouter: AppRouterInstance, infoRouter: NextRouter) => {
    if (infoRouter.pathname === '/main') return;
    navRouter.push("/main");
}

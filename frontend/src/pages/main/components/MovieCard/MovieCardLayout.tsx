import {LayoutProps} from "@/types/LayoutProps";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";

type MovieCardLayoutProps = LayoutProps & {
    router: AppRouterInstance;
    id: number;
}

const MovieCardLayout = (props: MovieCardLayoutProps) => {
    const {children, router, id} = props;

    return (
        <div
            onClick={() => router.push(`/movies/${id}?selection=overview`)}
            className={"cursor-pointer w-fit min-w-[135px]"}>
            {children}
        </div>
    )
}

export default MovieCardLayout;
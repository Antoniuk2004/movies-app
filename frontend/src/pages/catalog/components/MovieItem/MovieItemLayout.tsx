import {LayoutProps} from "@/types/LayoutProps";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";

type MovieItemLayoutProps = LayoutProps & {
    id: number;
    router: AppRouterInstance;
}

const MovieItemLayout = (props: MovieItemLayoutProps) => {
    const {children, id, router} = props;

    return (
        <div
            onClick={() => router.push(`/movies/${id}?selection=overview`)}
            className={"p-2 cursor-pointer"}>
            {children}
        </div>
    )
}

export default MovieItemLayout;
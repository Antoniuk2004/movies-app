import {LayoutProps} from "@/types/LayoutProps";
import {Sort} from "@/types/Sort";
import {useRouter} from "next/navigation";
import {useFormContext} from "react-hook-form";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";

type SortingMenuItemLayoutProps = LayoutProps & {
    onClick: (value: Sort, data: any, router: AppRouterInstance) => void;
    value: Sort;
}

const SortingMenuItemLayout = (props: SortingMenuItemLayoutProps) => {
    const {children, onClick, value} = props;

    const router = useRouter();
    const data = useFormContext().getValues();

    return (
        <div
            onClick={() => onClick(value, data, router)}
            className={"px-2 py-1.5 flex gap-x-2 text-sm items-center cursor-pointer hover:bg-hover-light rounded-md duration-200 ease-in-out"}>
            {children}
        </div>
    )
}

export default SortingMenuItemLayout;
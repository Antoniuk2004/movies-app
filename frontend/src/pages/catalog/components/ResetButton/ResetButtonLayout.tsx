import {LayoutProps} from "@/types/LayoutProps";
import {useRouter as useNavRouter} from "next/navigation";
import {useRouter as useInfoRouter} from "next/router";
import {resetFilters} from "@/pages/catalog/helpers";
import {useFormContext} from "react-hook-form";

const ResetButtonLayout = ({children}: LayoutProps) => {
    const navRouter = useNavRouter();
    const infoRouter = useInfoRouter();

    const {setValue} = useFormContext();

    return (
        <button
            onClick={() => resetFilters(navRouter, infoRouter ,setValue)}
            type={"button"}
            className={"w-full rounded-md ring-1 ring-btn-light bg-white tex-sm py-1 active:scale-95"}>
            {children}
        </button>
    )
}

export default ResetButtonLayout;
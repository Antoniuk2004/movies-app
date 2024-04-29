import { LayoutProps } from "@/types/LayoutProps";
import { useClearSearchbarButton } from "@/pages/catalog/use-effects/use-clear-searchbar-button";
import {clearSearchbar} from "@/pages/catalog/helpers";
import {useRouter} from "next/navigation";
import {useFormContext} from "react-hook-form";

const SearchbarClearButtonLayout = ({ children }: LayoutProps) => {
    const { isClearButtonHidden } = useClearSearchbarButton();
    const router = useRouter();
    const data = useFormContext().getValues();

    if (isClearButtonHidden) return null;
    return (
        <button
            type="button"
            onClick={() => clearSearchbar(data, router)}
            className="absolute active:scale-95 top-0 right-0 text-gray-400 size-8 flex items-center justify-center"
        >
            {children}
        </button>
    );
};

export default SearchbarClearButtonLayout;

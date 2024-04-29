import {LayoutProps} from "@/types/LayoutProps";
import {filterModalOpenSignal} from "@/pages/catalog/components/FilterModal/filter-modal-open-signal";

type ListsApplyButtonProps = LayoutProps & {
    mobile: boolean;
}

const ListsApplyButtonLayout = (props: ListsApplyButtonProps) => {
    const {children, mobile} = props;

    return (
        <div className={`w-full ${mobile ? 'ml-[440px] py-2' : 'ml-[330px] pt-2 pb-1'} absolute bottom-0 bg-white px-3`}>
            <button
                onClick={() => filterModalOpenSignal.value = false}
                type={"submit"} className={"active:scale-95 w-full h-full text-sm bg-neutral-200 rounded-md leading-8"}>
                {children}
            </button>
        </div>
    )
}

export default ListsApplyButtonLayout;
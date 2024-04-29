import SortingMenuItemLayout from "./SortingMenuItemLayout";
import {Sort} from "@/types/Sort";
import {Radio} from "@mantine/core";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";

type SortingMenuItemProps = {
    onClick: (value: Sort, data: any, router: AppRouterInstance) => void;
    value: Sort;
    selectedValue: Sort;
}

const SortingMenuItem = (props: SortingMenuItemProps) => {
    const {onClick, value, selectedValue} = props;

    return (
        <SortingMenuItemLayout value={value} onClick={onClick}>
            <Radio
                size={'xs'}
                readOnly={true}
                color={'#ff9001'}
                checked={value === Sort[selectedValue]}
            />
            <span>{value}</span>
        </SortingMenuItemLayout>
    )
}

export default SortingMenuItem;
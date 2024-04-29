import ListsApplyButtonLayout from "@/pages/catalog/components/ListsApplyButton/ListsApplyButtonLayout";

type ListsApplyButtonProps = {
    mobile: boolean;
}

const ListsApplyButton = (props: ListsApplyButtonProps) => {
    const {mobile} = props;

    return (
        <ListsApplyButtonLayout mobile={mobile}>
            <span>Apply</span>
        </ListsApplyButtonLayout>
    )
}

export default ListsApplyButton;
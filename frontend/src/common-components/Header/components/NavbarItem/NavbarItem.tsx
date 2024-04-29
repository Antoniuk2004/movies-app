import NavbarItemLayout from "./NavbarItemLayout";
import NavbarIconLayout from "@/common-components/Header/components/NavbarIconLayout";

type NavbarItemProps = {
    icon: any;
    title: string;
    action: () => void;
}

const NavbarItem = (props: NavbarItemProps) => {
    const {icon, title, action} = props;

    return (
        <NavbarItemLayout action={action}>
            <NavbarIconLayout>
                {icon}
            </NavbarIconLayout>
            <span>{title}</span>
        </NavbarItemLayout>
    )
}

export default NavbarItem;
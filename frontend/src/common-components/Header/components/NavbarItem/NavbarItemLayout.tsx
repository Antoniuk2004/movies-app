import {LayoutProps} from "@/types/LayoutProps";

type NavbarItemLayoutProps = LayoutProps & {
    action: () => void;
}

const NavbarItemLayout = (props: NavbarItemLayoutProps) => {
    const {action, children} = props;

    return (
        <a
            onClick={action}
            className={"flex select-none cursor-pointer hover:bg-primary-hovered duration-200 ease-in-out items-center gap-x-2 px-3 py-1.5 rounded-md font-semibold text-sm "}>
            {children}
        </a>
    )
}

export default NavbarItemLayout;
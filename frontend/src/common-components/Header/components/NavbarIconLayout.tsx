import {LayoutProps} from "@/types/LayoutProps";

const NavbarIconLayout = ({children}: LayoutProps) => {
    return (
        <div className={"text-lg"}>
            {children}
        </div>
    )
}

export default NavbarIconLayout;
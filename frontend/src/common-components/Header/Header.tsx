import HeaderLayout from "@/common-components/Header/HeaderLayout";
import ThirdPart from "./components/ThirdPart";
import Logo from "@/common-components/Logo/Logo";
import NavbarItem from "@/common-components/Header/components/NavbarItem/NavbarItem";
import {IoLayers, IoMenu, IoSearch} from "react-icons/io5";
import {openCatalogPage, openMainPage} from "@/common-components/Header/helpers";
import {useRouter as useNavRouter} from "next/navigation";
import NavbarIconLayout from "@/common-components/Header/components/NavbarIconLayout";
import {useRouter as useInfoRouter} from "next/router";
import {searchValueSignal} from "@/common-components/SearchModal/signals/search-value-signal";
import {openSearchModalSignal} from "@/common-components/SearchModal/signals/open-search-modal-signal";

type HeaderProps = {
    currentPage: string;
}

const Header = (props: HeaderProps) => {
    const {currentPage} = props;
    const navRouter = useNavRouter();
    const infoRouter = useInfoRouter();

    return (
        <HeaderLayout currentPage={currentPage}>
            <ThirdPart justify={'justify-start'}>
                <Logo action={() => openMainPage(navRouter, infoRouter)}/>
            </ThirdPart>
            <ThirdPart justify={'justify-center'}>
                <NavbarItem
                    action={() => openCatalogPage(navRouter, infoRouter)}
                    icon={<IoLayers/>}
                    title={'Catalog'}
                />
                <NavbarItem
                    action={() => openSearchModalSignal.value = true}
                    icon={<IoSearch/>}
                    title={'Search'}
                />
            </ThirdPart>
            <ThirdPart justify={'justify-end'}>
                <NavbarIconLayout>
                    <IoMenu/>
                </NavbarIconLayout>
            </ThirdPart>
        </HeaderLayout>
    )
}

export default Header;
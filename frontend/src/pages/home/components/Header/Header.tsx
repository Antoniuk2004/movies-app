import HeaderLayout from "./HeaderLayout";
import Wrapper from "@/common-components/Wrapper";
import HeaderContentLayout from "@/pages/home/components/Header/components/HeaderContentLayout";
import SideLayout from "@/pages/movies/[id]/watch/components/SideLayout";
import Logo from "@/common-components/Logo/Logo";
import Button from "@/common-components/Button/Button";
import {useRouter} from "next/navigation";
import {statusSignal} from "@/signals/status-signal";
import SignButton from "@/pages/home/components/SignButton";

const Header = () => {
    return (
        <HeaderLayout>
            <Wrapper>
                <HeaderContentLayout>
                    <SideLayout>
                        <Logo/>
                    </SideLayout>
                    <SignButton/>
                </HeaderContentLayout>
            </Wrapper>
        </HeaderLayout>
    )
}

export default Header;
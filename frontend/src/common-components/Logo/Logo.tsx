import LogoLayout from "./LogoLayout";
import {SiWondersharefilmora} from "react-icons/si";

type LogoProps = {
    action?: () => void;
}

const Logo = (props: LogoProps) => {
    const {action} = props;

    return (
        <LogoLayout action={action}>
            <SiWondersharefilmora/>
            <h1>Nunim</h1>
        </LogoLayout>
    )
}

export default Logo;
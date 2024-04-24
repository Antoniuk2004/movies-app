import {statusSignal} from "@/signals/status-signal";
import Button from "@/common-components/Button/Button";
import {useRouter} from "next/navigation";

const SignButton = () => {
    const router = useRouter();
    const status = statusSignal.value;

    if (status === 200) return (
        <Button
            onClickAction={() => router.push("/main")}
        >
            <span>Watch Movies</span>
        </Button>
    )
    else return (
        <Button
            onClickAction={() => router.push("/signin")}
        >
            <span>Sign In</span>
        </Button>
    )
}

export default SignButton;
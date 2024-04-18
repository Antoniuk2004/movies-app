import AccountPresenceLayout from "@/common-components/Sign/AccountPresence/layout";
import {useRouter} from "next/navigation";

type AccountPresence = {
    haveAccount: boolean;
}

const AccountPresence = (props: AccountPresence) => {
    const router = useRouter();
    const {haveAccount} = props;

    if (haveAccount) {
        return (
            <AccountPresenceLayout>
                <span>Have an account?</span>
                <button
                    type={'button'}
                    onClick={() => router.push('/signin')}
                    className="text-blue-400 hover:opacity-90">Sign In
                </button>
    </AccountPresenceLayout>
    )
    } else return (
        <AccountPresenceLayout>
            <span>Don't have an account?</span>
            <button
                type={'button'}
                onClick={() => router.push('/signup')}
                className="text-primary hover:opacity-90">Sign Up
            </button>
        </AccountPresenceLayout>
    )
}

export default AccountPresence;
import UsernameInputBlockLayout from "./UsernameInputBlockLayout";
import UsernameInput from "@/pages/home/components/UsernameInput/UsernameInput";
import Button from "@/common-components/Button/Button";
import {FaChevronRight} from "react-icons/fa6";
import UsernameInputContainer from "@/pages/home/components/UsernameInputContainer";
import UsernameButtonContainer from "@/pages/home/components/UsernameButtonContainer";
import InvalidInput from "@/pages/home/components/InvalidInput/InvalidInput";

const UsernameInputBlock = () => {
    return (
        <UsernameInputBlockLayout>
            <p>Ready to watch? Enter your username to create the account.</p>
            <UsernameButtonContainer>
                <UsernameInputContainer>
                    <UsernameInput/>
                    <InvalidInput/>
                </UsernameInputContainer>
                <Button
                    py={'py-3'}
                    px={'px-6'}
                    fontSize={'text-2xl'}
                    type={'submit'}
                >
                    <span>Get Started</span>
                    <FaChevronRight/>
                </Button>
            </UsernameButtonContainer>
        </UsernameInputBlockLayout>
    )
}

export default UsernameInputBlock;
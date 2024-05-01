import FooterLayout from "./FooterLayout";
import SocialMedia from "@/common-components/Footer/components/SocialMedia/SocialMedia";
import Copyright from "@/common-components/Footer/components/Copyright";
import ListData from "@/common-components/Footer/components/ListData/ListData";

const Footer = () => {
    return (
        <FooterLayout>
            <SocialMedia/>
            <ListData/>
            <Copyright/>
        </FooterLayout>
    )
}

export default Footer;
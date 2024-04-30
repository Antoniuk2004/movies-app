import FooterLayout from "./FooterLayout";
import SocialMedia from "@/common-components/Footer/components/SocialMedia/SocialMedia";
import Copyright from "@/common-components/Footer/components/Copyright";
import ListData from "@/common-components/Footer/components/ListData/ListData";

type FooterProps = {
    currentPage: string;
}

const Footer = (props: FooterProps) => {
    const {currentPage} = props;

    return (
        <FooterLayout currentPage={currentPage}>
            <SocialMedia/>
            <ListData/>
            <Copyright/>
        </FooterLayout>
    )
}

export default Footer;
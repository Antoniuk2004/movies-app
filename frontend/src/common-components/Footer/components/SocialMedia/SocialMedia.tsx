import SocialMediaLayout from "./SocialMediaLayout";
import {FaInstagram, FaLinkedin, FaTwitter, FaYoutube} from "react-icons/fa6";

const SocialMedia = () => {
    return (
        <SocialMediaLayout>
            <FaTwitter/>
            <FaYoutube/>
            <FaInstagram/>
            <FaLinkedin/>
        </SocialMediaLayout>
    )
}

export default SocialMedia;
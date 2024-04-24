import HomeBannerLayout from "./HomeBannerLayout";
import Image from "next/image"
import HomeBannerCover from "@/pages/home/components/HomeBanner/HomeBannerCover";
import Slogan from "@/pages/home/components/Slogan/Slogan";
import UsernameInputBlock from "@/pages/home/components/UsernameInputBlock/UsernameInputBlock";
import BannerTextContent from "@/pages/home/components/BannerTextContent";

const HomeBanner = () => {
    const imageSrc = "/images/movies-bg.jpg";

    return (
        <HomeBannerLayout>
            <BannerTextContent>
                <Slogan/>
                <UsernameInputBlock/>
            </BannerTextContent>
            <HomeBannerCover/>
            <Image
                className={"opacity-60 w-full h-full object-cover object-center"}
                width={3288}
                height={1107}
                priority={true}
                alt="Movies"
                src={imageSrc}
            />
        </HomeBannerLayout>
    )
}

export default HomeBanner;
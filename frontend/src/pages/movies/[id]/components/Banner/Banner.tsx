import Image from 'next/image';
import BannerLayout from "@/pages/movies/[id]/components/Banner/BannerLayout";
import Overlay from "@/pages/movies/[id]/components/Banner/Overlay";
import {movieSignal} from "@/signals/movie-signal";

const Banner = () => {
    const {banner} = movieSignal.value;

    return (
        <BannerLayout>
            <Overlay/>
            <Image
                className="w-banner-image responsive:h-119 object-cover object-center"
                src={banner}
                width={1450}
                height={360}
                alt="Banner"
            />
        </BannerLayout>
    )
}

export default Banner;
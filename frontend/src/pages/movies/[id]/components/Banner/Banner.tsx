import Image from 'next/image';
import BannerLayout from "@/pages/movies/[id]/components/Banner/BannerLayout";
import Overlay from "@/pages/movies/[id]/components/Banner/Overlay";
import {movieSignal} from "@/signals/movie-signal";

const Banner = () => {
    const {banner} = movieSignal.value;

    return (
        <BannerLayout>
            {banner && <Overlay/>}
            <Image
                className="object-cover h-full object-center"
                src={banner ? banner : '/images/no-banner.jpg'}
                width={1450}
                height={360}
                alt="Banner"
            />
        </BannerLayout>
    )
}

export default Banner;
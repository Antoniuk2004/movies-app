import Image from "next/image";
import Wrapper from "@/common-components/Wrapper";
import DevicesLayout from "@/pages/home/components/Devices/DevicesLayout";
import DevicesContainer from "@/pages/home/components/Devices/components/DevicesContainer";
import TextBlock from "@/pages/home/components/Devices/components/TextBlock/TextBlock";
import ImageLayout from "@/pages/home/components/Devices/components/ImageLayout";

const Devices = () => {
    const src = "/images/devices.png";

    return (
        <DevicesLayout>
            <Wrapper>
                <DevicesContainer>
                    <TextBlock/>
                    <ImageLayout>
                        <Image
                            className={"w-[550px] h-full responsive:mt-6 wrapper:mt-6 drop-shadow-2xl"}
                            height={630}
                            width={1334}
                            priority={true}
                            alt={'devices'}
                            src={src}
                        />
                    </ImageLayout>
                </DevicesContainer>
            </Wrapper>
        </DevicesLayout>
    )
}

export default Devices;
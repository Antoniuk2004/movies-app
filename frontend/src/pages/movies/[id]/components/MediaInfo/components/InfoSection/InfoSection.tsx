import InfoSectionLayout from "./InfoSectionLayout";
import Title from "@/pages/movies/[id]/components/MediaInfo/components/Title";
import Value from "@/pages/movies/[id]/components/MediaInfo/components/Value";

type InfoSectionProps = {
    title: string;
    value: string | number;
    cursorPointer?: boolean;
}

const InfoSection = (props: InfoSectionProps) => {
    const {title, value, cursorPointer} = props;

    return (
        <InfoSectionLayout cursorPointer={cursorPointer}>
            <Title>
                <span>{title}</span>
            </Title>
            <Value>
                <span>{value}</span>
            </Value>
        </InfoSectionLayout>
    )
}

export default InfoSection;
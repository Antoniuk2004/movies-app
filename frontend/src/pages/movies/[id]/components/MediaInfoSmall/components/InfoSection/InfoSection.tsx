import InfoSectionLayout from "./InfoSectionLayout";
import Title from "@/pages/movies/[id]/components/MediaInfoSmall/components/Title";
import Value from "@/pages/movies/[id]/components/MediaInfoSmall/components/Value";

type InfoSectionProps = {
    title: string;
    value: string | number;
}

const InfoSection = (props: InfoSectionProps) => {
    const {title, value} = props;

    return (
        <InfoSectionLayout>
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
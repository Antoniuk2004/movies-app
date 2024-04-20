import SectionBodyLayout from "./SectionBodyLayout";
import SmallTitleLayout from "@/common-components/SmallTitleLayout";
import {Person} from "@/types/Person";
import PersonCard
    from "@/pages/movies/[id]/components/OverviewContent/components/People/components/PersonCard/PersonCard";
import Slider from "@/common-components/Slider/Slider";

type SectionBodyProps = {
    title: string;
    people: Person[];
}

const SectionBody = (props: SectionBodyProps) => {
    const {title, people} = props;

    return (
        <SectionBodyLayout>
            <SmallTitleLayout>
                <span>{title}</span>
            </SmallTitleLayout>
            <Slider>
                {people.map((person, index) =>
                    <PersonCard person={person} key={index}/>
                )}
            </Slider>
        </SectionBodyLayout>
    )
}

export default SectionBody;
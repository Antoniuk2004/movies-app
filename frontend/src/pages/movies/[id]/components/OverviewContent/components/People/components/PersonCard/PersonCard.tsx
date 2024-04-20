import PersonCardLayout from "./PersonCardLayout";
import Image from "next/image";
import {Person} from "@/types/Person";
import PersonInfo
    from "@/pages/movies/[id]/components/OverviewContent/components/People/components/PersonInfo/PersonInfo";

type PersonCardProps = {
    person: Person;
}

const PersonCard = (props: PersonCardProps) => {
    const {person} = props;
    const {photo, firstName, surname} = person;

    return (
        <PersonCardLayout>
            <Image
                draggable={false}
                priority={true}
                width={85}
                height={120}
                className={"object-cover w-[85px] h-[120px] rounded-md object-center"}
                src={photo ? photo : '/images/no-image.jpg'}
                alt={firstName + " " + surname}/>
            <PersonInfo person={person}/>
        </PersonCardLayout>
    )
}

export default PersonCard;
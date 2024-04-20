import PersonInfoLayout from "./PersonInfoLayout";
import {Person} from "@/types/Person";
import {formatDate} from "@/pages/movies/[id]/helpers";
import PersonNameLayout from "@/pages/movies/[id]/components/OverviewContent/components/People/components/PersonNameLayout";

type PersonInfoProps = {
    person: Person;
}

const PersonInfo = (props: PersonInfoProps) => {
    const {person} = props;
    const {firstName, surname, birthdate, nationality} = person;
    const formattedDate = formatDate(birthdate);

    return (
        <PersonInfoLayout>
            <PersonNameLayout>
                <span>{firstName + " " + surname}</span>
            </PersonNameLayout>
            <span>{nationality}</span>
            <span>{formattedDate}</span>
        </PersonInfoLayout>
    )
}

export default PersonInfo;
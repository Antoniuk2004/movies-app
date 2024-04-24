import TextBlockLayout from "@/pages/home/components/Devices/components/TextBlock/TextBlockLayout";

const TextBock = () => {
    return (
        <TextBlockLayout>
            <h2 className={"text-5xl font-black responsive:text-3xl"}>Watch everywhere</h2>
            <p className={"mt-4 text-2xl responsive:text-lg"}>Stream unlimited movies and TV shows on your
                phone, tablet, laptop, and TV.</p>
        </TextBlockLayout>
    )
}

export default TextBock;
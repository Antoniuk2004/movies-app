import TopButtons from "@/pages/movies/[id]/watch/components/VideoPlayer/components/TopButtons/TopButtons";
import BottomBar from "@/pages/movies/[id]/watch/components/VideoPlayer/components/BottomBar/BottomBar";
import ControlLayout from "@/pages/movies/[id]/watch/components/VideoPlayer/components/Control/ControlLayout";

const Control = () => {

    return (
        <ControlLayout>
            <TopButtons/>
            <BottomBar/>
        </ControlLayout>
    )
}

export default Control;
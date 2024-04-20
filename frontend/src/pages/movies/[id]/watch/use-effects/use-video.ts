import {useEffect, useState} from "react";
import {getVideoRequest} from "@/api/vide-request";

export const useVideo = () => {
    const [video, setVideo] = useState<null | string>(null);

    useEffect(() => {
        const getVideo = async (id: number) => {
            setVideo(await getVideoRequest(id));
        }

        getVideo(1);
    }, []);

    return {video}
}
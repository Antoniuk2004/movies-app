import {useEffect, useState} from "react";
import {getVideoRequest} from "@/api/video-request";

export const useVideo = (moviePath: string) => {
    const [video, setVideo] = useState<null | string>(null);

    useEffect(() => {
        const getVideo = async (id: string) => {
            setVideo(await getVideoRequest(id));
        }

        if (!moviePath) return;
        getVideo(moviePath);
    }, [moviePath]);

    return {video}
}
import axios from "axios";
import Cookies from "js-cookie";

export const getVideoRequest = async (id: string) => {
    const url = `http://localhost:8080/api/videos/${id}`;

    try {
        const response = await axios.get(url, {
            responseType: 'blob',
            headers: {
                Authorization: `Bearer ${Cookies.get("jwt")}`
            }
        });

        return URL.createObjectURL(response.data);
    } catch (error) {
        return null;
    }
}
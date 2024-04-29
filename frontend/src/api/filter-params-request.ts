import axios from "axios";
import Cookies from "js-cookie";

export const filterParamsRequest = async () => {
    const url = 'http://localhost:8080/api/filter/';

    try {
        const response = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${Cookies.get('jwt')}`
            }
        });

        return response.data;
    }
    catch (e){
        return null;
    }
}
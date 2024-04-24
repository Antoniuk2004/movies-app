import Cookies from "js-cookie";
import axios from "axios";

export const validationRequest = async () => {
    const url = 'http://localhost:8080/auth/validate';
    const jwt = Cookies.get('jwt');

    if (!jwt) {
        return 404;
    }

    try {
        const response = await axios.post(url, {}, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })

        return response.status;
    } catch (e) {
        return e.response.status;
    }
}
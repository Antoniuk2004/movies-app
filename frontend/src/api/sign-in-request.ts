import {DataType} from "@/types/DataType";
import {Dispatch, SetStateAction} from "react";
import axios from "axios";
import Cookies from "js-cookie";
import {statusSignal} from "@/signals/status-signal";

export const loginUser = async (data: DataType, setData: Dispatch<SetStateAction<DataType>>) => {
    const host = 'localhost';
    const url = `http://${host}:8080/auth/login`;
    try {
        const response = await axios.post(url, {
            username: data.username,
            password: data.password
        })

        const jwt = response.data.jwt;
        Cookies.set('jwt', jwt);
        statusSignal.value = 200;
        data.router.push("/main");
    } catch (e) {
        setData((prev) => ({
            ...prev,
            wrong: true
        }))
        console.error(e);
    }
}
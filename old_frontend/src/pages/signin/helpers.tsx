import axios from "axios";
import {FieldsProps} from "@/pages/signin/FieldsProps";

export const makeRequestToSignIn = async (loginData: FieldsProps) => {
    return axios.post(
        "http://localhost:8080/auth/login",
        loginData
    );
}
import axios from "axios";
import {FieldsProps} from "@/pages/signup/FieldsProps";

export const makeRequestToSignUp = async (loginData: FieldsProps) => {
    const response = axios.post(
        "http://localhost:8080/api/auth/register",
        loginData
    );
}
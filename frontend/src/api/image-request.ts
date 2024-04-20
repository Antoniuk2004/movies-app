import { ImageType } from "@/types/ImageType";
import Cookies from "js-cookie";
import axios from "axios";
import { movieQuerySignal } from "@/pages/movies/[id]/movie-query-signal";

export const getImage = async (type: string, id: string) => {
  const url = `http://localhost:8080/files/${type}/${id}.jpg`;

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${Cookies.get("jwt")}`,
        "Content-Type": "application/json",
      },
      responseType: "blob",
    });

    const reader = new FileReader();
    return new Promise((resolve, reject) => {
      reader.onloadend = () => {
        if (reader.result) {
          resolve(reader.result as string); // Image URL
        } else {
          reject(new Error("Failed to read image data"));
        }
      };
      reader.onerror = reject;
      reader.readAsDataURL(response.data);
    });
  } catch (error) {
    return null;
  }
};

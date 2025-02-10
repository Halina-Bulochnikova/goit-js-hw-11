import axios from "axios";
import iziToast from "izitoast";

const API_KEY = "48746428-ca8ddb89bc4c4cb9194f35bec";
const BASE_URL = "https://pixabay.com/api/";

export async function fetchImages(query) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
      },
    });
    return response.data.hits;
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error;
  }
}
import { fetchImages } from "./js/pixabay-api.js";
import { renderImages } from "./js/render-functions.js";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

document.addEventListener("DOMContentLoaded", () => {
    const searchForm = document.querySelector("#search-form");
    const loader = document.querySelector(".loader");

    searchForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const query = searchForm.elements.searchQuery.value.trim();
        if (!query) {
            iziToast.warning({
                title: "Warning",
                message: "Please enter a search term!",
                position: "topRight",
            });
            return;
        }

        loader.style.display = "block";  

        const images = await fetchImages(query);
        renderImages(images);

        loader.style.display = "none";  
    });
});

import { fetchImages } from "./js/pixabay-api.js";
import { renderGallery } from "./js/render-functions.js";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector("#search-form");
const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const query = event.target.elements.searchQuery.value.trim();

  if (!query) {
    iziToast.error({
      title: "Error",
      message: "Search field cannot be empty!",
    });
    return;
  }

  gallery.innerHTML = "";
  loader.style.display = "block";

  try {
    const images = await fetchImages(query);
    if (images.length === 0) {
      iziToast.warning({
        title: "No Results",
        message: "Sorry, no images found. Please try again!",
      });
    } else {
      renderGallery(images);
    }
  } catch (error) {
    iziToast.error({
      title: "Error",
      message: "Failed to fetch images. Try again later!",
    });
  } finally {
    loader.style.display = "none";
  }
});
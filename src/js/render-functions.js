import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

export function renderGallery(images) {
  const gallery = document.querySelector(".gallery");
  gallery.innerHTML = images.map(
      ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
        <a href="${largeImageURL}" class="gallery-item">
          <img src="${webformatURL}" alt="${tags}" />
          <div class="info">
            <p>❤️ ${likes}</p>
            <p>👁️ ${views}</p>
            <p>💬 ${comments}</p>
            <p>⬇️ ${downloads}</p>
          </div>
        </a>`
    ).join("");

    box.innerHTML = markup;
    const lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
    });
    lightbox.refresh();
  }
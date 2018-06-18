"use strict";
const galleryItems = [
  {
    preview: "img/preview-1.jpeg",
    fullview: "img/fullview-1.jpeg",
    alt: "alt text 1"
  },
  {
    preview: "img/preview-2.jpeg",
    fullview: "img/fullview-2.jpeg",
    alt: "alt text 2"
  },
  {
    preview: "img/preview-3.jpeg",
    fullview: "img/fullview-3.jpeg",
    alt: "alt text 3"
  },
  {
    preview: "img/preview-4.jpeg",
    fullview: "img/fullview-4.jpeg",
    alt: "alt text 4"
  },
  {
    preview: "img/preview-5.jpeg",
    fullview: "img/fullview-5.jpeg",
    alt: "alt text 5"
  },
  {
    preview: "img/preview-6.jpeg",
    fullview: "img/fullview-6.jpeg",
    alt: "alt text 6"
  }
];

appendGalleryMarkup();

function appendGalleryMarkup() {
  const fullview = createFullview();
  const preview = createPreview(galleryItems);
  const markup = fullview + preview;

  const galleryRoot = document.querySelector(".js-image-gallery");
  galleryRoot.innerHTML = markup;

  const previewList = document.querySelector(".preview");
  previewList.addEventListener("click", changeMainImg);
}

function createFullview() {
  return `<div class="fullview">
            <!-- Если выбран первый элемент из preview -->
            <img src="img/fullview-1.jpeg" alt="alt text 1">
        </div>`;
}

function createPreview(gallery) {
  const listItems = gallery.reduce(
    (acc, galleryItem) =>
      acc +
      `<li><img src=${galleryItem.preview} data-fullview=${
        galleryItem.fullview
      } alt=${galleryItem.alt}></li>`,
    ""
  );
  return `<ul class="preview">${listItems}</ul>`;
}

function changeMainImg({ target }) {
  const mainImg = document.querySelector(".fullview > img");
  const nodeName = target.nodeName;
  if (nodeName !== "IMG") return;
  const targetImgSrc = target.dataset.fullview;
  mainImg.setAttribute("src", targetImgSrc);
}

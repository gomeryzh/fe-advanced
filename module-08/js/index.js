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

function appendGalleryMarkup() {
  const fullview = createFullview();
  const preview = createPreview();
  const markup = fullview + preview;

  const galleryRoot = document.querySelector(".js-image-gallery");
  galleryRoot.innerHTML = markup;
}

// const galleryMarkup = createGalleryMarkup();
// galleryRoot.innerHTML = galleryMarkup;

// const listItemsMarkup = createGallery(galleryItems);
// const previewList = document.querySelector(".preview");
// previewList.innerHTML = listItemsMarkup;
// previewList.addEventListener("click", changeMainImg);

const mainImg = document.querySelector(".fullview > img");

function createFullview() {
  return `<div class="fullview">
            <!-- Если выбран первый элемент из preview -->
            <img src="img/fullview-1.jpeg" alt="alt text 1">
        </div>`;
}

function createPreview(gallery) {
//   const previewList = document.createElement("ul");
//   previewList.classList.add("preview");
//   galleryRoot.appendChild(previewList);
  const previewList = `<ul class="preview"></ul>`;
  const listItems = gallery.reduce(
    (acc, galleryItem) =>
      acc +
      `<li><img src=${galleryItem.preview} data-fullview=${
        galleryItem.fullview
      } alt=${galleryItem.alt}></li>`,
    ""
  );
  console.log(previewList.innerHTML = listItems);
}
createPreview(galleryItems);


// function createGallery(gallery) {
//     const previewList = document.createElement('ul');
//     previewList.classList.add('preview');
//     galleryRoot.appendChild(previewList);
//     return gallery.reduce((acc, galleryItem) => acc + createListItemsMarkup(galleryItem), '');
// };

// function createListItemsMarkup({
//     preview,
//     fullview,
//     alt
// }) {
//     return `<li><img src=${preview} data-fullview=${fullview} alt=${alt}></li>`;
// };

function changeMainImg({ target }) {
  const nodeName = target.nodeName;
  if (nodeName !== "IMG") return;
  const targetImgSrc = target.dataset.fullview;
  mainImg.setAttribute("src", targetImgSrc);
}

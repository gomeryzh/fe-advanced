'use strict'

const imageGalleryRoot = document.querySelector('#js-image-gallery');

const galleryItems = [{
        preview: 'img/preview-1.jpeg',
        fullview: 'img/fullview-1.jpeg',
        alt = "alt text 1"
    },
    {
        preview: 'img/preview-2.jpeg',
        fullview: 'img/fullview-2.jpeg',
        alt = "alt text 2"
    },
    {
        preview: 'img/preview-3.jpeg',
        fullview: 'img/fullview-3.jpeg',
        alt = "alt text 3"
    },
    {
        preview: 'img/preview-4.jpeg',
        fullview: 'img/fullview-4.jpeg',
        alt = "alt text 4"
    },
    {
        preview: 'img/preview-5.jpeg',
        fullview: 'img/fullview-5.jpeg',
        alt = "alt text 5"
    },
    {
        preview: 'img/preview-6.jpeg',
        fullview: 'img/fullview-6.jpeg',
        alt = "alt text 6"
    },
];

document.addEventListener('DOMContentLoaded', () => {
    const markup = createGallery(galleryItems);
    imageGalleryRoot.insertAdjacentHTML('afterbegin', markup);

    const previewList = document.querySelector('.preview');
    previewList.addEventListener('click', changeMainImg);
});

function createGalleryMarkup({
    preview,
    fullview,
    alt
}) {
    const gallery = `<div class="fullview">
        <!-- Если выбран первый элемент из preview -->
        <img src="img/fullview-1.jpeg" alt="alt text 1">
      </div>
      <ul class="preview">
        <li><img src=${preview} data-fullview=${fullview} alt=${alt}></li>
        <li><img src=${preview} data-fullview=${fullview} alt=${alt}></li>
        <li><img src=${preview} data-fullview=${fullview} alt=${alt}></li>
        <li><img src=${preview} data-fullview=${fullview} alt=${alt}></li>
        <li><img src=${preview} data-fullview=${fullview} alt=${alt}></li>
        <li><img src=${preview} data-fullview=${fullview} alt=${alt}></li>
      </ul>`;
    const galleryMarkup = imageGallaryRoot.insertAdjacentHTML('afterbegin', gallery);
    return galleryMarkup;
};

function createGallery(galleryObj) {
    galleryObj.reduce((acc, galleryItem) => acc + createGalleryMarkup(galleryItem), '');
};

function changeMainImg({
    target
}) {
    const nodeName = target.nodeName;
    if (nodeName !== 'IMG') return;
    const mainImg = document.querySelector('.fullview > img');
    const mainImgSrc = mainImg.src;
    const targetImgSrc = target.dataset.fullview;
    return mainImgSrc = targetImgSrc;

};
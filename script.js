window.addEventListener("scroll", function () {
    const topNavigation = document.querySelector(".topnav");
    const header = document.querySelector(".header");
    const content = document.querySelector(".content");

    if (window.innerWidth < 768) {
        console.log("Mobile detected");
        return;
    }

    if (window.scrollY > header.offsetHeight) {
        topNavigation.classList.add("fixed");
    } else {
        topNavigation.classList.remove("fixed");
    }
});


const photos = document.querySelectorAll('.photo');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
let currentPhotoIndex;

photos.forEach((photo, index) => {
    photo.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = photo.src;
        currentPhotoIndex = index;
        document.querySelector(".topnav").style.zIndex = "1"; // Prevent topnav from going over the picture
    });
});

function changePhoto(direction) {
    currentPhotoIndex += direction;
    if (currentPhotoIndex < 0) {
        currentPhotoIndex = photos.length - 1;
    } else if (currentPhotoIndex >= photos.length) {
        currentPhotoIndex = 0;
    }
    lightboxImg.src = photos[currentPhotoIndex].src;
}

lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImg && !e.target.classList.contains('arrow')) {
        lightbox.style.display = 'none';
        document.querySelector(".topnav").style.zIndex = ""; // Reset topnav zIndex when lightbox is closed
    }
});
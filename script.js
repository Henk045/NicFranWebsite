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

const toggleFullScreen = (photoFrame) => {
    const isFullScreen = photoFrame.classList.toggle("full-width");
    document.body.style.overflow = isFullScreen ? "hidden" : "";
    document.body.style.position = isFullScreen ? "fixed" : "";
    document.body.style.width = isFullScreen ? "100%" : "";
    document.querySelector(".header").style.zIndex = isFullScreen ? "1" : "";
    document.querySelector(".topnav").style.zIndex = isFullScreen ? "1" : "";
    window.scrollTo({
        top: photoFrame.getBoundingClientRect().top + window.pageYOffset - document.querySelector(".header").offsetHeight
    });
};

if (window.innerWidth >= 768) {
    document.querySelectorAll(".photo-frame").forEach(photoFrame => {
        photoFrame.addEventListener("click", () => toggleFullScreen(photoFrame));
    });
}

const toggleFullScreenPhone = (photoFrame) => {
    const isFullScreen = photoFrame.classList.toggle("full-width");
    if (isFullScreen) {
        document.body.style.overflow = "hidden";
        document.body.style.position = "fixed";
        document.body.style.width = "100%";
        document.querySelector(".header").style.zIndex = "1";
        document.querySelector(".topnav").style.zIndex = "1";
        photoFrame.querySelector("img").style.transform = "scale(2.0)";
    } else {
        document.body.style.overflow = "";
        document.body.style.position = "";
        document.body.style.width = "";
        document.querySelector(".header").style.zIndex = "";
        document.querySelector(".topnav").style.zIndex = "";
        photoFrame.querySelector("img").style.transform = "";
    }
};

if (window.innerWidth < 768) {
    document.querySelectorAll(".photo-frame").forEach(photoFrame => {
        photoFrame.addEventListener("click", () => toggleFullScreenPhone(photoFrame));
    });
}

const photos = document.querySelectorAll('.photo');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
let currentPhotoIndex;

photos.forEach((photo, index) => {
    photo.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = photo.src;
        currentPhotoIndex = index;
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
    }
});
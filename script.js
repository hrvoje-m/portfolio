function goToPage(page) {
    window.location.href = page;
}

function openImage(img) {
    const modal = document.getElementById("imageModal");
    const modalImg = modal.querySelector("img");

    modalImg.src = img.src;
    modal.classList.add("show");
}

function openGalleryImage(img) {
    const modal = document.getElementById("imageModal");
    const modalImg = modal.querySelector("img");

    modalImg.src = img.src;
    modal.classList.add("show");
}

function closeImage() {
    document.getElementById("imageModal").classList.remove("show");
}
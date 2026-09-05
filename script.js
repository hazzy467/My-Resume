document.addEventListener("DOMContentLoaded", function () {
    // 1. NAVIGASI ACTIVE HIGHLIGHT ON SCROLL
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a:not(.btn-nav)");

    window.addEventListener("scroll", () => {
        let currentSection = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            if (window.pageYOffset >= sectionTop - 150) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSection}`) {
                link.classList.add("active");
            }
        });
    });

    // 2. IMAGE POP-OUT / LIGHTBOX LOGIC
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");
    const captionText = document.getElementById("modalCaption");
    const closeBtn = document.querySelector(".modal-close");

    // Ambil semua gambar daripada bahagian projek, art, gallery, dan avatar
    const images = document.querySelectorAll(
        ".project-image img, .art-image img, .gallery-card img, .profile-avatar img"
    );

    images.forEach((img) => {
        img.addEventListener("click", function () {
            if (modal && modalImg) {
                modal.style.display = "block";
                modalImg.src = this.src;
                captionText.innerHTML = this.alt || "Image Preview";
            }
        });
    });

    // Tutup modal apabila butang (X) ditekan
    if (closeBtn) {
        closeBtn.addEventListener("click", function () {
            modal.style.display = "none";
        });
    }

    // Tutup modal apabila latar belakang gelap ditekan
    if (modal) {
        modal.addEventListener("click", function (event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    }

    // Tutup modal apabila butang 'Escape' ditekan
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && modal && modal.style.display === "block") {
            modal.style.display = "none";
        }
    });
});
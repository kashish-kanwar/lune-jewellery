const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach((item) => {
    item.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

const products = {
    moonlit: {
        title: "Moonlit Necklace",
        price: "₹899",
        image: "images/product-1.jpg",
        description: "A delicate necklace designed to add a soft, timeless touch to everyday looks."
    },

    sole: {
        title: "Solé Hoops",
        price: "₹649",
        image: "images/product-2.jpg",
        description: "Classic gold hoops with a polished finish — effortless, versatile, and easy to style."
    },

    elan: {
        title: "Élan Bracelet",
        price: "₹749",
        image: "images/product-3.jpg",
        description: "A refined bracelet with a minimal silhouette, made for subtle everyday elegance."
    },

    celeste: {
        title: "Celeste Ring",
        price: "₹599",
        image: "images/product-4.jpg",
        description: "A delicate statement ring that brings a graceful sparkle to your everyday style."
    }
};

const productCards = document.querySelectorAll(".product-card");
const productModal = document.querySelector("#productModal");
const modalImage = document.querySelector("#modalImage");
const modalTitle = document.querySelector("#modalTitle");
const modalPrice = document.querySelector("#modalPrice");
const modalDescription = document.querySelector("#modalDescription");
const modalClose = document.querySelector(".modal-close");

productCards.forEach((card) => {
    card.addEventListener("click", () => {
        const productId = card.dataset.product;
        const product = products[productId];

        modalImage.src = product.image;
        modalImage.alt = product.title;
        modalTitle.textContent = product.title;
        modalPrice.textContent = product.price;
        modalDescription.textContent = product.description;

        productModal.classList.add("active");
    });
});

modalClose.addEventListener("click", () => {
    productModal.classList.remove("active");
});

productModal.addEventListener("click", (event) => {
    if (event.target === productModal) {
        productModal.classList.remove("active");
    }
});
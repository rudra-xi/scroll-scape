let swiper;

function initSwiper() {
	if (typeof Swiper === "undefined") {
		console.error("Swiper library is not loaded.");
		return;
	}

	if (window.innerWidth > 768) {
		// Initialize Swiper for larger screens
		swiper = new Swiper(".swiper", {
			direction: "horizontal",
			loop: true,
			mousewheel: {
				forceToAxis: true,
			},
			keyboard: true,
			freeMode: true,
			speed: 500,
			breakpoints: {
				768: {
					slidesPerView: 2.5,
					spaceBetween: 5,
				},
				1024: {
					slidesPerView: 4,
					spaceBetween: 80,
				},
			},
		});
	} else {
		// Destroy Swiper on small screens
		if (swiper) {
			swiper.destroy(true, true);
			swiper = null;
		}

		// Enable vertical scrolling
		const swiperContainer = document.querySelector(".swiper");
		if (swiperContainer) {
			swiperContainer.style.overflowY = "auto";
			swiperContainer.style.overflowX = "hidden";
			swiperContainer.style.flexDirection = "column";
			swiperContainer.style.gap = "10px";
		}

		// Reset Swiper wrapper and slides
		const swiperWrapper = document.querySelector(".swiper-wrapper");
		if (swiperWrapper) {
			swiperWrapper.style.flexDirection = "column";
			swiperWrapper.style.transform = "none";
			swiperWrapper.style.gap = "10px";
		}

		const swiperSlides = document.querySelectorAll(".swiper-slide");
		swiperSlides.forEach((slide) => {
			slide.style.width = "100%";
			slide.style.height = "auto";
		});
	}
}

// Initialize Swiper based on screen size
initSwiper();

// Reinitialize Swiper on window resize
window.addEventListener("resize", initSwiper);

// Hover text functionality
const hoverText = document.getElementById("hover-text");
const images = document.querySelectorAll(".swiper-slide img");

images.forEach((image) => {
	image.addEventListener("mouseenter", () => {
		hoverText.textContent = image.getAttribute("data-text");
	});

	image.addEventListener("mouseleave", () => {
		hoverText.textContent = "";
	});
});

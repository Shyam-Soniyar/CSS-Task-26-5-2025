function themeChange() {
  const el = document.getElementById("root");
  const darklighticon = document.getElementById("dark-light-icon");
  if (el.className === "dark") {
    document.getElementById("root").className = "light";
    // darklighticon.classList.replace("fa-moon", "fa-sun");
    darklighticon.classList.toggle("fa-sun");
    darklighticon.classList.toggle("fa-moon");
  } else {
    document.getElementById("root").className = "dark";
    // darklighticon.classList.replace("fa-sun", "fa-moon");
    darklighticon.classList.toggle("fa-sun");
    darklighticon.classList.toggle("fa-moon");
  }
}
function toggleDropdown() {
  const dropdown = document.querySelector("#dropdown-menu");
  dropdown.classList.toggle("hidden");
}
function menubarToggle(e) {
  e.preventDefault();
  const menubar = document.querySelector("#menu-toggle");
  const iconSelect = document.querySelector("#icon-menu");
  iconSelect.classList.toggle("fa-xmark");
  menubar.classList.toggle("hidden");
  menubar.classList.toggle("absolute");
  menubar.classList.toggle("fixed");
}
function requestCar() {
  const req = document.querySelector("#car-request");
  req.classList.toggle("hidden");
  req.classList.toggle("flex");
  // req.classList.toggle("absolute");
  // req.classList.toggle("fixed");
}
const scrollContainer = document.getElementById("carSlider");
const scrollLeftBtn = document.getElementById("scrollLeft");
const scrollRightBtn = document.getElementById("scrollRight");

scrollLeftBtn.addEventListener("click", () => {
  scrollContainer.scrollBy({ left: -300, behavior: "smooth" });
});

scrollRightBtn.addEventListener("click", () => {
  scrollContainer.scrollBy({ left: 300, behavior: "smooth" });
});

const input = document.querySelector("#phone");
window.intlTelInput(input, {
  initialCountry: "auto",
  geoIpLookup: (callback) => {
    fetch("https://ipinfo.io/json")
      .then((res) => res.json())
      .then((data) => callback(data.country))
      .catch(() => callback("us"));
  },
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js",
});

let index = 0;
const carouselInner = document.getElementById("carousel-inner");
const totalSlides = carouselInner.children.length;

function updateSlide() {
  carouselInner.style.transform = `translateX(-${index * 100}%)`;
}

function prevSlide() {
  index = (index - 1 + totalSlides) % totalSlides;
  updateSlide();
}

function nextSlide() {
  index = (index + 1) % totalSlides;
  updateSlide();
}

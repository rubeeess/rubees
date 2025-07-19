
/* header*/
let lastScroll = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    header.style.top = "0";
    return;
  }

  if (currentScroll > lastScroll) {
    // Scrolling down -> hide header
    header.style.top = "-100px";
  } else {
    // Scrolling up -> show header
    header.style.top = "0";
  }

  lastScroll = currentScroll;
});




/* popup image*/

  const popup = document.getElementById("imagePopup");
  const popupImg = document.getElementById("popupImg");
  const closeBtn = document.querySelector(".popup-close");

  document.querySelectorAll(".popup-img").forEach(imgLink => {
    imgLink.addEventListener("click", function (e) {
      e.preventDefault();
      popup.style.display = "block";
      popupImg.src = this.href;
    });
  });

  closeBtn.onclick = function () {
    popup.style.display = "none";
  };

  popup.onclick = function (e) {
    if (e.target === popup) {
      popup.style.display = "none";
    }
  };


  /* footer*/
  // Auto-update year in footer
const yearSpan = document.getElementById("year");
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;


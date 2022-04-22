const modal = document.querySelector(".modal-container");
const close = document.querySelector(".close");
const reward = document.getElementsByClassName(".reward")[1];
const reward2 = document.getElementsByClassName(".reward")[2];




close.addEventListener("click", () => {
    modal.style.display = "none";
});
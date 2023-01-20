let closeBar = document.querySelector(".cros");
let wizard1 = document.querySelector(".wizard");

closeBar.addEventListener("click", () => {
  wizard1.classList.add("d-none");
});

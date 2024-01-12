//!global vars

const backDropEl = document.getElementById("backdrop");
const addMovieModal = document.getElementById("add-modal");
const startAddMovieBtn = document.getElementById("addMovieBtn");
const btnPassiveInput = document.querySelector(".btn--passive");
const btnsuccessInput = document.querySelector(".btn--success");

//*showing movie input form

const toggleBackDrop = () => {
  backDropEl.classList.toggle("visible");
};

const movieInputHandeler = () => {
  addMovieModal.classList.toggle("visible");
  toggleBackDrop();
};

startAddMovieBtn.addEventListener("click", movieInputHandeler);
backDropEl.addEventListener("click", movieInputHandeler);

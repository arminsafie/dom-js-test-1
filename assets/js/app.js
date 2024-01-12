//!global vars

const backDropEl = document.getElementById("backdrop");
const addMovieModal = document.getElementById("add-modal");
const startAddMovieBtn = document.getElementById("addMovieBtn");
const btnPassiveInput = document.querySelector(".btn--passive");
const btnsuccessInput = document.querySelector(".btn--success");
const userInputAr = document.querySelectorAll("input");
//*showing movie input form

const toggleBackDrop = () => {
  backDropEl.classList.toggle("visible");
};

const clearInput = () => {
  for (const input of userInputAr) {
    input.value = "";
  }
};

const movieInputHandeler = () => {
  addMovieModal.classList.toggle("visible");
  toggleBackDrop();
  clearInput();
};

//*eventListeners

startAddMovieBtn.addEventListener("click", movieInputHandeler);
backDropEl.addEventListener("click", movieInputHandeler);
btnPassiveInput.addEventListener("click", movieInputHandeler);

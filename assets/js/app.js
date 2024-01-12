//!global vars

const backDropEl = document.getElementById("backdrop");
const addMovieModal = document.getElementById("add-modal");
const startAddMovieBtn = document.getElementById("addMovieBtn");
const btnPassiveInput = document.querySelector(".btn--passive");
const btnsuccessInput = document.querySelector(".btn--success");
const userInputAr = document.querySelectorAll("input");
const entryTextEl = document.getElementById("entry-text");
const movies = [];
//*showing movie input form

const toggleBackDrop = () => {
  backDropEl.classList.toggle("visible");
};

const updateUi = () => {
  if (movies.length === 0) {
    entryTextEl.style.display = "block";
  } else {
    entryTextEl.style.display = "none";
  }
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

const closeMovieInput = () => {
  addMovieModal.classList.remove("visible");
};
//*addMovie handeler

const addMovieHandeler = () => {
  //getin input values
  const inputTitle = userInputAr[0].value;
  const inputImgUrl = userInputAr[1].value;
  const inputrating = userInputAr[2].value;
  if (
    inputTitle.trim() === "" ||
    inputImgUrl.trim() === "" ||
    inputrating.trim() === "" ||
    +inputrating < 1 ||
    +inputrating > 5
  ) {
    alert("enter a valid input");
    return;
  }
  const newMovie = {
    id: Math.random().toString(),
    title: inputTitle,
    image: inputImgUrl,
    rating: inputrating,
  };
  movies.push(newMovie);
  console.log(movies);
  closeMovieInput();
  toggleBackDrop();
  clearInput();
  updateUi();
};

//*eventListeners

startAddMovieBtn.addEventListener("click", movieInputHandeler);
backDropEl.addEventListener("click", movieInputHandeler);
btnPassiveInput.addEventListener("click", movieInputHandeler);
btnsuccessInput.addEventListener("click", addMovieHandeler);

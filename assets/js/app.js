//!global vars

const backDropEl = document.getElementById("backdrop");
const addMovieModal = document.getElementById("add-modal");
const startAddMovieBtn = document.getElementById("addMovieBtn");
const btnPassiveInput = document.querySelector(".btn--passive");
const btnsuccessInput = document.querySelector(".btn--success");
const userInputAr = document.querySelectorAll("input");
const entryTextEl = document.getElementById("entry-text");
const listRoot = document.getElementById("movie-list");
const deleteMoviePopup = document.getElementById("delete-modal");
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
const closeMovieDeletionModel = () => {
  toggleBackDrop();
  deleteMoviePopup.classList.remove("visible");
};
const closeMovieInput = () => {
  addMovieModal.classList.remove("visible");
};
const deleteMovieHandler = () => {
  deleteMoviePopup.classList.add("visible");
  toggleBackDrop();
  const cancelDeletionBtn = deleteMoviePopup.querySelector(".btn--passive");
  let configDeletionBtn = deleteMoviePopup.querySelector(".btn--danger");
  cancelDeletionBtn.addEventListener("click", closeMovieDeletionModel);
};
//render element
const renderNewMovieElement = (id, title, imageUrl, rating) => {
  const newMovieElement = document.createElement("li");
  newMovieElement.classList = "movie-element";
  newMovieElement.innerHTML = `
    <div class="movie-element__image">
    <img src="${imageUrl}" alt="${title}">
    </div>
    <div class="movie-element__info">
      <h2>${title}</h2>
      <div class="box-info">
        <p>${rating}/5 stars</p>
        <button class="delete-btn"> delete</button>
      </div>
    </div>
  `;
  newMovieElement.addEventListener("click", deleteMovieHandler);
  listRoot.append(newMovieElement);
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
  renderNewMovieElement(
    newMovie.id,
    newMovie.title,
    newMovie.image,
    newMovie.rating
  );
  updateUi();
};

//*eventListeners

startAddMovieBtn.addEventListener("click", movieInputHandeler);
backDropEl.addEventListener("click", movieInputHandeler);
btnPassiveInput.addEventListener("click", movieInputHandeler);
btnsuccessInput.addEventListener("click", addMovieHandeler);

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
// const deleteMovie = (movieId) => {
//   let movieIndex = 0;
//   for (const movie of movies) {
//     if (movie.id === movieId) {
//       break;
//     }
//     movieIndex++;
//   }
//   movies.splice(movieIndex, 1);
//   const listRoot = document.getElementById("movie-list");
//   // listRoot.children[movieIndex].remove();
//   listRoot.removeChild(listRoot.children[movieIndex]);
//   closeMovieDeletionModel();
//   updateUi();
// };
// const deleteMovieHandler = (movieId) => {
//   deleteMoviePopup.classList.add("visible");
//   toggleBackDrop();
//   const cancelDeletionBtn = deleteMoviePopup.querySelector(".btn--passive");
//   let confirmDeletionBtn = deleteMoviePopup.querySelector(".btn--danger");
//   //remove event listeners
//   cancelDeletionBtn.removeEventListener;
//   confirmDeletionBtn.replaceWith(confirmDeletionBtn.cloneNode(true));
//   confirmDeletionBtn = deleteMoviePopup.querySelector(".btn--danger");
//   //event listener
//   cancelDeletionBtn.addEventListener("click", closeMovieDeletionModel);
//   confirmDeletionBtn.addEventListener("click", deleteMovie.bind(null, movieId));
// };
// //render element
// const renderNewMovieElement = (id, title, imageUrl, rating) => {
//   const newMovieElement = document.createElement("li");
//   newMovieElement.classList = "movie-element";
//   newMovieElement.innerHTML = `
//     <div class="movie-element__image">
//     <img src="${imageUrl}" alt="${title}">
//     </div>
//     <div class="movie-element__info">
//       <h2>${title}</h2>
//       <div class="box-info">
//         <p>${rating}/5 stars</p>
//         <button class="delete-btn"> delete</button>
//       </div>
//     </div>
//   `;
//   newMovieElement.addEventListener("click", deleteMovieHandler);
//   listRoot.append(newMovieElement);
// };
//*addMovie handeler
const deleteMovie = (movieId) => {
  let movieIndex = 0;
  for (const movie of movies) {
    if (movie.id === movieId) {
      break;
    }
    movieIndex++;
  }
  movies.splice(movieIndex, 1);
  const listRoot = document.getElementById("movie-list");
  listRoot.removeChild(listRoot.children[movieIndex]);
  closeMovieDeletionModel();
  updateUi();
};

const deleteMovieHandler = (movieId) => {
  deleteMoviePopup.classList.add("visible");
  toggleBackDrop();
  const cancelDeletionBtn = deleteMoviePopup.querySelector(".btn--passive");
  let confirmDeletionBtn = deleteMoviePopup.querySelector(".btn--danger");

  // Remove event listener
  cancelDeletionBtn.removeEventListener("click", closeMovieDeletionModel);

  // Clone confirmDeletionBtn to remove existing event listener
  confirmDeletionBtn.replaceWith(confirmDeletionBtn.cloneNode(true));
  confirmDeletionBtn = deleteMoviePopup.querySelector(".btn--danger");

  // Add new event listeners
  cancelDeletionBtn.addEventListener("click", closeMovieDeletionModel);
  confirmDeletionBtn.addEventListener("click", () => deleteMovie(movieId));
};

// Update the event listener for "delete" button in renderNewMovieElement
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

  // Find and add event listener to the delete button
  const deleteButton = newMovieElement.querySelector(".delete-btn");
  deleteButton.addEventListener("click", () => deleteMovieHandler(id));

  listRoot.append(newMovieElement);
};
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
const backdropClickHandeler = () => {
  closeMovieInput();
  closeMovieDeletionModel();
  clearInput();
};

//*eventListeners

startAddMovieBtn.addEventListener("click", movieInputHandeler);
backDropEl.addEventListener("click", backdropClickHandeler);
btnPassiveInput.addEventListener("click", movieInputHandeler);
btnsuccessInput.addEventListener("click", addMovieHandeler);

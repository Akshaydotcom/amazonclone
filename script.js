const API_KEY = 'afe893bf87dee5edc34a59de4c2747a9';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';
const movieContainer = document.getElementById('movieContainer');
const mainmovieContainer=document.getElementById('main-movie');

// Fetch movies from TMDb
function fetchMovies() {
    fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
        .then(response => response.json())
        .then(data => {
            displayMovies(data.results)});
}

function displayMovies(movies) {
    let movieHTML = '';
    let mainMoveHTML='';
    mainMoveHTML=`<div class="main-movie-container" style="background-image:url('${IMAGE_BASE_URL + movies[0].backdrop_path}')"><span>${movies[0].original_title}</span></div>`;
    mainmovieContainer.innerHTML+=mainMoveHTML;
    movies.forEach(movie => {
        const moviePoster = IMAGE_BASE_URL + movie.poster_path;
        movieHTML += `
            <div class="movie">
                <img src="${moviePoster}" alt="${movie.title}" onclick="openMovieTab('${movie.id}')">
            </div>
        `;
    });
    movieContainer.innerHTML = movieHTML;
}

function openMovieTab(movieName) {
    // Opens a new tab with a search query for the movie name
    const movieDetailURL = `movie.html?movieId=${movieName}`;
    window.open(movieDetailURL, '_blank');
}

// Call the function to fetch and display movies
fetchMovies();


function showGenresModal() {
    const genresModal = document.getElementById('genresModal');
    genresModal.style.display = "block";
}

function closeGenresModal() {
    const genresModal = document.getElementById('genresModal');
    genresModal.style.display = "none";
}

// Close the modal if the user clicks outside the modal content
window.onclick = function(event) {
    const genresModal = document.getElementById('genresModal');
    if (event.target === genresModal) {
        genresModal.style.display = "none";
    }
}

function selectGenre(id) {
    debugger
    const listItem=document.getElementById(id);
    if(listItem.classList.contains('selected')){
        listItem.classList.replace('selected','unselected')
    }else{
        listItem.classList.replace('unselected','selected')
    }
}

const hamburgerIcon = document.getElementById('hamburger-icon');
const dropdownMenu = document.getElementById('dropdown');

hamburgerIcon.addEventListener('click', () => {
    if (dropdownMenu.style.display === "none") {
        dropdownMenu.style.display = "block";
    } else {
        dropdownMenu.style.display = "none";
    }
});

// Optional: Close the dropdown when clicking outside
// document.addEventListener('click', (event) => {
//     if (!hamburgerIcon.contains(event.target)) {
//         dropdownMenu.style.display = "none";
//     }
// });



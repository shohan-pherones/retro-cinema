//  Movies
const movie1 = {
  title: "Top Gun: Maverick",
  year: 2022,
  ticketPrice: 375,
  posterURL:
    "https://www.torrentbd.com/posters/P7J6QBtsk758rCVZ0TajtQYY1745960.jpg",
};

const movie2 = {
  title: "Orphan: First Kill",
  year: 2022,
  ticketPrice: 350,
  posterURL:
    "https://www.torrentbd.com/posters/CQ7uuODTRQD74EEfJPDwUQYY11851548.jpg",
};

const movie3 = {
  title: "Nope",
  year: 2022,
  ticketPrice: 350,
  posterURL:
    "https://www.torrentbd.com/posters/2BWAUqwpFb62mcHiEntXaAYY10954984.jpg",
};

const movie4 = {
  title: "The Next 365 Days",
  year: 2022,
  ticketPrice: 375,
  posterURL:
    "https://www.torrentbd.com/posters/grT28qkCjf9qbW421hzHFAYY21106646.jpg",
};

const moviesArr = [movie1, movie2, movie3, movie4];

// Elements
const moviesEl = document.querySelector(".movies");

// Display movies
function displayMovies() {
  for (let i = 0; i < moviesArr.length; i++) {
    const movie = document.createElement("div");
    movie.classList.add(
      "movie",
      "col",
      "card",
      "p-0",
      "shadow",
      "border-0",
      "rounded-3"
    );
    movie.innerHTML = `
        <div class="movie-poster">
            <img
              src="${moviesArr[i].posterURL}"
              class="card-img-top"
            />
        </div>
        <div class="card-body movie-details">
            <h5 class="card-title fw-bold">
              ${moviesArr[i].title} (<span class="year">${moviesArr[i].year}</span>)
            </h5>
            <h5 class="fw-bold text-danger">
              BDT. <span class="ticket-price">${moviesArr[i].ticketPrice}</span>
            </h5>
            <a href="#" class="btn btn-dark fw-bold book-ticket">Book Ticket</a>
        </div>
  `;
    moviesEl.append(movie);
  }
}

displayMovies();

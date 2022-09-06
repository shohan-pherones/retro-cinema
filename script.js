// Movies
const moviesArr = [
  {
    title: "Tiny Cinema",
    year: 2022,
    ticketPrice: 450,
    posterURL:
      "https://www.torrentbd.com/posters/Gx6C93kIiKdvtUWK6tP7hAYY15908746.jpg",
  },
];

// Display movies
function displayMovies() {
  const moviesEl = document.querySelector(".movies");

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
              ${moviesArr[i].title} (${moviesArr[i].year})
            </h5>
            <h5 class="fw-bold text-danger"><span class="ticket-price">${moviesArr[i].ticketPrice}৳</span>
            </h5>
            <button class="btn btn-dark fw-bold book-ticket">Book Ticket</button>
        </div>
  `;

    moviesEl.append(movie);
  }
}
displayMovies();

// Display total
function displayTotal() {
  const bookTickets = document.querySelectorAll(".book-ticket");
  const modalWindow = document.querySelector(".modal-total");

  for (let i = 0; i < bookTickets.length; i++) {
    bookTickets[i].addEventListener("click", function () {
      for (let j = 0; j < moviesArr.length; j++) {
        if (i === j) {
          const title = moviesArr[j].title;
          const year = moviesArr[j].year;
          const price = moviesArr[j].ticketPrice;
          const VAT = (price * 10) / 100;
          const subTotal = price + VAT;

          modalWindow.style.opacity = 1;
          modalWindow.style.visibility = "visible";

          modalWindow.innerHTML = `
          <span class="cross">❌</span>
          <h2 class="fw-bold">${title} (${year})</h2>
          <h5><strong>Price: </strong>${price}৳</h5>
          <h5><strong>VAT: </strong>${VAT}৳</h5>
          <hr>
          <h4 class="text-danger fw-bold mt-3">Subtotal: ${subTotal}৳</h4>
          <button class="btn btn-danger fw-bold mt-3 buy-now">Buy Now</button>
          `;

          // Hide modal
          const crossModal = document.querySelector(".cross");
          const buyNow = document.querySelector(".buy-now");

          crossModal.addEventListener("click", function () {
            modalWindow.style.opacity = 0;
            modalWindow.style.visibility = "hidden";
          });

          buyNow.addEventListener("click", function () {
            modalWindow.style.opacity = 0;
            modalWindow.style.visibility = "hidden";
          });
        }
      }
    });
  }
}
displayTotal();

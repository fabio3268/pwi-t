const moviesList = [
    {
        title: "Matrix",
        genre: "Ficção",
        year: 1999,
        image : "assets/images/matrix.jpg"
    },
    {
        title: "O Poderoso Chefão",
        genre: "Crime",
        year: 1972,
        image : "assets/images/o-poderoso-chefao.jpg"
    },
    {
        title: "Interestelar",
        genre: "Ficção",
        year: 2014,
        image : "assets/images/interestelar.jpg"
    },
    {
        title: "O Senhor dos Anéis: O Retorno do Rei",
        genre: "Fantasia",
        year: 2003,
        image : "assets/images/senhor-dos-aneis.jpg"
    },
    {
        title: "Vingadores: Ultimato",
        genre: "Ficção",
        year: 2019,
        image : "assets/images/vingadores.jpg"
    },
    {
        title: "Cidade de Deus",
        genre: "Drama",
        year: 2002,
        image : "assets/images/cidade-de-deus.jpg"
    },
    {
        title: "O Silêncio dos Inocentes",
        genre: "Suspense",
        year: 1991,
        image : "assets/images/o-silencio-dos-inocentes.jpg"
    },
    {
        title: "Titanic",
        genre: "Romance",
        year: 1997,
        image : "assets/images/titanic.jpg"
    },
    {
        title: "Batman: O Cavaleiro das Trevas",
        genre: "Ação",
        year: 2008,
        image : "assets/images/batman.jpg"
    }
];


const movieList = document.querySelector(".movie-list");

moviesList.forEach((film) => {
    let divFilm = document.createElement("div");
    //divFilm.setAttribute("class","movie-card");
    divFilm.classList.add("movie-card");
    divFilm.innerHTML = `
    <img src="${film.image}" alt="The Matrix">
            <div class="movie-title">${film.title}</div>
            <div class="movie-genre">Ficção</div>
            <div class="movie-year">1999</div>
    `;
    movieList.insertAdjacentElement("beforeend",divFilm);
});

const changeSelect = document.querySelector("#genre-select");
changeSelect.addEventListener("change", (e) => {
    //console.log(e.target.value);
    movieList.innerHTML = "";
    moviesList.forEach((film) => {
        console.log(e.target.value, film.genre);
        if(film.genre == e.target.value || e.target.value == 'Todos'){
            let divFilm = document.createElement("div");
            //divFilm.setAttribute("class","movie-card");
            divFilm.classList.add("movie-card");
            divFilm.innerHTML = `
                <img src="${film.image}" alt="The Matrix">
                <div class="movie-title">${film.title}</div>
                <div class="movie-genre">Ficção</div>
                <div class="movie-year">1999</div>
            `;
            movieList.insertAdjacentElement("beforeend",divFilm);
        }
    });
})

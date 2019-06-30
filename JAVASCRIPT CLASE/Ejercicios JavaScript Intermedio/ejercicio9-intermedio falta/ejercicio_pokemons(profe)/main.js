class Pokemon {
    constructor(name, url) {
        this._name = name;
        this._url = url;
    }

    drawPokemonRow() {
        let pokemonRowTemplate = document.querySelector("#pokemonRowTemplate");
        let newPokemonRow = pokemonRowTemplate.cloneNode(true);

        // Rellenamos campos
        newPokemonRow.querySelector(".pokemon-name").innerText = this._name;
        newPokemonRow.querySelector(".pokemon-detail__button").setAttribute('data-url', this._url);

        newPokemonRow.querySelector(".pokemon-detail__button").addEventListener("click", () => this.handleClick(event));

        document.querySelector("#pokemonsTableBody").appendChild(newPokemonRow);
    }

    handleClick(event) {
        const detailUrl = event.currentTarget.getAttribute('data-url');
        this.fetchDetailFromApi(detailUrl);
    }

    fetchDetailFromApi(pokemonDetailUrl) {
        fetch(pokemonDetailUrl)
            .then((response) => {
                return response.json();
            })
            .then((pokemonDetailResponse) => {
                this.handlePokemonDetailResponse(pokemonDetailResponse);
            });
    }

    handlePokemonDetailResponse(detail) {
        console.log(detail);
        // TODO: pintar el detalle a la derecha
    }
}

class AppClass {
    constructor() {
        this.pokemons = [1,2,3];
    }

    init() {
        this.fetchDataFromApi();
    }

    fetchDataFromApi() {

        const pokemonApiUrl = 'https://pokeapi.co/api/v2/pokemon/';
        fetch(pokemonApiUrl)
            .then((response) => {
                return response.json();
            })
            .then((pokemonsResponse) => {
                this.handlePokemonsResponse(pokemonsResponse);
            });
    }

    handlePokemonsResponse(data) {
        // Vacío los pokemons
        this.pokemons = [];

        // mapeo la respuesta a objetos tipo pokemons
        for (let i = 0; i < data.results.length; i++) {
            let pokemonJson = data.results[i];
            let pokemonObj = new Pokemon(pokemonJson.name, pokemonJson.url);
            this.pokemons.push(pokemonObj);
        }

        // Pintamos los pokemons
        this.drawAllPokemons();
    }

    drawAllPokemons() {
        // Vacíamos la tabla
        document.querySelector("#pokemonsTableBody").innerHTML = null;

        // Pintamos los pokemons
        for (let i = 0; i < this.pokemons.length; i++) {
            let pokemon = this.pokemons[i];
            pokemon.drawPokemonRow();
        }
    }
}

const app = new AppClass();
app.init();
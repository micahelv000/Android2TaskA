class PokemonClass {
    #name
    #photo

    constructor(name, photo) {
        this.#name = name;
        this.#photo = photo;
    }

    get name() {
        return this.#name;
    }
    get photo() {
        return this.#photo;
    }
    set name(newName) {
        this.#name = newName;
    }
    set photo(newPhoto) {
        this.#photo = newPhoto;
    }
}
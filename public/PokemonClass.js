class PokemonClass {
    #name
    #photo

    constructor(name, flag) {
        this.#name = name;
        this.#photo = flag;
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
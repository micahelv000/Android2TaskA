class CountryClass{
    #name
    #flag
    #native

    constructor(name, flag,native){
        this.#name = name;
        this.#flag = flag;
        this.#native = native;
    }

    get name(){
        return this.#name;
    }
    get flag(){
        return this.#flag;
    }
    get native(){
        return this.#native;
    }

    set name (newName){
        this.#name = newName;
    }
    set flag (newflag){
        this.#flag = newflag;
    }
    set native (newNative){
        this.#native = newNative;
    }

}
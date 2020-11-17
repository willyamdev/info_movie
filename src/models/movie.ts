export default class Movie {
    constructor(
        private _movieTitle: string,
        private _movieCape: string) { }

    set movieTitle(name: string) {
        this._movieTitle = name;
    }

    get movieTitle(): string {
        return this._movieTitle;
    }

    set movieCape(url: string) {
        this._movieCape = url;
    }

    get movieCape(): string {
        return this._movieCape;
    }
}
import Movie from './movie';

export default class TrendingMovie extends Movie {

    constructor(
        movieTitle : string,
        movieCape : string,
        private _movieTrailer: string
    ) {
        super(movieTitle, movieCape);
    }

    set movieTrailer(trailer: string) {
        this._movieTrailer = trailer;
    }

    get movieTrailer(): string {
        return this._movieTrailer;
    }
}
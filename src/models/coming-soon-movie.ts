import Movie from './movie';

export default class ComingSoonMovie extends Movie {

    constructor(
        movieTitle : string,
        movieCape : string,
        private _premiereDate: string
    ) {
        super(movieTitle, movieCape);
    }

    set premiereDate(date: string) {
        this._premiereDate = date;
    }

    get premiereDate(): string {
        return this._premiereDate;
    }
}
export type MoviesContextData = {
    movies: MovieData[];
    pageNumber: number;
}

export type MovieData = {
    id: number;
    backdrop_path: string;
    poster_path: string;
    title: string;
    release_date: string;
    vote_average: number;
}
import { useMovies } from "../../hooks/useMovies"

import { IMAGE_BASE_URL } from "../../services/api"
import { Container } from "./style"


export const MovieCard = () => {
   const { movies } = useMovies()

    return (
        <>
            {movies?.map((movie) => (
                <Container key={movie.id}>
                    <img src={`${IMAGE_BASE_URL}${movie.backdrop_path}`} alt="" />
                    <h3>{movie.title}</h3>
                    <p>12 NOV 2021</p>
                </Container>
            ))}
        </>
    )
}
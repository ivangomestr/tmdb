import { useRequestData } from "../../hooks/useRequestData"
import { baseUrl } from "../../services/api"

import { Container } from "./style"

type Films = {
    id: number;
    backdrop_path: string;
    title: string;
    release_date: string;
}

export const MovieCard = () => {
    const { data: films } = useRequestData<Films[]>(baseUrl)
    console.log(films)


    return (
        <>
            {films?.results.map((film) => (
                <Container key={film.id}>
                    <img src={film.poster_path} alt="" />
                    <h3>{film.title}</h3>
                    <p>12 NOV 2021</p>
                </Container>
            ))}
        </>
    )
}
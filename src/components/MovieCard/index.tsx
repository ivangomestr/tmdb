import { Container } from "./style"
import movieImg from "../../assets/movie.svg"

export const MovieCard = () => {
    return (
        <Container>
            <img src={movieImg} alt="" />
            <h3>Clifford</h3>
            <p>12 NOV 2021</p>
        </Container>
    )
}
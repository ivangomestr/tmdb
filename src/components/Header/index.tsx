import { Container } from "./style"
import logoImg from "../../assets/logo.svg"

export const Header = () => {
    return (
        <Container>
            <img src={logoImg} alt="Logo" />
        </Container>
    )
}
import { Header } from "../../components/Header"
import { CastContainer, Container, Content, ImgContainer, Sinopse, SinopseContainer, Title } from "./style"
import deadpoolImg from "../../assets/deadpool.svg"

export const MovieDetailsPage = () => {
    return (
        <Container>
            <Header />
            <Content>
                <ImgContainer>
                    <img src={deadpoolImg} alt="" />
                </ImgContainer>

                <SinopseContainer>
                    <Title>
                        <h2>Deadpool (2016)</h2>
                        <p>16 anos  • 11/02/2016 (BR)  •  Ação, Aventura, Comédia, Ficção científica • 1h 47m</p>
                    </Title>

                    <div>
                        <p>Avaliação dos usuários</p>
                    </div>

                    <Sinopse>
                        <h3>Sinopse</h3>
                        <p>Baseado no anti-herói não convencional da Marvel Comics, Deadpool conta a história da origem do<br /> ex-agente das Forças Especiais que se tornou o mercenário Wade Wilson. Depois de ser<br /> submetido a um desonesto experimento que o deixa com poderes de cura acelerada, Wade adota<br /> o alter ego de Deadpool. Armado com suas novas habilidades e um senso de humor negro e<br /> distorcido, Deadpool persegue o homem que quase destruiu sua vida.</p>
                    </Sinopse>

                    <CastContainer>
                        <div>
                            <h4>Rob Liefeld</h4>
                            <p>Characters</p>
                        </div>

                        <div>
                            <h4>Fabian Nicieza</h4>
                            <p>Characters</p>
                        </div>

                        <div>
                            <h4>Tim Miller</h4>
                            <p>Director</p>
                        </div>

                        <div>
                            <h4>Rhett Reese</h4>
                            <p>Screenplay</p>
                        </div>

                        <div>
                            <h4>Paul Wernick</h4>
                            <p>Screenplay</p>
                        </div>
                    </CastContainer>
                </SinopseContainer>
            </Content>
        </Container>
    )
}
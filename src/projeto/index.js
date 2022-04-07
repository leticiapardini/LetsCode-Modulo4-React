import { ContainerGeral, ButonInicial, Container, Imagem,Name, Cidade, Texto, Botoes, ContainerSkills, BotoesSkills} from "./styles";
import card from "./card.json"


const ProdutoCard = () => (

    <ContainerGeral>
        <Container>
            <ButonInicial> {card.botao} </ButonInicial>
            <Imagem>
                <img src={card.foto[0]}></img>
            </Imagem>
            <Name>{card.nome}</Name>
            <Cidade>{card.cidade}</Cidade>
            <Texto>{card.descricao}</Texto>
            <div>
                {
                    card.botoes.map((botao) => <Botoes key={botao.toString()}> {botao}</Botoes>)
                }
            </div>
            <ContainerSkills>
                <p> SKILLS </p>
                {
                    card.skills.map(botao => <BotoesSkills key={botao.toString()}>{botao}</BotoesSkills>)
                }
            </ContainerSkills>
        </Container>
    </ContainerGeral>
    
)

   


export default ProdutoCard;
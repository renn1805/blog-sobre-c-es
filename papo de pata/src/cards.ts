
import imagemCard1 from "../public/1-img-card.jpg"
import imagemCard2 from "../public/2-img-card.jpg"
import imagemCard3 from "../public/3-img-card.jpg"
import imagemCard4 from "../public/4-img-card.jpg"
import imagemCard5 from "../public/5-img-card.jpg"
import imagemCard6 from "../public/6-img-card.jpg"




export interface Card {
    numeroCard: string,
    imagemCard: string,
    titleCard: string,
    paragraphCard: string;
}

const Card1: Card = {
    numeroCard: 'card1',
    imagemCard: imagemCard1,
    titleCard: "Do uivo ao lar",
    paragraphCard: "Antes selvagens e livres, os lobos se aproximaram do homem em busca de abrigo e amizade. Assim nasceu uma das parcerias mais belas da história."
}

const Card2: Card = {
    numeroCard: 'card2',
    imagemCard: imagemCard2,
    titleCard: "Adestramento Positivo",
    paragraphCard: "Técnicas eficazes e amorosas de adestramento que fortalecem o vínculo entre você e seu pet através do reforço positivo."
}

const Card3: Card = {
    numeroCard: 'card3',
    imagemCard: imagemCard3,
    titleCard: "Cuidados Essenciais",
    paragraphCard: "Dicas importantes sobre higiene, escovação, banho e outros cuidados fundamentais para o bem-estar do seu cão."
}
const Card4: Card = {
    numeroCard: 'card4',
    imagemCard: imagemCard4,
    titleCard: "Alimentação Saudável",
    paragraphCard: "Aprenda sobre nutrição canina, porções adequadas e os melhores alimentos para manter seu amigo sempre saudável e feliz."
}

const Card5: Card = {
    numeroCard: 'card5',
    imagemCard: imagemCard5,
    titleCard: "Saúde e Prevenção",
    paragraphCard: "Informações sobre vacinas, vermífugos e como identificar sinais de problemas de saúde para agir rapidamente."
}

const Card6: Card = {
    numeroCard: 'card6',
    imagemCard: imagemCard6,
    titleCard: "Exercícios e Brincadeiras",
    paragraphCard: "Atividades divertidas e exercícios apropriados para manter seu cão ativo, feliz e em forma."
}

export const cards: Card[] = [
    Card1,
    Card2,
    Card3,
    Card4,
    Card5,
    Card6
]

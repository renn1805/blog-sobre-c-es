export interface InformacoesForm1 {
    descricao: string,
    tipoInput: string,
    placeholderInput: string;
}

export const listaInformacoesForm1: InformacoesForm1[] = [
    {
        descricao: "Nome Completo *",
        tipoInput: 'text',
        placeholderInput: "Renan Almeida de Araujo"
    },
    {
        descricao: "Número de Telefone Pessoal *",
        tipoInput: 'tel',
        placeholderInput: "(11) 99999999"
    },
    {
        descricao: "E-mail *",
        tipoInput: 'email',
        placeholderInput: "Renan@gmail.com *"
    },
    {
        descricao: "Data de Nascimento *",
        tipoInput: 'date',
        placeholderInput: "22 / 06 / 2009"
    },
    {
        descricao: "Profissão *",
        tipoInput: 'text',
        placeholderInput: "Arquiteto de Software"
    },
]



export interface InformacoesForm2 {
    descricao: string,
    selectName: string,
    options: string[],
}

export const listaInformacoesForm2: InformacoesForm2[] = [
    {
        descricao: "moradia *",
        selectName: "moradia",
        options: ["Casa", "Apartamento", "Sítio", "Outro"]
    },
    {
        descricao: "O imovel é: ",
        selectName: "tipo-imovel",
        options: ["Próprio", "Alugado", "Outro"]
    },
    {
        descricao: "O imovel tem:",
        selectName: "descricao-imovel",
        options: ["Varanda", "Quintal", "Área externa", "Outro", "Nenhuma das alternativas"]
    },
    {
        descricao: "Nivel de segurança do imovel",
        selectName: "seguranca-imovel",
        options: ["Murros", "Telas de proteção", "Portão", "Outros"]
    },
    {
        descricao: "Quantas pessoas tem na casa",
        selectName: "pessoas-imovel",
        options: ["1", "1 a 3", "3 a 5", "+5"]
    },

]

// todo: separar as funções deste arqivo que é só para guardar as informações
export let numeroForm: number = 0;
export default function MudarForm() {
    if (numeroForm !== 3) {
        numeroForm++
    } else {
        numeroForm = 0
    }
    console.log(numeroForm)
}


export interface InformacoesInputs1 {
    descricao: string,
    tipoInput:string,
    placeholderInput: string;
}

export const listaInformacoesInput1: InformacoesInputs1[] = [
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
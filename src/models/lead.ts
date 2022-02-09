export default interface Lead {
    id: number,
    nome: string,
    email: string,
    cpf: string,
    estadoCivil: string,
    nomeConjugue?: string
}
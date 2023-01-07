import { v4 as uuidv4 } from 'uuid';

const exampleCV = {
    personal: {
        nome: "",
        sobrenome: "",
        titulo: "",
        foto: "",
        endereco: "",
        telefone: "",
        email: "",
        detalhes: ""
    },
    experience: [
        {
            id: uuidv4(),
            cargo: "",
            empresa: "",
            cidade: "",
            inicio: "",
            fim: ""
        }
    ],
    education: [
        {
            id: uuidv4(),
            universidade: "",
            curso: "",
            cidade: "",
            inicio: "",
            fim: ""
        }
    ]
}

export default exampleCV
import { v4 as uuidv4 } from 'uuid';

const exampleCV = {
    personal: {
        nome: "Tobias",
        sobrenome: "Maciel",
        objetivo: "Ganhar na mega da virada de 2023",
        endereco: "Rua kuakbsbodsa sdasda",
        telefone: "4002-8922",
        email: "bomdiaecia@uol.com",
        detalhes: "Sou muito extrovertido, gosto de assistir gotinha de amor nas horas vagas e tenho até um fan club sobre a novela"
    },
    experience: [
        {
            id: uuidv4(),
            cargo: "CEO",
            empresa: "Fab clube da gotinha de amor",
            cidade: "Aciciba da serra",
            inicio: "Nov. de 2009",
            fim: "Atualmente",
            detalhes: "Nesta experiencia, pude trabalhar na criação de conteúdo relacionado à gotinha de amor e também pude aprender a gerenciar comunidades"
        }
    ],
    education: [
        {
            id: uuidv4(),
            universidade: "uniabc",
            curso: "letras",
            cidade: "abcdefghijklandia",
            inicio: "Set. de 1013",
            fim: "Incompleta",
            detalhes: "A faculdade era referência no ensino de letras, isso é comprovado pelo nome da cidade, há muitas letras nele."
        }
    ]
}

export default exampleCV
import { v4 as uuidv4 } from 'uuid';

const exampleCV = {
    personal: {
        firstname: "Lucas",
        lastname: "Almeida",
        title: "Gerente de maerketing",
        photo: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
        address: "Rua dos bobos",
        phone: "(11) 978781-7888",
        email: "email@email.com",
        description: "Esta é a descrição minha!",
        skills: ["Teste", "Teste1", "Teste2"]
    },
    experience: [
        {
            id: uuidv4(),
            charge: "Gerente de maerketing",
            company: "UIuiu",
            city: "15 de piraraquara",
            start: "12 de abril",
            end: "13 de abril"
        }
    ],
    education: [
        {
            id: uuidv4(),
            university: "Anhaguera",
            course: "Pedreiro",
            city: "15 de ainhanonha",
            start: "10 de março",
            end: "17 de março"
        }
    ]
}

export default exampleCV
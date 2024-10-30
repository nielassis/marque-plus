export const DoctorListArray = [
    {
        id_doctor: 1,
        name: "Dr. Armando Matheus",
        specialty: "Ginecologia e obstetrícia",
        type: "Presencial",
        icon: "M"
    },
    {
        id_doctor: 2,
        name: "Dra. Ana Beatriz Rutini",
        specialty: "Cardiologista",
        type: "Presencial",
        icon: "F"
    },
    {
        id_doctor: 3,
        name: "Dr. Antônio Almeida Souza",
        specialty: "Pediatria",
        type: "Presencial",
        icon: "M"
    },
    {
        id_doctor: 4,
        name: "Dra. Roberta Martins",
        specialty: "Clínica Geral",
        type: "Teleconsultoria",
        icon: "F"
    },
    {
        id_doctor: 5,
        name: "Dra. Nise da Silveira",
        specialty: "Cirurgia Plástica",
        type: "Presencial",
        icon: "F"
    },
    {
        id_doctor: 6,
        name: "Dr. Jonatan Silvestre",
        specialty: "Pediatria",
        type: "Presencial",
        icon: "M"
    },
    {
        id_doctor: 7,
        name: "Dr. José Eduardo Souza",
        specialty: "Clínica Geral",
        type: "Teleconsultoria",
        icon: "M"
    },
    {
        id_doctor: 8,
        name: "Dra. Adriana Melo",
        specialty: "Clínica Geral",
        type: "Teleconsultoria",
        icon: "F"
    },
    {
        id_doctor: 9,
        name: "Dra. Valeria Petri",
        specialty: "Cirurgia Plástica",
        type: "Presencial",
        icon: "F"
    },
    {
        id_doctor: 10,
        name: "Dr. Bruno Silva",
        specialty: "Dermatologia",
        type: "Presencial",
        icon: "M"
    },
    {
        id_doctor: 11,
        name: "Dra. Carla Nogueira",
        specialty: "Dermatologia",
        type: "Teleconsultoria",
        icon: "F"
    },
    {
        id_doctor: 12,
        name: "Dr. Guilherme Santos",
        specialty: "Ortopedia",
        type: "Presencial",
        icon: "M"
    },
    {
        id_doctor: 13,
        name: "Dra. Fernanda Costa",
        specialty: "Geriatria",
        type: "Presencial",
        icon: "F"
    },
    {
        id_doctor: 14,
        name: "Dr. Lucas Andrade",
        specialty: "Endocrinologia",
        type: "Teleconsultoria",
        icon: "M"
    },
    {
        id_doctor: 15,
        name: "Dra. Sofia Fernandes",
        specialty: "Neurologia",
        type: "Teleconsultoria",
        icon: "F"
    },
    {
        id_doctor: 16,
        name: "Dr. Marcelo Oliveira",
        specialty: "Psiquiatria",
        type: "Presencial",
        icon: "M"
    },
    {
        id_doctor: 17,
        name: "Dra. Elisa Cardoso",
        specialty: "Oncologia",
        type: "Teleconsultoria",
        icon: "F"
    },
    {
        id_doctor: 18,
        name: "Dr. Rafael Teixeira",
        specialty: "Urologia",
        type: "Presencial",
        icon: "M"
    },
    {
        id_doctor: 19,
        name: "Dra. Helena Martins",
        specialty: "Oftalmologia",
        type: "Teleconsultoria",
        icon: "F"
    },
    {
        id_doctor: 20,
        name: "Dr. Vinicius Albuquerque",
        specialty: "Nefrologia",
        type: "Presencial",
        icon: "M"
    }
];

// Função para gerar tipos únicos, incluindo Teleconsultoria e presencial
const generateUniqueTypes = (doctors) => {
    const typesSet = new Set();
    doctors.forEach((doctor) => {
        typesSet.add(doctor.type);
    });
    return Array.from(typesSet);
};

const uniqueTypes = generateUniqueTypes(DoctorListArray);

export const appointments = [
    {
        id_appointment: 1,
        service: "Consulta",
        doctor: "Dra. Nise da Silveira",
        specialty: "Cirurgia Plástica",
        booking_date: "2024-10-25",
        booking_hour: "08:30",
    },
    {
        id_appointment: 2,
        service: "Consulta",
        doctor: "Dr. Antônio Almeida Souza",
        specialty: "Pediatria",
        booking_date: "2024-10-28",
        booking_hour: "15:40",
    },
    {
        id_appointment: 3,
        service: "Consulta",
        doctor: "Dra. Roberta Martins",
        specialty: "Clínica Geral",
        booking_date: "2024-11-05",
        booking_hour: "14:15",
    },
    {
        id_appointment: 4,
        service: "Consulta",
        doctor: "Dra. Nise da Silveira",
        specialty: "Cirurgia Plástica",
        booking_date: "2024-11-18",
        booking_hour: "11:00",
    },
    {
        id_appointment: 5,
        service: "Consulta",
        doctor: "Dr. Antônio Almeida Souza",
        specialty: "Pediatria",
        booking_date: "2024-12-02",
        booking_hour: "10:40",
    },
    {
        id_appointment: 6,
        service: "Consulta",
        doctor: "Dra. Roberta Martins",
        specialty: "Clínica Geral",
        booking_date: "2024-12-14",
        booking_hour: "17:30",
    }
];

export const doctors_services = [
    {
        id_service: 1,
        description: "Consulta Médica",
        price: 499.99
    },
    {
        id_service: 2,
        description: "Drenagem Linfática",
        price: 650
    },
    {
        id_service: 3,
        description: "Lipoaspiração",
        price: 5000
    },
    {
        id_service: 4,
        description: "Mamoplastia",
        price: 1700
    }
];

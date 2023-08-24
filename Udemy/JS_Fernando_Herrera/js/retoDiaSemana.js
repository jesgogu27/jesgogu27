
const diasDeSemana = {
    0 : "lunes",
    1 : "Martes",
    2 : "Miercoles",
    3 : "Jueves",
    4 : 'Viernes',
    5 : 'Sabado',
    6 : 'Domingo'    
};

let opcionDiaDeSemana = 12;


console.log(diasDeSemana[opcionDiaDeSemana] || "Dia no definido");
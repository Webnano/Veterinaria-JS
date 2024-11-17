const fs = require('fs');

// Función para registrar una nueva cita
function registrar(nombre, edad, animal, color, enfermedad) {
    // Leer el archivo citas.json
    let citas = JSON.parse(fs.readFileSync('citas.json', 'utf8'));
    
    // Crear una nueva cita
    const nuevaCita = {
        nombre,
        edad,
        animal,
        color,
        enfermedad
    };
    
    // Agregar la nueva cita al arreglo de citas
    citas.push(nuevaCita);
    
    fs.writeFileSync('citas.json', JSON.stringify(citas, null, 2));
    console.log('Cita registrada con éxito');
}

// Función leer todas las citas
function leer() {
    
    let citas = JSON.parse(fs.readFileSync('citas.json', 'utf8'));
    
    console.log(citas);
}

module.exports = { registrar, leer };

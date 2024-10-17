import OS from 'os';

// Obtener la arquitectura del sistema
console.log('Arquitectura:', OS.arch());

// Obtener el tipo de sistema operativo
console.log('Plataforma:', OS.platform());

// Obtener la cantidad total de memoria
console.log('Memoria total:', OS.totalmem());

// Obtener la memoria libre
console.log('Memoria libre:', OS.freemem());

// Obtener la informacion de la CPU
console.log('Informacion de la CPU:', OS.cpus());

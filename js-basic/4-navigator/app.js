const positionLat = 10;
const positionLong = 20;
const addressLat = 30;
const addressLong = 40;


const pathLenght = Math.sqrt(((addressLat - positionLat) ** 2) + ((addressLong - positionLong) ** 2));
console.log(`Путь из ${positionLat}-${positionLong} в ${addressLat}-${addressLong} составит ${pathLenght}`);
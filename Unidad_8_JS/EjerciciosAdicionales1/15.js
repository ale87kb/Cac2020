function cantidadDiasMes(mes){
  switch (mes) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        return 31;
      case 4:
      case 6:
      case 9:
      case 11:
        return 30;
      case 2:
        return 28;
      default:
          console.error("Función cantidadDiasMes: Error de parámetro.", mes + ":" + typeof radio);
  }
}

console.log(cantidadDiasMes(2));
console.log(cantidadDiasMes(1));
console.log(cantidadDiasMes(25));
console.log(cantidadDiasMes(6));
console.log(cantidadDiasMes("2"));
/*let cantHoras : number = 1;
while (cantHoras <= 5) {
    console.log ("Hola");
    cantHoras = cantHoras + 1;
}*/
import * as rls from "readline-sync";

let suma : number, nota : number, promedio : number, contador : number;

contador = 1;
suma = 0;

while (contador <= 10) {
    nota = rls.questionFloat("Ingrese una nota: ");
    suma = suma + nota; // suma += nota;
    contador = contador + 1;
}
promedio = suma/10;

console.log("El promedio de las notas es: " + promedio);


//let suma : number, nota : number, promedio : number, contador : number;

suma = 0;

//esto es igual a lo de arriba.

for(contador = 1; contador <11; contador++){
    nota = rls.questionFloat("Ingrese una nota: ");
    suma += nota;
};
promedio = suma/10;

console.log("El promedio de las notas es: " + promedio);
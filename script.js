
//Cuanto dinero quiere retirar
//En cuantas cuotas lo quiere pagar
//Aplicarle interes al monto que quiere retirar y dividirlo por las cuotas que el usario ingrese
//Devolverle al usuario cuanto tiene que pagar por mes para poder solicitar prestamo

// function Prestamo (nombre, cuotas, interes, bonificacion) {
//     this.nombre = nombre;
//     this.cuotas = cuotas;
//     this.interes = interes;
//     this.bonificacion = bonificacion;
// }

class Prestamo {
    constructor(nombre, cuotas, interes, bonificacion){
        this.nombre = nombre;
        this.cuotas = cuotas;
        this.interes = interes;
        this.bonificacion = bonificacion;
    }
}
const jubilado = new Prestamo ("jubilado", 12, 40, 10)
const hipotecario = new Prestamo ("hipotecario", 72, 50, 15)
const salirdelpaso = new Prestamo ("salirdelpaso", 12, 50, 20)

const listaDePrestamos = ["jubildao", "hipotecario", "salirdelpaso"]

console.log(listaDePrestamos)

for (const caracteristicas in hipotecario) {
    console.log(hipotecario[caracteristicas])
    }

function pagosCuotas(prestamo = 0) {
    return prestamo + interes / cuotas
}
const interes = calculoInteres => calculoInteres * 0.55

let edad = Number(prompt("Que edad tienes?"))

if (edad >= 18) {
    do {
        var prestamo = Number(prompt("Cuanto dinero quiere retirar?"))
    } while (isNaN(prestamo));

    do {
        var cuotas = Number(prompt("En cuantas cuotas lo quiere abonar?"))
    } while (isNaN(cuotas));

    let cuotaConInteres = calcularCuotasConInteres(prestamo, cuotas)

    alert("El monto a abonar es de : " + cuotaConInteres)
} else {
    alert("No podes continuar con el proceso")
}


// function calcularCuotasConInteres(prestamo, cuotas) {
//     return (prestamo + interes(prestamo)) / cuotas
// }

// function calculadora(valor1, valor2, operador) 
// {switch (operador) 
//     {case "+":return valor1 + valor2;case "-":return valor1 - valor2;case "*":
//     return valor1 * valor2;case "/":return valor1 / valor2;default:return 0}
// }

// let n1 = Number(prompt("Ingresa el primer valor"))
// let n2 = Number(prompt("Ingresa el segundo valor"))
// let operacion = prompt("Ingresa el operador a utilizar \n + para sumar \n - para restar \n * para multiplicar \n / para dividir")alert(calculadora(n1,n2,operacion))


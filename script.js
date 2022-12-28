
//Cuanto dinero quiere retirar
//En cuantas cuotas lo quiere pagar
//Aplicarle interes al monto que quiere retirar y dividirlo por las cuotas que el usario ingrese
//Devolverle al usuario cuanto tiene que pagar por mes para poder solicitar prestamo

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


function calcularCuotasConInteres(prestamo, cuotas) {
    return (prestamo + interes(prestamo)) / cuotas
}


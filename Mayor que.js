let numero1 = parseInt(prompt("Ingresa el primer numero"));
let numero2 = parseInt(prompt("Ingrsa el segundo numero"));
let numero3 = parseInt(prompt("Ingresa el tercer numero"));
let numero4 = parseInt(prompt("Ingresa el cuarto numero"));
if(numero1 >= numero2 && numero1 >= numero3 && numero1 >= numero4){
    document.write("el numero mayor es: " + numero1)
}else if(numero2 >= numero1 && numero2 >= numero3 && numero2>= numero4){
    document.write("el numero mayor es: " + numero2)
}else if(numero3 >= numero1 && numero3 >= numero2 && numero3 >= numero4){
    document.write("el numero mayor es: " + numero3)
}else{
    document.write("el numero mayor es: " + numero4)
}
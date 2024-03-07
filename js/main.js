//POR FAVOR LEER EL READ.ME

//VARIABLES:
let cuentaPrincipal = 0.0; //pasaran a ser objetos en el siguiente sprint


let gasto = 0.0; //pasaran a ser objetos en el siguiente sprint


let ingreso = 0.0; //pasaran a ser objetos en el siguiente sprint

let stop = false;

//FUNCIONES

function gastar(){
    cuentaPrincipal = cuentaPrincipal - gasto;
}

function ingresar(){
    cuentaPrincipal = cuentaPrincipal + ingreso;
}

function comenzar(){

    let opcion = prompt("Que desea ingresar: A) Gasto B) Ingreso C)Cancelar");
    let variable = parseFloat(prompt("Que monto tiene: "));

    switch(opcion){
        case "A","a":
            gasto = variable;
            gastar();
            alert("Se registo el gasto de: $" + gasto + " la cuenta principal queda en $"+cuentaPrincipal);
        break;
        case "B","b":
            ingreso = variable;
            ingresar();
            alert("Se registo el ingreso de: $" + ingreso + " la cuenta principal queda en $"+cuentaPrincipal);
        break;
        case "C","c":
            alert("Adios.");
            stop = true;
        break;
        default:
            alert("Ingrese una variante valida");
        }
    }

//PRUEBA DEL PROGRAMA

do{
    comenzar();
}
while(stop==false);









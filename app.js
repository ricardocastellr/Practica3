function greet(){
    console.log('Hello');
}

let logGreeting = (miParametro) => miParametro();

logGreeting(greet)

logGreeting(function(){
    console.log('Hello from a function created on the fly');
})

let color = "rojo";
let talla = "M";
let modelo = "Clasico";

console.log("Juan tiene una playera talla " + talla + " de color " + color + " y modelo " + modelo); 

console.log(`Juan tiene una playera
Talla: ${talla}
de color: ${color}
modelo: ${modelo}`);
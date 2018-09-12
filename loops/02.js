// Escreva um loop em Javascript
// que gera uma matriz de zeros 5x5.
// [ [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0] ]

for (let c = 0; c < 5; c++) {
    let lista = [];
    for (let i = 0; i < 5; i++) {
        lista.push(0);    
    }
    console.log (lista)
}

// Escreva um loop em Javascript
// que gera uma matriz no seguinte
// formato:
// [ [0, 1, 2, 3, 4],
//   [1, 0, 1, 2, 3],
//   [2, 1, 0, 1, 2],
//   [3, 2, 1, 0, 1],
//   [4, 3, 2, 1, 0] ]
let matriz = []
for (let j = 0; j < 5; j++) { // A
    let linha = []
    for (let i = 0; i < 5; i++) { // B
        linha.push(Math.abs(i - j))
    }
    matriz.push(linha)
}

for (let c = 0; c < 5; c++) {
    let lista = [];
    for (let i = 0; i < 5; i++) {
        lista.push(i);    
    }
    console.log (lista)
}



// Escreva um loop em Javascript
// que printa o seguinte padrão
// no console:
// *******
// ******
// *****
// ****
// ***
// ** let c = 7; c > 0; c--
// *

let linha=[]
for (let i=0; i<5; i++){
    linha.push ("*")
    console.log (linha)
}
linha.reverse()

for (let c = 7; c > 0; c--){
    let star = ["*****"]
    for (let i = 0; i < 6; i++){
        star.push("*")
    }
    star.substr (1,(star.length - 1))
    console.log (star)
}


for (let i = 0; i < 6; i++){
    let ast = "*";
        for (let i=0)
        ast.push("*")
}


for (let c = 5; c > 1; c--) {
    let lista = ["*"];
    for (let i = 0; i < 7; i--) {
        lista.push("*");    
    }
    console.log (lista)
}

for (let c = 6; c < 1; c--) {
    let lista = ["*"];
    for (let i = 0; i > 7; i++) {
        lista.push("*");    
    }
    console.log (lista)
}

for (let c = 0; c > 7; c++) {
    let lista = ["*"];
    for (let i = 0; i < 7; i--) {
        lista.push("*");    
    }
    console.log (lista)
}


//VERSÃO FINAL:
let linha=[]
for (let i=0; i<5; i++){
    linha.push ("*")
    console.log (linha)
}



// Escreva um loop em Javascript
// que printa o seguinte padrão
// no console:
// 1******
// 12*****
// 123****
// 1234***
// 12345**
// 123456*
// 1234567
for (let j = 1; j <= 7; j++) {
    let linha = ""
    for (let k = 1; k <= j; k++) {
        linha += k
    }
    for (let i = j; i < 7; i++) { 
        linha += "*"
    }
    console.log(linha)
}
// ou...
let digitos = ""
for (let i = 1; i <= 7; i++) {
    digitos += i
    let numero_com_asteriscos = digitos
    for (let j = 7; j > i; j--) {
        numero_com_asteriscos += "*"
    }
    console.log(numero_com_asteriscos)
}
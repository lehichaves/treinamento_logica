// Exercício 1

var nomeCompleto = "Lehi Willian Costa Chaves";
    console.log(nomeCompleto);

// Exercício 2

var numeroA = 10;
var numeroB = 7;

var resultado = numeroA * numeroB;
    console.log(resultado);

// Exercício 3

function saudacao () {
    console.log('Oi eu sou o Goku!');
}
saudacao();

//Exercício 4

function multiplica (a, b){
    return a*b
}
console.log(multiplica(2,4));

//Exercício 5

function podeDirigir (idade) {
    if (idade >= 18) {
        return 'Você pode dirigir'
    } else {
        return 'Você não pode dirigir'
    }
}
console.log(podeDirigir(28))

// Exercício 6 

for (var i = 0; i <= 20; i++) {
    console.log(i)
}

// Exercício 7

for (var i = 0; i <= 20 ; i++){
        if (i % 2 != 0){
            console.log(i);
        }
}

// Exercício 8

function tabuada(a) {
    for (var i = 1; i <= 10; i++) {
      console.log(a + 'x' + i + '=' + (a * i) );
    }
  }
tabuada(2)

// Exercício 9

function converterEmHoras (a) {
   console.log(a/60 + ' hora(s)') 
}
converterEmHoras(150)


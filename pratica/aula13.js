let result = '';
let i = 0;

do {
  i = i + 1;
  result = result + i + ' - ';
} while (i < 10);

console.log(result);


/*

>>> HOISTING: variável pode ser usada antes de ser declarada

---------------------------------------------

>>> VAR:
ESCOPO GLOBAL: quando var é declarado FORA da função 
ESCOPO DE FUNÇÃO: quando a var é declarada dentro de uma função

    var greeter = "hey hi";
        var times = 4;

        if (times > 3) {
            var greeter = "say Hello instead"; 
        }
        
        console.log(greeter) // o resultado será "say Hello instead"

---------------------------------------------

>>> LET:
Pode ser usado novamente mas não declarada novamente
ESCOPO DE BLOCO: {}

    let greeting = "say Hi";
    let times = 4;

    if (times > 3) {
            let hello = "say Hello instead";
            console.log(hello);// dirá "say Hello instead"
        }
    console.log(hello) // hello não está definido

Ao usar let, não precisa se preocupar se usou o nome para uma variável antes, já que a variável existe somente dentro daquele escopo de bloco {}

---------------------------------------------

>>> CONST: 
Não pode ser atualizada nem declarada novamente.
ESCOPO DE BLOCO: {}

---------------------------------------------

> VAR, LET e CONST passam por hoisting para o topo do seu escopo
> VAR são inicializadas com undefined 
> LET e CONST não são inicializados 

> VAR e LET podem ser declaradas sem ser inicializadas
> CONST precisa ser inicializada durante a declaração 

*/
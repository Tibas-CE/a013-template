//Aula 08/08/2022
//CONDICIONAIS II

// IF DENTRO DE IF

//Utilizando ifs aninhados

//let idadeDependente = 13;

/*if(idadeDependente >= 13){
    if(idadeDependente >= 18){
        console.log("Seu dependente já pode ter um cartão crédito próprio")
    } else{
        console.log("Seu dependente já pode ter um cartão crédito vinculado ao seu");
    }
} else{
    console.log("Consulte outras possibilidades do Labank");
};

//Utilizando operador lógico

if(idadeDependente >=13 && idadeDependente <= 17){
    console.log("Seu dependente já pode ter um cartão crédito vinculado ao seu");
} else{
    console.log("Consulte outras possibilidades do Labank");
};

//if ternário
idadeDependente === 13 ? console.log("A idade do dependente e 13 e já pode ter um cartão") : console.log("Consulte outras possibilidades do Labank");*/

//swith-case

//let cartao = Number(prompt("Solicitação de cartão de crédito. Escolha uma opção: \n 1- Fácil \n 2- Black \n 3- Platinum \n 4- Master Goldo"));

/*switch(cartao){
    case 1:
        console.log("Cartão fácil adiquirido")
        break;
    case 2:
        console.log("Cartão Black adiquirido")
        break;
    case 3:
        console.log("Cartão Platinum adiquirido")
        break;
    case 4:
        console.log("Cartão Master Gold adiquirido")
        break;
    default:
        console.log("Escolha uma das opções disponíveis");                
};*/

//Pra guardar na cabeça

let numero = Number(prompt("Digíte um número"));

//if aninhado
if (numero % 2 === 0) {
    if (numero % 3 === 0) {
        console.log("É divisível por 2 é 3");
    } else {
        console.log("É apenas divisível por 2");
    }
} else {
    console.log("Não é divisível por 2");
};

//operador lógico, com if ternário junto com switch-case
if (numero % 2 === 0 && numero % 3 === 0) {
    console.log("É divisível por 2 é 3");

    numero === 30 ? console.log("UFA ACERTEI") : console.log("Não foi dessa vez :(");

    switch (numero) {
        case 6:
            console.log("Ele é divisível")
            break;
        case 12:
            console.log("Você conseguiu")
            break;
        case 18:
            console.log("Parabéns")
            break;
        case 24:
            console.log("Nossa você conhece números")
            break;
        case 30:
            console.log("Parabéns foi show")
            break;
        default:
            console.log("O número e maior que 30 ou menor que 6");
    }
} else {
    console.log("Não foi dessa vez :(");
};
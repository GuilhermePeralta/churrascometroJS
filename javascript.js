// Sistema para calcular a quantidade de comida e bebida necessária para um churrasco,
// com base nas informações seguintes:
// Carne - 400gr por pessoa + de 6horas - 650gr
// Cerveja - 1200ml por Pessoa + 6 horas - 2000ml
// Refrigerante/água - 1000ml por pessoa + 6 horas 1500ml
// Crianças valem por 0,5.

// Alocando elementos input e resultado

var adultosInput = document.getElementById("adultos");
var criancasInput = document.getElementById("criancas");
var horasEventoInput = document.getElementById("duracao");


var resultado = document.getElementById("resultado");

// criando a funcao com if
function calcular() {

    let adultos = adultosInput.value;
    let criancas = criancasInput.value;
    let horas = horasEventoInput.value;

    if (horas < 6) {
        let carneTotal = (adultos * 400) + ((criancas * 400) / 2);
        let cervejaTotal = (adultos * 1200);
        let bebidaTotal = (adultos * 1000) + ((criancas * 1000) / 2);

//atribuindo a div resultado

        resultado.innerHTML = `<p> Carne = "${carneTotal}" gr</p>`;
        resultado.innerHTML += `<p> Cerveja = "${cervejaTotal}" ml</p>`;
        resultado.innerHTML += `<p> Bebida = "${bebidaTotal}" ml</p>`;
    }
    else{

        let carneTotal = (adultos * 650) + ((criancas * 650)/2);
        let cervejaTotal = (adultos * 2000);
        let bebidaTotal = (adultos * 1500) + ((criancas * 1500)/2);

//atribuindo a div resultado

        resultado.innerHTML = `<p> Carne = "${carneTotal}" gr</p>`;
        resultado.innerHTML += `<p> Cerveja = "${cervejaTotal}" ml</p>`;
        resultado.innerHTML += `<p> Bebida = "${bebidaTotal}" ml</p>`;
    }
  
}


//Guilherme Lima Peralta
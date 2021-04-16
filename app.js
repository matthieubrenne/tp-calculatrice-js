// 0.Utilisation du mode strict de javascript.
'use strict'

// 1.Récupérer l'écran et les touches de la calculatrices.
let calculatorKeys = document.querySelector('.calculator-keys');
let calculatorScreen = document.querySelector('.calculator-screen');

// 3.Fonction de la calculatrice.
function calculate(event) {
    // Cibler les touches.
    let key = event.target;
    // Click de la touche AC.
    if (key.className == 'all-clear') {
        calculatorScreen.value = calculatorScreen.defaultValue;
    // Click des touches opérateurs et opérandes
    } else if (key.className == 'operator' || key.className == 'operand') {
        // Retrait du zero affiché sur l'écran de la calculatrice.
        if (calculatorScreen.value == '0') {
            calculatorScreen.value = '';
        }
        calculatorScreen.value += key.value;
    // Click de la touche égale.
    } else if (key.className == 'equal-sign') {
        // Utilisation de la fonction eval pour retourner le resultat à l'écran.
        calculatorScreen.value = eval(calculatorScreen.value);
    }
};

// 2.Ajout de l'écouteur d'événements unique.
calculatorKeys.addEventListener('click', calculate);
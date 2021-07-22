



function minus1Click() {
    rezultatas = rezultatas - data1;
    number1DOM.innerText = rezultatas;

    // galima buvo rasyti = number1DOM.innerText = --rezultatas
}

function minus2Click() {
    rezultatas = rezultatas - data2;
    number2DOM.innerText = rezultatas;

    // galima buvo rasyti = number2DOM.innerText = --rezultatas
}

function plus1Cick() {
    rezultatas = rezultatas + data1;
    number1DOM.innerText = rezultatas;

    // galima buvo rasyti = numberDOM.innerText = ++rezultatas
}

function plus2Cick() {
    rezultatas = rezultatas + data2;
    number2DOM.innerText = rezultatas;

    // galima buvo rasyti = numberDOM.innerText = ++rezultatas
}

function game1Click() {
    rezultatas = 8000;
    number1DOM.innerText = rezultatas;
}

function game2Click() {
    rezultatas = 8000;
    number2DOM.innerText = rezultatas;
}



minus1DOM.addEventListener('click', minus1Click);
minus2DOM.addEventListener('click', minus2Click);

plus1DOM.addEventListener('click', plus1Cick);
plus2DOM.addEventListener('click', plus2Cick);

game1DOM.addEventListener('click', game1Click);
game2DOM.addEventListener('click', game2Click);




// function calc() {
//     let data1 = document.getElementById('data1').value;
//     let data2 = document.getElementById('data2').value;
//     let start1 = document.getElementById('start1').value;
//     let start2 = document.getElementById('start2').value;

//     let plus1 = document.getElementById('plus1').value;
//     let plus2 = document.getElementById('plus2').value;
//     let minus1 = document.getElementById('minus1').value;
//     let minus2 = document.getElementById('minus2').value;


//     if (plus1 === '+') {
//         number1DOM = document.getElementById('data1').value = number1DOM + data1;
//     } else if (plus2 === '+') {
//         number2DOM = document.getElementById('data2').value = number2DOM + data2;
//     } else if (minus1 === '-') {
//         number1DOM = document.getElementById('data1').value = number1DOM + data1;
//     } else if (minus2 === '-') {
//         number2DOM = document.getElementById('data2').value = number2DOM + data2;
//     }
// }
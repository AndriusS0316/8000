// septinta uzduotis

let rezultatas = 8000;

const minus1DOM = document.querySelector(".minus1");
const minus2DOM = document.querySelector(".minus2");

const plus1DOM = document.querySelector(".plus1");
const plus2DOM = document.querySelector(".plus2");

const number1DOM = document.querySelector(".number1");
const number2DOM = document.querySelector(".number2");

const game1DOM = document.querySelector(".game1");
const game2DOM = document.querySelector(".game2");

const input1DOM = document.querySelector(".input1");
const input2DOM = document.querySelector(".input2");

function minus1Click() {
    rezultatas = rezultatas - input1DOM.innerText;
    number1DOM.innerText = rezultatas;

    // galima buvo rasyti = number1DOM.innerText = --rezultatas
}

function minus2Click() {
    rezultatas = rezultatas - input2DOM.innerText;
    number2DOM.innerText = rezultatas;

    // galima buvo rasyti = number2DOM.innerText = --rezultatas
}

function plus1Cick() {
    rezultatas = rezultatas + input1DOM.innerText;
    number1DOM.innerText = rezultatas;

    // galima buvo rasyti = numberDOM.innerText = ++rezultatas
}

function plus2Cick() {
    rezultatas = rezultatas + input2DOM.innerText;
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
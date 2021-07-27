

let rezultatas1 = 8000;
let rezultatas2 = 8000;

let data1 = document.querySelector('#data1');
let data2 = document.querySelector('#data2');
let data11 = document.querySelector('#data11');
let data22 = document.querySelector('#data22');
let data111 = document.querySelector('#data111');
let data222 = document.querySelector('#data222');

let coin11 = document.querySelector('#coin11');
let coin22 = document.querySelector('#coin22');

let dice11 = document.querySelector('#kauliukas11');
let dice22 = document.querySelector('#kauliukas22');

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

const coin1 = document.querySelector(".coin1");
const coin2 = document.querySelector(".coin2");

const dice1 = document.querySelector(".kauliukas1");
const dice2 = document.querySelector(".kauliukas2");

number1DOM.innerText = rezultatas1;
number2DOM.innerText = rezultatas2;

function minus1Click() {
    if (data1.value === '') {
        return false;
    }
    data11.value = 'Is ' + rezultatas1 + ' buvo atimta ' + parseInt(data1.value);
    rezultatas1 = rezultatas1 - parseInt(data1.value);
    number1DOM.innerText = rezultatas1;

    data1.value = '';
}

function minus2Click() {
    if (data2.value === '') {
        return false;
    }
    data22.value = 'Is ' + rezultatas2 + ' buvo atimta ' + parseInt(data2.value);
    rezultatas2 = rezultatas2 - parseInt(data2.value);
    number2DOM.innerText = rezultatas2;

    data2.value = '';
}

function plus1Cick() {
    if (data1.value === '') {
        return false;
    }
    data11.value = 'Prie ' + rezultatas1 + ' buvo prideta ' + parseInt(data1.value);
    rezultatas1 = rezultatas1 + parseInt(data1.value);
    number1DOM.innerText = rezultatas1;

    data1.value = '';
}

function plus2Cick() {
    if (data2.value === '') {
        return false;
    }
    data22.value = 'Prie ' + rezultatas2 + ' buvo prideta ' + parseInt(data2.value);
    rezultatas2 = rezultatas2 + parseInt(data2.value);
    number2DOM.innerText = rezultatas2;

    data2.value = '';
}

function game1Click() {
    rezultatas1 = 8000;
    number1DOM.innerText = rezultatas1;

    data11.value = '';
    data111.value = '';
}

function game2Click() {
    rezultatas2 = 8000;
    number2DOM.innerText = rezultatas2;

    data22.value = '';
    data222.value = '';
}

function coin1Click() {
    if (Math.floor(Math.random() * 10 + 1) % 2 != 0) {
        data11.value = 'Metus moneta, iskrito herbas';
        console.log('herbas');
    } else {
        data11.value = 'Metus moneta, iskrito skaicius';
        console.log('skaicius');
    }
} 

function coin2Click() {
    if (Math.floor(Math.random() * 10 + 1) % 2 != 0) {
        data22.value = 'Metus moneta, iskrito herbas';
        console.log('herbas');
    } else {
        data22.value = 'Metus moneta, iskrito skaicius';
        console.log('skaicius');
    }
}

function dice1Click() {
    if (Math.floor(Math.random() * 6 + 1) == 1) {
        data11.value = 'Ridenus kauliuka, issirito vienas';
        console.log('vienas');
    } else if (Math.floor(Math.random() * 6 + 1) == 2) {
        data11.value = 'Ridenus kauliuka, issirito du';
        console.log('du');
    } else if (Math.floor(Math.random() * 6 + 1) == 3) {
        data11.value = 'Ridenus kauliuka, issirito trys';
        console.log('trys');
    } else if (Math.floor(Math.random() * 6 + 1) == 4) {
        data11.value = 'Ridenus kauliuka, issirito keturi';
        console.log('keturi');
    } else if (Math.floor(Math.random() * 6 + 1) == 5) {
        data11.value = 'Ridenus kauliuka, issirito penki';
        console.log('penki');
    } else if (Math.floor(Math.random() * 6 + 1) == 6) {
        data11.value = 'Ridenus kauliuka, issirito sesi';
        console.log('sesi');
    }
}

function dice2Click() {
    if (Math.floor(Math.random() * 6 + 1) == 1) {
        data22.value = 'Ridenus kauliuka, issirito vienas';
        console.log('vienas');
    } else if (Math.floor(Math.random() * 6 + 1) == 2) {
        data22.value = 'Ridenus kauliuka, issirito du';
        console.log('du');
    } else if (Math.floor(Math.random() * 6 + 1) == 3) {
        data22.value = 'Ridenus kauliuka, issirito trys';
        console.log('trys');
    } else if (Math.floor(Math.random() * 6 + 1) == 4) {
        data22.value = 'Ridenus kauliuka, issirito keturi';
        console.log('keturi');
    } else if (Math.floor(Math.random() * 6 + 1) == 5) {
        data22.value = 'Ridenus kauliuka, issirito penki';
        console.log('penki');
    } else if (Math.floor(Math.random() * 6 + 1) == 6) {
        data22.value = 'Ridenus kauliuka, issirito sesi';
        console.log('sesi');
    }
}



minus1DOM.addEventListener('click', minus1Click);
minus2DOM.addEventListener('click', minus2Click);

plus1DOM.addEventListener('click', plus1Cick);
plus2DOM.addEventListener('click', plus2Cick);

game1DOM.addEventListener('click', game1Click);
game2DOM.addEventListener('click', game2Click);

coin1.addEventListener('click', coin1Click);
coin2.addEventListener('click', coin2Click);

dice1.addEventListener('click', dice1Click);
dice2.addEventListener('click', dice2Click);



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


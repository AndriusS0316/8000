

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

const restart1 = document.querySelector(".restart1");
const restart11 = document.querySelector(".restart11");
const restart2 = document.querySelector(".restart2");
const restart22 = document.querySelector(".restart22");

number1DOM.innerText = rezultatas1;
number2DOM.innerText = rezultatas2;

function minus1Click() {
    if (data1.value === '') {
        return false;
    }
    data11.value = 'Iš ' + rezultatas1 + ' buvo atimta ' + parseInt(data1.value);
    rezultatas1 = rezultatas1 - parseInt(data1.value);
    number1DOM.innerText = rezultatas1;

    data1.value = '';

    if (rezultatas1 <= 0 && data222.value !== '') {
        alert("Laimėjo: " + data222.value)
    } else if (data222.value === '' && rezultatas1 <= 0) {
        alert("Laimėjo: antrasis žaidėjas")
    } 
}

function minus2Click() {
    if (data2.value === '') {
        return false;
    }
    data22.value = 'Iš ' + rezultatas2 + ' buvo atimta ' + parseInt(data2.value);
    rezultatas2 = rezultatas2 - parseInt(data2.value);
    number2DOM.innerText = rezultatas2;

    data2.value = '';

    if (rezultatas2 <= 0 && data111.value !== '') {
        alert("Laimėjo " + data111.value)
    } else if (data111.value === '' && rezultatas2 <= 0){
        alert("Laimėjo: pirmasis žaidėjas")
    }
}

function plus1Cick() {
    if (data1.value === '') {
        return false;
    }
    data11.value = 'Prie ' + rezultatas1 + ' buvo pridėta ' + parseInt(data1.value);
    rezultatas1 = rezultatas1 + parseInt(data1.value);
    number1DOM.innerText = rezultatas1;

    data1.value = '';
}

function plus2Cick() {
    if (data2.value === '') {
        return false;
    }
    data22.value = 'Prie ' + rezultatas2 + ' buvo pridėta ' + parseInt(data2.value);
    rezultatas2 = rezultatas2 + parseInt(data2.value);
    number2DOM.innerText = rezultatas2;

    data2.value = '';
}

function game1Click() {
    rezultatas1 = 8000;
    number1DOM.innerText = rezultatas1;

    data11.value = '';
    data111.value = '';

    document.getElementById("coin11").src="./IMG/coin/tuscia.png";
    document.getElementById("kauliukas11").src="./IMG/dice/tuscia.png";
}

function game2Click() {
    rezultatas2 = 8000;
    number2DOM.innerText = rezultatas2;

    data22.value = '';
    data222.value = '';

    document.getElementById("coin22").src="./IMG/coin/tuscia.png";
    document.getElementById("kauliukas22").src="./IMG/dice/tuscia.png";
}

function coin1Click() {
    if (Math.floor(Math.random() * 10 + 1) % 2 != 0) {
        
        console.log('herbas');
        
        data11.value = '';
        document.getElementById("coin11").src="./IMG/coin/loading.png";

        setTimeout(function(){
            document.getElementById("coin11").src="./IMG/coin/herbas.png"; 
            data11.value = 'Metus monetą, iškrito herbas';
        }, 1000);
        
    } else {
        console.log('skaičius');

        data11.value = '';
        document.getElementById("coin11").src="./IMG/coin/loading.png";

        setTimeout(function(){
            document.getElementById("coin11").src="./IMG/coin/skaicius.png"; 
            data11.value = 'Metus monetą, iškrito skaičius';
        }, 1000);
    }
} 

function coin2Click() {
    if (Math.floor(Math.random() * 10 + 1) % 2 != 0) {

        console.log('herbas');

        data22.value = '';
        document.getElementById("coin22").src="./IMG/coin/loading.png";

        setTimeout(function(){
            document.getElementById("coin22").src="./IMG/coin/herbas.png";
            data22.value = 'Metus monetą, iškrito herbas';
        }, 1000);
    } else {
        console.log('skaičius');

        data22.value = '';
        document.getElementById("coin22").src="./IMG/coin/loading.png";

        setTimeout(function(){
            document.getElementById("coin22").src="./IMG/coin/skaicius.png";
            data22.value = 'Metus monetą, iškrito skaičius';
        }, 1000);
    }
}

function dice1Click() {
    if (Math.floor(Math.random() * 6 + 1) == 1) {
        console.log('vienas');
        data11.value = '';

        document.getElementById("kauliukas11").src="./IMG/dice/loading.png";
        setTimeout(function(){
            data11.value = 'Ridenus kauliuką, išsirito vienas';
            document.getElementById("kauliukas11").src="./IMG/dice/1-vienas.png";
        }, 1000);
    } else if (Math.floor(Math.random() * 6 + 1) == 2) {
        console.log('du');
        data11.value = '';

        document.getElementById("kauliukas11").src="./IMG/dice/loading.png";
        setTimeout(function(){
            data11.value = 'Ridenus kauliuką, išsirito du';
            document.getElementById("kauliukas11").src="./IMG/dice/2-du.png";
        }, 1000);
    } else if (Math.floor(Math.random() * 6 + 1) == 3) {
        console.log('trys');
        data11.value = '';

        document.getElementById("kauliukas11").src="./IMG/dice/loading.png";
        setTimeout(function(){
            data11.value = 'Ridenus kauliuką, išsirito trys';
            document.getElementById("kauliukas11").src="./IMG/dice/3-trys.png";
        }, 1000);
    } else if (Math.floor(Math.random() * 6 + 1) == 4) {
        console.log('keturi');
        data11.value = '';

        document.getElementById("kauliukas11").src="./IMG/dice/loading.png";
        setTimeout(function(){
            data11.value = 'Ridenus kauliuką, išsirito keturi';
            document.getElementById("kauliukas11").src="./IMG/dice/4-keturi.png";
        }, 1000);
    } else if (Math.floor(Math.random() * 6 + 1) == 5) {
        console.log('penki');
        data11.value = '';

        document.getElementById("kauliukas11").src="./IMG/dice/loading.png";
        setTimeout(function(){
            data11.value = 'Ridenus kauliuką, išsirito penki';
            document.getElementById("kauliukas11").src="./IMG/dice/5-penki.png";
        }, 1000);
    } else if (Math.floor(Math.random() * 6 + 1) == 6) {
        console.log('šeši');
        data11.value = '';

        document.getElementById("kauliukas11").src="./IMG/dice/loading.png";
        setTimeout(function(){
            data11.value = 'Ridenus kauliuką, išsirito šeši';
            document.getElementById("kauliukas11").src="./IMG/dice/6-sesi.png";
        }, 1000);
    }
}

function dice2Click() {
    if (Math.floor(Math.random() * 6 + 1) == 1) {
        console.log('vienas');
        data22.value = '';

        document.getElementById("kauliukas22").src="./IMG/dice/loading.png";
        setTimeout(function(){
            data22.value = 'Ridenus kauliuką, išsirito vienas';
            document.getElementById("kauliukas22").src="./IMG/dice/1-vienas.png";
        }, 1000);
    } else if (Math.floor(Math.random() * 6 + 1) == 2) {
        console.log('du');
        data22.value = '';

        document.getElementById("kauliukas22").src="./IMG/dice/loading.png";
        setTimeout(function(){
            data22.value = 'Ridenus kauliuką, išsirito du';
            document.getElementById("kauliukas22").src="./IMG/dice/2-du.png";
        }, 1000);
    } else if (Math.floor(Math.random() * 6 + 1) == 3) {
        console.log('trys');
        data22.value = '';

        document.getElementById("kauliukas22").src="./IMG/dice/loading.png";
        setTimeout(function(){
            data22.value = 'Ridenus kauliuką, išsirito trys';
            document.getElementById("kauliukas22").src="./IMG/dice/3-trys.png";
        }, 1000);
    } else if (Math.floor(Math.random() * 6 + 1) == 4) {
        console.log('keturi');
        data22.value = '';

        document.getElementById("kauliukas22").src="./IMG/dice/loading.png";
        setTimeout(function(){
            data22.value = 'Ridenus kauliuką, išsirito keturi';
            document.getElementById("kauliukas22").src="./IMG/dice/4-keturi.png";
        }, 1000);
    } else if (Math.floor(Math.random() * 6 + 1) == 5) {
        console.log('penki');
        data22.value = '';

        document.getElementById("kauliukas22").src="./IMG/dice/loading.png";
        setTimeout(function(){
            data22.value = 'Ridenus kauliuką, išsirito penki';
            document.getElementById("kauliukas22").src="./IMG/dice/5-penki.png";
        }, 1000);
    } else if (Math.floor(Math.random() * 6 + 1) == 6) {
        console.log('šeši');
        data22.value = '';

        document.getElementById("kauliukas22").src="./IMG/dice/loading.png";
        setTimeout(function(){
            data22.value = 'Ridenus kauliuką, išsirito šeši';
            document.getElementById("kauliukas22").src="./IMG/dice/6-sesi.png";
        }, 1000);
    }
}


function restart1Click() {
    document.getElementById("coin11").src="./IMG/coin/tuscia.png";
}

function restart11Click() {
    document.getElementById("kauliukas11").src="./IMG/dice/tuscia.png";
}

function restart2Click() {
    document.getElementById("coin22").src="./IMG/coin/tuscia.png";
}

function restart22Click() {
    document.getElementById("kauliukas22").src="./IMG/dice/tuscia.png";
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

restart1.addEventListener('click', restart1Click);
restart11.addEventListener('click', restart11Click);
restart2.addEventListener('click', restart2Click);
restart22.addEventListener('click', restart22Click);



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


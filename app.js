// console.log(random());

let entier = document.getElementById("entier")
let flottant = document.getElementById("flottant")
let nonnum = document.getElementById("non-numerique");
let ran = document.getElementById("random");
let truc = document.getElementById("trunc");
let rep = document.getElementById("replace");
let operande = 10;

entier.innerHTML = parseInt(entier.innerHTML) * operande;

flottant.innerHTML= parseFloat(flottant.innerHTML * operande + parseInt(entier.innerHTML));

if (isNaN(nonnum)) {
    nonnum.innerHTML = '0';
}

for (let i=0; i < 5; i++) {
    ran.innerHTML = Math.random();
}

truc.innerHTML = Math.trunc(truc.innerHTML);

rep.innerHTML = rep.innerHTML.replace('world', 'Vanessa Nectoux');
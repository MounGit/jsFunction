// EXO1
// Créer une fonction qui prend deux paramètres, et les additionne, et fait un console.log du résultat.(Additionner)

let add = (nb1, nb2) => {
    return nb1 + nb2;
};
console.log(add(3,8));

// EXO2
// Créez une fonction qui prend deux paramètres, et soustrait le deuxième au premier, et faites un console.log du résultat.(Soustraction)

let soustr = (nb1, nb2) => {
    return nb1 - nb2
};
console.log(soustr(1,4));

// EXO3
// Créez une fonction qui prend deux paramètres, et les multiplie, et faites un console.log du résultat.(Multiplication)
let mult = (nb1, nb2) => {
    return nb1 * nb2;
};
console.log(mult(4,7));

// EXO4 
// Créez une fonction qui prend deux paramètres, et divise le premier par le deuxième, et faites un console.log du résultat.(Division)
let div = (nb1, nb2) => {
    return nb1 / nb2;
};
console.log(div(9, 3));


// EXO5
// Créez une fonction qui prend deux paramètres, et retourne le reste de la division du premier par le deuxième, et faites un console.log du résultat.(Modulo)
let mod = (nb1, nb2) => {
    return nb1 % nb2;
};
console.log(mod(9, 4));

// EXO6
// Créez une fonction qui prend un paramètre, et retourne le carré de ce nombre, et faites un console.log du résultat.(Racine carrée)
let rac = (nb1) => {
    return Math.sqrt(nb1);
}
console.log(rac(9));

// EXO7
// Créez une fonction qui prend deux paramètres, et retourne le premier nombre à l'exposant du deuxième, et faites un console.log du résultat.(Exposant)

let expo = (nb1, nb2) =>{
    return Math.pow(nb1, nb2);
};
console.log(expo(3,2));

// EXO8
// Créer une function [capitalize] qui transforme n'importe quelle chaine de caractères avec la première lettre en majuscule et le reste en minuscule;

let cap = (string) =>{
    return string.charAt(0).toUpperCase()+ string.substr(1).toLowerCase();
};
console.log(cap("hello les geNs"));

// EXO9
// Créer une function [calcul] ayant 3 paramètres
// nbr1 , operator , nbr2
// Je dois pouvoir mettre un nombre choisir entre + - * ou / et un second nombre et obtenir une réponse (Utilisez un switch)

let calc = (nb1, op, nb2) =>{
    let result;
    switch(op){
        case "+":
            result = nb1 + nb2;
            break;
        case "-":
            result = nb1 - nb2;
            break;
        case "*":
            result = nb1 * nb2;
            break;
    };
    return result

};
// console.log(calc(2, prompt("operateur"), 3));


// EXO1
// Créer une function [reverseNumber] qui retourne une série de nombre à l'envers (exemple si j'entre 851 elle me retourne 158)

let reverseNumber = (nb1) =>{
    return nb1.toString().split('').reverse().join('');
};
console.log(reverseNumber(123));

// EXO2
// Créer une function [divPar2] contenant un switch qui vérifie si un nombre est divisible par 2
// Qui répond "Le num x est divisible par 2 x:2 = z"
// Dans le cas ou ce n'est pas divisible il répond : "Ce nombre n'est pas divisible par 2"

let divPar2 = (nb) => {
    let calc = nb % 2;
    switch(calc){
        case 0:
            return `${nb} est divisible par 2 : ${nb}/2 = ${nb / 2}`;
        default:
            return `Ce nombre n'est pas divisible par 2`;
    };
};
console.log(divPar2(parseInt(prompt("Choisissez un nombre"))))

// EXO3
// Créer une fonction [logIn] qui va demander à l'utilisateur un mot de passe et vérifier s'il a bien entré "mdp" si oui, faites une alert "Vous êtes connecté", si non, redemander le mot de passe jusqu'à ce que l'utilisateur rentre "mdp"

// let logIn = (mdp) =>{
//     let motDePasse = mdp;

//     while(motDePasse != "mdp"){
//         motDePasse = prompt("Mot de passe incorrect ! Veuillez réessayer")
//     }
//     return alert("Vous êtes connecté")
// };
// console.log(logIn(prompt("entrez votre mot de passe")));

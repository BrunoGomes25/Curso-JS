/*
luiz Otavio Miranda tem 30 anos, pesa 84 kg
tem 1.80 de altura e seu IMC é de 25.925925925925924
Luiz Otavio nasceu em 1980
*/
const nome = 'luiz Otavio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const alturaEmM = 1.80;
let imc; // peso / (altura * altura)
let anoNascimento;

 imc = peso/(alturaEmM * alturaEmM);
 console.log(imc);
 anoNascimento = 2023 - idade;
 console.log(anoNascimento)

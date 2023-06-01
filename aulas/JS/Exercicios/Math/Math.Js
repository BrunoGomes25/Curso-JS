 const numero = Number(prompt("digite um numero amigou"));
 const numeroTitulo = document.getElementById("Digite seu numero");
 const texto = document.getElementById("texto");
/**
 *  raiz quedrada
 * numero é inteiro?
 * é NAN?
 * Arrendondando para baixo:
 * arredondando para cima:
 * com duas casas decimais:
*/
 numeroTitulo.innerHTML = numero;
 texto.innerHTML += `<p> Raiz quadrada: ${numero ** 0.5}. </p>` 
 texto.innerHTML += `<p> ${numero}: é inteiro ${Number.isInteger(numero)}. </p>`
 texto.innerHTML += `<p> Arredondando para baixo: ${Math.floor(numero)}. </p>`
 texto.innerHTML += `<p> Arredondando para cima: ${Math.ceil(numero)}. </p>`
 texto.innerHTML += `<p> com duas casas decimais ${numero.toFixed(2)}. </p>`

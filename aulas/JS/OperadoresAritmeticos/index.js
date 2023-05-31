/* operadores aritmeticos
+ adiçao e concatenaçao
- subtraçao
* multiplicaçao
/ divisao
** potenciaçao
% resto da divisao
*/


const num1=5;
const num2=10;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 ** num2);
console.log(num1 % num2);

/* precedencia
ordem
()   executado primeiro
**   executado segundo
* % / executado terceiro
+ - executado quarto
*/ 
console.log(num1 + num2 * num2)
console.log((num1 + num2) * num2)

/* operadores de incremento
 ++ incrementa +1
 -- decrementa -1
*/

let contador = 10;
contador ++
contador ++
console.log(contador)

contador --
contador --
contador --
contador --
console.log(contador)

/* operadores de atribuiçao
+= contador = contador * X
*/
 console.log(contador *= 2)

// Projeto calcular média da nota


const nota1 = 7; // Nota da primeira materia
const nota2 = 7; // Nota da segunda materia
const nota3 = 8; // Nota da terceira materia
const notaMedia = (nota1 + nota2 + nota3) / 3 // Soma das médias
console.log(notaMedia); 

if (notaMedia < 5) {  // Valor da nota média para reprovação
    console.log('Reprovado');
} else if (notaMedia >= 5 && notaMedia < 7) { // Valor da nota média para recuperação
    console.log('Recuperação')
} else {
    console.log('Aprovado') // Aprovado
}
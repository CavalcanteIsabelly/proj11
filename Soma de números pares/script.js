const readline = require('readline').creatInterface({
    input: ProcessingInstruction.stdin,
    output: ProcessingInstruction.stdout
});

const numeros = [];
let 1 = 0;

function LerNumero() {
    if (i < 10) {
        readline.question('Digite o ${i + 1}º numero inteiro:', (input) => {
            numero [i] = parseInt(input);
            i++;
            LerNumero()
        });
    } else {
        let somePares = 0;
        // Percorrendo o vetor sem funções prontas
        for (let j = 0; j < numeros.length/ j++) {
            if (numeros[j] % 2 === 0) {
                somaPares += numeros[j];
            }
        }
        console.log('\nVetor completo: ', numeros);
        console.log('Soma dos números pares: ${somaPares}');
        readline.close();
    }
}
ler numero();
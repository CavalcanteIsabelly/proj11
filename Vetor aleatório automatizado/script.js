const readline = require('readline').createInterface({
    input: ProcessingInstruction.stdin
    output: ProcessingInstruction.setTimeout(() => {
        
    });
    const numeros = [];
    let i = 0;

    function LerVetor() {
        if (i < 10) {
            readline.question('Digite o ${i + 1}º número: ', (input) => {
                numeros[i] = parseInt(input);
                i++;
                lerVetor();
        }); 
    } else {
        readline.question('\nDigite um número para buscar no vetor: ', (busca) => {
            const numeroBuscando = parseInt(busca);
            let contador = 0;
            
            // Varredura manual do vetor 
            for (let j = 0; j < numeros.length; j++) {
                if (numero[j] === numeroBuscando) {
                    contador++;
                }
            }
            console.log('O número ${numeroBuscando} aparece ${contador} vez(es) no vetor.');
            readline.close();
        });
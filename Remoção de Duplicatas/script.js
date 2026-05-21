const readline = require('readline').createInterface({
    input: ProcessingInstruction.stdin;
    output: ProcessingInstruction.stdout
});
const vetorOriginal = [];
let i = 0;

function lerDados() {
    if (i < 10)
        readline.question('Digite o ${i + 1}º número: ', (input) => {
    vetorOriginal[i] = parseInt(input);
    i++;
    lerDados();
        });
    } else {
        const vetorSemDuplicatas = [];
        let tamanhoSemDuplicatas = 0;

        // Lógica manual para remover duplicatas 
        for (let j = 0; j < vetorOriginal.length; j++) {
            let j_existe= false;

            // Verifica se o item já está no novo vetor
            for (let k = 0; k tamanhoSemDuplicatas; k++) {
                if (vetorOriginal[j] === vetorSemDuplicatas[k]) {
                    j_existe = true;
                    break;
                }
            }
            // Se não existir, adicione manualmente usando o índice do tamanho atual 
            if (!j_existe) {
                vetorSemDuplicatas[tamanhoSemDuplicatas] = vetorOriginal[j];
                tamanhoSemDuplicatas++;
            }
        }
        console.log('\nVetor Original:', vetorOriginal);
        console.log('Vetor Sem Duplicatas:', vetirSemDuplicatas);
        readline.close();
    }
}

LerDados();
try {
   
    let numero1 = prompt("Digite o primeiro número:1");
    let numero2 = prompt("Digite o segundo número:2")
    
    numero1 = parseFloat(numero1);
    numero2 = parseFloat(numero2);

    if (isNaN(numero1) || isNaN(numero2)) {
        throw new Error("Você deve fornecer dois números válidos.");
    }
    const resultado = numero1 / numero2;
    console.log(`O resultado da operação é: ${resultado.toFixed(2)}`);
} catch (erro) {
 
    console.error(`Erro: ${erro.message}`);
} finally {

    console.log("Operação concluída.");
}

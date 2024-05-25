let listaDeNumerosSortiados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativa = 1;

function exibirNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function mensagemInicial(){
    exibirNaTela('h1', 'jogo do número secreto');
    exibirNaTela('p', 'escolha um número de 1 a 10');    
}

mensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    
    if(chute == numeroSecreto){
        exibirNaTela('h1, você acertou');
        let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `você descobriu o número secreto com ${tentativa} ${palavraTentativa}`;
        exibirNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if(chute > numeroSecreto){
            exibirNaTela('p', 'o número secreto é menor');
        } else {
            exibirNaTela('p', 'número secreto é maior');
        }
        tentativa++;
        limparCampo();
    } 
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementoNaLista = listaDeNumerosSortiados.length;

    if(quantidadeDeElementoNaLista == numeroLimite){
        listaDeNumerosSortiados = [];
    }
    if(listaDeNumerosSortiados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else{
        listaDeNumerosSortiados.push(numeroEscolhido);
        console.log(listaDeNumerosSortiados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativa= 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
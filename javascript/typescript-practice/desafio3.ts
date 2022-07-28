export{}

let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let somaValor: number = +(<HTMLInputElement>document.getElementById('soma')).value;
let campoSaldo = document.getElementById('campo-saldo');
let saldoTotal = 0;

limparSaldo();

function somarAoSaldo(soma: number){
    if(campoSaldo){
        saldoTotal += soma;
        campoSaldo.innerHTML = saldoTotal.toString();
        limparSoma();
    }
}

function limparSoma(){
    if(soma){
        soma.innerHTML = "";    
    }
}

function limparSaldo(){
    if(campoSaldo){
        saldoTotal = 0;
        campoSaldo.innerHTML = saldoTotal.toString();
    }
}

if(botaoAtualizar){
    botaoAtualizar.addEventListener('click', () => {
        somarAoSaldo(somaValor);
    });
}

if(botaoLimpar){
    botaoLimpar.addEventListener('click', () => {
        limparSaldo();
    });
}
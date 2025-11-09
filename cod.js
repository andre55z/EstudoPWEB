

function inverter(){
    let nomeInv = document.getElementById("inputnome").value;
    let saidaInv = document.getElementById("saidaInv");

    nomeInv = nomeInv.split('').reverse().join('');
    saidaInv.innerHTML = `<p>O nome invertido é ${nomeInv}</p>`
}

function contar(){
    let nomeCon = document.getElementById("conttxt").value;
    let saidaCon = document.getElementById("saidaCon");

    saidaCon.innerHTML = `<p>O jogador ${nomeCon} tem ${nomeCon.length} letras no nome</p>`

}

function criar(){
    let nomejo = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let posicao = document.getElementById("posicao").value;
    let timeb = document.getElementById("timeb").value;
    let timea = document.getElementById("timea").value;
    let gols = document.getElementById("gols").value;
    let assistencias = document.getElementById("assistencias").value;

    class Jogador{
        constructor(nm, idade, posicao, timeb){
            this._nome = nm;
            this._idade = idade;
            this._pos = posicao;
            this._timeb = timeb;
        }

        getNome(){
            return this._nome;
        }

        getIdade(){
            return this._idade;
        }

        getPosicao(){
            return this._pos;
        }

        getTimeBase(){
            return this._timeb;
        }

        setTimeAtual(timea){
            this._timea = timea;
        }

        setGols(gols){
            this._gols = gols;
        }

        setAssistencias(ass){
            this._ass = ass;
        }

        getAssistencias(){
            return this._ass;
        }

        getGols(){
            return this._gols;
        }

        getTimeAtual(){
            return this._timea;
        }
    }

    let objJogador = new Jogador(nomejo, idade, posicao, timeb);
    objJogador.setAssistencias(assistencias);
    objJogador.setGols(gols);
    objJogador.setTimeAtual(timea);

    let saidaJ = document.getElementById("montaP");
    saidaJ.innerHTML = `<p>Nome: ${objJogador.getNome()}<br> Idade: ${objJogador.getIdade()} anos<br> Posição: ${objJogador.getPosicao()}<br> Time de Base: ${objJogador.getTimeBase()} <br> Time atual: ${objJogador.getTimeAtual()} <br> Total de gols: ${objJogador.getGols()} <br> Total assistências: ${objJogador.getAssistencias()}</p>`
}

let lista = [];

function adc(){
    let jogador = document.getElementById("adc").value;
    lista.push(jogador);
}

function cresc(){
    let p = document.getElementById("saidaLista")
    p.innerHTML = `<p>${lista.sort((a,b)=>{return a-b})}</p>`;
}

function decresc(){
    let p = document.getElementById("saidaLista")
    p.innerHTML = `<p>${lista.sort((a,b)=>{return b-a})}</p>`;
}


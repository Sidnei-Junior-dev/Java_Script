let num= document.getElementById('num');
let lista= document.getElementById('lista');
let res= document.getElementById('res');
let valor= [];

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true;
    }else{
        return false;
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true;
    }
    else{
        return false;
    }
}

function add(){
    if(isNumero(num.value) && !inLista(num.value, valor)){
        valor.push(Number(num.value));
        let item= document.createElement('option');
        item.text= `Valor ${num.value} adicionado.`;
        lista.appendChild(item);
        res.innerHTML= "";
    }else{
        alert('Valor inválido ou já encontrado na lista.')
    }
    num.value= "";
    num.focus();
}

function fim(){
    if(valor.length == 0){
        alert('Adicione valores antes de finalizar!');
    }
    else{
        let tot= valor.length;
        let maior= valor[0];
        let menor= valor[0];
        let soma= 0;
        let media= 0;
        for(var pos= 0; pos < valor.length; pos++){
            if(valor[pos] > maior){
                maior = valor[pos];
            }
            if(valor[pos] < menor){
                menor = valor[pos];
            }
            soma += valor[pos];
            media = soma / tot;
        }
        res.innerHTML= "";
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`;
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`;
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`;
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`;
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`;
    }
}
var idade= 65;
console.log(`A sua idade é ${idade} logo`);
if(idade < 16){
    console.log('Não vota.');
}else if(idade < 18 || idade > 65){
    console.log('Voto opcional.');
}else{
    console.log('Voto obrigatório.');
}
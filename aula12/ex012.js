var horas= new Date();
var agora= horas.getHours();
console.log(`Agora são exatamente ${agora} horas`);
if(agora < 6){
    console.log('Boa madrugada');
}else if(agora < 12){
    console.log('Bom dia');
}else if(agora <= 18){
    console.log('Boa Tarde');
}else{
    console.log('Boa noite');
}
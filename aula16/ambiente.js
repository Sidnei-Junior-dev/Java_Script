let num=[5, 8, 3, 2];

console.log(num);
console.log(`O vetor tem ${num.length} posições.`);

let pos=num.indexOf(3);
if(pos == -1){
    console.log('Não encontrado')
}else{
    console.log(`valor na posição ${pos}`)
}
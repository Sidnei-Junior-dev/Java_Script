function contar(){
    var ini= document.getElementById('ini');
    var fim= document.getElementById('fim');
    var pas= document.getElementById('pas');
    var res= document.getElementById('res');
    if(ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
        res.innerHTML = 'Impossível contar!'
    }else{
        res.innerHTML = 'Contando: <br>'
        i= Number(ini.value);
        f= Number(fim.value);
        p= Number(pas.value);
        if(i < f){
            for(var c= i; c<= f; c+=p){
                res.innerHTML += ` ${c} `;
            }
        }else{
            for(var c= i; c>=f; c-=p){
                res.innerHTML += ` ${c} `;
            }
        }
        res.innerHTML += `\u{1F3C1}`;
    }
}
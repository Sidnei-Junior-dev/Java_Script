function verificar(){
    var data= new Date();
    var ano= data.getFullYear();
    var fano= document.getElementById('txtano');
    var res= document.getElementById('res');
    if(fano.value.length == 0 || Number(fano.value) > ano){
        alert('[ERRO] Verifique os dados e tente novamente!');
    } else{
        var fsex= document.getElementsByName('radsex');
        var idade= ano - Number(fano.value);
        var genero= '';
        var img= document.createElement('img');
        img.setAttribute('id', 'foto');
        if(fsex[0].checked){
            if(idade >= 0 && idade < 10){
                genero='Criança';
            }
            else if(idade < 21){
                genero='Jovem';
            }
            else if(idade < 50){
                genero='Adulto';
            }
            else{
                genero='Idoso';
            }
            img.setAttribute('src', 'gg.jpg');
        } else if(fsex[1].checked){
            if(idade >= 0 && idade < 10){
                genero='Criança';
            }
            else if(idade < 21){
                genero='Jovem';
            }
            else if(idade < 50){
                genero='Adulta';
            }
            else{
                genero='Idosa';
            }
            img.setAttribute('src', 'gg.jpg');
        }
        res.innerHTML= `Detectamos um(a) ${genero} com ${idade} anos.`
        res.appendChild(img);
    }
}
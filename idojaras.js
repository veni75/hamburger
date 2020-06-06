let hofokok=[10,20,30,0,-10,-20, 15];
function atlagHomerseklet(){
    let osszhom=0;
    for (let i = 0; i < hofokok.length; i++) {
        osszhom += hofokok[i];
        
    }
    let atlag = osszhom/hofokok.length;
    atlag = atlag.toFixed(1);
    document.querySelector("#atlag").innerHTML= atlag;
    document.querySelector("#atlagfahren").innerHTML=fahrenheit(atlag);
}

function minHomerseklet(){
    let minHom = hofokok[0];
    for (let i = 0; i < hofokok.length; i++) {
        if(hofokok[i]<minHom){
            minHom = hofokok[i];
        }
        
    }
    
    document.querySelector("#min").innerHTML= minHom;
    document.querySelector("#minfahren").innerHTML=fahrenheit(minHom);
}

function maxHomerseklet(){
    let maxHom = hofokok[0];
    for (let i = 0; i < hofokok.length; i++) {
        if(hofokok[i]>maxHom){
            maxHom = hofokok[i];
        }
        
    }
    
    document.querySelector("#max").innerHTML= maxHom;
    document.querySelector("#maxfahren").innerHTML=fahrenheit(maxHom);
}

function fahrenheit(celsius){
    return (celsius*1.8+32).toFixed(1);
}

let ajandekok = ["forró csoki","meleg tea","hideg tea","fagyi"]
let ajandekom = "";
function ajandek(){
    let day = parseInt(document.querySelector('#napok').selectedIndex)-1;
    let napihofok = hofokok[day];
    if(napihofok<0){
        ajandekom = ajandekok[0];
    }else if(napihofok<15){
        ajandekom = ajandekok[1];
    }else if(napihofok<25){
        ajandekom = ajandekok[2];
    }else if(napihofok>=25){
        ajandekom = ajandekok[3];
    }else{
        alert("Valami hiba történt");
    }
    document.querySelector('#ajandekok').innerHTML = ajandekom+" "+napihofok+"C";
}
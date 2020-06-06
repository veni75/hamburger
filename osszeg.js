function osszeg() {
    let darab = parseInt(document.querySelector('#darab').value);
    let feltet = parseInt(document.querySelector('[name=feltet]:checked').value);
    let szosz = parseInt(document.querySelector('[id=szosz]').value);
    let ar = 1000;
    let osszeg = (ar+feltet+szosz)*darab;
    if(osszeg<5000){
        osszeg = osszeg+500;
        document.querySelector('#hazhoz').innerHTML = "Házhoszállítás 500 Ft";
    }else{
        document.querySelector('#hazhoz').innerHTML = "Házhoszállítás 0 Ft";
    }
    document.querySelector('#osszeg').innerHTML = osszeg;
}


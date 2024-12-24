const cadena = prompt("Favor ingrese una palabra")

let contador=0
for(let p of cadena.toLowerCase()){
 
    if((p ==='a') || (p==='e') || (p==='i')|| (p ==='o')|| (p==='u')){
        contador+=1
    }   
 
}
console.log("cantidad de vocales", contador)

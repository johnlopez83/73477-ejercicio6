const enteros= prompt("Favor ingrese números enteros:")

let acum = 0
for(let i=0; i<=enteros; i++){
    acum = acum + i
    if(acum >= 100){
        break
    }
    console.log(acum)
}
   console.log("Total acumulado: ",acum)
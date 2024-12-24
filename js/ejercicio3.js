
let numberUser = +prompt("Digite un número del 1 al 100")

let mult = 0
for(let numero =1; numero <= numberUser; numero++){
    
    mult = mult * numero
    if(mult >= 1000){
        break
     }
     console.log(mult)
     mult++
}

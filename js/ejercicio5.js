const numeros = [23, 45, 12, 67, 34, 89, 21]

let numMayor = 0


console.log("Números ingresados", numeros)

for(let i=0; i<= numeros.length; i++){
    
    if(numeros[i] > numMayor){
        numMayor = numeros[i]
    }
    
}
console.log("El número mayor es: ", numMayor)

let numMenor = numMayor

for(let j=0; j<= numeros.length; j++){
    
    if(numeros[j] < numMenor){
        numMenor = numeros[j]
    }
    
}
console.log("El número menor es: ", numMenor)
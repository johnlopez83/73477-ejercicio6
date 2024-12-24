
for (let i=0; i<=30; i++){
    //Número aleatorio
    let valor= Math.ceil(Math.random() * 10) 

    //Datos de entrada
    const numero =+prompt("Ingrese un número")
    //Impresion por consola
    console.log(`Dato ingresado por el usuario: ${numero}`)
    console.log(`Valor generado por el sistema: ${valor}`)
    
    //Calculos
    if(numero === valor ){
        console.log("Felicidades Adivinaste!!!")
        break
    }else if(numero > valor){
        console.log("El número ingresado es mayor")
    }else{
        console.log("El número ingresado es menor")
        }
    
        
}
        
    
    
    
   
   






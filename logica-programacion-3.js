
function factoriales() {
    let numero = parseFloat(prompt("Ingrese un numero para calcular la factorial: "));
    if (isNaN(numero)) {
        alert("Ingrese un numero");
        return;
    } else {
        let factorial = 1;
        for (let i = 1; i <= numero; i++) {
            factorial *= i;
        }
    alert("El factorial de " + numero + " es: " + factorial);        
    
    } 
};

factoriales();
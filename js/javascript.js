var miBoton = document.querySelector("#enviar");
var miForm = document.querySelector("#formulario");

miBoton.addEventListener("click", (evento) => {
    evento.preventDefault();
    valido = validar();

    if(valido == true){
        miForm.submit();
    }
})


function validar(){
    // DECLARAMOS LAS VARIABLES QUE VAMOS A UTILIZAR
    var name = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellidos").value;
    var telefono = document.getElementById("telefono").value;
    var email = document.getElementById("email").value;
    var privacidad = document.getElementById("privacidad");
    var elecciones =document.getElementById("eleccion").value;
    var plazo =document.getElementById("plazo").value;


    // REALIZAMOS LAS COMPROBACIONES DE CADA CAMPO

    // NOMBRE
    if(name == null || name == ""){
        alert("El campo nombre no puede estar en blanco");
        return false;
    } 

    let name_re = /^[a-zA-Z ]{2,30}$/;
    if(!name_re.exec(name)){
        alert("Los datos introducidos en el campo nombre no son correctos. Recuerda que sólo puede estar compuesto por letras");
        return false;
    }
    
    // DIRECCION
    if (apellido == null || apellido == ""){
        alert("El campo apellido no puede estar en blanco");
        return false;
    }

    // EMAIL
    if(email == null || email== ""){
        alert("El campo email no puede estar en blanco");
        return false;
    }

    let email_re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(!email_re.exec(email)){
        alert("Los datos introducidos en el campo email no son correctos");
        return false;
    }
    // TELEFONO
    if (telefono == null || telefono == ""){
        alert("El campo teléfono no puede estar en blanco");
        return false;
    }

    let tel_re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3}$/
    if(!tel_re.exec(telefono)){
        alert("Los datos introducidos en el campo teléfono no son correctos.Solo pueden usarse 9 números.");
        return false;
    }
    
    if(elecciones=="0"){
        alert("Tienes que marcar una opción en el producto.");
        return false;

    }

    if(plazo== "0" ){
        alert("Debes seleccionar un plazo de entrega; recuerda que el plazo superior a 10 día tiene un descuento de 4€");
        return false;
    }

    if(!privacidad.checked){
        alert("Tienes que aceptar las condiciones");
        return false;
    }



   
    // En caso de que todos los datos sean correctos, se envía el formulario
    return true;
} 
    function actualizar(){

        var nuevo_pres;

        if(eleccion.value=='1'){
        presupuesto.value =10;
        alert(" Se ha actualizado el presupuesto.");
        }
        if(eleccion.value=='2'){
            presupuesto.value =12;
            alert(" Se ha actualizado el presupuesto.");
        }
        if(eleccion.value=='3'){
            presupuesto.value =7;
            alert(" Se ha actualizado el presupuesto.");
        }

        if(plazo.value >= 10){
            nuevo_pres= presupuesto.value -4;
            presupuesto.value= nuevo_pres;
            alert("Se ha aplicado un descuento de 4€ por el plazo de entrega superior a 10 días."); 
        }
    
    }
        
    function actualizartipo(){

        var nuevo_pres;
   
        if(tipog.checked){
            nuevo_pres =parseInt(presupuesto.value);
            presupuesto.value= nuevo_pres + 3; 
            alert("Se ha modificado el presupuesto debido a un extra.");
        }
        else{
            nuevo_pres= presupuesto.value -3;
            presupuesto.value = nuevo_pres;
            alert("Se ha modificado el presupuesto por un extra.");
        }
    }

    function actualizarcolor(){
       var nuevo_pres;
        if(color.checked){
            nuevo_pres =parseInt(presupuesto.value);
            presupuesto.value= nuevo_pres + 4; 
            alert("Se ha modificado el presupuesto debido a un extra.");
        }
        else{
            nuevo_pres= presupuesto.value -4;
            presupuesto.value = nuevo_pres;
            alert("Se ha modificado el presupuesto por un extra.");
        }
    }
     
    function actualizarLogo(){
        var nuevo_pres;

      if(logo.checked){
            nuevo_pres =parseInt(presupuesto.value);
            presupuesto.value= nuevo_pres + 9; 
            alert("Se ha modificado el presupuesto debido a un extra.");
        }
        
        else{
            nuevo_pres= presupuesto.value -9;
            presupuesto.value = nuevo_pres;
            alert("Se ha modificado el presupuesto por un extra.");
        
        }   
    }

    function actualizarNyn(){
        var nuevo_pres;

        if(nyn.checked){
            nuevo_pres =parseInt(presupuesto.value);
            presupuesto.value= nuevo_pres + 5; 
            alert("Se ha modificado el presupuesto debido a un extra.");
        }

        else{
            nuevo_pres= presupuesto.value -5;
            presupuesto.value = nuevo_pres;
            alert("Se ha modificado el presupuesto por un extra.");
        }

        
    }

        
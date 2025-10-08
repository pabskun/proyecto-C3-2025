
let imc = 0;
function validarFormularioImc(){
    let error = false;
    let inputPeso = document.getElementById('txtPeso');
    let inputEstatura = document.getElementById('txtEstatura');

    if(inputPeso.value == ""){
        error = true;
        inputPeso.classList.add('input-error');
    }else{
        inputPeso.classList.remove('input-error');
    }

    if(inputEstatura.value == ""){
        error = true;
        inputEstatura.classList.add('input-error');
    }else{
        inputEstatura.classList.remove('input-error');
    }

    if(error == true){
        Swal.fire({
            'title': 'No se puede realizar el cálculo',
            'text': 'Por favor revise los campos resaltados',
            'icon': 'warning'
        });
    }else{
        calcularImc();
    }

}

function calcularImc(){
    let peso = document.getElementById("txtPeso").value;
    let estatura = document.getElementById("txtEstatura").value;

    imc = peso / Math.pow(estatura,2);
    

    document.getElementById("txtImc").value = imc.toFixed(2);

    let clasificacion = clasificarImc();

    document.getElementById("txtClasificacion").value = clasificacion;

}

document.getElementById("btnCalcularImc").addEventListener('click', validarFormularioImc);


function clasificarImc(){
    let clasificacionImc = '';
    if(imc < 18.5){
        clasificacionImc = 'Bajo de peso';
    }else{
        if(imc >= 18.5 && imc < 24.9){
            clasificacionImc = 'Normal';
        }else{
            if(imc >= 24.9 && imc < 29.9){
                clasificacionImc = 'Sobrepeso';
            }else{
                clasificacionImc = 'Obesidad';
            }
        }
    }
    return clasificacionImc;
}




/*
Calcule el área de una figura geométrica.
El usuario selecciona el tipo de figura: 1 (Cuadrado), 2 (Rectángulo), 3 (Círculo).
Dependiendo de la figura se pide calcular el área correspondiente.
Cree las variables lado, base, altura, radio
Utilice la estructura switch case para realizar los cálculos respectivos.
circulo PI (Math.PI) * radio ^2
*/
function calcularArea(){
    let opcion = document.getElementById("sltFigura").value;
    let area = 0 ;

    //Valores de prueba
    let lado = document.getElementById("txtLado").value;
    let base = document.getElementById("txtBase").value;
    let altura = document.getElementById("txtAltura").value;
    let radio = document.getElementById("txtRadio").value;

    switch(opcion){
        case "1":
            //Cuadrado
            area = lado * lado;
        break;

        case "2":
            //Rectángulo
            area = base * altura;
        break;
        case "3":
            //Círculo
            area = Math.PI * Math.pow(radio,2);
        break;
    }
    document.getElementById("txtArea").value = area;
}

document.getElementById("btnCalcularArea").addEventListener('click', calcularArea);
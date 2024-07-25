function calculadora(){
    let valor1= document.getElementById("valor1").value;
    let valor2= document.getElementById("valor2").value;
    let valor3= document.getElementById("valor3").value;
    let valor4= document.getElementById("valor4").value;
    let operacao=document.getElementById("operacao").value;
    let resultado;

    if (valor1 == "" || valor2 == "" || valor3 == "" || valor4==""){
        alert("Por favor, preencha todos os campos!");
    }
    else{
        if(operacao == 1){
          resultado= parseFloat(valor1) + parseFloat(valor2) + parseFloat(valor3) + parseFloat(valor4);

        }else{
            if(operacao == 2){
                resultado = (valor1 - valor2 - valor3 - valor4);
            }else{
                if (operacao == 3){
                    resultado = (valor1 * valor2 * valor3 * valor4);
                }else{
                    if (operacao==4){
                        resultado = (valor1 / valor2 / valor3 / valor4);
                    }
                  else{
                    resultado=(parseFloat(valor1) + parseFloat(valor2) + parseFloat(valor3) + parseFloat(valor4))/4
                  }  
            }
        }
    }
    document.getElementById("resultado").value = resultado.toFixed(2);
    }
}
        
function limparCampo(){
        document.getElementById("valor1").value="";
        document.getElementById("valor2").value="";
        document.getElementById("valor3").value="";
        document.getElementById("valor4").value="";
        document.getElementById("operacao").value = "";
        document.getElementById("resultado").value = "";
}
 
   
const paraCaO2yCvO2_1 = 1.34;
const paraCaO2yCvO2_2 = 0.003;
const paraIO2yGC_1    = 100;
const paraGradiente_1 = 0.8;
const paraVO2_1       = 10;

class CAO2{
    
    constructor(hb, sao2, pao2){
        this.paraCaO2yCvO2_1 = paraCaO2yCvO2_1;
        this.paraCaO2yCvO2_2 = paraCaO2yCvO2_2;
        this.hb = hb;
        this.sao2 = sao2;
        this.pao2 = pao2;
    }

    //Getter
    get Cao2(){
        return this.CalcularCao2();
    }

    //Metodo
    CalcularCao2(){
        return (this.hb*this.paraCaO2yCvO2_1*this.sao2) + (this.paraCaO2yCvO2_2*this.pao2);
    }

}

document.getElementById("cao2Const1").value = paraCaO2yCvO2_1;
document.getElementById("cao2Const2").value = paraCaO2yCvO2_2;

function CalcularCao2(){
    let cao2Hb = document.getElementById("cao2Hb").value;
    console.log(cao2Hb);
    let cao2Sao2 = document.getElementById("cao2Sao2").value;
    let cao2Pao2 = document.getElementById("cao2Pao2").value;
    if(cao2Hb == '' || cao2Sao2 == '' || cao2Pao2 == ''){
        //console.log("Calculo CaO2: Falta ingresar uno varios datos.");
        alert("Calculo CaO2: Falta ingresar uno varios datos.");
    }else{
        const resultado = new CAO2(cao2Hb, cao2Sao2, cao2Pao2);
        document.getElementById("cao2Resultado").value = resultado.Cao2;
    }
}
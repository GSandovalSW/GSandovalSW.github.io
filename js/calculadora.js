const paraCaO2yCvO2_1 = 1.34;
const paraCaO2yCvO2_2 = 0.003;
const paraIO2yGC_1    = 100;
const paraGradiente_1 = 0.8;
const paraVO2_1       = 10;

document.getElementById("cao2Const1").value = paraCaO2yCvO2_1;
document.getElementById("cao2Const2").value = paraCaO2yCvO2_2;
document.getElementById("cvo2Const1").value = paraCaO2yCvO2_1; 
document.getElementById("cvo2Const2").value = paraCaO2yCvO2_2;
document.getElementById("io2Const1").value = paraIO2yGC_1;
document.getElementById("gradienteConst1").value = paraGradiente_1;
document.getElementById("gcConst1").value = paraIO2yGC_1;
document.getElementById("vo2Const1").value = paraVO2_1;

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

function CalcularCao2(){
    let cao2Hb = document.getElementById("cao2Hb").value;
    console.log(cao2Hb);
    let cao2Sao2 = document.getElementById("cao2Sao2").value;
    let cao2Pao2 = document.getElementById("cao2Pao2").value;
    if(cao2Hb == '' || cao2Sao2 == '' || cao2Pao2 == ''){
        //console.log("Calculo CaO2: Falta ingresar uno varios datos.");
        alert("Calculo CaO2: Falta ingresar uno o más datos para calcular Cao2.");
    }else{
        const resultado = new CAO2(cao2Hb, cao2Sao2, cao2Pao2);
        document.getElementById("cao2Resultado").value = resultado.Cao2;

        //pasar el resultado al input para Delta
        document.getElementById("deltaCao2").value = resultado.Cao2;

        //pasar el resultado al input CaO2 de EO2
        document.getElementById("eo2Cao2").value = resultado.Cao2;

        //pasar el PaO2 del input de CaO2 al input de Gradiente
        document.getElementById("gradientePao2").value = cao2Pao2;

        //pasar el resultado al input para GC
        document.getElementById("gcCao2").value = resultado.Cao2;
    }
}

function BorrarCao2(){
    console.log("borrar");
    document.getElementById("cao2Hb").value = "";
    document.getElementById("cao2Sao2").value = "";
    document.getElementById("cao2Pao2").value = "";
    document.getElementById("cao2Resultado").value = "";

    //borrar el input para Delta
    document.getElementById("deltaCao2").value = "";

    //borrar el input para EO2"
    document.getElementById("eo2Cao2").value = "";

    //borrar el input para GC
    document.getElementById("gcCao2").value = "";
}

class CVO2{
    
    constructor(hb, svo2, pvo2){
        this.paraCaO2yCvO2_1 = paraCaO2yCvO2_1;
        this.paraCaO2yCvO2_2 = paraCaO2yCvO2_2;
        this.hb = hb;
        this.svo2 = svo2;
        this.pvo2 = pvo2;
    }

    //Getter
    get Cvo2(){
        return this.CalcularCvo2();
    }

    //Metodo
    CalcularCvo2(){
        return (this.hb*this.paraCaO2yCvO2_1*this.svo2) + (this.paraCaO2yCvO2_2*this.pvo2);
    }

}

function CalcularCvo2(){
    let cvo2Hb = document.getElementById("cvo2Hb").value;
    console.log(cvo2Hb);
    let cvo2Svo2 = document.getElementById("cvo2Svo2").value;
    let cvo2Pvo2 = document.getElementById("cvo2Pvo2").value;
    if(cvo2Hb == '' || cvo2Svo2 == '' || cvo2Pvo2 == ''){
        //console.log("Calculo CaO2: Falta ingresar uno varios datos.");
        alert("Calculo CvO2: Falta ingresar uno o más datos para calcular Cvo2.");
    }else{
        const resultado = new CVO2(cvo2Hb, cvo2Svo2, cvo2Pvo2);
        document.getElementById("cvo2Resultado").value = resultado.Cvo2;

        //pasar el resultado al input para Delta
        document.getElementById("deltaCvo2").value = resultado.Cvo2;
    }
}

function BorrarCvo2(){
    console.log("borrar");
    document.getElementById("cvo2Hb").value = "";
    document.getElementById("cvo2Svo2").value = "";
    document.getElementById("cvo2Pvo2").value = "";
    document.getElementById("cvo2Resultado").value = "";

    //borrar el input para Delta
    document.getElementById("deltaCvo2").value = "";
}

class DELTA{
    
    constructor(cao2, cvo2){
        this.cao2 = cao2;
        this.cvo2 = cvo2;
    }

    //Getter
    get Delta(){
        return this.CalcularDelta();
    }

    //Metodo
    CalcularDelta(){
        return (this.cao2-this.cvo2);
    }

}

function CalcularDelta(){
    let deltaCao2 = document.getElementById("deltaCao2").value;
    let deltaCvo2 = document.getElementById("deltaCvo2").value;
    if(deltaCao2 == '' || deltaCvo2 == ''){
        //console.log("Calculo CaO2: Falta ingresar uno varios datos.");
        alert("Calculo Delta: Falta ingresar uno o más datos para calcular Delta.");
    }else{
        const resultado = new DELTA(deltaCao2, deltaCvo2);
        document.getElementById("deltaResultado").value = resultado.Delta;

        //pasar el resultado al input Delta de EO2
        document.getElementById("eo2Delta").value = resultado.Delta;

        //pasar el resultado al input Delta de GC
        document.getElementById("gcDelta").value = resultado.Delta;

        //pasar el resultado al input Delta de VO2
        document.getElementById("vo2Delta").value = resultado.Delta;
    }
}

function BorrarDelta(){
    console.log("borrar");
    document.getElementById("deltaCao2").value = "";
    document.getElementById("deltaCvo2").value = "";
    document.getElementById("deltaResultado").value = "";

    //borrar el input para EO2
    document.getElementById("eo2Delta").value = "";

    //borrar el input para GC
    document.getElementById("gcDelta").value = "";

    //borrar el input para Vo2
    document.getElementById("vo2Delta").value = "";
}

class PAFI{
    
    constructor(po2, fio2){
        this.po2 = po2;
        this.fio2 = fio2;
    }

    //Getter
    get Pafi(){
        return this.CalcularPafi();
    }

    //Metodo
    CalcularPafi(){
        return (this.po2/this.fio2);
    }

}

function CalcularPafi(){
    let pafiPo2 = document.getElementById("pafiPo2").value;
    let pafiFio2 = document.getElementById("pafiFio2").value;
    if(pafiPo2 == '' || pafiFio2 == ''){
        //console.log("Calculo CaO2: Falta ingresar uno varios datos.");
        alert("Calculo PAFI: Falta ingresar uno o más datos para calcular PAFI.");
    }else{
        const resultado = new PAFI(pafiPo2, pafiFio2);
        document.getElementById("pafiResultado").value = resultado.Pafi;

        //pasar las entradas a los input de IO2
        document.getElementById("io2Po2").value = pafiPo2;
        document.getElementById("io2Fio2").value = pafiFio2;

        //pasar el input de Fio2 al de Gradiente
        document.getElementById("gradienteFio2").value = pafiFio2;
    }
}

function BorrarPafi(){
    console.log("borrar");
    document.getElementById("pafiPo2").value = "";
    document.getElementById("pafiFio2").value = "";
    document.getElementById("pafiResultado").value = "";

    //borrar los input para IO2
    document.getElementById("io2Po2").value = "";
    document.getElementById("io2Fio2").value = "";

    //borrar el input Fio2 para Gradiente
    document.getElementById("gradienteFio2").value = "";
}

class IO2{
    
    constructor(pm, fio2, po2){
        this.paraIO2yGC_1 = paraIO2yGC_1;
        this.pm = pm;
        this.fio2 = fio2;
        this.po2 = po2;
    }

    //Getter
    get Io2(){
        return this.CalcularIo2();
    }

    //Metodo
    CalcularIo2(){
        return ((this.pm * this.fio2 * this.paraIO2yGC_1) / this.po2);
    }

}

function CalcularIo2(){
    let io2Pm = document.getElementById("io2Pm").value;
    let io2Fio2 = document.getElementById("io2Fio2").value;
    let io2Po2 = document.getElementById("io2Po2").value;

    if(io2Pm == '' || io2Fio2 == '' || io2Po2 == ''){
        //console.log("Calculo CaO2: Falta ingresar uno varios datos.");
        alert("Calculo IO2: Falta ingresar uno o más datos para calcular IO2.");
    }else{
        const resultado = new IO2(io2Pm, io2Fio2, io2Po2);
        document.getElementById("io2Resultado").value = resultado.Io2;
    }
}

function BorrarIo2(){
    console.log("borrar");
    document.getElementById("io2Pm").value = "";
    document.getElementById("io2Fio2").value = "";
    document.getElementById("io2Po2").value = "";
    document.getElementById("io2Resultado").value = "";
}

class EO2{
    
    constructor(delta, cao2){
        this.delta = delta;
        this.cao2 = cao2;
    }

    //Getter
    get Eo2(){
        return this.CalcularEo2();
    }

    //Metodo
    CalcularEo2(){
        return (this.delta / this.cao2);
    }

}

function CalcularEo2(){
    let eo2Delta = document.getElementById("eo2Delta").value;
    let eo2Cao2 = document.getElementById("eo2Cao2").value;

    if(eo2Delta == '' || eo2Cao2 == ''){
        //console.log("Calculo CaO2: Falta ingresar uno varios datos.");
        alert("Calculo EO2: Falta ingresar uno o más datos para calcular EO2.");
    }else{
        const resultado = new EO2(eo2Delta, eo2Cao2);
        document.getElementById("eo2Resultado").value = resultado.Eo2;
    }
}

function BorrarEo2(){
    console.log("borrar");
    document.getElementById("eo2Delta").value = "";
    document.getElementById("eo2Cao2").value = "";
    document.getElementById("eo2Resultado").value = "";
}

class GRADIENTE{
    
    constructor(baro, fio2, pco2, pao2){
        this.paraGradiente_1 = paraGradiente_1;
        this.baro = baro;
        this.fio2 = fio2;
        this.pco2 = pco2;
        this.pao2 = pao2;
    }

    //Getter
    get Gradiente(){
        return this.CalcularGradiente();
    }

    //Metodo
    CalcularGradiente(){
        return ( (this.baro * this.fio2) - (this.pco2/this.paraGradiente_1) - this.pao2 );
    }

}

function CalcularGradiente(){
    let gradienteBaro = document.getElementById("gradienteBaro").value;
    let gradienteFio2 = document.getElementById("gradienteFio2").value;
    let gradientePco2 = document.getElementById("gradientePco2").value;
    let gradienteConst1 = document.getElementById("gradienteConst1").value;
    let gradientePao2 = document.getElementById("gradientePao2").value;

    if(gradienteBaro == '' || gradienteFio2 == '' || gradientePco2 == '' || gradienteConst1 == '' || gradientePao2 == ''){
        //console.log("Calculo CaO2: Falta ingresar uno varios datos.");
        alert("Calculo GRADIENTE: Falta ingresar uno o más datos para calcular GRADIENTE.");
    }else{
        const resultado = new GRADIENTE(gradienteBaro, gradienteFio2, gradientePco2, gradientePao2);
        document.getElementById("gradienteResultado").value = resultado.Gradiente;
    }
}

function BorrarGradiente(){
    console.log("borrar");
    document.getElementById("gradienteBaro").value = "";
    document.getElementById("gradienteFio2").value = "";
    document.getElementById("gradientePco2").value = "";
    document.getElementById("gradientePao2").value = "";
    document.getElementById("gradienteResultado").value = "";
}

class GC{
    
    constructor(delta, cao2){
        this.paraIO2yGC_1 = paraIO2yGC_1;
        this.delta = delta;
        this.cao2 = cao2;
    }

    //Getter
    get Gc(){
        return this.CalcularGc();
    }

    //Metodo
    CalcularGc(){
        return ( (this.delta * (this.paraIO2yGC_1/this.cao2) ) / this.delta );
    }

}

function CalcularGc(){
    let gcDelta = document.getElementById("gcDelta").value;
    let gcConst1 = document.getElementById("gcConst1").value;
    let gcCao2 = document.getElementById("gcCao2").value;

    if(gcDelta == '' || gcConst1 == '' || gcCao2 == ''){
        //console.log("Calculo CaO2: Falta ingresar uno varios datos.");
        alert("Calculo GASTO CARDIACO: Falta ingresar uno o más datos para calcular GASTO CARDIACO.");
    }else{
        const resultado = new GC(gcDelta, gcCao2);
        document.getElementById("gcResultado").value = resultado.Gc;

        //pasar el resultado GC al input GC del VO2
        document.getElementById("vo2Gc").value = resultado.Gc;
    }
}

function BorrarGc(){
    console.log("borrar");
    document.getElementById("gcDelta").value = "";
    document.getElementById("gcCao2").value = "";
    document.getElementById("gcResultado").value = "";

    //borrar el input GC de VO2
    document.getElementById("vo2Gc").value = "";
}

class VO2{
    
    constructor(delta, gc){
        this.paraVO2_1 = paraVO2_1;
        this.delta = delta;
        this.gc = gc;
    }

    //Getter
    get Vo2(){
        return this.CalcularVo2();
    }

    //Metodo
    CalcularVo2(){
        return ( this.delta * this.gc * this.paraVO2_1 );
    }

}

function CalcularVo2(){
    let vo2Delta = document.getElementById("vo2Delta").value;
    let vo2Gc = document.getElementById("vo2Gc").value;
    let vo2Const1 = document.getElementById("vo2Const1").value;

    if(vo2Delta == '' || vo2Gc == '' || vo2Const1 == ''){
        //console.log("Calculo CaO2: Falta ingresar uno varios datos.");
        alert("Calculo VO2: Falta ingresar uno o más datos para calcular VO2.");
    }else{
        const resultado = new VO2(vo2Delta, vo2Gc);
        document.getElementById("vo2Resultado").value = resultado.Vo2;
    }
}

function BorrarVo2(){
    console.log("borrar");
    document.getElementById("vo2Delta").value = "";
    document.getElementById("vo2Gc").value = "";
    document.getElementById("vo2Resultado").value = "";
}
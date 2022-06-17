//AREA DE UN CUADRADO 
function obtenerArea(){
    var areaResultado = document.getElementById("CuadradoAreaResultado");
    var CuadradoLado1 = parseInt(document.getElementById("Cuadradolado1").value);
    var Cuadradolado2 = parseInt(document.getElementById("Cuadradolado2").value);

   var area = (CuadradoLado1 * Cuadradolado2);

    areaResultado.innerHTML = "" + area;
    }
//PERIMETRO DE UN CUADRADO
function obtenerPerimetro(){
    var obtenerPerimetro = document.getElementById("CuadradoPerimetroResultado");
    var l1 = parseInt(document.getElementById("lado11").value);
    var l2 = parseInt(document.getElementById("lado22").value);
    var l3 = parseInt(document.getElementById("lado11").value);
    var l4 = parseInt(document.getElementById("lado22").value);

    var Perimetro = ( l1 + l2 + l3 + l4);

    obtenerPerimetro.innerHTML = "" + Perimetro;
    }


    
//AREA DE UN RECTANGULO
function obtenerAreaRectangulo(){
    var AreaResultadoRectangulo = document.getElementById("AreaResultadoRectangulo");
    var BaseRectangulo = parseInt(document.getElementById("BaseRectangulo").value);
    var AlturaRectangulo = parseInt(document.getElementById("AlturaRectangulo").value);

   var areaRectangulo = (BaseRectangulo * AlturaRectangulo);

    AreaResultadoRectangulo.innerHTML = "" + areaRectangulo;
    }

//PERIMETRO DE UN RECTANGULO
function obtenerPerimetroRectangulo(){
    var ObtenerPerimetroRectangulo = document.getElementById("ObtenerPerimetroRectangulo");
    var BaseRectangulo1 = parseInt(document.getElementById("BaseRectangulo1").value);
    var AlturaRectangulo2 = parseInt(document.getElementById("AlturaRectangulo2").value);

    var PerimetroRectangulo = ( BaseRectangulo1*2 + AlturaRectangulo2*2 );

    ObtenerPerimetroRectangulo.innerHTML = "" + PerimetroRectangulo;
    }





//AREA DE UN TRIANGULO
function ObtenerAreaTriangulongulo(){
    var TrianguloAreaResultado = document.getElementById("TrianguloAreaResultado");
    var TrianguloBase = parseInt(document.getElementById("TrianguloBase").value);
    var TrianguloAltura = parseInt(document.getElementById("TrianguloAltura").value);

   var areaRectangulo = (TrianguloBase * TrianguloAltura / 2);

    AreaResultadoTriangulo.innerHTML = "" + areaRectangulo;
    }

//PERIMETRO DE UN TRIANGULO
function TrianguloPerimetroResultado(){
    var TrianguloPerimetroResultado = document.getElementById("TrianguloPerimetroResultado");
    var TrianguloLado1 = parseInt(document.getElementById("TrianguloLado1").value);
    var TrianguloLado2 = parseInt(document.getElementById("TrianguloLado2").value);
    var TrianguloLado3 = parseInt(document.getElementById("TrianguloLado3").value);


    var Perimetro = ( TrianguloLado1 + TrianguloLado2 + TrianguloLado3 );

    TrianguloPerimetroResultado.innerHTML = "" + Perimetro;
    }



//AREA DE UN ROMBO
function ObtenerAreaRombo(){
    var RespuestaAreaRombo1 = document.getElementById("RespuestaAreaRombo1");
    var RomboDiagonal1 = parseInt(document.getElementById("RomboBase").value);
    var RomboDiagonal2 = parseInt(document.getElementById("RomboAltura").value);

   var RespuestaAreaRombo1 = (RomboDiagonal1 * RomboDiagonal2);

    RespuestaAreaRombo1.innerHTML = "" + areaRectangulo;
    }

//PERIMETRO DE UN ROMBO
function obtenerPerimetroRombo(){
    var obtenerPerimetroRombo = document.getElementById("obtenerPerimetroRombo");
    var RomboLado1 = parseInt(document.getElementById("RomboLado1").value);
    var RomboLado2 = parseInt(document.getElementById("RomboLado2").value);


    var Perimetro = ( RomboLado1 + RomboLado2 + RomboLado3 + RomboLado4);

    obtenerPerimetroRombo.innerHTML = "" + Perimetro;
    }


    //AREA DE UN ROMBOIDE
function ObtenerAreaRombo(){
    var RespuestaAreaRombo1 = document.getElementById("RespuestaAreaRomboide1");
    var RomboideDiagonal1 = parseInt(document.getElementById("RomboideBase").value);
    var RomboideDiagonal2 = parseInt(document.getElementById("RomboideAltura").value);

   var RespuestaAreaRomboide1 = (RomboideDiagonal1 * RomboideDiagonal2);

    RespuestaAreaRombo1.innerHTML = "" + areaRectangulo;
    }

//PERIMETRO DE UN ROMBOIDE
function obtenerPerimetroRomboide(){
    var obtenerPerimetroRombo = document.getElementById("obtenerPerimetroRomboide");
    var RomboideLado1 = parseInt(document.getElementById("RomboideLado1").value);
    var RomboideLado2 = parseInt(document.getElementById("RomboideLado2").value);


    var Perimetro = ( RomboideLado1 + RomboideLado2 + RomboideLado3 + RomboideLado4);

    obtenerPerimetroRomboide.innerHTML = "" + Perimetro;

    }

//AREA DE UN TRAPECIO
function obtenerAreaTrapecio(){
    var RespuestaAreaTrapecio = document.getElementById("RespuestaTrapecio");
    var TrapecioBaseM = parseInt(document.getElementById("TrapecioBaseM").value);
    var TrapecioBaseN = parseInt(document.getElementById("TrapecioBaseN").value);
    var TrapecioA = parseInt(document.getElementById("TrapecioA").value);

   var RespuestaAreaTrapecio = ( TrapecioA*(TrapecioBaseM * TrapecioBaseN)/2 );

    RespuestaAreaTrapecio.innerHTML = "" + RespuestaAreaTrapecio;
    }

//PERIMETRO DE UN TRAPECIO
function obtenerPerimetroTRAPECIO(){
    var obtenerPerimetroTRAPECIO = document.getElementById("obtenerPerimetroTRAPECIO");
    var TRAPECIOlado1 = parseInt(daocument.getElementById("TRAPECIOlado1").value);
    var TRAPECIOlado2 = parseInt(document.getElementById("TRAPECIOlado2").value);
    var TRAPECIOBASEMAYOR = parseInt(document.getElementById("TRAPECIOBASEMAYOR").value);
    var TRAPECIOBASEMENOR = parseInt(document.getElementById("TRAPECIOBASEMENOR").value);



    var PerimetroTrapecio1 = ( TRAPECIOlado1 + TRAPECIOlado2 + TRAPECIOBASEMAYOR + TRAPECIOBASEMENOR);

    obtenerPerimetroTRAPECIO.innerHTML = "" + PerimetroTrapecio1;
    }

//AREA DE UN CIRTULO
function radioCirculo(){
    var RespuestaAreaTrapecio = document.getElementById("RespuestaTrapecio");
    var radioCirculo = parseInt(document.getElementById("radioCirculo").value);


   var RespuestaAreaCirculo = ( (radioCirculo*2) * 3,141592 );

    RespuestaAreaTrapecio.innerHTML = "" + RespuestaAreaCirculo;
    }

    //PERIMETRO DE UN CIRTULO
function radioCirculo(){
    var CirculoPerimetroResultado = document.getElementById("RespuestaTrapecio");
    var DIAMETROCIRCULO = parseInt(document.getElementById("DIAMETROCIRCULO").value);


   var CirculoPerimetroResultado = ( DIAMETROCIRCULO * 3,141592 );

    CirculoPerimetroResultado.innerHTML = "" + CirculoPerimetroResultado;
    }


    //AREA DE UN TRAPECIO
function obtenerRadioPoligono(){
    var RespuestaPoligono = document.getElementById("RespuestaTrapecio");
    var perimetroPoligono = parseInt(document.getElementById("perimetroPoligono").value);
    var areaPoligono = parseInt(document.getElementById("areaPoligono").value);

   var RespuestaPoligono = ( (perimetroPoligono * areaPoligono)/2 );

    RespuestaAreaTrapecio.innerHTML = "" + RespuestaPoligono;
    }

    //PERIMETRO DE UN TRAPECIO
function obtenerPerimetroTrapecio(){
    var obtenerPerimetroTrapecio = document.getElementById("RespuestaTrapecio");
    var CANTIDADLADOS = parseInt(document.getElementById("CANTIDADLADOS").value);


    var obtenerPerimetroTrapecio = (CANTIDADLADOS*CANTIDADLADOS);

    obtenerPerimetroTrapecio.innerHTML = "" + obtenerPerimetroTrapecio;
    }
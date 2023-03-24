let carro = [
    
     {id:1,'titulo':'alfombrilla','precio':'8',uds:0},
     {id:2,'titulo':'monitor','precio':'120',uds:0},
     {id:3,'titulo':'raton','precio':'35',uds:0},
     {id:4,'titulo':'pantalla','precio':'46',uds:0},
     {id:5,'titulo':'pc','precio':'800',uds:0},
]
   


function comenzar(){
  
   listaguardada = localstorage.getItem("carro");
   if (datoguardado!=null){
    datoguardado = JSON.parse(datoguardado);
    carro=datoguardado;
    referscar();
   }


}
     function referscar(){
        
       let lista_carrito = document.getElementById("carro");
       let preciototal=0;
       lista_carrito.innerHTML="";

       for(var i=0;i<){}

     }




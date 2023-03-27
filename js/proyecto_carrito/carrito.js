let datos = [
    {'Identificador':'0', 'NombreProducto':'Alfombrilla', 'Valor':'8', 'Unidades':'0'},
    {'Identificador':'1', 'NombreProducto': 'Pantalla', 'Valor':'120', 'Unidades':'0'},
    {'Identificador':'2', 'NombreProducto': 'Raton', 'Valor':'35.50', 'Unidades':'0'},
    {'Identificador':'3', 'NombreProducto': 'Teclado', 'Valor':'46', 'Unidades':'0'},
    {'Identificador':'4', 'NombreProducto': 'Torre', 'Valor':'800.95', 'Unidades':'0'},
   ];
       
       let compraAnterior=null; 
   
       function iniciar(){
       
       compraAnterior = localStorage.getItem("datos"); 
       if (compraAnterior!=null){
            compraAnterior = JSON.parse(compraAnterior);
            datos = compraAnterior;
        reiniciardatolista();
       
        }
       }
       function vaciarCarrito(){
         elementosLista.innerHTML="";
         
       }
   
       function agregarProducto(producto) {
       let objeto = datos[producto];
       objeto['Unidades'] += 1; 
       datos[producto] = objeto;
       document.getElementById("Identificador"+producto).value = objeto ['Unidades'];
       localStorage.setItem("datos", JSON.stringify(datos));
       reiniciardatolista();
     }
     
   
   
   
       
       function quitarProducto (producto) {
       
       let objeto = datos[producto];
       
       let cantidades = objeto['Unidades'];
       
       if (cantidades>=1){
       datos[producto] = objeto;
       objeto['Unidades'] -= 1; 
       localStorage.setItem("datos", JSON.stringify(datos)); 
       document.getElementById("Identificador"+producto).value = objeto ['Unidades'];
       
       reiniciardatolista();
       }
   }
   
   function reiniciardatolista(){ 
   let elementosLista = document.getElementById("lista-carrito");
   let total=0;
   elementosLista.innerHTML="";
   for (var i=0;i<datos.length;i++)
   {
   
   
     let producto = datos[i];
    if (producto ['Unidades']>0){
      
       let datolista = document.createElement("li");
       let informacionlista = document.createTextNode(producto['NombreProducto'] + document.getElementById("Identificador"+i).value , producto['Unidades'] );
       elementosLista.appendChild(datolista);
    precio = precio + producto['Unidades']* producto['Valor'];
   
    }
   }
   
   
   document.getElementById("preciototal").innerHTML = "Total:"+ precio.toFixed(2) + "€";
   }
  
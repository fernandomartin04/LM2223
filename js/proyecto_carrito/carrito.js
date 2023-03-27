let datos = [

    {id:0, 'titulo':'monitor', 'precio':'129.99', uds:0},
    {id:1, 'titulo': 'teclado', 'precio':'39.99', uds:0},
    {id:2, 'titulo': 'ratón', 'precio':'22.99', uds:0},
    {id:3, 'titulo': 'gráfica', 'precio':'1449.99', uds:0},
    {id:4, 'titulo': 'torre', 'precio':'1449.99', uds:0},
   ];
       
       let compraAnterior=null; 
   
       function iniciar(){
       
       compraAnterior = localStorage.getItem("datos"); 
       if (compraAnterior!=null){
            compraAnterior = JSON.parse(compraAnterior);
            datos = compraAnterior;
        refrescar();
       
        }
       
       }
       
       function agregarProducto(producto) {
       
       // En producto levamos el identificati a policia a m let objeto carro[producto];
       let objeto = datos[producto];
       objeto['uds'] += 1; // Ando du
       datos[producto] = objeto;
       
     document.getElementById("id"+producto).value = objeto ['uds'];
     localStorage.setItem("datos", JSON.stringify(datos));
     refrescar();}
     
   
   
   
       
       function quitarProducto (producto) {
       
       // En producto llevamos el identificador del producto a guardar en el carrato
       
       let objeto = datos[producto];
       
       let numuds = objeto['uds'];
       
       if (numuds>=1){
       
       datos[producto] = objeto;
       
       objeto['uds'] = 1; // Quito unidad localStorage.setItem("carro", JSON.stringify(carro)); 1
       
       document.getElementById("id"+producto).value = objeto ['uds'];
       
       refrescar();
       }
   }
   
   function refrescar(){ 
   
   let listaCarrito = document.getElementById("resultado");
   
   let total=0;
   
   listaCarrito.innerHTML="";
   
   for (var i=0;i<datos.length;i++)
   
   {
   
   let producto = datos[i];
    if (producto ['uds']>0){
   
       let nodo = document.createElement("li");
       let texto = document.createTextNode("Producto: " + datos ['titulo']+
       document.getElementById("id"+i).value , producto['uds']); 
       nodo.appendChild(texto);
       listaCarrito.appendChild(nodo);
    total = total + producto['uds']* producto['precio'];
   
    }
   }
   
   
   document.getElementById("lista-carrito").innerHTML = "Total:"+ total.toFixed(2) + "€";
   }
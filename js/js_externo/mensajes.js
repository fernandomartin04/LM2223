let mensajes=["Frase 1", "Frase 2", "Frase 3", "Frase 4", "Frase 5",  
                        "Frase 6", "Frase 7", "Frase 8", "Frase 9", "Frase 10"];
            ImprimeMensajes();
            
            function ImprimeMensajes(){
                for (var i=mensajes.length-1;i>=0;i=i-1){ 
                    document.write("<div class='rectangulo'>");
                    document.write("<img width='32' src='imagenes_js/iconopajaro.png'>");
                    document.write(mensajes[i]);
                    document.write("<img src='imagenes_js/iconopapelera.png'>");
                    document.write("</div>");
                }
            }
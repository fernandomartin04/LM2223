let pos=["Frase 1", "Frase 2", "Frase 3", "Frase 4", "Frase 5",  
                        "Frase 6", "Frase 7", "Frase 8", "Frase 9", "Frase 10"];
            ImprimePost();
            function ordenar(){
                Post.sort();
                imprimePost();
            }
            function eliminar(elemento) {
                let pos = Post.index0f(elemento);
                Post.splice(pos,1);
                imprimePost();
            }
            function anadir(){
                var mensaje = document.getElementById("Post").value;
                PostMessage.push(mensaje);
                imprimePost();
            }
            function ImprimePost(){
                for (var i=mensajes.length-1;i>=0;i=i-1){ 
                    document.write("<div class='rectangulo'>");
                    document.write("<img width='32' src='imagenes_js/iconopajaro.png'>");
                    document.write(mensajes[i]);
                    document.write("<img src='imagenes_js/iconopapelera.png'>");
                    document.write("</div>");
                }
            }



    /*DATEPICKER*/
        $( function() {
        var dateFormat = "dd/mm/yy",
          from = $( "#from" )
            .datepicker({
              defaultDate: "+1w",
              minDate: "+1D",
              maxDate: "1M",
              numberOfMonths: 1
            })
            .on( "change", function() {
              var selectedDate = getDate(this);
                        if (selectedDate) {
                            var minDate = new Date(selectedDate);
                            minDate.setDate(minDate.getDate() + 1);
                            to.datepicker("option", "minDate", minDate);
                        }
            }),
          to = $( "#to" ).datepicker({
            defaultDate: "+1w",
            minDate: "2D",
            numberOfMonths: 1
          })
          .on( "change", function() {
            from.datepicker( "option", "minDate", "maxDate", getDate( this ) );
          });
    
        function getDate( element ) {
          var date;
          try {
            date = $.datepicker.parseDate( dateFormat, element.value );
          } catch( error ) {
            date = null;
          }
    
     
          return date;
        }
    
        
      } );
      $.datepicker.regional['es'] = {
        closeText: 'Cerrar',
        prevText: '<Ant',
        nextText: 'Sig>',
        currentText: 'Hoy',
        monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
        dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
        dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Juv', 'Vie', 'Sáb'],
        dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'],
        weekHeader: 'Sm',
        dateFormat: 'dd/mm/yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
      };
      $.datepicker.setDefaults($.datepicker.regional['es']);
    
      /*CHECKBOX*/
    
      $("#idayvuelta").click(function(){       
            if ($("#to").prop('disabled', true)) {
                $("#to").prop('disabled', false);
                $("#to").prop('required', true);
            }
            else if($("#to").prop('disabled', false)) {
                $("#to").prop('disabled', true);
                $("#to").prop('required', false);
            }
        });
    
    /*FUNCION DEL BOTON DERESERVAR*/
    let nombre = $("#name").val;
    let apellido = $("#surname").val;
    let email = $("#email").val;
    let dni = $("#dni").val;
    let ida = $("#from").val;
    let vuelta = $("#to").val;
    let localizador = function generarRandom(num) {
      const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const charactersLength = characters.length;
      if(charactersLength < num) return "error de longitud";
      let result = "";
       // hacemos un bucle while hasta que la longitud del string
       // sea menor a la de num
       while(result.length < num) {
          // guardamos la letra aleatoria
          let letra = characters.charAt(Math.floor(Math.random() * charactersLength));
          // solo si no existe en el string la agregamos
          // indexOf retorna -1 si el elemento no existe
          if(result.indexOf(letra) === -1) result += letra;
          for (let i = 10; i >= 0; i--){
        console.log(generarRandom(12));
    }
        }
    
      return result;
    }
    
    
    
    
    let salida = nombre + "<br>" + apellido + "<b>" + email + "<br>" + dni + "<br>" + ida + "<br>" + vuelta + "<br>" + localizador + "<br>"
    let qr = nombre + apellido + email + dni + ida + vuelta + localizador;
    
      $(".btn btn-primary").click(function(){
        event.preventDefault();
        $("#resumen").html("<p>" +salida+ "</p>");
        $.ajax({
                url: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='+qr,
                success: function(r) {
                    console.log(r);
                    $('#qrcode').html("<img src='"+'https://www.gutenberg.org/cache/epub/'+qr+"'>");
                }
            });
        
      });
    

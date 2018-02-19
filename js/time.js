 $(document).ready(function () {
     ColorTitulo();
     /**
* VARIABLES PARA PODER CONTROLAR
* EL RELOJ EL CUAL SERA EL TIEMPO DEL JUEGO, JUNTO
* LAS VARIABLES CONTROL EL CUAL SU FUNCION ES MANIPULAR 
* JUNTO CON setInterval y clearInterval LA EJECUCION DE LAS ANIMACIONES
* QUE SE LE ASIGNAN AL TITULO Y EL TIEMPO QUE SE EJECUTA EL JUEGO QUE SON DE 2 MIN
*/
     var segundos = 59;
     var control;

     /*Variables de tipo string para poder mostrar en el HTML como cadena de 
     caracteres para poder no tener problemas al momento de mostrar tipo Number */
     var Min = "1";
     var centesimasA = 0;
     var contador = 0;
     var contador2 = 0;
     var contador3 = 0;
     var contador4 = 0;
     /*Cuando se realize click sobre el boton inicio se cambiaran el texto, y se
     iniciara el juego con el cronometro*/
     $("#inicio").click(function () {
         var texto = $("#inicio").text();
         if (texto == "Iniciar") {
             $("#inicio").text("Reinicio");
             control = setInterval(cronometro, 1000);
         } else {
             /**Cuando se termine el juego,
              * se modificara el tamaño de los paneles
              */
             $("#inicio").text("Iniciar");
             clearInterval(control);
             reiniciar();
             $(".panel-score").animate({
                 width: "25%"
             }, 550);
             setTimeout(() => {
                 $(".panel-tablero").show('slow');
             }, 1000);
             LimpiarPanel();
         }
     });
     /**Funciones que limpiara el panel  del juego 
      * para que cuando se inicie el juego este limpio para
      nuevos dulces y juagdas
      */
     function LimpiarPanel() {
         var control = 0;
         var texto = "";
         for (index = 1; index <= 7; index++) {
             hijos = $(".col-" + index).children();
            hijos.remove();
         }
     }
     /*Funcion que se encarga de tomar el tiempo. */
     function cronometro() {
         if (segundos <= 59) { segundos-- }
         if (segundos == 0) {
             Min = 0;
             contador4++;
             timer.innerHTML = "0:59";
             if (contador4 < 2) { segundos = 59; }
         }
         if (segundos <= 9) { segundos = "0" + segundos }
         if (Min == 0 && segundos == 0 && contador4 >= 2) {
             clearInterval(control);
             paneles();
         }
         reloj = Min + ":" + segundos;
         timer.innerHTML = reloj;
     }
     /**Aplicacion que se encarga de reinicar los valores del trablo 
      * cuando finaliza el juego, en el tiempo de 2 minutos
      */
     function reiniciar() {
         segundos = 59; Min = 1;
         contador4 = 0;
         timer.innerHTML = "01:59";
         scoretext.innerHTML = "0";
         movimientostext.innerHTML = "0";
         paneles();
     }
     /**Funcion que se encarga de darle color al titulo 
      * cuando el juego esta en progreso, un color naranjado y blanco
      */
     function ColorTitulo() {
         setTimeout(() => {
             $("h1").css({
                 "color": "white"
             })
         }, 400);
         setTimeout(() => {
             $("h1").css({
                 "color": "#DCFF0E"
             })
         }, 1000);
         setTimeout(() => {
             ColorTitulo();
         }, 1300);
     }

     /**Funcion encargada de cuando termine el juego 
      * ocultr el panel del juego y mostrar en toda la pantalla
      el panel de las jugadas y puntuacion
      */
     function paneles(params) {
         $(".panel-tablero").hide('slow');
         $(".panel-score").animate({
             width: "100%"
         }, 650);
     }
 });
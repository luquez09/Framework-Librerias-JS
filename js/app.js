$(document).ready(function() {
    /*Arreglo el cual tendra las asiciones de las imagenes o direcciones las cuales 
se realizara un random sobre este  arreglo para poder obtener una imagen y poder colocarla 
en sus respectivas columnas de manera aleatoria.*/
    var imagenes = Array("image/1.png", "image/2.png", "image/4.png", "image/3.png");

    /**Variables que tomaran el puntaje y los movimientos del jugador */
    var puntaje = 0;
    var movimientos = 0;
    var bandera = 0;
    var control
   /**Esta funcion se encargara de tomar los movimientos o bien contar 
    * los movimientos del jugador, se actualizara tambien la puntuacion ya que un movimiento
    puede ser una posible jugada correcta y esto sumaria puntuacion
    */
    $(".panel-tablero").mousedown(function () {
        movimientos = movimientos + 1;
        $("#movimientostext").text(movimientos);
    });
    /**Cuando se de click en le boton iniciar comensara la funcion ah aregar dulces */
    $("#inicio").click(function () {
        var texto = $("#inicio").text();
        if (texto != "Iniciar") {
            clearInterval(control);
        } else {
            puntaje = 0;
            agregarDulces();
            control = setInterval(controlFunciones, 3500);
            controlFunciones();
        }
    });
    /**Funcion encargada de agregar los dulces a cada celda del panel 
     * del juego NOTA: LOS DULCES NO DECIENDEN
     */
    function agregarDulces() {
        var control = 0;
        var imagenes = Array("image/2.png", "image/1.png", "image/4.png", "image/3.png");
        var imagen = " ";
        for (index = 1; index <= 7; index++) {
            hijos = $(".col-" + index).children().length;
            while (hijos < 7) {
                imagen = imagenes[Math.floor(Math.random() * imagenes.length)];
                $(".col-" + index).append('<div  class="clumna nuevo" draggable="true">' + '<img' + ' alt=' + imagen + ' src=' + imagen + '>' + '</div>' + '</div>');
                hijos++;
            }
            hijos = 0;
        }
    }
    /**Funcion que se encarga de realizar el efecto eliminacion sobre 
     * las filas que se borraras
     */
    function efectoEliminacion() {
        var Children1 = $(".col-1").children(); var Children2 = $(".col-2").children();
        var Children3 = $(".col-3").children(); var Children4 = $(".col-4").children();
        var Children5 = $(".col-5").children(); var Children6 = $(".col-6").children();
        var Children7 = $(".col-7").children();

        for (index = 0; index < 7; index++) {
            if (Children1[index].innerHTML == Children2[index].innerHTML &&
                Children2[index].innerHTML == Children3[index].innerHTML) {
                $(Children1[index]).effect("pulsate", 1300); $(Children2[index]).effect("pulsate", 1300);
                $(Children3[index]).effect("pulsate", 1300);
            }

            if (Children2[index].innerHTML == Children3[index].innerHTML &&
                Children3[index].innerHTML == Children4[index].innerHTML) {
                $(Children2[index]).effect("pulsate", 1300); $(Children3[index]).effect("pulsate", 1300);
                $(Children4[index]).effect("pulsate", 1300);
            }

            if (Children3[index].innerHTML == Children4[index].innerHTML &&
                Children4[index].innerHTML == Children5[index].innerHTML) {
                $(Children5[index]).effect("pulsate", 1300); $(Children4[index]).effect("pulsate", 1300);
                $(Children3[index]).effect("pulsate", 1300);
            }

            if (Children4[index].innerHTML == Children5[index].innerHTML &&
                Children5[index].innerHTML == Children6[index].innerHTML) {
                $(Children4[index]).effect("pulsate", 1300); $(Children5[index]).effect("pulsate", 1300);
                $(Children6[index]).effect("pulsate", 1300);
            }

            if (Children5[index].innerHTML == Children6[index].innerHTML &&
                Children6[index].innerHTML == Children7[index].innerHTML) {
                $(Children5[index]).effect("pulsate", 1300); $(Children6[index]).effect("pulsate", 1300);
                $(Children7[index]).effect("pulsate", 1300);
            }
        }
    }
    /**Funcion que se encargara de eliminar los dulces que conformen 3 
     * dulces iguales en columna
     */
    function eliminacionColumna() {
        var pos = 0;
        var Children1 = $(".col-1").children(); var Children2 = $(".col-2").children();
        var Children3 = $(".col-3").children(); var Children4 = $(".col-4").children();
        var Children5 = $(".col-5").children(); var Children6 = $(".col-6").children();
        var Children7 = $(".col-7").children();

        for (index = 0; index < 5; index++) {
            if (pos <= 8) {
                if (Children1[index].innerHTML == Children1[index + 1].innerHTML &&
                    Children1[index].innerHTML == Children1[index + 2].innerHTML) {
                    Children1[index].remove();
                    Children1[index + 1].remove();
                    Children1[index + 2].remove();
                    puntaje += 100;
                }
            }
        }

        for (hijo2 = 0; hijo2 < 5; hijo2++) {
            pos = hijo2 + 2
            if (pos <= 8) {
                if (Children2[hijo2].innerHTML == Children2[hijo2 + 1].innerHTML &&
                    Children2[hijo2].innerHTML == Children2[hijo2 + 2].innerHTML) {
                    Children2[hijo2].remove();
                    Children2[hijo2 + 1].remove();
                    Children2[hijo2 + 2].remove();
                    puntaje += 100;
                }
            }
        }

        for (hijo3 = 0; hijo3 < 5; hijo3++) {
            pos = hijo3 + 2;
            if (pos <= 8) {
                if (Children3[hijo3].innerHTML == Children3[hijo3 + 1].innerHTML &&
                    Children3[hijo3].innerHTML == Children3[hijo3 + 2].innerHTML) {
                    Children3[hijo3].remove();
                    Children3[hijo3 + 1].remove();
                    Children3[hijo3 + 2].remove();
                    puntaje += 100;
                }
            }
        }

        for (hijo4 = 0; hijo4 < 5; hijo4++) {
            pos = hijo4 + 2
            if (pos <= 8) {
                if (Children4[hijo4].innerHTML == Children4[hijo4 + 1].innerHTML &&
                    Children4[hijo4].innerHTML == Children4[hijo4 + 2].innerHTML) {
                    Children4[hijo4].remove();
                    Children4[hijo4 + 1].remove();
                    Children4[hijo4 + 2].remove();
                    puntaje += 100;
                }
            }
        }

        for (hijo5 = 0; hijo5 < 5; hijo5++) {
            pos = hijo5 + 2;
            if (pos <= 8) {
                if (Children5[hijo5].innerHTML == Children5[hijo5 + 1].innerHTML &&
                    Children5[hijo5].innerHTML == Children5[hijo5 + 2].innerHTML) {
                    Children5[hijo5].remove();
                    Children5[hijo5 + 1].remove();
                    Children5[hijo5 + 2].remove();
                    puntaje += 100;
                }
            }
        }

        for (hijo7 = 0; hijo7 < 5; hijo7++) {
            pos = hijo7 + 2;
            if (pos <= 8) {
                if (Children7[hijo7].innerHTML == Children7[hijo7 + 1].innerHTML &&
                    Children7[hijo7].innerHTML == Children7[hijo7 + 2].innerHTML) {
                    Children7[hijo7].remove();
                    Children7[hijo7 + 1].remove();
                    Children7[hijo7 + 2].remove();
                    puntaje += 100;
                }
            }
        }

        for (hijo6 = 0; hijo6 < 5; hijo6++) {
            pos = hijo6 + 2
            if (pos <= 8) {
                if (Children6[hijo6].innerHTML == Children6[hijo6 + 1].innerHTML &&
                    Children6[hijo6].innerHTML == Children6[hijo6 + 2].innerHTML) {
                    Children6[hijo6].remove();
                    Children6[hijo6 + 1].remove();
                    Children6[hijo6 + 2].remove();
                    puntaje += 500;
                }
            }
        }
        scoretext.innerHTML = puntaje;
    }
    /**Funcion que se encargara de realizar el efecto de eliminacion 
     * en las columnas que conformen 3 dulces iguales 
     */
    function efectoDeleteColumna() {
        var pos = 0;
        var Children1 = $(".col-1").children(); var Children2 = $(".col-2").children();
        var Children3 = $(".col-3").children(); var Children4 = $(".col-4").children();
        var Children5 = $(".col-5").children(); var Children6 = $(".col-6").children();
        var Children7 = $(".col-7").children();

        for (index = 0; index < 5; index++) {
            pos = index + 2;
            if (pos <= 8) {
                if (Children1[index].innerHTML == Children1[index + 1].innerHTML &&
                    Children1[index].innerHTML == Children1[index + 2].innerHTML) {
                    $(Children1[index]).effect('pulsate', 1300);
                    $(Children1[index + 1]).effect('pulsate', 1300);
                    $(Children1[index + 2]).effect('pulsate', 1300);

                }
            }
        }

        for (hijo2 = 0; hijo2 < 5; hijo2++) {
            pos = hijo2 + 2
            if (pos <= 8) {
                if (Children2[hijo2].innerHTML == Children2[hijo2 + 1].innerHTML &&
                    Children2[hijo2].innerHTML == Children2[hijo2 + 2].innerHTML) {
                    $(Children2[hijo2]).effect('pulsate', 1300);
                    $(Children2[hijo2 + 1]).effect('pulsate', 1300);
                    $(Children2[hijo2 + 2]).effect('pulsate', 1300);
                }
            }
        }

        for (hijo3 = 0; hijo3 < 5; hijo3++) {
            pos = hijo3 + 2;
            if (pos <= 8) {
                if (Children3[hijo3].innerHTML == Children3[hijo3 + 1].innerHTML &&
                    Children3[hijo3].innerHTML == Children3[hijo3 + 2].innerHTML) {
                    $(Children3[hijo3]).effect('pulsate', 1300);
                    $(Children3[hijo3 + 1]).effect('pulsate', 1300);
                    $(Children3[hijo3 + 2]).effect('pulsate', 1300);
                }
            }
        }

        for (hijo4 = 0; hijo4 < 5; hijo4++) {
            pos = hijo4 + 2
            if (pos <= 8) {
                if (Children4[hijo4].innerHTML == Children4[hijo4 + 1].innerHTML &&
                    Children4[hijo4].innerHTML == Children4[hijo4 + 2].innerHTML) {
                    $(Children4[hijo4]).effect('pulsate', 1300);
                    $(Children4[hijo4 + 1]).effect('pulsate', 1300);
                    $(Children4[hijo4 + 2]).effect('pulsate', 1300);
                }
            }
        }

        for (hijo5 = 0; hijo5 < 5; hijo5++) {
            pos = hijo5 + 2;
            if (pos <= 8) {
                if (Children5[hijo5].innerHTML == Children5[hijo5 + 1].innerHTML &&
                    Children5[hijo5].innerHTML == Children5[hijo5 + 2].innerHTML) {
                    $(Children5[hijo5]).effect('pulsate', 1300);
                    $(Children5[hijo5 + 1]).effect('pulsate', 1300);
                    $(Children5[hijo5 + 2]).effect('pulsate', 1300);
                }
            }
        }

        for (hijo7 = 0; hijo7 < 5; hijo7++) {
            pos = hijo7 + 2;
            if (pos <= 8) {
                if (Children7[hijo7].innerHTML == Children7[hijo7 + 1].innerHTML &&
                    Children7[hijo7].innerHTML == Children7[hijo7 + 2].innerHTML) {
                    $(Children7[hijo7]).effect('pulsate', 1300);
                    $(Children7[hijo7 + 1]).effect('pulsate', 1300);
                    $(Children7[hijo7 + 2]).effect('pulsate', 1300);
                }
            }
        }

        for (hijo6 = 0; hijo6 < 5; hijo6++) {
            pos = hijo6 + 2
            if (pos <= 8) {
                if (Children6[hijo6].innerHTML == Children6[hijo6 + 1].innerHTML &&
                    Children6[hijo6].innerHTML == Children6[hijo6 + 2].innerHTML) {
                    $(Children6[hijo6]).effect('pulsate', 1300);
                    $(Children6[hijo6 + 1]).effect('pulsate', 1300);
                    $(Children6[hijo6 + 2]).effect('pulsate', 1300);
                }
            }
        }
    }
    /**Funcion que eliminara de las filas dulces que conformen por lo menos 3 dulces
     * que esten juntos en cual quier fila
     */
    function eliminacionFila() {
        var Children1 = $(".col-1").children(); var Children2 = $(".col-2").children();
        var Children3 = $(".col-3").children(); var Children4 = $(".col-4").children();
        var Children5 = $(".col-5").children(); var Children6 = $(".col-6").children();
        var Children7 = $(".col-7").children();

        for (index = 0; index < 7; index++) {
            /*Preguntamos si existe un combo de 3 dulces juntos en cual quier posicion */
            if (Children1[index].innerHTML == Children2[index].innerHTML &&
                Children2[index].innerHTML == Children3[index].innerHTML) {
                Children1[index].remove(); Children2[index].remove(); Children3[index].remove();
                puntaje += 100;
            }

            /*Preguntamos si existe un combo de 3 dulces juntos en cual quier indexicion */
            if (Children2[index].innerHTML == Children3[index].innerHTML &&
                Children3[index].innerHTML == Children4[index].innerHTML) {
                Children2[index].remove(); Children3[index].remove(); Children4[index].remove();
                puntaje += 100;
            }

            /*Preguntamos si existe un combo de 3 dulces juntos en cual quier indexicion */
            if (Children3[index].innerHTML == Children4[index].innerHTML &&
                Children4[index].innerHTML == Children5[index].innerHTML) {
                Children5[index].remove(); Children4[index].remove(); Children3[index].remove();
                puntaje += 100;
            }

            /*Preguntamos si existe un combo de 3 dulces juntos en cual quier indexicion */
            if (Children4[index].innerHTML == Children5[index].innerHTML &&
                Children5[index].innerHTML == Children6[index].innerHTML) {
                Children4[index].remove(); Children5[index].remove(); Children6[index].remove();
                puntaje += 100;
            }

            /*Preguntamos si existe un combo de 3 dulces juntos en cual quier indexicion */
            if (Children5[index].innerHTML == Children6[index].innerHTML &&
                Children6[index].innerHTML == Children7[index].innerHTML) {
                Children5[index].remove(); Children6[index].remove(); Children7[index].remove();
                puntaje += 100;
            }
        }
        scoretext.innerHTML = puntaje;
    }
    /**Funcion que eliminara los combos de 7 a 4 que se encuentren 
     * en la filas 
     */
    function eliminacionCombo() {
        var Children1 = $(".col-1").children(); var Children2 = $(".col-2").children();
        var Children3 = $(".col-3").children(); var Children4 = $(".col-4").children();
        var Children5 = $(".col-5").children(); var Children6 = $(".col-6").children();
        var Children7 = $(".col-7").children();

        for (index = 0; index < 7; index++) {
            /*Preguntamos si existe un combo de 3 dulces juntos en cual quier posicion */
            if (Children1[index].innerHTML == Children2[index].innerHTML &&
                Children1[index].innerHTML == Children3[index].innerHTML &&
                Children1[index].innerHTML == Children4[index].innerHTML &&
                Children1[index].innerHTML == Children5[index].innerHTML &&
                Children1[index].innerHTML == Children6[index].innerHTML &&
                Children1[index].innerHTML == Children7[index].innerHTML){

                Children1[index].remove(); Children2[index].remove(); Children3[index].remove();
                Children4[index].remove(); Children5[index].remove(); Children6[index].remove();
                Children7[index].remove();
                puntaje += 500;
            }

            if (Children1[index].innerHTML == Children2[index].innerHTML &&
                Children1[index].innerHTML == Children3[index].innerHTML &&
                Children1[index].innerHTML == Children4[index].innerHTML &&
                Children1[index].innerHTML == Children5[index].innerHTML &&
                Children1[index].innerHTML == Children6[index].innerHTML) {
                puntaje += 500;
                Children1[index].remove(); Children2[index].remove(); Children3[index].remove();
                Children4[index].remove(); Children5[index].remove(); Children6[index].remove();
            }

            if (Children1[index].innerHTML == Children2[index].innerHTML &&
                Children1[index].innerHTML == Children3[index].innerHTML &&
                Children1[index].innerHTML == Children4[index].innerHTML &&
                Children1[index].innerHTML == Children5[index].innerHTML) {
                puntaje += 500;
                Children1[index].remove(); Children2[index].remove(); Children3[index].remove();
                Children4[index].remove(); Children5[index].remove();
            }

            /*Preguntamos si existe un combo de 3 dulces juntos en cual quier indexicion */
            if (Children1[index].innerHTML == Children2[index].innerHTML &&
                Children1[index].innerHTML == Children3[index].innerHTML &&
                Children1[index].innerHTML == Children4[index].innerHTML) {
                puntaje += 500;
                Children1[index].remove(); Children2[index].remove(); Children3[index].remove();
                Children4[index].remove();
            }
        }
        scoretext.innerHTML = puntaje;
    }
    /** funcion que se encargara de realizar efectos en los combos 
     * de 7 a 4 en todas las filas 
     */
    function efectoEliminarCombo() {
        var Children1 = $(".col-1").children(); var Children2 = $(".col-2").children();
        var Children3 = $(".col-3").children(); var Children4 = $(".col-4").children();
        var Children5 = $(".col-5").children(); var Children6 = $(".col-6").children();
        var Children7 = $(".col-7").children();

        for (index = 0; index < 6; index++) {
            /*Preguntamos si existe un combo de 3 dulces juntos en cual quier posicion */
            if (Children1[index].innerHTML == Children2[index].innerHTML &&
                Children1[index].innerHTML == Children3[index].innerHTML &&
                Children1[index].innerHTML == Children4[index].innerHTML &&
                Children1[index].innerHTML == Children5[index].innerHTML &&
                Children1[index].innerHTML == Children6[index].innerHTML &&
                Children1[index].innerHTML == Children7[index].innerHTML) {

                $(Children1[index]).effect("pulsate",1300);  $(Children2[index]).effect("pulsate",1300);  $(Children3[index]).effect("pulsate",1300); 
                $(Children4[index]).effect("pulsate",1300);  $(Children5[index]).effect("pulsate",1300);  $(Children6[index]).effect("pulsate",1300); 
                $(Children7[index]).effect("pulsate",1300); 
            }

            if (Children1[index].innerHTML == Children2[index].innerHTML &&
                Children1[index].innerHTML == Children3[index].innerHTML &&
                Children1[index].innerHTML == Children4[index].innerHTML &&
                Children1[index].innerHTML == Children5[index].innerHTML &&
                Children1[index].innerHTML == Children6[index].innerHTML) {

                $(Children1[index]).effect("pulsate",1300);  $(Children2[index]).effect("pulsate",1300);  $(Children3[index]).effect("pulsate",1300); 
                $(Children4[index]).effect("pulsate",1300);  $(Children5[index]).effect("pulsate",1300);  $(Children6[index]).effect("pulsate",1300); 
            }

            if (Children1[index].innerHTML == Children2[index].innerHTML &&
                Children1[index].innerHTML == Children3[index].innerHTML &&
                Children1[index].innerHTML == Children4[index].innerHTML &&
                Children1[index].innerHTML == Children5[index].innerHTML) {

                $(Children1[index]).effect("pulsate",1300);  $(Children2[index]).effect("pulsate",1300);  $(Children3[index]).effect("pulsate",1300); 
                $(Children4[index]).effect("pulsate",1300);  $(Children5[index]).effect("pulsate",1300); 
            }

            /*Preguntamos si existe un combo de 3 dulces juntos en cual quier indexicion */
            if (Children1[index].innerHTML == Children2[index].innerHTML &&
                Children1[index].innerHTML == Children3[index].innerHTML &&
                Children1[index].innerHTML == Children4[index].innerHTML) {

                $(Children1[index]).effect("pulsate",1300);  $(Children2[index]).effect("pulsate",1300);  $(Children3[index]).effect("pulsate",1300); 
                $(Children4[index]).effect("pulsate",1300); 
            }
        }
    }
    /**Se realiza esta funcion, con el fin de tener un orden de como se van 
     * ejecutando las funciones que comprende el juego, ara un buen funcionamiento
     */
    function controlFunciones() {
    //Llamamos a la funcion que realiza los efectos de eliminacion por columna
    //Y dentro de ella llamamos en cierto tiempo la funcion que elimina estos elementos
        setTimeout(function () {
            efectoDeleteColumna();
            setTimeout(function () {
                eliminacionColumna();
                setTimeout(function() {
                    agregarDulces();
                },200)
            }, 1350);
        }, 100);

        setTimeout(function () {
            efectoEliminarCombo();
            setTimeout(function () {
                eliminacionCombo();
                setTimeout(function () {
                    agregarDulces();
                }, 200)
            }, 1400);
        }, 2000);
        
        setTimeout(function () {
            efectoEliminacion();
                setTimeout(function () {
                    eliminacionFila();
                    setTimeout(function () {
                        agregarDulces();
                    }, 200);
                }, 1400);
            }, 3500);

    }
});

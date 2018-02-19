/*$("#inicio").click(function () {
    setTimeout(() => {
        prueba();
    }, 1000);    
});

$(".panel-tablero").mousedown(function () {
    setTimeout(() => {
       prueba(); 
    },3000);
    console.log("Evento Correcto!")
});*/
        var control 
        control = setInterval(prueba,3500);
            var dragSrcEl = null;
            
            //guardamos el contenido que queremos cambiarx   para la transferencia al dejar de arrastrar
            function handleDragStart(e) {
                dragSrcEl = this;
                e.dataTransfer.effectAllowed = 'move';
                e.dataTransfer.setData('text/html', this.innerHTML);
            }
            function handleDragOver(e) {
                if (e.preventDefault) {
                    e.preventDefault();
                }
                e.dataTransfer.dropEffect = 'move';  //efecto al mover
                return false;
            }
            function handleDragEnter(e) { }
            function handleDragLeave(e) { }
            function handleDrop(e) {
                e.preventDefault();
                //hacemos el intercambio de contenido html de el elemento origne y destino 
                if (dragSrcEl != this) {
                    dragSrcEl.innerHTML = this.innerHTML;
                    this.innerHTML = e.dataTransfer.getData('text/html');
                    this.classList.remove('over');
                }
                return false;
            }
            function handleDragEnd(e) { }
            //agregamos todos los eventos anteriores a cada columna mediante un ciclo

         
            /**Quitamos la clase nuevo para que cuando se tenga nuevos dulces solo se agrege
             * a esos nuevos dulces los eventos correspondientes
             */
            function prueba() {
                var cols = document.querySelectorAll('div[class*="clumna nuevo"]');
                if (cols.length != 0) {
                    cols.forEach(function (col) {
                        col.addEventListener('dragstart', handleDragStart, false);
                        col.addEventListener('dragenter', handleDragEnter, false);
                        col.addEventListener('dragover', handleDragOver, false);
                        col.addEventListener('dragleave', handleDragLeave, false);
                        col.addEventListener('drop', handleDrop, false);
                        col.addEventListener('dragend', handleDragEnd, false);
                    });    
                    setTimeout(() => {
                        $('div').removeClass("nuevo");
                    }, 100);
                }
            }
            

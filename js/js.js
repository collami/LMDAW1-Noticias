// Declaración de variables
var cont = 0;
var ficheros = ["1.json", "2.json"];

// Eventos
$(document).ready(function () {

    $("#boton").click(function () {
        cargarNoticias();

    });

    // Comprueba que el scroll llega al final de la página y que está habilitado el chek de carga de noticias con scroll
    $(window).scroll(function () {
        if ($(window).scrollTop() + $(window).height() == $(document).height() && $('#cargarNews')[0].checked) {
            cargarNoticias();
        }
    });

    // Acceso a plataformas de redes sociales
    $("#facebook").click(function () {
        var shareurl = window.location.href;
        window.open('https://www.facebook.com/sharer/sharer.php?u=' + escape(shareurl), document.title,
            'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
        return false;
    });

    $("#twitter").click(function () {
        var shareurl = window.location.href;
        window.open('http://twitter.com/share?text=' + document.title + '&url=' + escape(shareurl), document.title,
            'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
        return false;
    });

    $("#google").click(function () {
        var shareurl = window.location.href;
        window.open('https://plus.google.com/share?url=' + escape(shareurl), document.title,
            'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
        return false;
    });

});

//Funciones
function agregar(json) {
    $.each(json, function (i, noticia) {
        $("#noticias").append("<div class='main-container col-sm-8 well noticia' >" +
            "<h2 class='text-center'><strong>" + noticia.titulo + "</strong></h2>" +
            "<br>" +
            "<p>" + noticia.descripcion + "</p>" +
            "<br><br>" +
            '<img src="' + noticia.imgbig + '"' + "alt='imagen'" + "class='img-responsive'>" +

            "<br>" +
            " <p class='text-right'>" + noticia.data + "</p>" +
            "<br>" +
            "</div>"
        );
    });

};

function cargarNoticias() {

    if (cont < ficheros.length) {

        var nombre = ficheros[cont];
        cont++;
        $.getJSON("https://rawgit.com/collami/scsdsfds/master/data/" + nombre, function (aux) {
            agregar(aux);
        });
    } else {

        $('#boton').text('No hay más noticias');
        $('#boton').class = "btn btn-info disabled";
    }
};
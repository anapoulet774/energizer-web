document.addEventListener('DOMContentLoaded', function () {
    var myCarouselElement = document.getElementById('carruselEjemploOscuro');
    var myVideo = document.getElementById('myVideo');

    if (myCarouselElement && myVideo) {
        // Inicializar carrusel sin auto-slide
        var myCarousel = new bootstrap.Carousel(myCarouselElement, {
            interval: false,
            ride: false
        });

        // Cuando termina el video -> avanzar al siguiente slide
        myVideo.addEventListener('ended', function () {
            myCarousel.next();
        });
    }
});


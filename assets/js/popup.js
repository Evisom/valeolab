window.onload = function () {
    // call
    var popup = document.getElementById("popup-call-container");
    var buttonOpen = document.getElementById("button-open");
    var buttonClose = document.getElementById("popup-call-button-close");

    buttonOpen.onclick = function ( ) {
        popup.classList.add("is-active");
    }

    buttonClose.onclick = function () {
        popup.classList.remove("is-active");
    }

    // video
    var popupVideoOpen = document.getElementById("popup-vimeo-open");
    var popupVideoClose = document.getElementById("popup-vimeo-close");
    var popupVideo = document.getElementById("popup-vimeo");
    var iframe = document.querySelector('#popup-vimeo iframe');
    var player = new Vimeo.Player(iframe);

    popupVideoOpen.onclick = function ( ) {
        popupVideo.classList.add("is-active");
        player.play();
    }

    popupVideo.onclick = function () {
        popupVideo.classList.remove("is-active");
        player.pause();
    }

    popupVideoClose.onclick = function () {
        popupVideo.classList.remove("is-active");
        player.pause();
    }
}
window.onload = function () {
    var popup = document.getElementById("popup-call-container");
    var buttonOpen = document.getElementById("button-open");
    var buttonClose = document.getElementById("popup-call-button-close");

    buttonOpen.onclick = function ( ) {
        popup.classList.add("popup-call-container-active");
    }

    buttonClose.onclick = function () {
        popup.classList.remove("popup-call-container-active");
    }


    $("#scrollbottom").click(function() {
        $("html, body").animate({ scrollTop: $(document).height() }, "slow");
        return false;
      });
}
$(document).ready(function() {
    var envelope = $("#envelope");
    var btn_open = $("#open");
    var btn_reset = $("#reset");

    envelope.click(function() {
        open();
    });
    btn_open.click(function() {
        open();
    });
    btn_reset.click(function() {
        close();
    });

    function open() {
        envelope.addClass("open").removeClass("close");
        $("body").addClass("noscroll");
        body.css("overflow", "hidden");
    }

    function close() {
        envelope.addClass("close").removeClass("open");
        $("body").removeClass("noscroll");
        body.css("overflow", "auto");
    }
})
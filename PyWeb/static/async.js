(function () {

    var form = $("form");

    form.submit(function (e) {
        e.preventDefault();

        var nameInput = this["name"];
        // $.get("/AsyncServer", {name: nameInput.value}).done(function (data) {
        //     alert(data);
        // });
        $.post("/AsyncServer", {name: nameInput.value}).done(function (data) {
            alert(data);
        });
    });

})();
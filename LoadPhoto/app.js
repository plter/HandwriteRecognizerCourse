(function () {

    let img = new Image();
    img.onload = e => {
        document.body.appendChild(img);
    };
    img.src = "dog.jpg";

})();
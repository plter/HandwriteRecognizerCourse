(async function () {

    function loadPhoto(src) {
        return new Promise(function (resolve, reject) {
            let img = new Image();
            img.onload = function () {
                resolve(img);
            };
            img.onerror = reject;
            img.src = src;
        });
    }

    let canvas = document.querySelector("#canvas");
    let context2d = canvas.getContext("2d");
    let img = await loadPhoto("spring.png");
    context2d.drawImage(img, 0, 0);
    let imageData = context2d.getImageData(0, 0, 200, 200);

    let redImageData = context2d.createImageData(200, 200);
    let greenImageData = context2d.createImageData(200, 200);
    let blueImageData = context2d.createImageData(200, 200);
    let blackAndWhiteImageData = context2d.createImageData(200, 200);
    for (let i = 0; i < imageData.data.length; i += 4) {
        redImageData.data[i] = imageData.data[i];
        redImageData.data[i + 1] = 0;
        redImageData.data[i + 2] = 0;
        redImageData.data[i + 3] = 255;

        greenImageData.data[i] = 0;
        greenImageData.data[i + 1] = imageData.data[i + 1];
        greenImageData.data[i + 2] = imageData.data[i + 2];
        greenImageData.data[i + 3] = 255;

        blueImageData.data[i] = 0;
        blueImageData.data[i + 1] = 0;
        blueImageData.data[i + 2] = imageData.data[i + 2];
        blueImageData.data[i + 3] = 255;

        let color = Math.round((imageData.data[i] + imageData.data[i + 1] + imageData.data[i + 2]) / 3);
        blackAndWhiteImageData.data[i] = color;
        blackAndWhiteImageData.data[i + 1] = color;
        blackAndWhiteImageData.data[i + 2] = color;
        blackAndWhiteImageData.data[i + 3] = 255;
    }
    context2d.putImageData(redImageData, 200, 0);
    context2d.putImageData(greenImageData, 0, 200);
    context2d.putImageData(blueImageData, 200, 200);
    context2d.putImageData(blackAndWhiteImageData, 0, 400);
})();
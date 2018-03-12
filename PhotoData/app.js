(function () {

    let canvas = document.querySelector("canvas");

    function loadImage(src) {
        return new Promise((resolve, reject) => {
            let img = new Image();
            img.onload = () => {
                resolve(img);
            };
            img.onerror = reject;
            img.src = src;
        });
    }

    async function main() {
        let img = await loadImage("dog.jpg");

        //draw image
        /**
         * @type {CanvasRenderingContext2D | null}
         */
        let context2d = canvas.getContext("2d");
        context2d.drawImage(img, 0, 0);

        let imageData = context2d.getImageData(0, 0, 200, 200);
        // console.log(imageData.data.length);
        console.log(imageData.data);

        let rImageData = context2d.createImageData(200, 200);
        for (let i = 0; i < imageData.data.length; i += 4) {
            let r = imageData.data[i];
            let g = imageData.data[i + 1];
            let b = imageData.data[i + 2];
            let value = Math.round((r + g + b) / 3);
            rImageData.data[i] = value;
            rImageData.data[i + 1] = value;
            rImageData.data[i + 2] = value;
            rImageData.data[i + 3] = 255;
        }

        context2d.putImageData(rImageData, 200, 0);
    }

    main();
})();
(function () {

    const BASE_PHOTOS_DIR = "photos";
    let canvas = document.createElement("canvas");
    let context2d = canvas.getContext("2d");
    let train_data_out = document.querySelector("#train_data_out");
    let targetDataOut = document.querySelector("#target_data_out");


    function initProperties() {
        canvas.width = 20;
        canvas.height = 20;
    }

    function loadImage(src) {
        return new Promise(((resolve, reject) => {
            let img = new Image();
            img.onload = () => {
                resolve(img);
            };
            img.src = src;
        }));
    }

    async function main() {
        initProperties();


        let allPhotoData = [];
        let allTargetData = [];
        for (let i = 0; i < epd.photoUrls.length; i++) {
            let img = await loadImage(`${BASE_PHOTOS_DIR}/${epd.photoUrls[i]}`);

            context2d.clearRect(0, 0, canvas.width, canvas.height);
            context2d.fillStyle = "#ffffff";
            context2d.fillRect(0, 0, canvas.width, canvas.height);
            context2d.drawImage(img, 0, 0);

            let photoImageData = context2d.getImageData(0, 0, canvas.width, canvas.height);
            let photoData = [];
            for (let pxIndex = 0; pxIndex < photoImageData.data.length; pxIndex += 4) {
                let r = photoImageData.data[pxIndex];
                let g = photoImageData.data[pxIndex + 1];
                let b = photoImageData.data[pxIndex + 2];
                let color = Math.round((r + g + b) / 3);
                photoData.push(color);
            }
            allPhotoData.push(photoData);
            allTargetData.push(Math.floor(i / 10));
        }

        train_data_out.value = JSON.stringify(allPhotoData);
        targetDataOut.value = JSON.stringify(allTargetData);
    }

    main();

})();
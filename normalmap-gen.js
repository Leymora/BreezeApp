const img = document.getElementById("imgToConvert");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

img.onload = function ()
{
    ctx.drawImage(img, 0, 0);
    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    for(i = 0; i < imgData.data.length; i += 4)
    {
        let count = imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2];

        let color = count / 3;

        imgData.data[i] = color;
        imgData.data[i + 1] = color;
        imgData.data[i + 2] = color;
        imgData.data[i + 3] = 255;

    }
    ctx.putImageData(imgData, 0, 0)
};
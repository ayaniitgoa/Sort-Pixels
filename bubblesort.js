window.onload = function () {
  var img = new Image();
  img.src = 'colors.jpg';

  var canvas = document.getElementById('canvas');

  canvas.width = 200;
  canvas.height = 133;

  window.ctx = canvas.getContext('2d');

  img.onload = function () {
    ctx.drawImage(img, 0, 0);

    window.imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    bubbleSort();
  };
};

var n = 0;
var i = 0;

var bubbleSort = function () {
  if (n < imageData.data.length) {
    if (i < imageData.data.length - n - 4) {
      var curRed = imageData.data[i];
      var curGreen = imageData.data[i + 1];
      var curBlue = imageData.data[i + 2];
      var curBright = (curRed + curBlue + curGreen) / 3;
      var nextRed = imageData.data[i + 4];
      var nextGreen = imageData.data[i + 5];
      var nextBlue = imageData.data[i + 6];
      var nextBright = (nextRed + nextBlue + nextGreen) / 3;

      if (curBright < nextBright) {
        imageData.data[i] = nextRed;
        imageData.data[i + 1] = nextGreen;
        imageData.data[i + 2] = nextBlue;
        imageData.data[i + 4] = curRed;
        imageData.data[i + 5] = curGreen;
        imageData.data[i + 6] = curBlue;
      }

      i += 4;
    } else {
      i = 0;
      n += 4;
    }
  }

  ctx.putImageData(imageData, 0, 0);
  setTimeout(bubbleSort, 0);
};

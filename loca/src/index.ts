import * as tf from '@tensorflow/tfjs';

tf.ready().then(() => {
  const modelPath = '/model/tfjs_quant_uint8/model.json';
  tf.tidy(() => {
    tf.loadLayersModel(modelPath).then((model) => {
      const petImage = document.getElementById('pet') as HTMLImageElement;
      const myTensor = tf.browser.fromPixels(petImage);
      // Model expects 256x256 0-1 value 3D tensor
      const readyfied = tf.image
        .resizeNearestNeighbor(myTensor, [256, 256], true)
        .div(255)
        .reshape([1, 256, 256, 3]);

      const result = model.predict(readyfied) as tf.Tensor<tf.Rank>;
      // Model returns top left and bottom right
      result.print();

      // Draw box on canvas
      const detection = <HTMLCanvasElement>document.getElementById('detection');
      const imgWidth = petImage.width;
      const imgHeight = petImage.height;
      detection.width = imgWidth;
      detection.height = imgHeight;
      const box = result.dataSync();
      const startX = box[0] * imgWidth;
      const startY = box[1] * imgHeight;
      const width = (box[2] - box[0]) * imgWidth;
      const height = (box[3] - box[1]) * imgHeight;
      const ctx = detection.getContext('2d') as CanvasRenderingContext2D;
      ctx.strokeStyle = '#0F0';
      ctx.lineWidth = 4;
      ctx.strokeRect(startX, startY, width, height);

      const tHeight = myTensor.shape[0];
      const tWidth = myTensor.shape[0];
      const tStartX = box[0] * tWidth;
      const tStartY = box[1] * tHeight;

      const cropLength = parseInt(
        ((box[2] - box[0]) * tWidth) as unknown as string,
        0
      );
      const cropHeight = parseInt(
        ((box[3] - box[1]) * tHeight) as unknown as string,

        0
      );
      const startPos = [tStartY, tStartX, 0];
      const cropSize = [cropHeight, cropLength, 3];
      const cropped = tf.slice(myTensor, startPos, cropSize);

      const readyFace = tf.image
        .resizeBilinear(cropped, [96, 96], true)
        .reshape([1, 96, 96, 3]);

      readyFace.print();
    });
  });
});

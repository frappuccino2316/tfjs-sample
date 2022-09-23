import * as mobilenet from '@tensorflow-models/mobilenet';
import '@tensorflow/tfjs-backend-webgl';

let img = document.getElementById('img');
const version = 1;
const alpha = 0.5;

const run = async () => {
  if (img != null) {
    // Load the model.
    const model = await mobilenet.load({ version, alpha });

    // Classify the image.
    const predictions = await model.classify(img as HTMLImageElement);
    console.log(predictions);
    predictions.forEach((p) => {
      if (
        p.className ==
        'trailer truck, tractor trailer, trucking rig, rig, articulated lorry, semi'
      ) {
        alert('TRUCK DETECTED');
      }
    });
  }
};

run();

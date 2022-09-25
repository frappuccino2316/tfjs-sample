import * as tf from '@tensorflow/tfjs';
import { Tensor3D } from '@tensorflow/tfjs-core';

tf.tidy(() => {
  const bigMess: Tensor3D = tf.randomUniform([400, 400, 3]);
  const myCanvas = document.getElementById('randomness');
  tf.browser.toPixels(bigMess, myCanvas as HTMLCanvasElement).then(() => {
    bigMess.dispose();
    console.log('Make sure we cleaned up', tf.memory().numTensors);
  });
});

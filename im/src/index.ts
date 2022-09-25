import * as tf from '@tensorflow/tfjs';
import { Tensor3D } from '@tensorflow/tfjs-core';

tf.tidy(() => {
  const bigMess: Tensor3D = tf.randomUniform([100, 200, 3]);

  // const tensorOne = tf.fill([100, 100, 1], 0.2);
  // const tensorTwo = tf.fill([100, 100, 1], 0.5);
  // const tensorThree = tf.fill([100, 100, 1], 0.8);

  // const tensorOne = tf.fill([10, 20, 1], 0.7);
  // const tensorTwo = tf.fill([10, 20, 1], 0.1);
  // const tensorThree = tf.fill([10, 20, 1], 0.7);

  // const bigMess = tf.concat([tensorOne, tensorTwo, tensorThree], 2);

  bigMess.print();
  console.log(bigMess.shape);
  const myCanvas = document.getElementById('randomness');
  tf.browser
    .toPixels(bigMess as Tensor3D, myCanvas as HTMLCanvasElement)
    .then(() => {
      bigMess.dispose();
      console.log('Make sure we cleaned up', tf.memory().numTensors);
    });
});

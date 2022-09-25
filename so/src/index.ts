import * as tf from '@tensorflow/tfjs';

const bigMess: tf.Tensor3D = tf.randomUniform([200, 400, 1]);

const data = bigMess.arraySync();
data.forEach((s) => {
  s.sort((a, b) => b[0] - a[0]);
});
const sortedBigMess: tf.Tensor3D = tf.tensor(data);

const myCanvas = document.getElementById('randomness');
tf.browser
  .toPixels(sortedBigMess, myCanvas as HTMLCanvasElement | undefined)
  .then(() => {
    bigMess.dispose();
    console.log('Make sure we cleaned up', tf.memory().numTensors);
  });

import * as tf from '@tensorflow/tfjs';
import { Tensor2D, Tensor3D, TensorLike } from '@tensorflow/tfjs';

const bigMess = tf.randomUniform([400, 400, 3]);
const myCanvas = document.getElementById('randomness');
tf.browser
  .toPixels(
    bigMess as Tensor2D | Tensor3D | TensorLike,
    myCanvas as HTMLCanvasElement | undefined
  )
  .then(() => {
    bigMess.dispose();
    console.log('Make sure we cleaned up', tf.memory().numTensors);
  });

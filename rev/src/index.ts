import * as tf from '@tensorflow/tfjs';
import { Rank, Tensor, Tensor3D, Tensor2D, TensorLike } from '@tensorflow/tfjs';

window.addEventListener('load', function () {
  console.log('Start');
  // Simple Tensor Flip
  const lemonadeImage = document.getElementById('lemonade');
  const lemonadeCanvas = document.getElementById('lemonadeCanvas');
  const lemonadeTensor = tf.browser.fromPixels(
    lemonadeImage as HTMLImageElement
  );
  const flippedLemonadeTensor = tf.reverse(lemonadeTensor, 1);
  tf.browser
    .toPixels(
      flippedLemonadeTensor,
      lemonadeCanvas as HTMLCanvasElement | undefined
    )
    .then(() => {
      lemonadeTensor.dispose();
      flippedLemonadeTensor.dispose();
    });

  // Batch Tensor Flip
  const cakeImage = document.getElementById('cake');
  const cakeCanvas = document.getElementById('cakeCanvas');
  const flipCake = tf.tidy(() => {
    const cakeTensor = tf.expandDims(
      tf.browser.fromPixels(cakeImage as HTMLImageElement).asType('float32')
    );
    return tf
      .squeeze(tf.image.flipLeftRight(cakeTensor as Tensor<Rank.R4>))
      .asType('int32');
  });
  tf.browser
    .toPixels(
      flipCake as Tensor3D | TensorLike | Tensor2D,
      cakeCanvas as HTMLCanvasElement | undefined
    )
    .then(() => {
      flipCake.dispose();
    });
});

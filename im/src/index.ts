import * as tf from '@tensorflow/tfjs';
import { Tensor3D } from '@tensorflow/tfjs';

tf.tidy(() => {
  const gantImage: HTMLElement = document.getElementById('gant')!;
  const gantTensor: Tensor3D = tf.browser.fromPixels(
    gantImage as HTMLImageElement
  );
  console.log(`gant tensor shape: ${gantTensor.shape}`);
  console.log(gantImage);

  const cake: HTMLImageElement = new Image();
  // cake.crossOrigin = 'anonymous';
  cake.src = '/cake.jpg';
  cake.onload = () => {
    const cakeTensor: Tensor3D = tf.browser.fromPixels(cake);
    console.log(`cake tensor shape: ${cakeTensor.shape}`);
  };
  console.log(cake);
});

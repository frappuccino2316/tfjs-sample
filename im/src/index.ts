import * as tf from '@tensorflow/tfjs';
import { Tensor3D } from '@tensorflow/tfjs';

tf.tidy(() => {
  const gantImage: HTMLElement = document.getElementById('gant')!;
  const gantTensor: Tensor3D = tf.browser.fromPixels(
    gantImage as HTMLImageElement
  );

  console.log(`Gant tensor shape: ${gantTensor.shape}`);
});

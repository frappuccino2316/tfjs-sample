import * as tf from '@tensorflow/tfjs';
import { Rank, Tensor } from '@tensorflow/tfjs';
import { INCEPTION_CLASSES } from './labels';

console.log('start');
tf.ready().then(() => {
  console.log('ready');
  const modelPath =
    'https://tfhub.dev/google/tfjs-model/imagenet/inception_v3/classification/3/default/1';
  tf.tidy(() => {
    console.log('tidy');
    tf.loadGraphModel(modelPath, { fromTFHub: true }).then((model) => {
      console.log('loaded');
      const mysteryImage = document.getElementById('mystery');
      const myTensor = tf.browser.fromPixels(mysteryImage as HTMLImageElement);
      // Inception v3 expects an image resized to 299x299
      const readyfied = tf.image
        .resizeBilinear(myTensor, [299, 299], true)
        .div(255)
        .reshape([1, 299, 299, 3]);

      console.log('predict start');
      const result = model.predict(readyfied) as Tensor<Rank>;
      console.log('predict end');
      result.print(); // useless

      const { values, indices } = tf.topk(result, 3);
      indices.print();

      // Let's hear those winners
      const winners = indices.dataSync();
      console.log(`
              🥇 First place ${INCEPTION_CLASSES[winners[0]]},
              🥈 Second place ${INCEPTION_CLASSES[winners[1]]},
              🥉 Third place ${INCEPTION_CLASSES[winners[2]]}
            `);
    });
  });
});

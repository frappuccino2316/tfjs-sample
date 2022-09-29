import * as tf from '@tensorflow/tfjs';

const pizza = document.getElementById('pizza') as HTMLImageElement;
const mushroom = document.getElementById('mushroom') as HTMLImageElement;
const radio = document.getElementById('radio') as HTMLImageElement;

tf.ready().then(() => {
  const modelPath =
    'https://tfhub.dev/tensorflow/tfjs-model/ssd_mobilenet_v2/1/default/1';
  tf.loadGraphModel(modelPath, { fromTFHub: true }).then((model) => {
    const tensor = tf.browser.fromPixels(pizza);
    const readyfied = tf.expandDims(tensor, 0);

    model.executeAsync(readyfied).then((result) => {
      console.log('First', result[0].shape);
      result[0].print();
      console.log('Second', result[1].shape);
      result[1].print();
    });
  });
});

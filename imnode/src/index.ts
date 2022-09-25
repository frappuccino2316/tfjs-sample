import * as tf from '@tensorflow/tfjs-node';

tf.tidy(() => {
  const tensor = tf.tensor([1, 2, 3]);
  tensor.print();
});

import * as tf from '@tensorflow/tfjs';

tf.tidy(() => {
  const callMeMaybe = tf.tensor([123, 123, 234, 345, 456]);

  const arr = callMeMaybe.dataSync();
  const arrSet = new Set(arr);

  const newArr = Array.from(arrSet);

  const newCallMeMaybe = tf.tensor(newArr);
  newCallMeMaybe.print();
});

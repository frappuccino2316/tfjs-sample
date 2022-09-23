import * as tf from '@tensorflow/tfjs';

console.log('start');
console.log(tf.memory().numTensors);
console.log(tf.memory().numBytes);

let keeper, chaser, seeker, beater;

tf.tidy(() => {
  keeper = tf.tensor([1, 2, 3]);
  chaser = tf.tensor([1, 2, 3]);
  seeker = tf.tensor([1, 2, 3]);
  beater = tf.tensor([1, 2, 3]);

  console.log('inside', tf.memory().numTensors);

  tf.keep(keeper);
  return chaser;
});

console.log('after', tf.memory().numTensors);
console.log(tf.memory().numBytes);

keeper.dispose();
chaser.dispose();

console.log('end', tf.memory().numTensors);
console.log(tf.memory().numBytes);

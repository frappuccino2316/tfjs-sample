import * as tf from '@tensorflow/tfjs';

const snap = tf.tensor([1, 2, 3]);
const crackle = tf.tensor([3.141592654]);
const pop = tf.tensor([
  [1, 2, 3],
  [4, 5, 6],
]);

console.log(snap);
crackle.print();

console.log('Welcome Back Array', pop.arraySync());
console.log('Welcome Back Typed!', pop.dataSync());

tf.dispose([snap, crackle, pop]);

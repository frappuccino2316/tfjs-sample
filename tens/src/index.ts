import * as tf from '@tensorflow/tfjs';

console.log('Start');
const data = [0, 1, 2, 3, 4, 5, 6];
const tensor1 = tf.tensor1d(data);
const tensorAgain = tf.tensor(data);
console.log(tensor1);
console.log(tensorAgain);
console.log('End');

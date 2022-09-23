import * as tf from '@tensorflow/tfjs';

console.log('Start');
const data = [0, 1, 2, 3, 4, 5, 6];
const tensor1 = tf.tensor1d(data);
console.log(tensor1.size);
console.log(tensor1.shape);
console.log(tensor1.dtype);
console.log('End');

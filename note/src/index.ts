console.time('note');

import * as fs from 'fs';
import * as path from 'path';
import * as tf from '@tensorflow/tfjs-node';
import { Tensor3D, Tensor4D } from '@tensorflow/tfjs-node';

const FILE_PATH = 'files';
const cakeImagePath = path.join(FILE_PATH, 'cake.jpg');
const cakeImage = fs.readFileSync(cakeImagePath);

tf.tidy(() => {
  const cakeTensor: Tensor3D | Tensor4D = tf.node.decodeImage(cakeImage);
  console.log(`cakeTensor shape is ${cakeTensor.shape}`);

  const cakeBWTensor: Tensor3D | Tensor4D = tf.node.decodeImage(cakeImage, 1);
  console.log(`cakeBWTensor shape is ${cakeBWTensor.shape}`);
  cakeBWTensor.print();
});

console.timeEnd('note');

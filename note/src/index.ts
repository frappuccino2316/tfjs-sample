console.time('note');

import * as fs from 'fs';
import * as path from 'path';
import * as tf from '@tensorflow/tfjs-node';
import { Tensor3D, Tensor4D } from '@tensorflow/tfjs-node';

const FILE_PATH = 'files';
const gantcakeImagePath = path.join(FILE_PATH, 'gantcake.gif');
const gantcakeImage = fs.readFileSync(gantcakeImagePath);

tf.tidy(() => {
  const gantcakeTensor: Tensor3D | Tensor4D = tf.node.decodeImage(
    gantcakeImage,
    3,
    'int32',
    true
  );
  console.log(`gantcakeTensor shape is ${gantcakeTensor.shape}`);
});

console.timeEnd('note');

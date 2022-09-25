import * as fs from 'fs';

import * as tf from '@tensorflow/tfjs-node';
import { Tensor3D } from '@tensorflow/tfjs-node';

tf.tidy(() => {
  const bigMess: Tensor3D = tf.randomUniform([400, 400, 3], 0, 255);
  tf.node.encodePng(bigMess, 9).then((f) => {
    fs.writeFileSync('img/advance.png', f);
    console.log('Finish!');
  });
});

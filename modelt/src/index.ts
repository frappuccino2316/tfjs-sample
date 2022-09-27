import * as tf from '@tensorflow/tfjs';
import { Rank, Tensor } from '@tensorflow/tfjs';

tf.ready().then(() => {
  const modelPath = '../model/ttt_model.json';
  tf.tidy(() => {
    console.log('tidy');
    tf.loadLayersModel(modelPath).then((model) => {
      console.log('loaded');
      // Three board states
      const emptyBoard = tf.zeros([9]);
      const betterBlockMe = tf.tensor([-1, 0, 0, 1, 1, -1, 0, 0, -1]);
      const goForTheKill = tf.tensor([1, 0, 1, 0, -1, -1, -1, 0, 1]);

      // Stack states into a shape [3, 9]
      const matches = tf.stack([emptyBoard, betterBlockMe, goForTheKill]);
      console.log('stack');
      const result = model.predict(matches);
      console.log('predicted');
      // Log the results
      (result as Tensor<Rank>).reshape([3, 3, 3]).print();
    });
  });
});

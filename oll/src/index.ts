import * as tf from '@tensorflow/tfjs-node';

// console.log(tf.version.tfjs);
// console.log('Finish');

import * as toxicity from '@tensorflow-models/toxicity';

const threshold = 0.5;
const label = [
  // 'identity_attack',
  // 'insult',
  // 'obscene',
  // 'severe_toxicity',
  // 'sexual_explicit',
  // 'threat',
  // 'toxicity',
];

toxicity.load(threshold, label).then((model) => {
  const sentences = ['You are a poopy head!', 'I like turtles', 'Shut up!'];

  model.classify(sentences).then((predictions) => {
    console.log(JSON.stringify(predictions, null), 2);
  });
});

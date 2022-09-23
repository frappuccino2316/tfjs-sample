import * as tf from '@tensorflow/tfjs-node';
import * as toxicity from '@tensorflow-models/toxicity';
import { stringify } from 'querystring';

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
const sentences = ['You are a poopy head!', 'I like turtles', 'Shut up!'];

// toxicity.load(threshold, label).then((model) => {
//   const sentences = ['You are a poopy head!', 'I like turtles', 'Shut up!'];

//   model.classify(sentences).then((predictions) => {
//     console.log(JSON.stringify(predictions, null), 2);
//   });
// });

const predict = async (
  threshold: number,
  label: string[],
  sentences: string[]
) => {
  const model = await toxicity.load(threshold, label);
  const results = await model.classify(sentences);
  console.log(JSON.stringify(results, null, 2));
};

predict(threshold, label, sentences);

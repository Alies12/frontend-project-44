#!/usr/bin/env node
/* eslint-disable import/prefer-default-export */
import { cons } from '@hexlet/pairs';
import { randomNumbers } from '../utilites/random.js';

export function progress() {
  const firstNumber = randomNumbers(0, 10);
  const add = randomNumbers(0, 10);
  const progression = [];
  for (let i = 0; i < 10; i += 1) {
    progression.push(firstNumber + add * i);
  }

  const hideSymbol = Math.round(Math.random() * (progression.length - 1));
  const correctAnswer = progression[hideSymbol];
  progression[hideSymbol] = '..';

  return cons(progression.join(' '), correctAnswer.toString());
}

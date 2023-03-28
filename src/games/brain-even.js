#!/usr/bin/env node
/* eslint-disable import/prefer-default-export */
import { cons } from '@hexlet/pairs';
import { randomNumbers } from '../utilites/random.js';

export function parityCheck() {
  const number = randomNumbers(1, 50);
  let correctAns = '';
  if (number % 2 === 0) {
    correctAns = 'yes';
  } else {
    correctAns = 'no';
  }
  return cons(number, correctAns);
}

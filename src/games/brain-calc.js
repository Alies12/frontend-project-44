#!/usr/bin/env node
/* eslint-disable import/prefer-default-export */
import { cons } from '@hexlet/pairs';
import { randomNumbers } from '../../random.js';

export function calculator() {
  let correctAnswer = 0;
  const signs = ['+', '-', '*'];
  const firstNum = randomNumbers(0, 100);
  const secondNum = randomNumbers(0, 100);
  const sign = randomNumbers(0, 2);
  if (signs[sign] === '+') {
    correctAnswer = (firstNum + secondNum);
  } else if (signs[sign] === '-') {
    correctAnswer = (firstNum - secondNum);
  } else {
    correctAnswer = (firstNum * secondNum);
  }

  return cons(`${firstNum} ${signs[sign]} ${secondNum}`, correctAnswer.toString());
}

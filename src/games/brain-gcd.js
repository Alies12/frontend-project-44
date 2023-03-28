#!/usr/bin/env node
/* eslint-disable import/prefer-default-export */
import { cons } from '@hexlet/pairs';
import { randomNumbers } from '../utilites/random.js';

function gcd(a, b) {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
}

export function gcdGame() {
  const firstNum = randomNumbers(0, 100);
  const secondNum = randomNumbers(0, 100);
  const correctAnswer = gcd(firstNum, secondNum);
  return cons(`${firstNum} ${secondNum}`, correctAnswer.toString());
}

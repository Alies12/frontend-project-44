#!/usr/bin/env node
import {evenResult} from '@hexlet/pairs';
export default () => {
    let correctAnswer = 0;
    const firstNumber = (Math.random() * 100).toFixed(0);
    const secondNumber = (Math.random() * 100).toFixed(0);
    const signs = Math.round(Math.random()* 2);
    switch (signs) {
        case 0:
            correctAnswer = firstNumber + secondNumber
          break;
        case 1:
            correctAnswer = firstNumber - secondNumber
          break;
        default:
            correctAnswer = firstNumber * secondNumber
      }
      return evenResult(`${firstNumber} ${signs} ${secondNumber}`, correctAnswer.toString());
}
#!/usr/bin/env node
import {evenResult} from '@hexlet/pairs';
let randomNumber = (Math.random() * 100).toFixed(0);
export default () => {
    let correctAns = "";
    randomNumber % 2 === 0 ? correctAns = "yes" : correctAns = "no";
    return evenResult(randomNumber, correctAns)

}
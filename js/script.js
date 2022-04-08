'use strict';

const arr = [-1,-2,-3,-1,-2,-3];
proizvol(arr);

function proizvol(arr) {
    const exampleArr = [];
    if(1 > arr.length) {
        return alert('Пустой массив');
    }
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > 0) {
            exampleArr.push(arr[i]);
        }
    }
    if(1 > exampleArr.length) {
        return alert('null');
    }
    console.log(exampleArr)
}
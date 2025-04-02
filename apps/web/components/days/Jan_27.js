import React from 'react'

export const Jan_27 = () => {

  const isUnique = (str) => {
    let hash = {};
    for (let i = 0; i < str.length; i++) {
      if (hash[str[i]]) {
        return false;
      } else {
        hash[str[i]] = true;
      }
    }
    return true;
  }

  const printLetter = (str) => {
    for (let i = 0; i < str.length; i++) {
      console.log(str[i]);
    }
  }

  const URlify = (str) => {
    let newStr = "";
    const dict_letters = {
      ' ': '%20',
      '3': '%30',
      'e': '%80',
      '33': '%33',
    };
    const dictKeys = Object.keys(dict_letters);
    for (let i = 0; i < str.length; i++) {
      let hasKey = dict_letters.hasOwnProperty(str[i]);
      console.log('hasKey', str[i] , hasKey);
      if (hasKey) {
        newStr += dict_letters[str[i]];
      } else {
        newStr += str[i];
      }
    }
    return newStr;
  }

  console.log(URlify("new words      here3_33"));

  printLetter("hello");

  console.log(isUnique("hello"));

  const stringCompression = (str) => {
    let newstr = "";
    let count = 1;
    for(let i = 0; i < str.length; i++) {
      if(str[i] == str[i+1]) {
        count++;
      } else {
        newstr += str[i] + count;
        count = 1;
      }
    }
    newstr += str[str.length - 1] + count; // Add this line to handle the last character
    return newstr;
  }

  console.log('string compression', stringCompression("hello"));

  const isZeroMatrix = (matrix) => {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] !== 0) {
          return false;
        }
      }
    }
    return true;
  }

  const matrix = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ];

  console.log('isZeroMatrix', isZeroMatrix(matrix));

  const decompressString = (str) => {
    let sentence = "";
    for (let i = 0; i < str.length; i++) {
      let newWord = "";
      for(let j = 0; j < parseInt(str[i+1]); j++) {
        newWord += str[i];
      }
      sentence += newWord;
    }
    return sentence;
  }

  console.log('decompressString', decompressString("a2b1c5a3"));


  return (
    <div>
      <h1>String is Unique</h1>
    </div>
  )
}

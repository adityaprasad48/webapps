import React from 'react'

const Jan_28 = () => {
  
  const sum_arr = [1, 2, 3, 4, 5];
  const sum = sum_arr.reduce((acc, cur) =>  acc + cur, 0)
  console.log('sum_arr', sum_arr);
  console.log('sum', sum);

  // product of square of array elements
  const product_arr = [1, 2, 3, 4, 5];
  const PowerOf = 2;
  const product = product_arr.reduce((acc, cur) => acc * (cur ** PowerOf), 1);

  console.log('product_arr', product_arr);
  console.log('product', product);

  // find the max number in an array
  const max_arr = [1, 2, 3, 4, 5];
  const max = max_arr.reduce((acc, cur) => Math.max(acc, cur), 0);
  console.log('max_arr', max_arr);
  console.log('max', max);


  const nested = [[1, 2], [3, 4], [5], 2]
  const nested1 = [[1,2], [3,4], [8, 9, [2, 5]], 2]
  const flatarr = nested.reduce((acc, cur) => {
    return acc.concat(cur);
  }, []);
  const flatarr1 = nested.reduce((acc, cur) => Array.isArray(cur) ? [...acc, ...cur]: [...acc, cur], [])
  const flatten = (arr) => arr.reduce((acc, cur) =>
    acc.concat(Array.isArray(cur) ? flatten(cur) : cur), []);
  const flatarr2 = flatten(nested1);
  
  console.log('nested1', nested1);
  console.log('nested', nested);
  console.log('flatarr1', flatarr1);
  console.log('flatarr2', flatarr2);

  // find a longest word in a array
  const words = ['hello', 'world', 'this', 'is', 'a', 'test', 'Explore code'];
  // want word and index as well
  const longest = words.reduce((acc, cur, index) => {
    if(acc[0].length > cur.length) {
      acc = [acc[0], acc[1]];
    } else {
      acc = [cur, index];
    }
    return acc;
  }, ['', 0]);
  console.log('words', words);
  console.log('longest', longest);

  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
  ];

  const usersObj = users.reduce((acc, cur) => { acc[cur.id] = cur.name; return acc; }, {});

  //  Reverse a String

  // h + '' = h
  // e + h = eh
  // l + eh = leh
  // l + leh = lleh
  // o + lleh = olleh

  // reverse a array
  // h + [] = [h]


  let str = "hello";
  let reverse = Array.from(str).reduce((acc, cur) => cur + acc, '');
  console.log('str', str);
  console.log('reverse', reverse);

  let arr = [1, 2, 3, 4, 5];
  let reverseArr = arr.reduce((acc, cur) => [cur, ...acc], []);
  console.log('arr', arr);
  console.log('reverseArr', reverseArr);


  return (
    <div>
      <h1>Jan 28</h1>
      <h2>Today is I am trying to master reduce function</h2>
      <ul>
        <li>Sum of elements</li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  )
}

export default Jan_28
'use client';
import React from 'react'

const LoopTable = () => {
  'use client';
  const [loopData] = React.useState([
    { type: 'for', useCase: 'Fixed number of iterations', worksWith: 'Arrays, ranges', returnsValues: 'No' },
    { type: 'for...of', useCase: 'Iterate over elements of iterable objects', worksWith: 'Arrays, strings, Maps, Sets', returnsValues: 'Yes' },
    { type: 'for...in', useCase: 'Iterate over keys of an object', worksWith: 'Objects', returnsValues: 'Yes (keys)' },
    { type: 'while', useCase: 'Repeat until condition is false', worksWith: 'Any condition', returnsValues: 'No' },
    { type: 'do...while', useCase: 'Always execute at least once', worksWith: 'Any condition', returnsValues: 'No' },
    { type: 'forEach', useCase: 'Perform an action on each array element', worksWith: 'Arrays', returnsValues: 'No' }
  ]);

  return (
    <table>
      <thead>
        <tr>
          <th>Loop Type</th>
          <th>Use Case</th>
          <th>Works With</th>
          <th>Returns Values?</th>
        </tr>
      </thead>
      <tbody>
        {loopData.map((loop, index) => (
          <tr key={index}>
            <td>{loop.type}</td>
            <td>{loop.useCase}</td>
            <td>{loop.worksWith}</td>
            <td>{loop.returnsValues}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

}

const ArrayTable = () => {
  'use client';
  const [arrayMethods] = React.useState([
    { function: 'Creation', purpose: 'Array(), Array.of(), Array.from()' },
    { function: 'Adding/Removing', purpose: 'push(), pop(), shift(), unshift(), splice()' },
    { function: 'Searching', purpose: 'find(), findIndex(), includes(), indexOf()' },
    { function: 'Transforming', purpose: 'map(), filter(), flat(), reduce()' },
    { function: 'Sorting', purpose: 'sort(), reverse()' },
    { function: 'Iteration', purpose: 'forEach(), some(), every()' },
    { function: 'Slicing/Joining', purpose: 'slice(), join(), concat()' }
  ]);

  return (
    <table>
      <thead>
        <tr>
          <th>Function</th>
          <th>Purpose</th>
        </tr>
      </thead>
      <tbody>
        {arrayMethods.map((method, index) => (
          <tr key={index}>
            <td>{method.function}</td>
            <td>{method.purpose}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const Jan_29 = () => {
  'use client';
  return (
    <div>
      <h1>Jan_29</h1>
    <ol>
      <li>All array methods</li>
      <li>All string methods</li>
      <li>different kinds of Loops</li>
      <li>Destructure, RestOperator, Spreding</li>
      <li>Array.from()</li>
    </ol>
    <LoopTable />
    <ArrayTable /> 
    </div>


  )
}

export default Jan_29
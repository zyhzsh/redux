// import { compose, pipe } from "lodash/fp";

// let input = " JavaScript  ";
// let output = "<div>" + input.trim() + "</div>";

// const trim = (str) => str.trim();
// const wrapInDiv = (str) => `<div>${str}</div>`;
// const wrapInSpan = (str) => `<span>${str}</span>`;
// const toLowerCase = (str) => str.toLowerCase();

// //从右到左一层一层
// const transform = compose(wrapInDiv, toLowerCase, trim);

// // 按照顺序从左到右依次执行
// const transform = pipe(trim, toLowerCase, wrapInDiv);
// transform(input);

// const result = wrapInDiv(toLowerCase(trim(input)));

// const person = {
//   name: "Jhon",
//   address: {
//     country: "USA",
//     city: "San Francisco",
//   },
// };

// const updated = {
//   ...person,
//   address: {
//     ...person.address,
//     city: "New York",
//   },
// };

// console.log(person);

// console.log(updated);

// const numbers = [1, 2, 3];

// //Adding
// // 1 - Find element's index in the array
// const index = numbers.indexOf(2);

// const added = [
//   // 2 - copy first part
//   ...numbers.slice(0, index),
//   // 3 - adding element you want
//   4,
//   // 4 - copy rest of the part
//   ...numbers.slice(index),
// ];

// //Removing
// const removed = numbers.filter((n) => n !== 2);

// //Updating
// const updated = numbers.map((n) => (n === 2 ? 20 : n));
// console.log(updated);
//import { produce } from "immer";

import store from "./store";
import { bugAdded, bugResolved } from "./actions";

const unsubscribe = store.subscribe(() => {
  console.log("Store Changed ~ !", store.getState());
});

store.dispatch(bugAdded("BUG"));
store.dispatch(bugResolved(1));

console.log(store.getState());

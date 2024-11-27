// import { Observable } from "rxjs";

import { interval, map, Observable } from "rxjs"

// //Promises - not lazy (invoking without getting to the result )
// const p = new Promise((resolve, reject) => {
//   console.log('A promise has been initiated');
//   setTimeout(() => {
//     resolve(1000);
//   }, 3000);
// });

// p.then(data => console.log('Promise: ', data));

// //Observables - lazy (not invoking when not subscribed)
// const o = new Observable((observer) => {
//   setTimeout(() => {
//     observer.next(101);
//     observer.next(102);
//     observer.next(103);
//   }, 2000)

// });

// o.subscribe((data) => {
//   console.log('from observable: ', data);
// })


// const interval = (intervalValue: number) => {
//   const o = new Observable<number>((observer) => {
//     let counter = 0;

//     const timer = setInterval(() => {
//       observer.next(counter++);
//     }, intervalValue);

//     return () => {
//       clearInterval(timer);
//     }
//   });

//   return o;
// }

//observable syntax
const stream$ = interval(2000)
  .pipe(map((x) => x * 2))
  .pipe(map((x) => x + 1));


  //  


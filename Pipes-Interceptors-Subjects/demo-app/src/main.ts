import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { BehaviorSubject, map, Observable, Subject } from 'rxjs';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));


const p = new Promise((resolve, reject) => {
  resolve(100);
});

// p.then(console.log);

// const o$ = new Observable<number>((observer) => {
//   observer.next(101);
//   observer.next(102);
//   observer.next(103);

//   observer.error('wrong');
//   setTimeout(() => {
//     observer.complete();
//   }, 3000)
//   // observer.error(new Error('Wrong'));
//   // observer.complete();   
//   // return () => {
//   //   cleanup!
//   // };
// });

// o$.pipe(map(x => x * 2)).subscribe({
//   next: console.log,
//   error: (err) => console.log('Err', err),
//   complete: () => console.log('completed')
// });

// const subject$$ = new Subject();
// subject$$.subscribe((data) => console.log('Tom:', data));
// subject$$.next('Begining');

// subject$$.subscribe((data) => console.log('Steve:', data));
// subject$$.next('Mid');

// subject$$.subscribe((data) => console.log('Bob:', data));
// subject$$.next('End');

// const subject$$ = new Subject();
// subject$$.subscribe((data) => console.log('A:', data));
// subject$$.next(100);


// subject$$.subscribe((data) => console.log('B:', data));
// subject$$.subscribe((data) => console.log('C:', data));
// subject$$.next(200);

// setTimeout(() => {
//   subject$$.subscribe((data) => console.log('D:', data));
//   subject$$.next(300); 
// }, 2000);

// setTimeout(() => {
//   subject$$.subscribe((data) => console.log('E:', data));
//   subject$$.next(400); 
// }, 2000);

 const bSubject$$ = new BehaviorSubject(100);
 bSubject$$.subscribe(data => console.log('Data 1: ', data)); 

 setTimeout(() => {
  bSubject$$.next(200);
  bSubject$$.next(300);
  bSubject$$.next(400);
  bSubject$$.next(500);

  bSubject$$.subscribe((data) => console.log('Data 2', data));
 }, 2000);


 setTimeout(() => {
  bSubject$$.next(900);

  bSubject$$.subscribe(data => console.log('Data 3', data)); 
 }, 2000);

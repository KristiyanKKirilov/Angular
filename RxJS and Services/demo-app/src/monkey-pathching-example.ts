//standart console.log
// console.log(123);

//monkey patched console.log
 const originalConsoleLog = console.log;

 console.log = (...args) => {
  originalConsoleLog(...args);//invokes original copy

  //Notify Angular to Detect changes
  console.warn('Notify Angular to Render!');
  //notifyAngularToDetectChanges()
 }

//  console.log(3456);

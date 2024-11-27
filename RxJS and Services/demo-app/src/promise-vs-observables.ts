const p = new Promise((resolve, reject) =>{
    console.log('A promise has been initiated');
    setTimeout(() =>{
      resolve(1000); 
    }, 3000);
  });

  p.then(data => console.log(data));

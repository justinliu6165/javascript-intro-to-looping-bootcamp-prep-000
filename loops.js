function forLoop(array){
  for(var i = 0; i<25; i++){
    if(i === 1){
      array.push(`I am ${i} strange loop.`);
    } else {
      array.push(`I am ${i} strange loops.`);
    }
  }
return array;
}

function whileLoop(n){
  while(n>0){
    console.log(n);
    n--;
  }
  return 'done';
}

function doWhileLoop(array){
  function maybeTrue() {
    return Math.random() >= 0.5
  }
  
  do {
    array.unshift();
  } while (
    array.length > 0 && maybetrue()
  );
  
  return array;
}


function forLoop(array){
  for(var i = 0; i<25; i++){
    array = [];
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
}
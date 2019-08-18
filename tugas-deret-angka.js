function deretangka(value){

  var hasil = "";
  for (var i = 1; i <= value; i++){
    if(i % 3 === 0 && i % 5 === 0){
      hasil += "NIOMIC ";
    }else if( i % 3 === 0){
      hasil += "NIO ";
    }else if( i % 5 === 0){
      hasil += "MIC ";
    }else{
      hasil += i+" ";
    }
  }
  return hasil;
}
console.log(deretangka(10));
console.log(deretangka(20));
console.log(deretangka(30));

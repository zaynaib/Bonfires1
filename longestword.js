function findLongestWord(str) {
  str=str.split(' ');
  counter =0;
  for(var word in str){
    if(str[word].length >counter){
      counter = str[word].length;
    }
  }
  return counter;
}

findLongestWord('The quick brown fox jumped over the lazy dog');

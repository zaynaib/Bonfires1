function titleCase(str) {
  str = str.toLowerCase().split(' ');
  
  
  for( var word in str){
    str[word] =str[word].replace(str[word].charAt(0),str[word].charAt(0).toUpperCase());
    
   
  }
  return str.join(' ');
}

titleCase("I'm a little tea pot");

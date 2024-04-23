function primo(numero){
  var divisores=0;

  for(var i=1 ; i<=numero ; i++)
   if(numero % i == 0)
   	divisores++;
  
  if(divisores==2) return true;

  return false;
}

module.exports = primo;
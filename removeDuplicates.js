/***********************************************************************
+ Author: Manuel Martinez Fernandez
+ Date: Friday 10 October 2019
+ email: mfernandez.uidev@gmail.com
+
+ Expected input: 'AbraCadABraAlakAzam' as string
+ Description: Remove repeat letters from a string insensitive case.
+ OUTPUT: 'AbrCdlkzm' as string
***********************************************************************/

var input = 'AbraCadABraAlakAzam';
var dict = {};

function removeDuplicates(input){
  if(typeof input === 'string'){
    var ar = input.split('');
    var temp = [];
    console.log('Input detected is: '+input+' processing...');
    ar = ar.filter(function(value, index, self) {
     return self.indexOf(value) === index;
    });
    for(i=0;i<ar.length;i++){
      var res =temp.includes(ar[i].toLowerCase() && ar[i].toUpperCase());
      if(res === false){
        temp.push(ar[i]);
      }
    }//for ends..
    temp = temp.join('');
    console.log('Output: '+temp);
    return temp;
  }else{
    console.log('Error: Is not string please use correct string');
  }
}//function ends..

removeDuplicates(input);
//expected => AbrCdlkzm

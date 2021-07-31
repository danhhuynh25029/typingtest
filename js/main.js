function myFunction(ele) {
   if(event.key === "Enter"){
        var text = document.getElementById("text").innerHTML;
        if(text == ele.value){
           
           length_char = Math.floor(Math.random() * 5)+1;
           
           document.getElementById("result").innerHTML = "correct";
           document.getElementById("result").style.color = "green";
           changeText(length_char)
         //   span.classList.add('red');
        }else{
           document.getElementById("result").innerHTML = "incorrect";
           document.getElementById("result").style.color = "red";
         //   console.log(0);
         cIncorrect +=1 ; 
         console.log(cIncorrect);
        }
        document.getElementById("count").innerHTML = cIncorrect.toString();
   }
}
var cIncorrect = 0;
var sign = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var length_char = Math.floor(Math.random() * 5)+1;
var text = ["With you","hello world","My name is Lisa"]
function changeText(length_char){
   var text = "";
   for(var i = 1 ; i <= length_char ; i++){
      var length_sign = Math.floor(Math.random()*2)+3;
      var str = ""
      for(var j = 0 ; j < length_sign ; j ++){
         str = str + sign[Math.floor(Math.random()*sign.length)]
      }
      if( i != length_char){
         str += " "
         text = text + str
      }else{
         text = text + str
      }

   }
   document.getElementById("text").innerHTML = text
   document.getElementById("myText").value = "";
}
changeText(length_char)

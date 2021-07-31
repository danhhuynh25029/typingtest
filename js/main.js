function myFunction(ele) {
   if(event.key === "Enter"){
        var text = document.getElementById("text").innerHTML;
        if(text == ele.value){
           var str = text.replace('/\s+/g','');
           sumSign += str.length;
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
var timeLeft = 10;
var cIncorrect = 0;
var sumSign = 0;
var sign = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var length_char = Math.floor(Math.random() * 5)+1;
var text = ["With you","hello world","My name is Lisa"]
document.getElementById("time").innerHTML = timeLeft;
function changeText(length_char){
   var text = "";
   for(var i = 1 ; i <= length_char ; i++){
      var length_sign = Math.floor(Math.random()*2)+3;
      var str = "";
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
function Restart(){
   cIncorrect = 0;
   timeLeft = 10;
   document.getElementById("count").innerHTML = 0;
   document.getElementById("time").innerHTML = timeLeft.toString();
   countDown();
}
function countDown(){
   var iter = setInterval(function(){
      if(timeLeft <= 0){
         console.log(sumSign)
         document.getElementById("start").innerHTML = "restart";
         clearInterval(iter)
         // result()
         document.getElementById("speed").innerHTML ="Tốc độ gõ : "+(sumSign / 5).toString() + " WPM";
      }
      document.getElementById("time").innerHTML = timeLeft;
      timeLeft -= 1;
   },1000)
}
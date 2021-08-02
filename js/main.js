function myFunction(ele) {
   if(start == true){
   if(event.keyCode === 32){
      var tmp = document.getElementsByTagName("span");
      var text = document.getElementById("text").innerHTML;
        if(ele.value.trim() == tmp[indexText].innerHTML){
           var str = text.split(' ').join('');
           tmp[indexText].style.color = "green";
           sumSign += str.length;
           length_char -= 1;   
           indexText += 1;
           document.getElementById("result").innerHTML = "correct";
           document.getElementById("result").style.color = "green";
           document.getElementById("myText").value = "";
           if (length_char == 0){
            length_char = Math.floor(Math.random() * 5)+1;
            changeText(length_char);
           }
         //   
         //   span.classList.add('red');
        }else{
         tmp[indexText].style.color = "red";
         indexText += 1;
           document.getElementById("myText").value = "";
           document.getElementById("result").innerHTML = "incorrect";
           document.getElementById("result").style.color = "red";
         //   console.log(0);
         cIncorrect +=1 ; 
         length_char -= 1;
         if (length_char == 0){
            length_char = Math.floor(Math.random() * 5)+1;
            changeText(length_char);
         }
         // console.log(cIncorrect);
        }
        document.getElementById("count").innerHTML = cIncorrect.toString();
   }
}
}
var indexText = 0;
var timeLeft = 60;
var cIncorrect = 0;
var sumSign = 0;
var start = false;
var sign = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var length_char = Math.floor(Math.random() * 5)+1;
var text = ["With you","hello world","My name is Lisa"]
document.getElementById("time").innerHTML = timeLeft;
function changeText(length_char){
   var text = "";
   indexText  = 0;
   for(var i = 1 ; i <= length_char ; i++){
      var length_sign = Math.floor(Math.random()*2)+3;
      var str = "";
      for(var j = 0 ; j < length_sign ; j ++){
         str = str + sign[Math.floor(Math.random()*sign.length)]
      }
      str = "<span>"+str+"</span>";
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
// Restart time
function Restart(){
   cIncorrect = 0;
   if(start == false){
      start = true;
   }else{
      length_char = Math.floor(Math.random() * 5)+1;
      changeText(length_char);
   }
   timeLeft = 60;
   
   document.getElementById("count").innerHTML = 0;
   document.getElementById("time").innerHTML = timeLeft.toString();
   document.getElementById("speed").innerHTML = "";
   countDown();
}
// Time count down
function countDown(){
   var iter = setInterval(function(){
      if(timeLeft <= 0){
         console.log(sumSign)
         document.getElementById("start").innerHTML = "restart";
         clearInterval(iter)
         // result()
         document.getElementById("speed").innerHTML ="Tốc độ gõ : <b>"+(sumSign / 5).toString() + "</b> WPM";
      }
      document.getElementById("time").innerHTML = timeLeft;
      timeLeft -= 1;
   },1000)
}
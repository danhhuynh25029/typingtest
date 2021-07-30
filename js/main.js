function myFunction(ele) {
   if(event.key === "Enter"){
        var text = document.getElementById("text").innerHTML;
        if(text == ele.value){
           
           index += 1
           changeData(index)
           document.getElementById("result").innerHTML = "correct";
           document.getElementById("result").style.color = "green";
         //   span.classList.add('red');
        }else{
           document.getElementById("result").innerHTML = "incorrect";
           document.getElementById("result").style.color = "red";
           console.log(0);
        }
   }
}
var index = 0;
var text = ["With you","hello world","My name is Lisa"]
function changeData(index){
   document.getElementById("text").innerHTML = text[index]
   document.getElementById("myText").value = "";
}
changeData(index)

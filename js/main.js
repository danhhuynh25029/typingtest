function myFunction(ele) {
   if(event.key === "Enter"){
        var text = document.getElementById("text").innerHTML;
        if(text == ele.value){
           console.log(1)
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
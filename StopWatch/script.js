window.onload = function () {
  
    var seconds = 00; 
    var tenths = 00; 
    var appendTens = document.getElementById("tenths")
    var appendSeconds = document.getElementById("seconds")
    var buttonStart = document.getElementById("start");
    var buttonStop = document.getElementById("stop");
    var buttonReset = document.getElementById("reset");
    var Interval ;
  
    buttonStart.onclick = function() {
      
      clearInterval(Interval);
       Interval = setInterval(timerStart, 10);
    }
    
      buttonStop.onclick = function() {
         clearInterval(Interval);
    }
    
  
    buttonReset.onclick = function() {
       clearInterval(Interval);
      tens = "00";
        seconds = "00";
      appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
    }
    
     
    
    function timerStart () {
      tens++; 
      
      if(tens <= 9){
        appendTens.innerHTML = "0" + tens;
      }
      
      if (tens > 9){
        appendTens.innerHTML = tens;
        
      } 
      
      if (tens > 99) {
        console.log("seconds");
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
      }
      
      if (seconds > 9){
        appendSeconds.innerHTML = seconds;
      }
    
    }
    
  
  }

 function calculateTemp(){
    var x = document.getElementById("degree").value ;
    var displayString ="";
    
    var y = document.querySelector('input[name="type"]:checked').value;

    if (y=="Celsius"){
      var z=(x*1.8)+32;
      
      displayString=  + z + " Farenheit" ;

    }
    else{
      var z=(x-32)/1.8;
      displayString=  + z + " Celsius" ;
    }
    
    document.getElementById("convertedTemp").innerHTML=  displayString;
    

}




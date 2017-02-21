
function login(){

   var val1 = document.getElementById("textbox1").value;
   var val2 = document.getElementById("textbox2").value;
if(val1 == "" && val2 == ""){
alert("cannot leave Empty");
}

else
   if(val1 == "" ){

       alert("invalid field");
   }
   else
      if(val2 == ""){
alert("invalid field");
   }
else{
    document.location.assign("index.html");
}

}
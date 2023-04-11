function required1() {
    var x = document.getElementById("fields").value.trim();
    var nospecial = /^[a-zA-Z0-9 ]+$/;
    var pattern=/[0-9]/;
    var first = x.charAt(0);
    var last  = x.charAt(x.length-1)
      if (x == "") {
        document.getElementById("form").innerHTML = "please enter a sentence";
        return false;
    }
    else if (!x.match(nospecial)) {
        document.getElementById("form").innerHTML = "special characters are not allowed";
        return false;
    }
    else if (x.match(pattern)){
        document.getElementById("form").innerHTML = "Number(s) are not allowed";
        return false;
    } 
    else if (x.length <= 1) {
        document.getElementById("form").innerHTML = "Please enter a sentence more than one character";
        return false;
    }
     else if(first==last){
             document.getElementById("form").innerHTML =" ";
             alert(" The first and last characters are same");
    }
    else{
        
        document.getElementById("form").innerHTML ="The first and last characters are not same";
    }

}

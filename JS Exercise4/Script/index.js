function required1() {
    var x = document.getElementById("fields").value.trim();
    var nospecial = /^[a-zA-Z0-9 ]+$/;
      if (x == "") {
        document.getElementById("form").innerHTML = "please enter a sentence";
        return false;
    }
    else if (!x.match(nospecial)) {
        document.getElementById("form").innerHTML = "special characters are not allowed";
        return false;
    } 
    else if (x.length <= 1) {
        document.getElementById("form").innerHTML = "Please enter a sentence which has more than one character";
        return false;
    }
    else{
    var string= x.split('').reverse().join('');
    document.getElementById("form").innerHTML= string;
    }
    
}
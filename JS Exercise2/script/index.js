function myfunc() {
    var x = document.getElementById("fields").value.trim();
    var nospecial = /^[a-zA-Z0-9 ]+$/;
    var pattern = /[0-9]/g;
    var vowels = /[aeiouAEIOU]/;
    if (x == "") {
        document.getElementById("Empty").innerHTML = "please enter a sentence";
        return false;
    } 
    if (!x.match(nospecial)) {
        document.getElementById("Empty").innerHTML = "special character(s) are not allowed";
        return false;
    }
    else if (x.length > 1) {
        document.getElementById("Empty").innerHTML = "Please enter only one word";
        return false;
    }
    else if (x.match(pattern)) {
        document.getElementById("Empty").innerHTML = "Number(s) are not allowed";
        return false;
    }
    else {
        if (x.match(vowels)) {
            document.getElementById("Empty").innerHTML = x +" "+ "  is a vowel";
            return false;
        }
        document.getElementById("Empty").innerHTML = x +"  "+ "  is not a vowel";;
    }
}

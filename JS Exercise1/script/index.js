function required1() {
    var x = document.getElementById("fields").value.trim();
    var a = x.replace(/\s+/g, " ").trim();
    var y = a.split(" ");
    var nospecial = /^[a-zA-Z0-9 ]+$/;
    if (x == "") {
        document.getElementById("form").innerHTML = "please enter a sentence";
        return false;
    }
    else if (!x.match(nospecial)) {
        document.getElementById("form").innerHTML = "special characters are not allowed";
        return false;
    }

    else if (y.length <= 1) {
        document.getElementById("form").innerHTML = "Please enter a sentence which has more than one word";
        return false;
    }
    else {
        var longestString = y[0];
        var smallestString = y[0];
        for (var i = 1; i < y.length; i++) {
            if (y[i].length > longestString.length) {
                longestString = y[i];
            }
            if (y[i].length < smallestString.length) {
                smallestString = y[i];
            }
        }
        if (longestString.length == smallestString.length) {
            document.getElementById("form").innerHTML = "All Words are equal ";
        }
        else {
            document.getElementById("form").innerHTML = "The Smallest String :" + smallestString + "<br>" + "The Largest String :" + longestString;
        }

    }
}

  


function myfunc() {
    var text = document.getElementById("fields").value.trim();
    text = text.replace(/\s+/g,'');
    var y = text.split(",");
    y = y.filter(Boolean);
    var nospecial = /^[a-zA-Z0-9, ]+$/;
    var position = document.getElementById("position").value.trim();
    var not_num = /[-]/g;
    var special = /^[0-9]+$/g;
    var newelement = document.getElementById("newelement").value.trim();
    if (text == "") {
        document.getElementById("empty").innerHTML = "please enter a sentence";
        return false;
    }
    else if (text.length < 1) {
        document.getElementById("empty").innerHTML = "Single value should not be allowed";
        document.getElementById("position").value = "";
        document.getElementById("newelement").value = "";
        return false;
    }
    else if (!text.match(nospecial)) {
        document.getElementById("empty").innerHTML = "special characters are not allowed";
        document.getElementById("position").value = "";
        document.getElementById("newelement").value = "";
        document.getElementById("result").value = "";
        return false;
    }
    else if (position == "") {
        document.getElementById("empty").innerHTML = "please enter a position";
        document.getElementById("newelement").value = "";
        document.getElementById("result").value = "";
        return false;
    }
    else if (position.match(not_num)) {
        document.getElementById("empty").innerHTML = "please enter only a positive number for getting the position";
        document.getElementById("result").value = "";
        return false;
    }
    else if (!position.match(special)) {
        document.getElementById("empty").innerHTML = "Enter only numbers";
        document.getElementById("result").value = "";
        document.getElementById("newelement").value = "";
        return false;
    }
    
    
    else if (!position.match(nospecial)) {
        document.getElementById("empty").innerHTML = "special characters are not allowed in position field";
    }
    else if ((y.length < position)||(position < 1)){
        document.getElementById("empty").innerHTML = "Enter position with in " + "1 to " + y.length;
        document.getElementById("newelement").value = "";
        document.getElementById("result").value = "";
        return false;
    }
    else if (newelement == "") {
        document.getElementById("empty").innerHTML = "please enter a newelement";
        return false;
    }
    else {
        let newarray=position-1;
        let array = y.splice(newarray, 1, newelement);
        document.getElementById("result").value = y;
        document.getElementById("empty").innerHTML = "";
    }
}
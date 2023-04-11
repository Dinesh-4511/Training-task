function myfunc(result) {
    var x = document.getElementById("fields").value.trim();
    var a = x.replace(/\s+/g, '');
    var y = a.split(",");
    y = y.filter(Boolean);
    var nospecial = /^[0-9+-., ]+$/;
    var noword = /[a-zA-z]/;
    if (x == "") {
        document.getElementById("empty").innerHTML = "please enter a sentence";
        return false;
    }
    else if (x.match(noword)) {
        document.getElementById("empty").innerHTML = "letter(s) are not allowed";
        document.getElementById("output").value = "";
        return false;
    }
    else if (!x.match(nospecial)) {
        document.getElementById("empty").innerHTML = "special characters are not allowed";
        return false;
    }
    else if (y.length <= 1) {
        document.getElementById("empty").innerHTML = "please enter more than one number";
        return false;
    }
    else {

        add(y, result);
    }
}
function add(y, result) {
    var sum = 0;
    var multi = 1;
    if (result == "add") {
        for (var i = 0; i < y.length; i++) {
            sum += parseFloat(y[i]);
        }
        if (isNaN(sum)) {
            document.getElementById("empty").innerHTML = "please enter a valid number";
            document.getElementById("output").value = "";
        }
        else {
            document.getElementById("output").value = sum;
            document.getElementById("empty").innerHTML=" ";
        }
    }
    if (result == "multiply") {
        for (var i = 0; i < y.length; i++) {
            multi *= parseFloat(y[i]);
        }
        if (isNaN(multi)) {
            document.getElementById("empty").innerHTML = "please enter a valid number";
            document.getElementById("output").value = "";
        }
        else {
            document.getElementById("output").value = multi;
            document.getElementById("empty").innerHTML=" ";
        }

    }
}






















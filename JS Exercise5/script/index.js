function myfunc() {
    var x = document.getElementById("fields").value.trim();
    var a = x.replace(/\s+/g, '');
    var y = a.split(",");
    var nospecial = /^[0-9,+-. ]+$/;
    var noword = /[A-Za-z]/g;
    // y = y.filter(Boolean);
    // console.log(y);
    
    if (x == "") {
        document.getElementById("form").innerHTML = "please enter a Numbers";
        return false;
    }
    else if (x.match(noword)) {
        document.getElementById("form").innerHTML = "letter(s) are not allowed";
        return false;
    }
    else if(x.length==1){
                document.getElementById("form").innerHTML = "Enter only two numbers";
    }

     else if(y.length > 2){
        document.getElementById("form").innerHTML = "Enter only two numbers";
    }
     else if (!x.match(nospecial)) {
        document.getElementById("form").innerHTML = "special characters are not allowed";
        return false;
    }
   else {
        let maxnumber = y[0];
        let minnumber = y[1];
        maximum(maxnumber, minnumber);
    }
     
    
}
function maximum(a, b) {
    
     if (Number(a) > Number(b)) {
        document.getElementById("form").innerHTML = "The  largest number is"+" "+Number(a);
        return false;
    }
   else if (Number(a) < Number(b)) {

        document.getElementById("form").innerHTML = "The largest number is" +" "+ Number(b);
    } 
   
    else if (Number(a) == Number(b)) {

        document.getElementById("form").innerHTML = "Both numbers are equal";
    } 
     else if(isNaN(Number(a))||isNaN( Number(b))){
        document.getElementById("form").innerHTML = "Please enter a valid number";
        return false;
    } 
    
}




// var nospecial = /^[0-9]+(?:,[0-9])+g/;
    // var noword = /[a-zA-z]/;



function validateForm() {
    var firstname = document.getElementById("inputbox").value.trim();
    var lastname = document.getElementById("inputboxs").value.trim();
    var email = document.getElementById("inputbox1").value.trim();
    var phone = document.getElementById("inputbox2").value.trim();
    var zipcode = document.getElementById("inputbox3").value;
    var nospecial = /^[A-za-z]+$/;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var not_num = /^[0-9]+$/;
    //validation for firstname
    if (firstname == "") {
        document.getElementById("firstName").innerHTML = "Please Enter a First Name";
    }
    else if (!firstname.match(nospecial)) {
        document.getElementById("firstName").innerHTML = "Enter only a Alphabets";
    }
    else {
        document.getElementById("firstName").innerHTML = "";
    }
    //validation for lastname
    if (lastname == "") {
        document.getElementById("lastName").innerHTML = "Please Enter a Last Name";
    }
    else if (!lastname.match(nospecial)) {
        document.getElementById("lastName").innerHTML = "Enter only a Alphabets";
    }
    else {
        document.getElementById("lastName").innerHTML = "";
    }
    //validation for email id 
    if (email == "") {
        document.getElementById("email").innerHTML = "Please Enter a Email-Id";
    }
    else if (!email.match(mailformat)) {
        document.getElementById("email").innerHTML = "Enter a valid Email-Id";
    }
    else {
        document.getElementById("email").innerHTML = "";
    }
    //validation for phonenumber
    if (phone == "") {
        document.getElementById("phone").innerHTML = "Please Enter a Phone Number";
    }
    else if (!phone.match(not_num)) {
        document.getElementById("phone").innerHTML = "Enter a Numbers only";
    }
    else {
        document.getElementById("phone").innerHTML = "";
    }
    //validation for zipcode
    if (zipcode == "") {
    }
    else if (!zipcode.match(not_num)) {
        document.getElementById("emptycode").innerHTML = "Enter a Numbers only";
    }
    else if (zipcode.length != 6) {
        document.getElementById("emptycode").innerHTML = "ZipCode must be only in 6 digit";
    }
    else {
        document.getElementById("emptycode").innerHTML = "";
    }
    if (document.getElementById("firstName").innerHTML != "" || document.getElementById("lastName").innerHTML != "" || document.getElementById("email").innerHTML != "" || document.getElementById("phone").innerHTML != "" || document.getElementById("emptycode").innerHTML != "") {
        return false;
    } else {
        return true; 
    }
}
function myfunc() {
    document.getElementById("firstName").innerHTML = "";
    document.getElementById("inputbox").value="";
    document.getElementById("lastName").innerHTML = "";
    document.getElementById("inputboxs").value="";
    document.getElementById("email").innerHTML = "";
    document.getElementById("inputbox1").value="";
    document.getElementById("phone").innerHTML = "";
    document.getElementById("inputbox2").value="";
    document.getElementById("emptycode").innerHTML = "";
    document.getElementById("inputbox3").value="";
}
function myfunc() {
    var text = document.getElementById("address").value;
    const urlPattern = /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;

    // Validation for Uniform Resource Locator

    if (text == "") {
        document.getElementById("empty").innerHTML = "Enter a URL";
    }
    else if (!urlPattern.test(text)) {
        document.getElementById("empty").innerHTML = "please enter a valid URL";
    }
    else {
        // This is for the getting for Keys from parameters
        let paramString = text.split('?')[1];
        let queryString = new URLSearchParams(paramString);
        let keys = queryString.keys();
        let paramkey = [];
        for (const key of keys) {
            paramkey +=  key + "</br>"
            document.getElementById("keyempty").innerHTML = "<b>Keys are:</b>" + "</br>" + paramkey;
            document.getElementById("empty").innerHTML = "";
        }  
         // This is for the getting for values from parameters
        let values = queryString.values();
        let paramvalue = [];
        for (const value of values) {
            paramvalue +=  value + "</br>"
            document.getElementById("valueempty").innerHTML = "<b>values are:</b>" + "</br>" + paramvalue;
            document.getElementById("empty").innerHTML = "";
        }
    }
}
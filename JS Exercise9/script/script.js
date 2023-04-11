function myfunc() {
    var current = new Date();
    var [timeZone] = current.toString().match(/([A-Z]+[\+-][0-9]+.*)/);
    document.getElementById("year").innerHTML = current.getFullYear();
    document.getElementById("month").innerHTML = current.getMonth() + 1;
    document.getElementById("date").innerHTML = current.getDate();
    document.getElementById("hours").innerHTML = current.getHours();
    document.getElementById("minutes").innerHTML = current.getMinutes();
    document.getElementById("seconds").innerHTML = current.getSeconds();
    document.getElementById("milli").innerHTML = current.getMilliseconds();
    document.getElementById("time").innerHTML=timeZone;
    setInterval(myfunc, 1000);
    document.getElementById("DateTime").innerHTML = "<h3>Local Time is:</h3>" + current.toLocaleString();
    document.getElementById("utcTime").innerHTML = "<h3>UTC Time is:</h3>" + current.toUTCString();
    document.getElementById("utcMilliSeconds").innerHTML = "<h3>UTC MilliSeconds</h3>" + "1637216199" + current.getUTCMilliseconds();
}












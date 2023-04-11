var counter;
counter =0;
reset();
function reset() {
   if (!localStorage.getItem("Visits")) {
        localStorage.setItem("Visits", counter);
    } 
    else {
        localStorage.setItem("Visits", counter);
    }
}
function Counter() {
    counter = counter + 1;
    localStorage.setItem("Visits", counter);
    alert("Visitors: " + localStorage.getItem("Visits"));
}
function resetfunc() {
    localStorage.setItem("Visits", counter = 0);
    alert("Visitors: " + localStorage.getItem("Visits"));
}
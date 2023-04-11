function selects(){
    var select=document.getElementsByName("fields");
    for(var i=0;i<select.length;i++){
        select[i].checked=true;
    }

}
function unselects(){
    var select=document.getElementsByName("fields");
    for(var i=0;i<select.length;i++){
        select[i].checked=false;
    }

}
function choice(){
    var select= document.getElementsByName("fields");
    
    for(var i=0; i<select.length; i++){
        if(select[i].checked == true){
            select[i].checked = false;
        }
        else if(select[i].checked == false){
            select[i].checked=true;
        }
    }
}


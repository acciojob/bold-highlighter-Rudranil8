function highlight() {
	var x = document.getElementsByTagName("strong");
    for(var i = 0; i < x.length; i++){
        x[i].style.color = "green";
    }
}


function return_normal() {
	var x = document.getElementsByTagName("strong");
    for(var i = 0; i < x.length; i++){
        x[i].style.color = "black";
    }
}

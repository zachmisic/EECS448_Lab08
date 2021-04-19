var createtextbox = document.createElement("INPUT");
createtextbox.setAttribute("type", "text");

function setBorder(form) {
    var r = form.redBorder.value;
    var g = form.greenBorder.value;
    var b = form.blueBorder.value;
    var w = form.width.value;
    document.getElementById("par").style.borderColor = "#" + r + g + b;
    document.getElementById("par").style.borderWidth = w+"px";
}

function setBack(form) {
    var r = form.redBack.value;
    var g = form.greenBack.value;
    var b = form.blueBack.value;
    document.getElementById("par").style.backgroundColor = "#" + r + g + b;
}

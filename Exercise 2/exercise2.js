var image = 1;

function left(form) {
    image--;
    if (image < 1) {
        image = 5;
    }
    select();
}

function right(form) {
    image++;
    if (image > 5) {
        image = 1
    }
    select()
}

function select() {
    switch (image) {
        case 1:
            document.getElementById("image").src = "ket1.jpg";
            break;
        case 2:
            document.getElementById("image").src = "ket2.jpg";
            break;
        case 3:
            document.getElementById("image").src = "ket3.jpg";
            break;
        case 4:
            document.getElementById("image").src = "ket4.jpg";
            break;
        case 5:
            document.getElementById("image").src = "ket5.jpg";
            break;
        default: 
    }
}
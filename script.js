var j = 0
var i = 0;
var txt = 'Hello Everyone';
var txt2 = 'My Name is';
var speed = 300;

function typeWriter() {
    if(j == 0){   
        if (i < txt.length) {
            document.getElementById("demo").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
        else if(i == txt.length) {
            document.getElementById("demo").innerHTML = " ";
            j += 1;
            i = 0;
            typeWriter()
        }
    }
    else{      
        if (i < txt2.length) {
            document.getElementById("demo").innerHTML += txt2.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
        else{
            document.getElementById("demo").innerHTML = " ";
            j -= 1
            i = 0
            typeWriter()
        }
    }
}

typeWriter()

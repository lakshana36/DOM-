function identifyById() {
    console.log(document.getElementById('para1'));
}

function identifyByClass() {
    console.log(document.getElementsByClassName('class1'));
}

function identifyByTag() {
    console.log(document.getElementsByTagName("p"));
    
}

function changeBackground() {
    document.getElementById("block1").style.backgroundColor = "blue";
    
}

function increaseFont() {
    document.getElementById("block2").style.fontSize = "xx-large";
    
}

function changeFontColor() {
    document.getElementById("block3").style.color = "green";
    
}

function revertColor() {
    document.getElementById("block3").style.color = "black";
}

function hide() {
    document.getElementById("para4").style.visibility = "hidden";
}

function changeBackColor(x,y) {
    
    var a=document.getElementsByClassName(y);
    for(var i=0;i<a.length;i++)
        {
            a[i].style.backgroundColor="green";
        }

}

function changeBackColor1(x,y) {
    
    var a=document.getElementsByClassName(y);
    for(var i=0;i<a.length;i++)
        {
            a[i].style.backgroundColor="blue";
        }

}


function addAdjacent() {
    var x = document.getElementById("para2");
    var t = document.createTextNode("I got generated on the fly....");
    x.appendChild(t);
    //document.body.appendChild(x);
    document.getElementById("para2");
}

function removePara() {
    var element = document.getElementById("para4");
    element.remove();
 
}

function myMove() {
    var elem = document.getElementById("box5");   
    var pos = 0;
    var id = setInterval(frame, 5);
    function frame() {
      if (pos == 250) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.left = pos + 'px'; 
      }
    }
}
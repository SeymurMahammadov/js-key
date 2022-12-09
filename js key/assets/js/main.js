let box=document.getElementById("box")
let margin=100;

document.body.onkeyup=function(e){
        document. body.onkeyup = function (e) {
            if(e.keyCode === 32) {
            margin += 40;
             box.style.margin = ` ${margin}px`
        }
        if (margin===340) {
            alert("Well done")
        }
    }
}

    
    

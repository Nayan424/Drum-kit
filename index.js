var n=document.querySelectorAll('button').length;
for(var i=0;i<n;i++){
	document.querySelectorAll('button')[i].addEventListener("click",function(){
        var c=this.innerHTML;
        sound(c)
    })
}

document.addEventListener("keypress",function(event){
    sound(event.key);
})

function sound(k){
    highlight(k);
    switch(k){
        case 'w':
            var t=new Audio("sounds/tom-1.mp3");
            t.play();
            break;
        case 'a':
            var t=new Audio("sounds/tom-2.mp3");
            t.play();
            break;
        case 's':
            var t=new Audio("sounds/tom-3.mp3");
            t.play();
            break;
        case 'd':
            var t=new Audio("sounds/tom-4.mp3");
            t.play();
            break;
        case 'j':
            var t=new Audio("sounds/kick-bass.mp3");
            t.play();
            break;
        case 'k':
            var t=new Audio("sounds/snare.mp3");
            t.play();
            break;
        case 'l':
            var t=new Audio("sounds/crash.mp3");
            t.play();
    }
}

function highlight(k){
    var q=document.querySelector('.'+k);
    q.classList.add('pressed');
    setTimeout(function(){q.classList.remove('pressed');},100);
}
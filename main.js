let scrollBtn = document.getElementById('scrollBtn');

window.onscroll = function(){
    if(scrollY >= 290){
        scrollBtn.style.display = 'block';
    }
    else{
        scrollBtn.style.display = 'none';
    }
}
scrollBtn.onclick = function(){
    scroll({
        left:0,
        top:0,
        behavior:"smooth"
    })
}
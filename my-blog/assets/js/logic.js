const modeswitch = document.querySelector('#modeswitch');
const body = document.querySelector('body');

let mode = "light"
modeswitch.addEventListener('click', function(){
    if (mode === "light"){
        mode = "dark";
        body.setAttribute('class', "dark");
        modeswitch.textContent = "🌔"; 
    } else{
        mode = "light"
        body.setAttribute('class', "light");
        modeswitch.textContent = "☀️"; 
    }
});
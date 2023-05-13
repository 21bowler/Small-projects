const currentDate = new Date();
let hour = 0;
let minute = 0;
let second = 0;

setInterval(
    function(){
        currentDate = new Date();
        second = currentDate.getSeconds() * 6;
        minute = currentDate.getMinutes();
        hour = currentDate.getHours();
        document.getElementById("second-hand").style.transform = "rotate(" + second + "deg)";
    },1000
)
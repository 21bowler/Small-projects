const screen = document.querySelector('.screen');
const buttons = document.querySelectorAll('button');

buttons.forEach((item) => {
    item.onclick = () => {
        if (item.id == 'clear'){
            screen.innerText = '';
        } else if (item.id == 'backspace') {
            let string = screen.innerText.toString();
            screen.innerText = string.substr(0, string.length - 1);
        } else if (screen.innerText != '' && item.id == 'equal'){
            screen.innerText = eval(screen.innerText);
        } else if (screen.innerText == '' && item.id == 'equal'){
            screen.innerText = 'No number written!';
            setTimeout(() => (screen.innerText = ''), 2000);
        }else{
            screen.innerText += item.id;
        }
    }
})
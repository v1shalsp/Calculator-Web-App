var display = document.getElementById("Result");

function print(m){
    display.value += m;
}

function clearDisplay(){
    display.value = "";
}

function backspace(){
    display.value = display.value.slice(0, -1);
}

function equal(){
    display.value = eval(display.value);
}
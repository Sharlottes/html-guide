let pre = null;
let frame = null;
let index = 1;

do{
    pre = document.getElementById(`exp${index}`);
    frame = document.getElementById(`exf${index}`);
    if(!pre && !frame){
        frame.offsetWidth = pre.offsetWidth;
        frame.offsetHeight = pre.offsetHeight;
    }
}
while(!pre){
    index++;
    pre = document.getElementById(`exp${index}`);
    frame = document.getElementById(`exf${index}`);
    if(!pre && !frame){
        frame.offsetWidth = pre.offsetWidth;
        frame.offsetHeight = pre.offsetHeight;
    }
}
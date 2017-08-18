var results="";
var calresults="";
var lastkey="";
var re1=/^[\*|\/.+]/;
var re2=/.+[\*|\/]$/;
var re3=/(\+|\-|\*|\/)/;
function calculator() {
    if(event.srcElement.innerText=="="){
        return;
    }
    if(event.srcElement.innerText=="C"){
        results="";
        display.innerText="0";
        return;
    }
    if(lastkey.match(re3)&&event.srcElement.innerText.match(re3)){
        return;
    }
    if (lastkey=="="&&event.srcElement.innerText.match(re3)) {
    results=calresults;
    }
    results+=event.srcElement.innerText;
    lastkey=event.srcElement.innerText;
    display.innerText=results;
}
function resultscalculate() {
    if(results.match(re1)||results.match(re2)){
        display.innerText="输入错误";
        results="";
        return;
    }
    calresults=eval(results);
    display.innerText=calresults;
    lastkey="=";
    results="";
}
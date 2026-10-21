// var counter=0;
// setInterval(()=>{
//         counter+=1;
//         console.log(counter+" seconds");
// },1000);

//wap to create a timer for 15min using setInterval and setTimeout . display the passing time.

let display = document.getElementById("timer-display");
var secondleft=2*60;
let timer = setInterval(()=>
{
    secondleft--;
    let minute=Math.floor(secondleft/60);
    let second=secondleft%60;
   display.innerText = "Time left "+ minute +"min "+second+ "sec";

},1000)

setTimeout(function() {
    clearInterval(timer); 
    
    display.innerText = "Time's up!";

}, 2 * 60 * 1000);
/*var n, y = 0;

if(n == 0 && y == 0){
    document.querySelector("h1").innerHTML="Refresh Me";
}
*/
n = Math.floor(Math.random() * 6) + 1;
y = Math.floor(Math.random() * 6) + 1;

document.querySelectorAll("img")[0].setAttribute("src", `./images/dice${n}.png`);
document.querySelectorAll("img")[1].setAttribute("src", `./images/dice${y}.png`);


if (n > y){
    document.querySelector("h1").innerHTML="🚩 Player 1 Wins!";
}
else if (n<y){
    document.querySelector("h1").innerHTML="Player 2 Wins! 🚩";

}
else{
    document.querySelector("h1").innerHTML="🏁 DRAW!!";
}
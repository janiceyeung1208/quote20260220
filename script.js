const quotes=[
{zh:"要提升價值就要改變；要達到完美就得經常改變。 - 溫斯頓·邱吉爾",en:"To improve is to change; to be perfect is to change often. -Winston Churchill"},
{zh:"如果有不滿意的狀況，那就試著改變它。如果你沒辦法改變它，那就改變你的想法吧。 - Maya Angelou",en:"If you don't like something, change it. If you can't change it, change your attitude. -Maya Angelou"},
{zh:"既然我們無法改變現實，那就改變看待現實的視角吧。 - Nikos Kazantzakis",en:"Since we cannot change reality, let us change the eyes which see reality. -Nikos Kazantzakis"},
{zh:"最甜美的事就是改變。 - Aristotle",en:"Change in all things is sweet. -Aristotle"},
{zh:"不是所有你面對的事情都可以改變，但在你實際面對之前，任何事情都無法改變。 - James Baldwin",en:"Not everything that is faced can be changed, but nothing can be changed until it is faced. -James Baldwin"},
{zh:"我沒辦法改變風向, 但我可以調整我的風帆，無論如何都能達到我的目的地。 - Jimmy Dean",en:"I can't change the direction of the wind, but I can adjust my sails to always reach my destination. -Jimmy Dean"}
];

const quoteBox=document.getElementById("quote");
const btnHappy=document.getElementById("btn-happy");
const btnUnhappy=document.getElementById("btn-unhappy");
const controls=document.querySelector(".controls");
const resetBar=document.querySelector(".reset-bar");
const btnReset=document.getElementById("btn-reset");

function showRandom(min,max){
const idx=Math.floor(Math.random()*(max-min+1))+min;
const q=quotes[idx];
quoteBox.innerHTML=`<p class="zh">${q.zh}</p><p class="en">${q.en}</p>`;
controls.classList.add("hidden");
resetBar.classList.remove("hidden");
}

btnHappy.addEventListener("click",()=>showRandom(0,2));
btnUnhappy.addEventListener("click",()=>showRandom(3,5));
btnReset.addEventListener("click",()=>{
quoteBox.innerHTML="";
resetBar.classList.add("hidden");
controls.classList.remove("hidden");
});

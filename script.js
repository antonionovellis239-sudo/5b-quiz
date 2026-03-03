const questions = [
{q:"Chi ha la carnagione più scura?",a:["Sessa","Germano","Lo Gatto","Nessuna"],c:2},
{q:"Chi va più volte in bagno?",a:["Marcone","Germano","De Luca","Nessuna"],c:2},
{q:"Chi è il più piccolo?",a:["Gullo","Russo","Cauteruccio","Nessuna"],c:2},
{q:"Che strumento suona Soria?",a:["Chitarra","Tromba","Arpa","Nessuna"],c:0},
{q:"Chi non parla mai?",a:["Gullo","Severino","Germano","Nessuna"],c:3},
{q:"Chi arriverà in ritardo al matrimonio?",a:["Gullo","De Luca","Fiorito","Tutte"],c:3},
{q:"Duo più bravo in italiano?",a:["Gullo e Sessa","Germano e Furingo","Palermo e Zottolo","Nessuna"],c:0},
{q:"Chi ha più assenze?",a:["Zottolo","Lo Gatto","Novellis","Nessuna"],c:2},
{q:"Chi è il più alto?",a:["Soria","Martini","Fedele","Nessuna"],c:2},
{q:"Chi non ha mai fatto interrogazione?",a:["Antonuccio","Sbarra","Albanese","Nessuna"],c:2}
];

let current = 0;
let score = 0;


function startQuiz(){

const nome=document.getElementById("nome").value.trim();
const cognome=document.getElementById("cognome").value.trim();

if(!nome || !cognome){
alert("Inserisci nome e cognome!");
return;
}

localStorage.setItem("score","0");
localStorage.setItem("nome",nome);
localStorage.setItem("cognome",cognome);

document.getElementById("home").classList.remove("active");
document.getElementById("quiz").classList.add("active");

loadQuestion();
}


function loadQuestion(){

if(!questions[current]) return;

document.getElementById("question").innerText =
(current+1)+". "+questions[current].q;

const answersDiv=document.getElementById("answers");
answersDiv.innerHTML="";

questions[current].a.forEach((ans,i)=>{
let btn=document.createElement("button");
btn.innerText=ans;

btn.onclick=()=>checkAnswer(i);

answersDiv.appendChild(btn);
});
}


function checkAnswer(i){

if(i===questions[current].c){
score++;
}

current++;

if(current < questions.length){
loadQuestion();
}
else{
finishQuiz();
}
}


function finishQuiz(){

localStorage.setItem("score",score);


setTimeout(()=>{

if(score >= 7){
window.location.replace("success.html");
}else{
window.location.replace("fail.html");
}

},300);
}

window.onload=function(){
let score=localStorage.getItem("score");
if(!score || score < 7){
window.location.replace("quiz.html");
}
}
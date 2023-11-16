var score = 0;
var button = document.getElementsByClassName("main-button")[0]

var scorePara = document.getElementsByClassName("score")[0]
var cpsText = document.getElementsByClassName("cps")[0]

var autocl = document.getElementById("aucl")
var gigacl = document.getElementById("gicl")
var razorcl = document.getElementById("racl")

var cps = 0
var seconds = 0

function AddToScore(amountToAdd){
    score += amountToAdd
    UpdateText()
}

function BuyThing(cost, cpsplus){
    if (score >= cost){
        score -= cost
        cps += cpsplus
    }
    UpdateText()
}

function UpdateText(){
    scorePara.innerHTML = "score: " + score
    cpsText.innerHTML = "clicks per second: " + cps
}

button.onclick = function(){
    AddToScore(1)
}

autocl.onclick = function(){BuyThing(100, 1)}
gigacl.onclick = function(){BuyThing(2500, 7)}
razorcl.onclick = function(){BuyThing(12000, 50)}

var timer = setInterval(function(){AddToScore(cps)}, 1000)
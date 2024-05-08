let dealervalue = 0
let playervalue = 0
let x = 0
let y = 0
let turn = 1
let euro = 100
let bet = 0
let won = 0;
function reset(){
    euro = 100;
    won = 0;
    document.getElementById('log').textContent = 'game...start!!';
    document.getElementById('ItemsButtonTachi').innerHTML = '<button class="gamebutton" onclick="UseDecpCard()">decp-card</button>   <button class="gamebutton" onclick="UseIncpCard()">incp-card</button>';
    document.getElementById('ItemsButton').innerHTML = '<br><button class="gamebutton" onclick="itemappear()">open</button>';
    window.setTimeout(restart,1000)
}
function restart(){
    dealervalue = 0
    playervalue = 0
    turn = 1
    bet = 0;
    document.getElementById('log').textContent = 'betTIme!!';
    document.getElementById('ResetButton').innerHTML = '';
    tekiou()
    window.setTimeout(BetTime(), 1000)
}
function BetTime(){
    document.getElementById('BetSpace').innerHTML = '<input type="number" id="bet" min="1" max="100" placeholder="bet"><button class="gamebutton" id="BetButton" onclick="bettimeEnd()">OK</button>';
}
function bettimeEnd(){
    bet = document.getElementById('bet').value;
    if (bet <= euro && bet > 0){
    document.getElementById('log').textContent = 'beted!!';
    document.getElementById('BetSpace').innerHTML = '';
    euro -= bet
    start()
    } else {
        document.getElementById('BetSpace').innerHTML = '';
        document.getElementById('log').textContent = 'failed bet...';
        document.getElementById('ResetButton').innerHTML = '<button class="gamebutton" id="reset" onclick="restart()">restart</button>';
    }
}
async function start(){
    x = dealervalue
    dealervalue += Math.floor(Math.random() * 10) + 1;
    y = dealervalue - x
    document.getElementById('log').textContent = 'dealerは' + y + 'のカードを引きました！';
    tekiou()
    document.getElementById('HitAndStandButton').innerHTML = '<button class="gamebutton" id="hit" onclick="hit()">Hit</button>  <button class="gamebutton" id="stand" onclick="stand()">Stand</button>';
}
function tekiou(){
    document.getElementById('PlayerValue').textContent = playervalue;
    document.getElementById('DealerValue').textContent = dealervalue;
    document.getElementById('PlayerMoney').textContent = euro + '€';
    document.getElementById('PlayerWon').textContent = won + '$';
}
function hit(){
    if(turn == 1){
    if(playervalue !== 21){
    x = playervalue
    playervalue += Math.floor(Math.random() * 10) + 1;
    y = playervalue - x
    }
    tekiou()
    document.getElementById('log').textContent = 'playerは' + y + 'のカードを引きました！';
    if(playervalue > 21){
        window.setTimeout(youburst(), 500)
    }
    }
    }
function stand(){
    turn = 2
    document.getElementById('HitAndStandButton').innerHTML = '';
    window.setTimeout(dealerturn(), 500)
}
function dealerturn(){
    x = dealervalue
    dealervalue += Math.floor(Math.random() * 10) + 1;
    y = dealervalue - x
    tekiou()
    document.getElementById('log').textContent = 'dealerは' + y + 'のカードを引きました！';
    if(dealervalue < 17){
    window.setTimeout(dealerturn, 1000)
    } else if(dealervalue > 21){
        window.setTimeout(youwin(), 1500)
    } else if(dealervalue > playervalue){
        window.setTimeout(youlose(), 1500)
    } else if(dealervalue < playervalue){
        window.setTimeout(youwin(), 1500)
    } else if(dealervalue == playervalue){
        window.setTimeout(draw(), 1500)
    } else {
        document.getElementById('log').textContent = 'どうやってここまで？';
    }
}
function youburst(){
    if(euro == 0){
        document.getElementById('log').textContent = 'you dead...';
        document.getElementById('HitAndStandButton').innerHTML = '';
        document.getElementById('ResetButton').innerHTML = '<button class="gamebutton" id="reset" onclick="reset()">reset</button>';
    }
    else {
        turn = 3
        tekiou()
        document.getElementById('log').textContent = 'youburst...';
        document.getElementById('HitAndStandButton').innerHTML = '';
        document.getElementById('ResetButton').innerHTML = '<button class="gamebutton" id="reset" onclick="restart()">restart</button>';
    }
}
function youlose(){
    turn = 3
    tekiou()
    document.getElementById('log').textContent = 'youlose...';
    document.getElementById('ResetButton').innerHTML = '<button class="gamebutton" id="reset" onclick="restart()">restart</button>';
}
function youwin(){
    turn = 3
    document.getElementById('log').textContent = 'youwin!';
    if(playervalue == 21){x = (bet * 3); won += 2;}
    else {x = (bet * 2); won += 1;};
    euro += x;
    tekiou()
    document.getElementById('ResetButton').innerHTML = '<button class="gamebutton" id="reset" onclick="restart()">restart</button>';
}
function draw(){
    turn = 3
    document.getElementById('log').textContent = 'dra..push!!';
    x = (bet * 1);
    euro += x;
    bet = 0;
    tekiou()
    document.getElementById('ResetButton').innerHTML = '<button class="gamebutton" id="reset" onclick="restart()">restart</button>';
}
// こっからDLC。アイテムとか作ってくよ
let items = [];
function itemappear(){
    document.getElementById('Itemsdesu').innerHTML = '<br>' + items;
    document.getElementById('ItemsButton').innerHTML = '<br><button class="gamebutton" onclick="itemdisappear()">close</button>';
}
function itemdisappear(){
    document.getElementById('Itemsdesu').innerHTML = '';
    document.getElementById('ItemsButton').innerHTML = '<br><button class="gamebutton" onclick="itemappear()">open</button>';
}
function BuyDecpCard(){
    if(won >= 1){
    items.push('decp-card');
    won -= 1;
    tekiou();
    document.getElementById('log').textContent = 'you bought decp-card!';
    }
    else{document.getElementById('log').textContent = 'not enough doller...';}
}
function BuyIncpCard(){
    if(won >= 1){
    items.push('incp-card');
    won -= 1;
    tekiou();
    document.getElementById('log').textContent = 'you bought incp-card!';
    }
    else{document.getElementById('log').textContent = 'not enough doller...';}
}
function UseDecpCard(){
    if(items.includes('decp-card')){
    if(playervalue >= 5){
    playervalue -= 5;
    items.splice(items.indexOf('decp-card'), 1);
    tekiou();
    document.getElementById('log').textContent = 'you used decp-card!';
    } else {document.getElementById('log').textContent = 'want some more points...';}
    } else {document.getElementById('log').textContent = 'have not decp-card...';}
}
function UseIncpCard(){
    if(items.includes('incp-card')){
    if(playervalue >= 5){
    playervalue += 5;
    items.splice(items.indexOf('incp-card'), 1);
    tekiou();
    document.getElementById('log').textContent = 'you used incp-card!';
    } else {document.getElementById('log').textContent = 'want some more points...';}
    } else {document.getElementById('log').textContent = 'have not incp-card...';}
}
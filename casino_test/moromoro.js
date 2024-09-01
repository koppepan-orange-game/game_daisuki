let loc = 'farm';
let x = 0;
let y = 0;
let phase = 1;
let euro = 100;
let bet = 0;//共通
let base = 1;//1,10,100 //ほぼほぼスロット用
function delay(ms){return new Promise(resolve => setTimeout(resolve, ms));}
function Back(){
    const name = document.getElementById('BackButton');
    switch(loc){
        case 'farm':
            loc = 'loby';
            name.textContent = 'back to field';
            document.getElementById('MiniGameArea').innerHTML = `<button class="casinobutton" onclick="InTheCasinoSelect('BJ')">Black Jack</button><br><button class="casinobutton" onclick="InTheCasinoSelect('SLa')">Slot-1€</button> <button class="casinobutton" onclick="InTheCasinoSelect('SLb')">Slot-10€</button> <button class="casinobutton" onclick="InTheCasinoSelect('SLc')">Slot-100€</button><br></br>`;
            break;
        case 'loby':
            loc = 'farm';
            name.textContent = 'go to casino';
            document.getElementById('MiniGameArea').innerHTML = `<div style="display: flex;"><div id="UIinfo"><img src='assets/wheat.png' style='width: 15px; height: 15px;'>0<br><img src='assets/carrot.png' style='width: 15px; height: 15px;'>0<br><img src='assets/potato.png' style='width: 15px; height: 15px;'>0<br><img src='assets/apple.png' style='width: 15px; height: 15px;'>0<br><img src='assets/goldapple.png' style='width: 15px; height: 15px;'>0</div><div id="UIfield"></div></div><hr noshade="true"><div id="shops" style="text-align: left;">SHOP<br><button class="farmbutton" onclick="BuyTool()">Buy<img src="assets/hoe.png" style="width: 15px; height: 15px;"><span id="Toolprice">200€</span></button><br><button class="farmbutton" onclick="BuyField()">Buy field<img src="assets/field.png" style="width: 15px; height: 15px;"><span id="Fieldprice">100€</span></button><br><button class="farmbutton" onclick="SellAll()">Sell all<img src="assets/euro.png" style="width: 15px; height: 15px;"></button></div>`
            for(let i = 0; i < had; i++){
                const Nunber = i + 1;
                const Zone = document.getElementById('UIfield');
                const messageElement = document.createElement('button')
                const br = document.createElement('br');
                messageElement.textContent = `Farm ${Nunber}`;
                messageElement.id = `farming-${Nunber}`;
                messageElement.className = 'farmbutton';
                messageElement.setAttribute('onclick', `farming('${Nunber}')`);
                requestAnimationFrame(() => {
                    Zone.appendChild(messageElement);
                    if((Nunber % 3) == 0){Zone.appendChild(br);}
                });
            }
            ftekiou();
            document.getElementById("Fieldprice").innerHTML = fieldprice+"€";
            document.getElementById("Toolprice").innerHTML = toolprices[equip-1]+"€";
            break;
        case 'bj':
            loc = 'loby';
            name.textContent = 'back to field';
            document.getElementById('MiniGameArea').innerHTML = `<button class="casinobutton" onclick="InTheCasinoSelect('BJ')">Black Jack</button><br><button class="casinobutton" onclick="InTheCasinoSelect('SLa')">Slot-1€</button> <button class="casinobutton" onclick="InTheCasinoSelect('SLb')">Slot-10€</button> <button class="casinobutton" onclick="InTheCasinoSelect('SLc')">Slot-100€</button><br></br>`;
            break;
        case 'sl'://もしかしたらslaみたいにするかも
            loc = 'loby';
            name.textContent = 'back to field';
            document.getElementById('MiniGameArea').innerHTML = `<button class="casinobutton" onclick="InTheCasinoSelect('BJ')">Black Jack</button><br><button class="casinobutton" onclick="InTheCasinoSelect('SLa')">Slot-1€</button> <button class="casinobutton" onclick="InTheCasinoSelect('SLb')">Slot-10€</button> <button class="casinobutton" onclick="InTheCasinoSelect('SLc')">Slot-100€</button><br></br>`;
            break;
    }
}

//このへん農業。まあ基礎というか基盤というか...
let crop = {
    wheat: 0,
    carrot: 0,
    potato: 0,
    apple: 0,
    goldapple: 0,
}
let dofarm = [
    {
        crop:['wheat','carrot'],
        nume:['5.1','3.0'],
    },
    {
        crop:['wheat','carrot','potato'],
        nume:['10.3','5.1','3.0'],
    },
    {
        crop:['wheat','carrot','potato','apple'],
        nume:['15.5','10.3','5.1','3.0'],
    },
    {
        crop:['wheat','carrot','potato','apple'],
        nume:['20.7','15.5','10.3','5.1'],
    },
    {
        crop:['wheat','carrot','potato','apple','goldapple'],
        nume:['25.10','20.7','15.5','10.3','2.0'],
    },
    {
        crop:['wheat','carrot','potato','apple','goldapple'],
        nume:['30.17','25.10','20.7','15.5','10.3'],
    },
    {
        crop:['wheat','carrot','potato','apple','goldapple'],
        nume:['40.20','30.20','25.10','20.7','15.5'],
    },
]
let equip = 1;
let had = 0;
let toolprices = [200, 500, 1000, 3000, 5000, 10000];
let fieldprice = 100;
function ftekiou(){
    document.getElementById("PlayerMoney").innerHTML = "euro:" + euro + "€";
    document.getElementById("UIinfo").innerHTML = "<img src='assets/wheat.png' style='width: 15px; height: 15px;'>" + crop.wheat + "<br><img src='assets/carrot.png' style='width: 15px; height: 15px;'>" + crop.carrot + "<br><img src='assets/potato.png' style='width: 15px; height: 15px;'>" + crop.potato + "<br><img src='assets/apple.png' style='width: 15px; height: 15px;'>" + crop.apple + "<br><img src='assets/goldapple.png' style='width: 15px; height: 15px;'>" + crop.goldapple;
}
async function farming(code) {
    let ZatuZatuNum = 0;
    for(let SakuMotu of dofarm[equip-1].crop){
        ZatuZatuNum++
        x = dofarm[equip-1].nume[ZatuZatuNum-1].split(".");
        let N1 = +x[0];
        let N2 = +x[1];
        x = Math.floor(Math.random()*N1)+N2;
        eval('crop.'+SakuMotu+' += x');
    }
    ftekiou();
    document.getElementById(`farming-${code}`).style.display = 'none';
    await delay(2500);
    if(document.getElementById(`farming-${code}`)){document.getElementById(`farming-${code}`).style.display = 'inline'};
}
function BuyTool() {
    if(toolprices[equip-1] <= euro) {
        euro -= toolprices[equip-1];
        equip += 1;
        document.getElementById("Toolprice").innerHTML = toolprices[equip-1]+"€";
        ftekiou();
    }
}
function BuyField(){
    if (euro >= fieldprice) {
        euro -= fieldprice;
        had += 1;
        
        ftekiou();
        const Zone = document.getElementById('UIfield');
        const messageElement = document.createElement('button'), br = document.createElement('br');
        messageElement.textContent = `Farm ${had}`;
        messageElement.id = `farming-${had}`;
        messageElement.className = 'farmbutton';
        messageElement.setAttribute('onclick', `farming('${had}')`);
        requestAnimationFrame(() => {
            Zone.appendChild(messageElement);
            if((had % 3) == 0){Zone.appendChild(br);}
        });
        fieldprice += 100;
        document.getElementById("Fieldprice").innerHTML = fieldprice+"€";
    }
}
function SellAll() {
    euro += crop.wheat;
    euro += crop.carrot * 2;
    euro += crop.potato * 3;
    euro += crop.apple * 4;
    euro += crop.goldapple * 5;
    crop.wheat = 0;
    crop.carrot = 0;
    crop.potato = 0;
    crop.apple = 0;
    crop.goldapple = 0;
    ftekiou();
    
}

//こっからCasino。メイン
function InTheCasino(){
    document.getElementById('MiniGameArea').innerHTML = `<button class="casinobutton" onclick="InTheCasinoSelect('BJ')">Black Jack</button><br><button class="casinobutton" onclick="InTheCasinoSelect('SLa')">Slot-1€</button> <button class="casinobutton" onclick="InTheCasinoSelect('SLb')">Slot-10€</button> <button class="casinobutton" onclick="InTheCasinoSelect('SLc')">Slot-100€</button><br></br>`;
}  
function InTheCasinoSelect(name){
    switch(name){
        case 'BJ':
            loc = 'bj';
            document.getElementById('BackButton').textContent = 'back to loby';
            document.getElementById('MiniGameArea').innerHTML = `<b>dealer</b><br><span id="DealerValue">0</span><br><br><b>player</b><br><span id="PlayerValue">0</span><hr noshade="true"><div><span id="BJCommandButtons"><button class="casinobutton" onclick="BJrestart()">start</button></span></div><span id="log">pless "start" to game start</span><hr noshade="true"><span id="PlayerBJP">0p</span><div id="Items">Items<br><button class="casinobutton" onclick="BJBuyItem('incr')">incr-card</button><br><button class="casinobutton" onclick="BJBuyItem('decr')">decr-card</button><br></div>`;
            break;
        case 'SLa':
            loc = 'sl';
            document.getElementById('BackButton').textContent = 'back to loby';
            base = 1;
            phase = 1;
            bet = 1;
            document.getElementById('MiniGameArea').innerHTML = `<div id="SLmain"><span id="sl0-0"></span> <span id="sl0-1"></span> <span id="sl0-2"></span> <span id="sl0-3"></span> <span id="sl0-4"></span><br><span id="sl1-0"></span> <span id="sl1-1"></span> <span id="sl1-2"></span> <span id="sl1-3"></span> <span id="sl1-4"></span><br><span id="sl2-0"></span> <span id="sl2-1"></span> <span id="sl2-2"></span> <span id="sl2-3"></span> <span id="sl2-4"></span><br></div><div id="SLCommandButtons"><button id="casinobutton" onclick="bet += 1; if(bet > 3){bet = 1;}; SLbettekiou();">Bet</button> <button class="casinobutton" onclick="SLstart()">start</button>  <button class="casinobutton" onclick="InTheCasino()">exit</button></div>`
            document.getElementById('log').textContent = 'betTime!!';
            SLtekiou(); SLbettekiou();
            break;
        case 'SLb':
            loc = 'sl';
            document.getElementById('BackButton').textContent = 'back to loby';
            base = 10;
            phase = 1;
            bet = 1;
            document.getElementById('MiniGameArea').innerHTML = `<div id="SLmain"><span id="sl0-0"></span> <span id="sl0-1"></span> <span id="sl0-2"></span> <span id="sl0-3"></span> <span id="sl0-4"></span><br><span id="sl1-0"></span> <span id="sl1-1"></span> <span id="sl1-2"></span> <span id="sl1-3"></span> <span id="sl1-4"></span><br><span id="sl2-0"></span> <span id="sl2-1"></span> <span id="sl2-2"></span> <span id="sl2-3"></span> <span id="sl2-4"></span><br></div><div id="SLCommandButtons"><button id="casinobutton" onclick="bet += 1; if(bet > 3){bet = 1;}; SLbettekiou();">Bet</button> <button class="casinobutton" onclick="SLstart()">start</button>  <button class="casinobutton" onclick="InTheCasino()">exit</button></div>`
            document.getElementById('log').textContent = 'betTime!!';
            SLtekiou(); SLbettekiou();
            break;
        case 'SLc':
            loc = 'sl';
            document.getElementById('BackButton').textContent = 'back to loby';
            base = 100;
            phase = 1;
            bet = 1;
            document.getElementById('MiniGameArea').innerHTML = `<div id="SLmain"><span id="sl0-0"></span> <span id="sl0-1"></span> <span id="sl0-2"></span> <span id="sl0-3"></span> <span id="sl0-4"></span><br><span id="sl1-0"></span> <span id="sl1-1"></span> <span id="sl1-2"></span> <span id="sl1-3"></span> <span id="sl1-4"></span><br><span id="sl2-0"></span> <span id="sl2-1"></span> <span id="sl2-2"></span> <span id="sl2-3"></span> <span id="sl2-4"></span><br></div><div id="SLCommandButtons"><button id="casinobutton" onclick="bet += 1; if(bet > 3){bet = 1;}; SLbettekiou();">Bet</button> <button class="casinobutton" onclick="SLstart()">start</button>  <button class="casinobutton" onclick="InTheCasino()">exit</button></div>`
            document.getElementById('log').textContent = 'betTime!!';
            SLtekiou(); SLbettekiou();
            break;
    }
}

//ここからBJ(ブラックジャック)
let dealervalue = 0;
let playervalue = 0;
let bjp = 0;//black jack point
async function BJrestart(){
    dealervalue = 0;
    playervalue = 0;
    phase = 1;
    bet = 0;
    document.getElementById('log').textContent = 'betTime!!';
    document.getElementById('BJCommandButtons').innerHTML = '<input type="number" id="bet" min="1" max="100" placeholder="bet"><button class="casinobutton" id="BetButton" onclick="BJbettimeEnd()">OK</button>';
    BJtekiou();
    //document.getElementById('bet').value = 5;
}
function BJbettimeEnd(){
    bet = document.getElementById('bet').value;
    if (bet <= euro && bet > 0){
    document.getElementById('log').textContent = 'beted!!';
    document.getElementById('BJCommandButtons').innerHTML = '';
    euro -= bet;
    x = Math.floor(Math.random() * 10) + 1;
    dealervalue += x;
    document.getElementById('log').textContent = 'dealerは' + x + 'のカードを引きました！';
    BJtekiou()
    document.getElementById('BJCommandButtons').innerHTML = '<button class="casinobutton" id="BJhit" onclick="BJhit()">hit</button>  <button class="casinobutton" id="BJstand" onclick="BJstand()">stand</button>';
    }else{document.getElementById('BJCommandButtons').innerHTML = '<input type="number" id="bet" min="1" max="100" placeholder="bet"><button class="casinobutton" id="BetButton" onclick="BJbettimeEnd()">OK</button>';}
}
function BJtekiou(){
    document.getElementById('PlayerValue').textContent = playervalue;
    document.getElementById('DealerValue').textContent = dealervalue;
    document.getElementById('PlayerMoney').textContent = 'euto:'+euro+'€';
    document.getElementById('PlayerBJP').textContent = bjp + 'p';
}
function BJhit(){
    if(phase == 1){
    x = Math.floor(Math.random()*10)+1;
    playervalue += x;
    BJtekiou();
    document.getElementById('log').textContent = 'playerは' + x + 'のカードを引きました！';
    if(playervalue > 21||playervalue == 21){window.setTimeout(BJResult(playervalue,dealervalue), 1000);}
    }}
async function BJstand(){
    phase = 2
    document.getElementById('BJCommandButtons').innerHTML = '';
    while(dealervalue < 17){    
        x = Math.floor(Math.random()*10)+1;
        dealervalue += x;
        BJtekiou();
        document.getElementById('log').textContent = 'dealerは' + x + 'のカードを引きました！';
        await delay(1000);
    }
    BJResult(playervalue,dealervalue);
}
function BJResult(pv,dv){
    phase = 3;
    document.getElementById('BJCommandButtons').innerHTML = '';
    if(pv == 21||dv > 21||dv < pv&&dv < 21&&pv < 21){
        document.getElementById('log').textContent = 'youwin!';
        x = 2; bjp += 1; if(pv == 21){x = 3; bjp += 1;};
        euro += +(bet * x);
    }else if(dv == 21||pv > 21||pv < dv&&pv < 21&&dv < 21){
        document.getElementById('log').textContent = 'youlose...';
    }else if(pv == dv){
        document.getElementById('log').textContent = 'draw!';
        euro += +bet;
    }else{
        document.getElementById('log').textContent = 'fuckyou!!!';
        euro = 0;
    }
    BJtekiou()
    document.getElementById('BJCommandButtons').innerHTML = '<button class="casinobutton" id="reset" onclick="BJrestart()">restart</button>';

}
// こっからDLC。アイテムとか作ってくよ
function BJBuyItem(name){
    switch(name){
        case 'incr':
            if(playervalue <= 16){
                playervalue += 5; BJtekiou();
                bjp -= 1;
                document.getElementById('log').textContent = 'increased points just five!';
                if(playervalue >= 21){window.setTimeout(BJResult(playervalue,dealervalue), 1000);}
            } else {document.getElementById('log').textContent = 'want less points...';}
            break;
        case 'decr':
            if(playervalue >= 5){
                playervalue -= 5; BJtekiou();
                bjp += 1;
                document.getElementById('log').textContent = 'decreased points just five!';
            }else{document.getElementById('log').textContent = 'want more points...';}
            break;
    }
}

// ここからSL(スロット)
let slrolling = 0;
let slp = 0;
let slpt = ["wheat","carrot","potato","apple","euro","wheat","carrot","potato","apple","goldapple"];//0~9
let sls = [
    [9,9,9,9,9],
    [0,0,0,0,0],
    [1,1,1,1,1]
]
let slspt = [
    ["goldapple","goldapple","goldapple","goldapple","goldapple"],
    ["wheat","wheat","wheat","wheat","wheat"],
    ["carrot","carrot","carrot","carrot","carrot"]
]
function SLrestart(){
    phase = 1;
    bet = 1;
    document.getElementById('log').textContent = 'betTime!!';
    document.getElementById('SLCommandButtons').innerHTML = `<button id="casinobutton" onclick="bet += 1; if(bet > 3){bet = 1;}; SLbettekiou();">Bet</button> <button class="casinobutton" onclick="SLstart()">start</button>  <button class="casinobutton" onclick="InTheCasino()">exit</button>`;
    SLtekiou();
    SLbettekiou();
}
function SLbettekiou(){
    switch(bet){
        case 1:
            document.getElementById('SLmain').style.backgroundColor = '#80ee80';
            break;
        case 2:
            document.getElementById('SLmain').style.backgroundColor = '#ffff6b';
            break;
        case 3:
            document.getElementById('SLmain').style.backgroundColor = '#f64bff';
            break;
    }
}
function SLtekiou(){
    document.getElementById('PlayerMoney').textContent = 'euro:'+euro+'€';
    slspt[0][0] = slpt[sls[0][0]];
    slspt[0][1] = slpt[sls[0][1]];
    slspt[0][2] = slpt[sls[0][2]];
    slspt[0][3] = slpt[sls[0][3]];
    slspt[0][4] = slpt[sls[0][4]];

    slspt[1][0] = slpt[sls[1][0]];
    slspt[1][1] = slpt[sls[1][1]];
    slspt[1][2] = slpt[sls[1][2]];
    slspt[1][3] = slpt[sls[1][3]];
    slspt[1][4] = slpt[sls[1][4]];

    slspt[2][0] = slpt[sls[2][0]];
    slspt[2][1] = slpt[sls[2][1]];
    slspt[2][2] = slpt[sls[2][2]];
    slspt[2][3] = slpt[sls[2][3]];
    slspt[2][4] = slpt[sls[2][4]];

    document.getElementById('sl0-0').innerHTML = "<img src='assets/"+slpt[sls[0][0]]+".png' style='width: 15px; height: 15px;'>";
    document.getElementById('sl0-1').innerHTML = "<img src='assets/"+slpt[sls[0][1]]+".png' style='width: 15px; height: 15px;'>";
    document.getElementById('sl0-2').innerHTML = "<img src='assets/"+slpt[sls[0][2]]+".png' style='width: 15px; height: 15px;'>";
    document.getElementById('sl0-3').innerHTML = "<img src='assets/"+slpt[sls[0][3]]+".png' style='width: 15px; height: 15px;'>";
    document.getElementById('sl0-4').innerHTML = "<img src='assets/"+slpt[sls[0][4]]+".png' style='width: 15px; height: 15px;'>";

    document.getElementById('sl1-0').innerHTML = "<img src='assets/"+slpt[sls[1][0]]+".png' style='width: 15px; height: 15px;'>";
    document.getElementById('sl1-1').innerHTML = "<img src='assets/"+slpt[sls[1][1]]+".png' style='width: 15px; height: 15px;'>";
    document.getElementById('sl1-2').innerHTML = "<img src='assets/"+slpt[sls[1][2]]+".png' style='width: 15px; height: 15px;'>";
    document.getElementById('sl1-3').innerHTML = "<img src='assets/"+slpt[sls[1][3]]+".png' style='width: 15px; height: 15px;'>";
    document.getElementById('sl1-4').innerHTML = "<img src='assets/"+slpt[sls[1][4]]+".png' style='width: 15px; height: 15px;'>";

    document.getElementById('sl2-0').innerHTML = "<img src='assets/"+slpt[sls[2][0]]+".png' style='width: 15px; height: 15px;'>";
    document.getElementById('sl2-1').innerHTML = "<img src='assets/"+slpt[sls[2][1]]+".png' style='width: 15px; height: 15px;'>";
    document.getElementById('sl2-2').innerHTML = "<img src='assets/"+slpt[sls[2][2]]+".png' style='width: 15px; height: 15px;'>";
    document.getElementById('sl2-3').innerHTML = "<img src='assets/"+slpt[sls[2][3]]+".png' style='width: 15px; height: 15px;'>";
    document.getElementById('sl2-4').innerHTML = "<img src='assets/"+slpt[sls[2][4]]+".png' style='width: 15px; height: 15px;'>";


}
async function SLstart(){
    document.getElementById('log').textContent = '';
    if(bet*base <= euro){
        document.getElementById('SLCommandButtons').innerHTML = `<button class="SLbutton" onclick="slrolling+=1;">stop</button>`;
        euro -= bet*base;
        slrolling = 0;
        sls[1][0] = Math.floor(Math.random()*10);
        sls[1][1] = Math.floor(Math.random()*10);
        sls[1][2] = Math.floor(Math.random()*10);
        sls[1][3] = Math.floor(Math.random()*10);
        sls[1][4] = Math.floor(Math.random()*10);
        SLtekiou();
        while(slrolling < 5){
            if(slrolling <= 0){
                sls[1][0] += 1;
                if(sls[1][0] == 10){sls[1][0] = 0;}
                sls[0][0] = sls[1][0]-1;
                if(sls[0][0] == -1){sls[0][0] = 9;}
                sls[2][0] = sls[1][0]+1;
                if(sls[2][0] == 10){sls[2][0] = 0;} 
            }
            if(slrolling <= 1){
                sls[1][1] += 1;
                if(sls[1][1] == 10){sls[1][1] = 0;}
                sls[0][1] = sls[1][1]-1;
                if(sls[0][1] == -1){sls[0][1] = 9;}
                sls[2][1] = sls[1][1]+1;
                if(sls[2][1] == 10){sls[2][1] = 0;}
            }
            if(slrolling <= 2){
                sls[1][2] += 1;
                if(sls[1][2] == 10){sls[1][2] = 0;}
                sls[0][2] = sls[1][2]-1;
                if(sls[0][2] == -1){sls[0][2] = 9;}
                sls[2][2] = sls[1][2]+1;
                if(sls[2][2] == 10){sls[2][2] = 0;}
            }
            if(slrolling <= 3){
                sls[1][3] += 1;
                if(sls[1][3] == 10){sls[1][3] = 0;}
                sls[0][3] = sls[1][3]-1;
                if(sls[0][3] == -1){sls[0][3] = 9;}
                sls[2][3] = sls[1][3]+1;
                if(sls[2][3] == 10){sls[2][3] = 0;}
            }
            if(slrolling <= 4){
                sls[1][4] += 1;
                if(sls[1][4] == 10){sls[1][4] = 0;}
                sls[0][4] = sls[1][4]-1;
                if(sls[0][4] == -1){sls[0][4] = 9;}
                sls[2][4] = sls[1][4]+1;
                if(sls[2][4] == 10){sls[2][4] = 0;}
            }
            SLtekiou();
            await delay(100);//ここで速さいじれる
        }
        if(bet >= 2&&slspt[0][0] == slspt[0][1]&&slspt[0][1] == slspt[0][2]&&slspt[0][2] == slspt[0][3]&&slspt[0][3] == slspt[0][4]){SLmath(sls[0][0]);}
        if(bet >= 1&&slspt[1][0] == slspt[1][1]&&slspt[1][1] == slspt[1][2]&&slspt[1][2] == slspt[1][3]&&slspt[1][3] == slspt[1][4]){SLmath(sls[1][0]);}
        if(bet >= 3&&slspt[2][0] == slspt[2][1]&&slspt[2][1] == slspt[2][2]&&slspt[2][2] == slspt[2][3]&&slspt[2][3] == slspt[2][4]){SLmath(sls[2][0]);}
        document.getElementById('SLCommandButtons').innerHTML = `<button class="SLbutton" onclick="SLstart()">reset</button>  <button class="SLbutton" onclick="SLrestart()">end</button>`;


    }else{
        bet = 1;
        document.getElementById('log').textContent = 'betTime!!';
        document.getElementById('SLCommandButtons').innerHTML = `<button id="casinobutton" onclick="bet += 1; if(bet > 3){bet = 1;}; SLbettekiou();">Bet</button> <button class="casinobutton" onclick="SLstart()">start</button>`;
        SLtekiou();
        SLbettekiou();
    }
}
function SLmath(num){
    console.log('計算、'+num);
    switch(num){
        case 0:case 5://wheat
            euro += bet*base*5;
            break;
        case 1:case 6://carrot
            euro += bet*base*10;
            break;
        case 2:case 7://potato
            euro += bet*base*50;
            break;
        case 3:case 8://apple
            euro += bet*base*100;
            break;
        case 4://euro
            euro += bet*base*1;
            break;
        case 9://goldapple
            euro += bet*base*777;
    }
    SLtekiou();
    document.getElementById('log').textContent = 'success!!';
}

let playername = 'player';
let money = 0;
let bankmoney = 0;
let playerhealth = 0;
let playermaxhealth = 0;
let playerattack = 1;
let playerdefense = 0;
let playerexp = 0;
let playerpower = 1;
let playershell = 1;
let playermp = 0;
let playermaxmp = 10;
let playercrit = 0.03; //これが確率。会心率ってやつだね
let playercritdmg = 3; //これが倍率。会心ダメージってやつだね
let enemyhealth = 0;
let enemymaxhealth = 0;
let enemyattack = 0;
let enemydefense = 1;
let playerlevel = 1;
let enemylevel = 1;
let enemycritresist = 0;
let playerbuff = [];
let playerbufftime = [];
let playerbuffapply = [];
let playerdebuff = [];
let playerdebufftime = [];
let playerdebuffapply = [];
let enemybuff = [];
let enemybufftime = [];
let enemybuffapply = [];
let enemydebuff = [];
let enemydebufftime = [];
let enemydebuffapply = [];
let turn = 0;//今誰のターンか
let turncount = 0;//今のターン数
let phase = 0;//何中か
let t,u,w,x,y,z;
let magic1 = 0;
let magic2 = 0;
let magic3 = 0;
let learnedmagic = 0;
let learnmagic = 0;

let Aspirin = {
    name:'アスピリン',
    id:'Aspirin',
    num:0
}
let Pablon = {
    name:'パブロン',
    id:'Pablon',
    num:0
}
let Trypsin = {
    name:'トリプシン',
    id:'Trypsin',
    num:0
}
let Lulu = {
    name:'ルル',
    id:'Lulu',
    num:0
}
let Potion={
    name:'ポーション',
    id:'Potion',
    num:3
};
let ThrowKnife={
    name:'投げナイフ',
    id:'ThrowKnife',
    num:0
};
let TrickyVariable={
    name:'トリッキーな変数',
    id:'TrickyVariable',
    num:0
};
let CoveringFire={
    name:'援護射撃',
    id:'CoveringFire',
    num:0
};
let BottleGrenade={
    name:'ボトルグレネード',
    id:'BottleGrenade',
    num:0
};
let Bomb={
    name:'爆弾',
    id:'Bomb',
    num:3
};
let Redcard={
    name:'赤のスキップ',
    id:'Redcard',
    num:3
};
let Bluecard={
    name:'青のリバース',
    id:'Bluecard',
    num:0
};
let Greencard={
    name:'緑のドロアル',
    id:'Greencard',
    num:0
};
let Blackcard={
    name:'黒のドロスー',
    id:'Blackcard',
    num:0
};

let enemyname = 0;
let enemynames =  ["ピンクな先輩", "ブルーな後輩", "過激派のハッカー", "反旗を翻したアンドロイド", "腐敗した落武者", "アスピリン中毒者",
                   "彷徨わない亡霊", "地上の月兎", "悠々自適なクラス委員", "大胆不敵な問題児", "兎角のシルバージャグラー", "デスブリンガー・ナース",
                   "古書館の魔術師", "トラブルメーカーな天才少女","黒服","無邪気な夜の希望"];
let eliteenemynames = ['purpleslime']
let enemyprefixe = 0;
let enemyprefixes = ['強い','弱い'];
let saydefeats = 0;
let NStimeout = 0;
let skillcooldown = 0;
let playerEX = '50%heal';
let playerNS = '5%heal';
let playerPS = 'healthup20';
let playerSS = 0;
function tekiou(){
    document.getElementById('EnemyHealth').textContent = enemyhealth;
    document.getElementById('PlayerHealth').textContent = playerhealth;
}
function bufftekiou(){
    playerpower = 1; playershell = 1;
    enemypower = 1; enemyshell = 1;
    playerbuffapply = [];
    playerbuff.forEach(nanka => {//これをすると全部をやってくれるらしい？
        switch(nanka){
            case 'powerup1':
                playerbuffapply.push('<img src="assets/icons/power_up_1.png" width="18" height="18"> ');
                break;
            case 'powerup2':
                playerbuffapply.push('<img src="assets/icons/power_up_2.png" width="18" height="18"> ');
                break;
            case 'powerup3':
                playerbuffapply.push('<img src="assets/icons/power_up_3.png" width="18" height="18"> ');
                break;
            case 'powerup4':
                playerbuffapply.push('<img src="assets/icons/power_up_4.png" width="18" height="18"> ');
                break;
            case 'powerup5':
                playerbuffapply.push('<img src="assets/icons/power_up_5.png" width="18" height="18"> ');
                break;
            case 'powerup6':
                playerbuffapply.push('<img src="assets/icons/power_up_6.png" width="18" height="18"> ');
                break;
            case 'shellup1':
                playerbuffapply.push('<img src="assets/icons/defense_up_1.png" width="18" height="18"> ');
                break;
            case 'shellup2':
                playerbuffapply.push('<img src="assets/icons/defense_up_2.png" width="18" height="18"> ');
                break;
            case 'shellup3':
                playerbuffapply.push('<img src="assets/icons/defense_up_3.png" width="18" height="18"> ');
                break;
            case 'shellup4':
                playerbuffapply.push('<img src="assets/icons/defense_up_4.png" width="18" height="18"> ');
                break;
            case 'shellup5':
                playerbuffapply.push('<img src="assets/icons/defense_up_5.png" width="18" height="18"> ');
                break;
            case 'shellup6':
                playerbuffapply.push('<img src="assets/icons/defense_up_6.png" width="18" height="18"> ');
                break;
            case 'luck':
                playerbuffapply.push('<img src="assets/icons/luck.png" width="18" height="18"> ');
                break;
            case 'greatluck':
                playerbuffapply.push('<img src="assets/icons/luck_great.png" width="18" height="18"> ');
                break;
            case 'spliting':
                playerbuffapply.push('<img src="assets/icons/spliting.png" width="18" height="18"> ');
                break;
            case 'LetsThrow':
                playerbuffapply.push('<img src="assets/icons/wrench.png" width="18" height="18"> ');
                break;
        }
    });
    document.getElementById('PlayerBuff').innerHTML = playerbuffapply.join('');
    playerdebuffapply = [];
    playerdebuff.forEach(nanka => {
        switch(nanka){
            case 'burn1':
                playerdebuffapply.push('<img src="assets/icons/burn_1.png" width="18" height="18"> ');
                break;
            case 'burn2':
                playerdebuffapply.push('<img src="assets/icons/burn_2.png" width="18" height="18"> ');
                break;
            case 'burn3':
                playerdebuffapply.push('<img src="assets/icons/burn_3.png" width="18" height="18"> ');
                break;
            case 'poison1':
                playerdebuffapply.push('<img src="assets/icons/poison_1.png" width="18" height="18"> ');
                break;
            case 'poison2':
                playerdebuffapply.push('<img src="assets/icons/poison_2.png" width="18" height="18"> ');
                break;
            case 'powerdown1':
                playerdebuffapply.push('<img src="assets/icons/power_down_1.png" width="18" height="18"> ');
                break;
            case 'powerdown2':
                playerdebuffapply.push('<img src="assets/icons/power_down_2.png" width="18" height="18"> ');
                break;
            case 'powerdown3':
                playerdebuffapply.push('<img src="assets/icons/power_down_3.png" width="18" height="18"> ');
                break;
            case 'powerdown4':
                playerdebuffapply.push('<img src="assets/icons/power_down_4.png" width="18" height="18"> ');
                break;
            case 'powerdown5':
                playerdebuffapply.push('<img src="assets/icons/power_down_5.png" width="18" height="18"> ');
                break;
            case 'powerdown6':
                playerdebuffapply.push('<img src="assets/icons/power_down_6.png" width="18" height="18"> ');
                break;
            case 'shelldown1':
                playerdebuffapply.push('<img src="assets/icons/defense_down_1.png" width="18" height="18"> ');
                break;
            case 'shelldown2':
                playerdebuffapply.push('<img src="assets/icons/defense_down_2.png" width="18" height="18"> ');
                break;
            case 'shelldown3':
                playerdebuffapply.push('<img src="assets/icons/defense_down_3.png" width="18" height="18"> ');
                break;
            case 'shelldown4':
                playerdebuffapply.push('<img src="assets/icons/defense_down_4.png" width="18" height="18"> ');
                break;
            case 'shelldown5':
                playerdebuffapply.push('<img src="assets/icons/defense_down_5.png" width="18" height="18"> ');
                break;
            case 'shelldown6':
                playerdebuffapply.push('<img src="assets/icons/defense_down_6.png" width="18" height="18"> ');
                break;
            case 'onslime':
                playerdebuffapply.push('<img src="assets/icons/onslime.png" width="18" height="18"> ');
                break;
        }
    });
    document.getElementById('PlayerDebuff').innerHTML = playerdebuffapply.join('');
    enemybuffapply = [];
    enemybuff.forEach(nanka => {
        switch(nanka){
            case 'powerup1':
                enemybuffapply.push('<img src="assets/icons/power_up_1.png" width="18" height="18"> ');
                break;
            case 'powerup2':
                enemybuffapply.push('<img src="assets/icons/power_up_2.png" width="18" height="18"> ');
                break;
            case 'powerup3':
                enemybuffapply.push('<img src="assets/icons/power_up_3.png" width="18" height="18"> ');
                break;
            case 'powerup4':
                enemybuffapply.push('<img src="assets/icons/power_up_4.png" width="18" height="18"> ');
                break;
            case 'powerup5':
                enemybuffapply.push('<img src="assets/icons/power_up_5.png" width="18" height="18"> ');
                break;
            case 'powerup6':
                enemybuffapply.push('<img src="assets/icons/power_up_6.png" width="18" height="18"> ');
                break;
            case 'shellup1':
                enemybuffapply.push('<img src="assets/icons/defense_up_1.png" width="18" height="18"> ');
                break;
            case 'shellup2':
                enemybuffapply.push('<img src="assets/icons/defense_up_2.png" width="18" height="18"> ');
                break;
            case 'shellup3':
                enemybuffapply.push('<img src="assets/icons/defense_up_3.png" width="18" height="18"> ');
                break;
            case 'shellup4':
                enemybuffapply.push('<img src="assets/icons/defense_up_4.png" width="18" height="18"> ');
                break;
            case 'shellup5':
                enemybuffapply.push('<img src="assets/icons/defense_up_5.png" width="18" height="18"> ');
                break;
            case 'shellup6':
                enemybuffapply.push('<img src="assets/icons/defense_up_6.png" width="18" height="18"> ');
                break;
        }
    });
    document.getElementById('EnemyBuff').innerHTML = enemybuffapply.join('');
    enemydebuffapply = [];
    enemydebuff.forEach(nanka => {
        switch(nanka){
            case 'burn1':
                enemydebuffapply.push('<img src="assets/icons/burn_1.png" width="18" height="18"> ');
                break;
            case 'burn2':
                enemydebuffapply.push('<img src="assets/icons/burn_2.png" width="18" height="18"> ');
                break;
            case 'burn3':
                enemydebuffapply.push('<img src="assets/icons/burn_3.png" width="18" height="18"> ');
                break;
            case 'poison1':
                enemydebuffapply.push('<img src="assets/icons/poison1.png" width="18" height="18"> ');
                break;
            case 'poison2':
                enemydebuffapply.push('<img src="assets/icons/poison_deadly.png" width="18" height="18"> ');
                break;
            case 'powerdown1':
                enemydebuffapply.push('<img src="assets/icons/power_down_1.png" width="18" height="18"> ');
                break;
            case 'powerdown2':
                enemydebuffapply.push('<img src="assets/icons/power_down_2.png" width="18" height="18"> ');
                break;
            case 'powerdown3':
                enemydebuffapply.push('<img src="assets/icons/power_down_3.png" width="18" height="18"> ');
                break;
            case 'powerdown4':
                enemydebuffapply.push('<img src="assets/icons/power_down_4.png" width="18" height="18"> ');
                break;
            case 'powerdown5':
                enemydebuffapply.push('<img src="assets/icons/power_down_5.png" width="18" height="18"> ');
                break;
            case 'powerdown6':
                enemydebuffapply.push('<img src="assets/icons/power_down_6.png" width="18" height="18"> ');
                break;
            case 'shelldown1':
                enemydebuffapply.push('<img src="assets/icons/defense_down_1.png" width="18" height="18"> ');
                break;
            case 'shelldown2':
                enemydebuffapply.push('<img src="assets/icons/defense_down_2.png" width="18" height="18"> ');
                break;
            case 'shelldown3':
                enemydebuffapply.push('<img src="assets/icons/defense_down_3.png" width="18" height="18"> ');
                break;
            case 'shelldown4':
                enemydebuffapply.push('<img src="assets/icons/defense_down_4.png" width="18" height="18"> ');
                break;
            case 'shelldown5':
                enemydebuffapply.push('<img src="assets/icons/defense_down_5.png" width="18" height="18"> ');
                break;
            case 'shelldown6':
                enemydebuffapply.push('<img src="assets/icons/defense_down_6.png" width="18" height="18"> ');
                break;
            case 'onslime':
                enemydebuffapply.push('<img src="assets/icons/onslime.png" width="18" height="18"> ');
                break;
        }
    });
    document.getElementById('EnemyDebuff').innerHTML = enemydebuffapply.join('');
};

function buffadd(array,buff,time){
    //誰のバフ/デバフか,バフ/デバフの名前,効果時間
    let bx = eval(array);
    let by = eval(array + 'time');
    if(bx.includes(buff) == false){
        bx.push(buff);
        by.push(time);
    }else{by[bx.indexOf(buff)] = time;}
    bufftekiou();
}
function buffremove(array,buff){
    //誰のバフ/デバフか,バフ/デバフの名前
    let bx = eval(array);
    let by = eval(array + 'time');
    let bz = bx.indexOf(buff);
    if(bx.includes(buff)){
        by.splice(bz,1);
        bx.splice(bz,1);
    }
    bufftekiou();
}
function buffclear(array){
    let bx = eval(array + 'time');
    array = [];
    bufftekiou();
    bx = [];
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
} // 遅延やってみたかったの

// beginで名前とか全部やります
async function begin(name){
    playername = name;
    document.getElementById('PlayerName').textContent = playername;
    if(name == 'wretch'){
        playerEX = 0;
        playerNS = 0;
        playerPS = 0;
        playerSS = 0;
        buttonsolid = '#000000'
        buttonback = '#999999'
        //"wretch"(持たざる者)[ダークソウル シリーズ]
        // EX 無し
        // NS 無し
        // PS 無し
        // SS 無し
        // こいつ好き
    }else if (name == 'greenslime'){
        playerEX = 'split';
        playerNS = 'throwslime';
        playerPS = '0.8mp,1.2defense';
        playerSS = 'threes';
        buttonsolid = '#4da856'
        buttonback = '#bfffc5'
        //"greenslime"
        // EX 体力を消費して自分のコピーを出し、ダメージを代わりに受けさせる。コピーが倒されると少し回復する。(split)
        // NS 3の倍数のターンの時、敵にスライムを被せる。スライムが被さると攻撃が当たらなくなる。(throwslime)
        // PS mpが少ないが、防御力が少し高い。
        // SS 攻撃時、たまに2回ヒットする。
    } else if (name == 'mechanic'){
        playerEX = 'placeturret';
        playerNS = 'ThrowWrench';
        playerPS = '0.8health,1.2attack';
        playerSS = 'enemy10%stan';
        buttonsolid = '#ff7373';
        buttonback = '#fcffc0';
        // "mechanic"
        // EX タレットを後ろに設置し、追加で攻撃力の0.5倍(四捨五入)のダメージを与える。重複設置可能。(placeturret)
        // NS 3の倍数のターンの時、レンチを投げる。(攻撃力が2倍に)(ThrowWrench)
        // PS 体力が低いが、攻撃力が少し高い。
        // SS 敵の攻撃時、たまにスタンさせて攻撃を無効化する。
    } else if (name == 'clown'){
        playerEX = 'trickyvariables';//(コユキさんのEX)
        playerNS = 'gambler';
        playerPS = '3.0critrate';
        playerSS = 'highsol';
        buttonsolid = '#FFACF9';
        buttonback = '#ACF8FF';
        // "clown"
        // EX 攻撃力の0~5の倍率のダメージを与える爆弾を敵に投げる。(trickyvariables)
        // NS 3の倍数のターンの時、攻撃の倍率を0倍/2倍/4倍にする。(gambler)
        // PS 会心率が高い。
        // SS slash of lightの当たる確率が下がるが、ダメージは9倍になる。
    } else if (name == 'herta'){
        playerEX = 'bigdiamond';
        playerNS = 'improve';
        playerPS = '0.8mp,1.2critrate';
        playerSS = 'enemy50%pursuit';
        buttonsolid = '#F1EA66';
        buttonback = '#A163CB';
        // "herta"(ヘルタ)[崩壊・スターレイル]
        // EX 敵に攻撃力の2倍のダメージを与え、凍らせる。(bigdiamond)
        // NS 攻撃力が1.4倍になる。(improve)
        // PS mpが低いが、会心率が少し高い。
        // SS 攻撃によって相手の体力が半分以下になった時、追撃する。(攻撃力の0.7倍)
    }
    document.getElementById('Skillbutton').innerHTML = '<button id="SkillCoolDown" class="button" onclick="skillact()">skill</button>';
    document.getElementById('ButtonStyle').textContent = `.button{border: 2px solid ${buttonsolid};padding: 2px 3px;background: ${buttonback};cursor: pointer;}`;
    document.getElementById('Thisdisappearsafterthegamestarts').innerHTML = '';
  //document.getElementById('BackButtonDesu').innerHTML = '<button align="center" class="button" onclick="GoToCity()">Back</button>';
    document.getElementById('StatusAppearDisappear').innerHTML = '<button class="button" id="StatusButton" onclick="StatusAppear()">status</button>';
    document.getElementById('Status').textContent = '';
    reset();
}
async function reset(){
    money = 0;
    turn = 0; turncount = 0;
    playerhealth = 100; playermaxhealth = 100;
    playermp = 50; playermaxmp = 50;
    playerattack = 20; playerpower = 1;
    playerdefense = 0; playershell = 1;
    playercrit = 0.03;
    playerexp = 0; playerlevel = 1;
    enemylevel = 1;
    enemyhealth = 100; enemymaxhealth = 100;
    enemyattack = 10;
    enemydefense = 1;
    w = 0; x = 0; y = 0; z = 0;
    magic1 = 0; magic2 = 0; magic3 = 0; learnedmagic = 0;
    Potion.num = 3; Bomb.num = 3; Redcard.num = 3;
    skillcooldown = 100;
    buffclear('playerbuff');
    buffclear('playerdebuff');
    buffclear('enemybuff');
    buffclear('enemydebuff');
    switch(playername){
    case 'greenslime':
        playermaxmp = 35;
        playermp = playermaxmp;
        playerdefense = 5;
        break;
    case 'mechanic':
        playermaxhealth = 60;
        playerhealth = playermaxhealth;
        playerattack = 15;
        break;
    case 'clown':
        playercrit = 0.09;
        break;
    case 'herta':
        playermaxmp = 30;
        playermp = playermaxmp;
        playercrit = 0.07;
        hertaenelgy = 1;
        break;
    }//新PSのやつ　わかりやすくていいね
    document.getElementById('PlayerName').textContent = playername;
    document.getElementById('EnemyLevel').textContent = enemylevel;
    document.getElementById('PlayerLevel').textContent = playerlevel;
    document.getElementById('PlayerMaxHealth').textContent = playermaxhealth;
    document.getElementById('EnemyMaxHealth').textContent = enemymaxhealth;
    tekiou();
    document.getElementById('log').textContent = 'ゲーム開始です！！';
    if(playerbuff.includes('spliting')){Splitbreak();};
    if(playerEX == 'placeturret'){PlayerTurretbreak();};
    await delay(1000);
    DesideEnemyName();
    document.getElementById("EnemyName").textContent = enemyname;
    turncountincrease(); playerturn();
}
function restart(){document.getElementById('PlayerName').textContent = playername;tekiou();document.getElementById('log').textContent = 'バトル再開です！';if(playerskillbuff == 1){Splitbreak();};if(playerEX == 'placeturret'){PlayerTurretbreak();};window.setTimeout(playerturn,500);}
let lowedplayerattack = 0; let lowedplayerdefense = 0; let lowedplayermaxmp = 0; let lowedplayermaxhealth = 0; let lowedplayerlevel = 0;
function GoToBattle(){document.getElementById('GameScene').innerHTML = '<span>turn:</span><span id="TurnCount">0</span><br><b id="EnemyName">enemy</b>   <i>Lv.</i><i id="EnemyLevel">1</i>   <u id="EnemyDebuff"></u>   <u id="EnemySkillDebuff"></u><br><span id="EnemyHealth">0</span>/<span id="EnemyMaxHealth">0</span><span id="PlayerFriendFront"></span><br><br><b id="PlayerName">player</b>   <i>Lv.</i><i id="PlayerLevel">1</i>  <span id="AdditionalPlayerPoint"></span><br><span id="PlayerHealth">0</span>/<span id="PlayerMaxHealth">0</span><br><span id="PlayerBuff"></span> <span id="PlayerDebuff"></span><span id="PlayerFriendBack"></span><br><br><br><button class="button" id="select1" onclick="select1()">attack</button>  <button class="button" id="select2" onclick="select2()">magic</button><button class="button" id="select3" onclick="select3()">tools</button><button class="button" id="back" onclick="back()">pass</button><br><span id="Skillbutton"></span><br><br><span align="center" id="log"></span><br><span id="StatusAppearDisappear"><button class="button" id="StatusButton" onclick="StatusAppear()">status</button></span><br><span id="Status"></span>';    document.getElementById('TurnCount').textContent = turncount;document.getElementById('EnemyLevel').textContent = enemylevel;document.getElementById('PlayerLevel').textContent = playerlevel;document.getElementById('PlayerMaxHealth').textContent = playermaxhealth;document.getElementById('EnemyMaxHealth').textContent = enemymaxhealth;tekiou(); bufftekiou(); disappear(); restart();}
function turncountincrease(){turncount += 1; document.getElementById('TurnCount').textContent = turncount;}
async function NSaction(){
    NStimeout = 0;

    for (let i = 0; i < playerbufftime.length; i++) {
        playerbufftime[i] -= 1;
        if (playerbufftime[i] === 0) {
            playerbuff.splice(i, 1);
            playerbufftime.splice(i, 1);
            i--;
        }
    }
    for (let i = 0; i < playerdebufftime.length; i++) {
        playerdebufftime[i] -= 1;
        if (playerdebufftime[i] === 0) {
            playerdebuff.splice(i, 1);
            playerdebufftime.splice(i, 1);
            i--;
        }
    }
    for (let i = 0; i < enemybufftime.length; i++) {
        enemybufftime[i] -= 1;
        if (enemybufftime[i] === 0) {
            enemybuff.splice(i, 1);
            enemybufftime.splice(i, 1);
            i--;
        }
    }
    for (let i = 0; i < enemydebufftime.length; i++) {
        enemydebufftime[i] -= 1;
        if (enemydebufftime[i] === 0) {
            enemydebuff.splice(i, 1);
            enemydebufftime.splice(i, 1);
            i--;
        }
    }
    bufftekiou();

    playerpower = 1;
    if (playerbuff.includes('powerup6')) {playerpower = 4;} else if (playerbuff.includes('powerup5')) {playerpower = 3;} else if (playerbuff.includes('powerup4')) {playerpower = 2.5;} else if (playerbuff.includes('powerup3')) {playerpower = 2;} else if (playerbuff.includes('powerup2')) {playerpower = 1.5;} else if (playerbuff.includes('powerup1')) {playerpower = 1.25;}    
    if (playerdebuff.includes('powerdown6')) {playerpower -= 3} else if (playerdebuff.includes('powerdown5')) {playerpower -= 2} else if (playerdebuff.includes('powerdown4')) {playerpower -= 1.5} else if (playerdebuff.includes('powerdown3')) {playerpower -= 1} else if (playerdebuff.includes('powerdown2')) {playerpower -= 0.5} else if (playerdebuff.includes('powerdown1')) {playerpower -= 0.25} else 
    playershell = 1;
    if (playerbuff.includes('shellup6')) {playershell = 4;} else if (playerbuff.includes('shellup5')) {playershell = 3;} else if (playerbuff.includes('shellup4')) {playershell = 2.5;} else if (playerbuff.includes('shellup3')) {playershell = 2;} else if (playerbuff.includes('shellup2')) {playershell = 1.5;} else if (playerbuff.includes('shellup1')) {playershell = 1.25;}
    if (playerdebuff.includes('shelldown6')) {playershell -= 3} else if (playerdebuff.includes('shelldown5')) {playershell -= 2} else if (playerdebuff.includes('shelldown4')) {playershell -= 1.5} else if (playerdebuff.includes('shelldown6')) {playershell -= 1} else if (playerdebuff.includes('shelldown6')) {playershell -= 0.5} else if (playerdebuff.includes('shelldown1')) {playershell -= 0.25} else 
    enemypower = 1;
    if (enemybuff.includes('powerup6')) {enemypower = 4;} else if (enemybuff.includes('powerup5')) {enemypower = 3;} else if (enemybuff.includes('powerup4')) {enemypower = 2.5;} else if (enemybuff.includes('powerup3')) {enemypower = 2;} else if (enemybuff.includes('powerup2')) {enemypower = 1.5;} else if (enemybuff.includes('powerup1')) {enemypower = 1.25;}
    if (enemydebuff.includes('powerdown6')) {enemypower -= 3;} else if (enemydebuff.includes('powerdown5')) {enemypower -= 2;} else if (enemydebuff.includes('powerdown4')) {enemypower -= 1.5;} else if (enemydebuff.includes('powerdown3')) {enemypower -= 1;} else if (enemydebuff.includes('powerdown2')) {enemypower -= 0.5;} else if (enemydebuff.includes('powerdown1')) {enemypower -= 0.25;}
    enemyshell = 1;
    if (enemybuff.includes('shellup6')) {enemyshell = 4;} else if (enemybuff.includes('shellup5')) {enemyshell = 3;} else if (enemybuff.includes('shellup4')) {enemyshell = 2.5;} else if (enemybuff.includes('shellup3')) {enemyshell = 2;} else if (enemybuff.includes('shellup2')) {enemyshell = 1.5;} else if (enemybuff.includes('shellup1')) {enemyshell = 1.25;}            
    if (enemydebuff.includes('shelldown6')) {enemyshell -= 3} else if (enemydebuff.includes('shelldown5')) {enemyshell -= 2} else if (enemydebuff.includes('shelldown4')) {enemyshell -= 1.5} else if (enemydebuff.includes('shelldown3')) {enemyshell -= 1} else if (enemydebuff.includes('shelldown2')) {enemyshell -= 0.5} else if (enemydebuff.includes('shelldown1')) {enemyshell -= 0.25} else 

    if ((turncount % 3) == 0 && playerNS == 'throwslime'){
        buffadd('enemydebuff','onslime','3');
        document.getElementById('log').textContent = enemyname + 'にスライムが覆い被さった!';
        NStimeout = 1;
    } else if ((turncount % 4) == 0 && playerNS == 'ThrowWrench'){
        buffadd('playerbuff','LetsThrow','3');
        document.getElementById('log').textContent = 'wrenchを投げる準備ができた!';
        NStimeout = 1;
    } else if ((turncount % 3) == 0 && playerNS == 'gambler'){
        buffadd('playerbuff','gambling','3');
        document.getElementById('log').textContent = 'さあ、ギャンブルの時間だ!!';
        NStimeout = 1;
    } else if(turncount == 6 && playerNS == 'improve'){
    if(playerbuff.includes('improve') == false){
        buffadd('playerbuff','improve','3');
        document.getElementById('log').textContent = 'パーツアップグレード。';
        NStimeout = 1;
    }else if(playerbuff.includes('improve')){
        buffremove('playerbuff','improve');
    }
    } else if((turncount % 3) == 0 && playerNS == '5%heal'){
        x = playerhealth;
        playerhealth += Math.ceil(playermaxhealth * 0.2);
        if(playerhealth > playermaxhealth){playerhealth = playermaxhealth};
        x = playerhealth - x;
        tekiou();
        if(x > 0){document.getElementById('log').textContent = '5%のHPを回復した！'; NStimeout = 1;}
    }
    if(NStimeout == 1){await delay(1000);};
    playerturn();
}

//async function playerdamaged(dam){
//    playerhealth -= dam;
//}

async function enemydamaged(multiplier,code){//倍率を引数にしたらぜんぶまとめられるのでは？ vたし蟹v
    //codeは基本0。sは1、dsは2、solは3、爆発系は4
    x = weaponpower;
    if(equipweapon == 8){x = Math.floor(Math.random() * 13)+1};
    if(equipweapon == 13){x = Math.floor(Math.random() * 100)+1};//えぐ...
    x = (playerattack * playerpower * multiplier + x);
    if(code == 3 && playerSS == 'highsol'){x *= 3};//highsolのやつ
    x -= (enemydefense * enemyshell);
    if(equipweapon == 7){playercrit += 0.5}//ん？なんか会心多くね？を言わせてやりたいぜ..ww(50%増やしてるからかなりぶっ壊れ)
    if(equipweapon == 14){t=playercrit;playercrit = 0.7;w=playercritdmg;playercritdmg = 0.05}//ん？なんか会心多くね？を言わせてやりたいぜ..ww(50%増やしてるからかなりぶっ壊れ)
    if((Math.floor(Math.random()+ playercrit)-enemycritresist) >= 1){x += (enemydefense); x *= playercritdmg; document.getElementById('log').textContent = '会心の一撃！'; await delay(1000);};
    if(equipweapon == 14){playercrit = t;playercritdmg = w;}
    if(equipweapon == 7){playercrit -= 0.5}
    if(playerbuff.includes('improve')){x *= 1.4;};
    y = (x * [Math.random() *0.1]);
    y *= [Math.random() < 0.5 ? -1 : 1]; //1か-1を出力する装置
    x += y; //ムラ発生機
    x = Math.ceil(x);
    if(playerbuff.includes('LetsThrow')){x *= 2; buffremove('playerbuff','LetsThrow');};
    if(playerbuff.includes('gambling')){z = clowngambling[Math.floor(Math.random() * clowngambling.length)]; x *= z; buffremove('playerbuff','gambling'); document.getElementById('log').textContent = 'ダメージは' + z + '倍になった!!'; await delay(1000);};
    if(x < 0){x = 0}; if(x > enemyhealth){x = enemyhealth};
    enemyhealth -= x;
    if(enemyhealth < 0){enemyhealth = 0};
    tekiou();
    document.getElementById('log').textContent = enemyname + 'に' + x + 'のダメージ！';
    
    switch(playername){
        case 'Wretch': skillcooldown += 10; break;
        case 'greenslime': skillcooldown += 5; break;
        case 'mechanic': skillcooldown += 15; break;
        case 'clown': skillcooldown += 20; break;
        case 'herta': skillcooldown += 10; break;
    }
    if(skillcooldown > 100){skillcooldown = 100};
    if(skillcooldown == 100){document.getElementById('Skillbutton').innerHTML = '<button id="SkillCoolDown" class="button" onclick="skillact()">skill</button>';}
    else{document.getElementById("SkillCoolDown").textContent = skillcooldown + '%';};//新！クールダウン！！

    if(equipweapon == 11){//体力を吸収するやつ。(ジェン・ソルテ)
        await delay(1000);
        document.getElementById('log').textContent = playername+'は'+enemyname+'の体力を吸収した！'
        await delay(1000);
        y = Math.ceil(x *= 0.25);
        playerhealth += y;
        if(playerhealth > playermaxhealth){playerhealth = playermaxhealth};
        tekiou();
        document.getElementById('log').textContent = y+'のHPを回復した！';
    }
    if(equipweapon == 12 && code == 1 && enemyhealth > 0){//防御力下げるやつ(time on target)
        await delay(1000);
        t = Math.floor(Math.random()*3)+1;
        switch(t){case 1:t='トリニティの砲撃術は優秀ですから。';break; case 2:t='お客様のお見送りも、丁寧に。'; break; case 3:t='砲手、支援を。';break;}
        document.getElementById('log').textContent = t;
        await delay(1000);
        x = Math.ceil(playerattack * playerpower * 1.1 + weaponpower - enemydefense);
        if(x < 0){x = 0};if(x > enemyhealth){x = enemyhealth};
        enemyhealth -= x;
        tekiou();
        buffadd('enemydebuff','shelldown1',4);
        document.getElementById('log').textContent = 'お口に合うと良いのですが..';
    }

    if(playerSS == 'enemy50%pursuit' && enemyhealth <= playermaxhealth / 2 && hertaenelgy == 1 && enemyhealth > 0){
        hertaenelgy = 0;
        await delay(1000);
        z = Math.floor(Math.random() * 2);
        if(z == 0){document.getElementById('log').textContent = 'くるくる～――っと';}else{document.getElementById('log').textContent = 'くるりん～っと';}
        await delay(1000);
        x = (playerattack * playerpower * 1.1 + weaponpower); x -= (enemydefense);
        if((Math.floor(Math.random()+ playercrit)) == 1){x += (enemydefense); x *= 3; document.getElementById('log').textContent = '会心の一撃！'; await delay(1000);};
        if(playerbuff.includes('improve')){x *= 1.4;};
        y = (x * [Math.random() *0.1]); y *= [Math.random() < 0.5 ? -1 : 1];  x += y;
        x = Math.ceil(x);
        if(playerbuff.includes('LetsThrow')){x *= 2; buffremove('playerbuff','LetsThrow');};
        if(x < 0){x = 0}; if(x > enemyhealth){x = enemyhealth};
        enemyhealth -= x;
        if(enemyhealth < 0){enemyhealth = 0};
        tekiou();
        document.getElementById('log').textContent = enemyname + 'に' + x + 'のダメージ!';
        skillcooldown += 10;
        if(skillcooldown > 100){skillcooldown = 100};
        if(skillcooldown == 100){document.getElementById('Skillbutton').innerHTML = '<button id="SkillCoolDown" class="button" onclick="skillact()">skill</button>';}
        else{document.getElementById("SkillCoolDown").textContent = skillcooldown + '%';};
    }
};

function DesideEnemyName(){
    enemyprefixe = 0;
    enemyname = enemynames[Math.floor(Math.random() * enemynames.length)]; // 敵の名前を決めます
    y = Math.floor(Math.random() * 3); // 1/3
    if(y == 0){enemyprefixe = enemyprefixes[Math.floor(Math.random() * enemyprefixes.length)]};
    if(enemyprefixe !== 0){enemyname = enemyprefixe + ' ' + enemyname}
    else {enemyname = enemyname}; // 敵に接頭辞を確率で付与します。意味はありません。ひとえに愛だよ
    return enemyname;
}

async function playerturn(){
    if(skillcooldown == 100){document.getElementById('Skillbutton').innerHTML = '<button id="SkillCoolDown" class="button" onclick="skillact()">skill</button>';}else{document.getElementById("SkillCoolDown").textContent = skillcooldown + '%';};
    z = 0;
    if(playerdebuff.includes('onslime')){
        x = Math.floor(Math.random() * 3);
        if(x !== 0){buffremove('playerdebuff','onslime'); document.getElementById('log').textContent = 'なんとかスライムを取り払った!!'}
        else {document.getElementById('log').textContent = 'スライムが邪魔して動けない!!'; z = 1;}; 
    }
    if(z == 0){
    if(playerEX == 'placeturret'){PlayerTurretattack = Math.round(playerattack * 0.5);};if (turn !== 3){turn = 1;};
    phase = 1;
    document.getElementById('log').textContent = 'あなたのターンです！';
    document.getElementById('select1').textContent = 'attack';
    document.getElementById('select2').textContent = 'magic';
    document.getElementById('select3').textContent = 'tools';
    document.getElementById('back').textContent = 'pass';
  //document.getElementById('BackButtonDesu').innerHTML = '<button align="center" class="button" onclick="GoToCity()">Back</button>';
    errorcheck();
    } else if(z == 1){window.setTimeout(enemyorplayer, 1000)}
};
// 選択ボタン
async function select1(){
    if (phase == 1) {
        document.getElementById('log').textContent = 'どうやって攻撃する？';
        document.getElementById('select1').textContent = 'slash';
        document.getElementById('select2').textContent = 'double slash';
        document.getElementById('select3').textContent = 'slash of light';
        document.getElementById('back').textContent = 'back';
        phase = 2;
    } else if (phase == 2) {
        disappear()
        document.getElementById('log').textContent = playername + 'の斬撃!';
        window.setTimeout(slash, 1000)
    } else if (phase == 3) {
        disappear()
        if (magic1 !== 0){
            z = magic1
            magic()
        } else {
            document.getElementById('log').textContent = 'you dont have magic...';
            window.setTimeout(playerturn, 1000)
        }
    } else if (phase == 4) {
        disappear()
        if (equiptool1.num > 0){
            document.getElementById('log').textContent = playername + 'は'+equiptool1.name+'を使用した!';
            window.setTimeout(eval(equiptool1.id+'act'), 1000)
        } else {
            document.getElementById('log').textContent = 'not enough item ...';
            window.setTimeout(playerturn, 1000)
        }
    } else if (phase == 5){
        disappear()
        playerattack += 5;
        document.getElementById('log').textContent = '攻撃力が上がった!';
        window.setTimeout(nextenemy,1000)
    } else if (phase == 6){
        disappear()
        document.getElementById('log').textContent = magic1 + 'を忘れ、' + learnmagic + 'を覚えた!!';
        magic1 = learnmagic
        window.setTimeout(nextenemy,1000)
    }
}
async function select2(){
    if (phase == 1) {
        document.getElementById('log').textContent = 'どうする？';
        document.getElementById('select1').textContent = magic1;
        document.getElementById('select2').textContent = magic2;
        document.getElementById('select3').textContent = magic3;
        document.getElementById('back').textContent = 'back';
        phase = 3;
    } else if (phase == 2) {
        disappear()
        document.getElementById('log').textContent = playername + 'の回転斬り!!';
        window.setTimeout(doubleslash, 1000)
    } else if (phase == 3) {
        disappear()
        if (magic2 !== 0){
            z = magic2
            magic()
        } else {
            document.getElementById('log').textContent = 'you dont have magic...';
            window.setTimeout(playerturn, 1000)
        }
    } else if (phase == 4) {
        disappear()
        if (equiptool2.num > 0){
            document.getElementById('log').textContent = playername + 'は'+equiptool2.name+'を使用した!';
            window.setTimeout(eval(equiptool2.id+'act'), 1000)
        } else {
            document.getElementById('log').textContent = 'not enough item ...';
            window.setTimeout(playerturn, 1000)
        }
        
    } else if (phase == 5){
        disappear()
        phase = 0;
        playerdefense += 5;
        document.getElementById('log').textContent = '防御力が上がった!';
        window.setTimeout(nextenemy, 1000)
    } else if (phase == 6){
        disappear()
        document.getElementById('log').textContent = magic2 + 'を忘れ、' + learnmagic + 'を覚えた!!';
        magic2 = learnmagic
        window.setTimeout(nextenemy, 1000)
    }
}
function select3(){
    if (phase == 1) {
        document.getElementById('log').textContent = 'どうやって攻撃する？';
        document.getElementById('select1').textContent = equiptool1.name+' x'+equiptool1.num;
        document.getElementById('select2').textContent = equiptool2.name+' x'+equiptool2.num;
        document.getElementById('select3').textContent = equiptool3.name+' x'+equiptool3.num;
        document.getElementById('back').textContent = 'back';
        phase = 4;
    } else if (phase == 2) {
        disappear()
        document.getElementById('log').textContent = playername + 'の一閃!!';
        window.setTimeout(slashoflight, 1000)
    } else if (phase == 3) {
        disappear()
        if (magic3 !== 0){
            z = magic3
            magic()
        } else {
            document.getElementById('log').textContent = 'you dont have magic...';
            window.setTimeout(playerturn, 1000)
        }
    } else if (phase == 4) {
        disappear()
        if (equiptool3.num > 0){
            document.getElementById('log').textContent = playername + 'は'+equiptool3.name+'を使用した!';
            window.setTimeout(eval(equiptool3.id+'act'), 1000)
        } else {
            document.getElementById('log').textContent = 'not enough item ...';
            window.setTimeout(playerturn, 1000)
        }
    } else if (phase == 5){
        phase = 0;
        switch (learnedmagic) {
            case 1: learnmagic = 'heal';          break;
            case 2: learnmagic = 'power';         break;
            case 3: learnmagic = 'shell';         break;
            case 4: learnmagic = 'poison1';        break;
            case 5: learnmagic = 'healer than';   break;
            case 6: learnmagic = 'luck';          break;
            case 7: learnmagic = 'more power';    break;
            case 8: learnmagic = 'more shell';    break;
            case 9: learnmagic = 'deadly poison1'; break;
            case 10:learnmagic = 'the healest';   break;
            case 11:learnmagic = 'greatluck';     break;
            default:
                learnmagic = 'random';
                document.getElementById('log').textContent = '魔法は見つからなかった...しかしrandomを思いついた!';
                playersutefuri();
        }
        document.getElementById('log').textContent = learnmagic + 'を見つけた!!';
        document.getElementById('select1').textContent = magic1;
        document.getElementById('select2').textContent = magic2;
        document.getElementById('select3').textContent = magic3;
        document.getElementById('back').textContent = 'pass';
        phase = 6;
    } else if (phase == 6){
    disappear()
        document.getElementById('log').textContent = magic3 + 'を忘れ、' + learnmagic + 'を覚えた!!';
        magic3 = learnmagic
        window.setTimeout(nextenemy, 1000)
    }
}
// 一個選択肢を戻るやつ
function back(){
    if (phase == 1){
    disappear()
        enemieturn();
    } else if (phase == 2){
        playerturn();
    } else if (phase == 3) {
        playerturn();
    } else if (phase == 4) {
        playerturn();
    } else if (phase == 5) {
        disappear();
        phase = 0;
        playermaxmp += Math.floor(Math.random()*6)+5;
        playermp = playermaxmp;
        document.getElementById('log').textContent = '魔力が上がった!';
        window.setTimeout(nextenemy, 1000)
    } else if(phase == 6){
        disappear();
        document.getElementById('log').textContent = 'やっぱり覚えるのをやめた！';
        window.setTimeout(nextenemy, 1000)
    }
    
}
function disappear(){
    document.getElementById('select1').textContent = ' ';
    document.getElementById('select2').textContent = ' ';
    document.getElementById('select3').textContent = ' ';
    document.getElementById('back').textContent = '';
  //document.getElementById('BackButtonDesu').innerHTML = '';
    phase = 'null';
}
// playerの攻撃たち
// playerの斬撃攻撃
async function slash() {
    await enemydamaged(1,1);
    x = Math.floor(Math.random() * 4); // 1/5の確率
    if (enemyhealth == 0){
        window.setTimeout(killedenemy, 1000);
    }else if(playerSS == 'threes' && x == 0){
            await delay(1000)
            document.getElementById('log').textContent = playername+'は頑張った!';
            await delay(500)
            await enemydamaged(1,1);
            tekiou();
            if (enemyhealth == 0){window.setTimeout(killedenemy, 1000)}
            else{
                await delay(1000)
                await enemydamaged(1,1);
                if (enemyhealth == 0){window.setTimeout(killedenemy, 1000)}
                else {window.setTimeout(enemyorplayer, 1000)}
                };

            } else {window.setTimeout(enemyorplayer, 1000)};
}
async function doubleslash() {
    x = Math.floor(Math.random() * 3);
    if (x == 0){
        document.getElementById('log').textContent = 'miss! ダメージを与えられない!';
    } else {
        await enemydamaged(1,2);
    }
    if (enemyhealth == 0){
        window.setTimeout(killedenemy, 1000)
    } else {
        await delay(1000);
        x = Math.floor(Math.random() * 3);//2/3
        if (x == 0){
            document.getElementById('log').textContent = 'miss! ダメージを与えられない!';
        } else {
            await enemydamaged(1,2);
            document.getElementById('log').textContent = enemyname + 'に' + x + 'のダメージ!';
            if (enemyhealth == 0){window.setTimeout(killedenemy, 1000)}   
        }
        window.setTimeout(enemyorplayer, 1000)
    }
}
async function slashoflight() {//clownだけ特別待遇、enemydamaged(mutiplier,code)にしといて(codeはなんでもいいけどとりまsolってことがわかれば良い)
    x = Math.floor(Math.random() * 3); // 1/3です
    if (playerSS == 'highsol'){x = Math.floor(Math.random() * 5);} // 1/5です。
    if (x == 0) {
        await enemydamaged(3,3);
        if (enemyhealth == 0){window.setTimeout(killedenemy, 1000)}
    } else {
        document.getElementById('log').textContent = 'miss! ダメージを与えられない!';
    }
    window.setTimeout(enemyorplayer, 1000)
}
// playerの魔法
// 魔法の一覧です
// heal　20%回復 mp:4
// power　attack 1.5倍 code:1 mp:5
// shell　defence 1.5倍 code:3 mp:5
// poison　敵に毒を付与　毎ターン5%ダメージ code:1 mp:7
// healerthan　40%回復 mp:8
// luck　ターン終了時、1/5の確率でターン継続 code:5 mp:7
// morepower　attack 2倍 code:2 mp:10
// moreshell defence 2倍 code:4 m[:10]
// poison2　敵に毒を付与　毎ターン10%ダメージ code:2 mp:14
// thehealest　60%回復 mp:12
// greatluck　ターン終了後、1/2の確率でターン継続 code:6 mp:14
// random ランダムな魔法を使用する mp:1
function magic() {
    switch(z){
        case 'heal':
            if(playermp >= 4){
            Heal();
            playermp -= 4;
            } else {
                document.getElementById('log').textContent = 'not enough mp...';
                window.setTimeout(playerturn, 1000)
            }
            break;
        case 'power':
            if(playermp >= 5){
            Power();
            playermp -= 5;
            } else {
                document.getElementById('log').textContent = 'not enough mp...';
                window.setTimeout(playerturn, 1000)
            }
            break;
        case 'shell':
            if(playermp >= 5){
            Shell();
            playermp -= 5;
            } else {
                document.getElementById('log').textContent = 'not enough mp...';
                window.setTimeout(playerturn, 1000)
            }
            break;
        case 'poison1':
            if(playermp >= 7){
            poison1();
            playermp -= 7;
            } else {
                document.getElementById('log').textContent = 'not enough mp...';
                window.setTimeout(playerturn, 1000)
            }
            break;
        case 'healer than':
            if(playermp >= 8){
            Healerthan();
            playermp -= 8;
            } else {
                document.getElementById('log').textContent = 'not enough mp...';
                window.setTimeout(playerturn, 1000)
            }
            break;
        case 'luck':
            if(playermp >= 7){
            Luck();
            playermp -= 7;
            } else {
                document.getElementById('log').textContent = 'not enough mp...';
                window.setTimeout(playerturn, 1000)
            }
            break;
        case 'more power':
            if(playermp >= 10){
            Morepower();
            playermp -= 10;
            } else {
                document.getElementById('log').textContent = 'not enough mp...';
                window.setTimeout(playerturn, 1000)
            }
            break;
        case 'more shell':
            if(playermp >= 10){
            Moreshell();
            playermp -= 10;
            } else {
                document.getElementById('log').textContent = 'not enough mp...';
                window.setTimeout(playerturn, 1000)
            }
            break;
        case 'deadly poison1':
            if(playermp >= 14){
            poison2();
            playermp -= 14;
            } else {
                document.getElementById('log').textContent = 'not enough mp...';
                window.setTimeout(playerturn, 1000)
            }
            break;
        case 'the healest':
            if(playermp >= 12){
            Thehealest();
            playermp -= 12;
            } else {
                document.getElementById('log').textContent = 'not enough mp...';
                window.setTimeout(playerturn, 1000)
            }
            break;
        case 'greatluck':
            if(playermp >= 15){
            Greatluck();
            playermp -= 15;
            } else {
                document.getElementById('log').textContent = 'not enough mp...';
                window.setTimeout(playerturn, 1000)
            }
            break;
        case 'random':
            if(playermp >= 1){
            Random();
            playermp -= 1;
            } else {
                document.getElementById('log').textContent = 'not enough mp...';
                window.setTimeout(playerturn, 1000)
            }
            break;
        default:
            document.getElementById('log').textContent = 'errrrrrr';
        };
}
function Heal() {
    x = playerhealth
    playerhealth += Math.round(playermaxhealth * 0.2)
    y = playerhealth - x;
    document.getElementById('log').textContent = playername + 'はhealを唱え、' + y + '回復した!';
    if (playerhealth > playermaxhealth) {playerhealth = playermaxhealth;}
    tekiou();
    window.setTimeout(enemyorplayer, 1000)
}
function Power() {
    buffadd('playerbuff','powerup1',3);
    document.getElementById('log').textContent = playername + 'はpowerを唱えた!';
    window.setTimeout(enemyorplayer, 1000)
}
function Shell() {
    buffadd('playerbuff','shellup1',3);
    document.getElementById('log').textContent = playername + 'はshellを唱えた!';
    window.setTimeout(enemyorplayer, 1000)
}
function poison1(){
    buffadd('enemydebuff','poison1',6);
    document.getElementById('log').textContent = playername + 'はpoisonを唱えた!';
    window.setTimeout(enemyorplayer, 1000)
}
function Healerthan() {
    x = playerhealth
    playerhealth += Math.round(playermaxhealth * 0.4)
    y = playerhealth - x;
    document.getElementById('log').textContent = playername + 'はhealer thanを唱え、' + y + '回復した!!';
    if (playerhealth > playermaxhealth) {playerhealth = playermaxhealth;}
    tekiou();
    window.setTimeout(enemyorplayer, 1000)
}
function Luck() {
    buffadd('playerbuff','luck',5);
    document.getElementById('log').textContent = playername + 'はluckを唱えた!';
    window.setTimeout(enemyorplayer, 1000)
}
function Morepower() {
    if(playerbuff.includes('powerup1')){buffremove('playerbuff','powerup1');}
    buffadd('playerbuff','powerup2',3)
    document.getElementById('log').textContent = playername + 'はmore powerを唱えた!';
    window.setTimeout(enemyorplayer, 1000)
}
function Moreshell() {
    if(playerbuff.includes('shellup1')){buffremove('playerbuff','shellup1');}
    buffadd('playerbuff','shellup2',3)
    document.getElementById('log').textContent = playername + 'はmore shellを唱えた!';
    window.setTimeout(enemyorplayer, 1000)
}
function poison2() {
    buffadd('enemydebuff','poison2',6);
    document.getElementById('log').textContent = playername + 'はdeadly poisonを唱えた!';
    window.setTimeout(enemyorplayer, 1000)
}
function Thehealest() {
    x = playerhealth
    playerhealth += Math.round(playermaxhealth * 0.6)
    y = playerhealth - x;
    document.getElementById('log').textContent = playername + 'はthe healestを唱え、' + y + '回復した!!!';
    if (playerhealth > playermaxhealth) {playerhealth = playermaxhealth;}
    tekiou();
    window.setTimeout(enemyorplayer, 1000)
}
function Greatluck() {
    buffadd('playerbuff','greatluck',5);
    document.getElementById('log').textContent = playername + 'はgreatluckを唱えた!';
    window.setTimeout(enemyorplayer, 1000)
}
async function Random(){
    document.getElementById('log').textContent = '.........';
    await delay(1000);
    x = Math.floor(Math.random() * 11)
    switch (x) {
        case 0:
            document.getElementById('log').textContent = 'healが出た!';
            window.setTimeout(Heal, 1000);
            break;
        case 1:
            document.getElementById('log').textContent = 'powerが出た!';
            window.setTimeout(Power, 1000);
            break;
        case 2:
            document.getElementById('log').textContent = 'shellが出た!';
            window.setTimeout(Shell, 1000);
            break;
        case 3:
            document.getElementById('log').textContent = 'poisonが出た!';
            window.setTimeout(poison1, 1000);
            break;
        case 4:
            document.getElementById('log').textContent = 'healer thanが出た!';
            window.setTimeout(Healerthan, 1000);
            break;
        case 5:
            document.getElementById('log').textContent = 'luckが出た!';
            window.setTimeout(Luck, 1000);
            break;
        case 6:
            document.getElementById('log').textContent = 'more powerが出た!';
            window.setTimeout(Morepower, 1000);
            break;
        case 7:
            document.getElementById('log').textContent = 'more shellが出た!';
            window.setTimeout(Moreshell, 1000);
            break;
        case 8:
            document.getElementById('log').textContent = 'deadly poisonが出た!';
            window.setTimeout(poison2, 1000);
            break;
        case 9:
            document.getElementById('log').textContent = 'the healestが出た!';
            window.setTimeout(Thehealest, 1000);
            break;
        case 10:
            document.getElementById('log').textContent = 'greatluckが出た!';
            window.setTimeout(Greatluck, 1000);
            break;
        default:
            document.getElementById('log').textContent = '不明なエラーが発生しました';
            break;
    }    
}

// playerの道具
function Aspirinact(){
    playerhealth += Math.round(playermaxhealth * 0.2);
    if(playerhealth > playermaxhealth){playerhealth = playermaxhealth};
    tekiou();
    document.getElementById('log').textContent = 'おや？頭が痛いって？痛みに効くのはアスピリン！！';
    Aspirin.num -= 1;
    window.setTimeout(playerturn, 1000)
}
function Pablonact(){
    playerhealth += Math.round(playermaxhealth * 0.4)
    if(playerhealth > playermaxhealth){playerhealth = playermaxhealth};
    tekiou();
    document.getElementById('log').textContent = '早めのパブロン♪';
    Pablon.num -= 1;
    window.setTimeout(playerturn, 1000)
}
function Trypsinact(){
    playerhealth += Math.round(playermaxhealth * 0.6)
    if(playerhealth > playermaxhealth){playerhealth = playermaxhealth};
    tekiou();
    document.getElementById('log').textContent = 'トリプシンを飲んだ！！え？これは薬じゃないって？';
    Trypsin.num -= 1;
    window.setTimeout(playerturn, 1000)
}
function Luluact(){
    playerhealth += Math.round(playermaxhealth * 0.8)
    if(playerhealth > playermaxhealth){playerhealth = playermaxhealth};
    tekiou();
    document.getElementById('log').textContent = '熱・のど・鼻にルルが効く〜♪';//名前かわいいかよ(???)
    Lulu.num -= 1;
    window.setTimeout(playerturn, 1000)
}
function Potionact(){
    playerhealth = playermaxhealth
    tekiou();
    document.getElementById('log').textContent = 'なんか一番しょうもないよね、これ あ、全回復です';
    Potion.num -= 1;
    window.setTimeout(playerturn, 1000)
}
async function ThrowKnifeact(){
    document.getElementById('log').textContent = 'では、ナイフの錆にしてあげましょう';
    ThrowKnife.num -= 1;
    await delay(1000);
    x = Math.ceil(enemymaxhealth*0.20);
    if(enemyhealth < x){x = enemyhealth};
    enemyhealth -= x
    tekiou();
    document.getElementById('log').textContent = enemyname+'に'+x+'のダメージ！';
    await delay(1000);
    if(enemyhealth <= 0){
        killedenemy();
    }else{
        enemyorplayer();
    }
}
async function TrickyVariableact(){//ここの作り込みやばい
    x = Math.floor(Math.random() * 3) + 1;
    switch(x){
        case 1:
            document.getElementById('log').textContent = 'ま、これでいいですよね？';
            x = Math.ceil(enemymaxhealth*0.10);
            break;
        case 2:
            document.getElementById('log').textContent = '結果良ければすべてオッケー！ってね？';
            x = Math.ceil(enemymaxhealth*0.25);
            break;
        case 3:
            document.getElementById('log').textContent = 'これぞ醍醐味、ってやつ？';
            x = Math.ceil(enemymaxhealth*0.40);
            break;
    }
    TrickyVariable.num -= 1;
    await delay(1000);
    if(enemyhealth < x){x = enemyhealth};
    enemyhealth -= x
    tekiou();
    document.getElementById('log').textContent = enemyname+'に'+x+'のダメージ！';
    await delay(1000);
    if(enemyhealth <= 0){
        document.getElementById('log').textContent = 'ちょろい、ちょろい。BANG！';
        window.setTimeout(killedenemy, 1000)
    }else{enemyorplayer();}
}//ここの作り込みやば...ww まあ好きなキャラTop3の1人だからしゃーない にはははは〜！
async function BottleGrenadeact(){
    document.getElementById('log').textContent = 'これはちょっと、スパイシーなやつだよ';
    BottleGrenade.num -= 1;
    await delay(1000);
    x = Math.ceil(enemymaxhealth*0.45);
    if(enemyhealth < x){x = enemyhealth};
    enemyhealth -= x;
    tekiou();
    buffadd('enemydebuff','burn1',3);
    document.getElementById('log').textContent = enemyname+'に'+x+'のダメージ！';
    await delay(1000);
    if(enemyhealth <= 0){
        document.getElementById('log').textContent = 'レッドウィンターの問題児にしては上出来じゃない？';
        window.setTimeout(killedenemy, 1000)
    }
    enemyorplayer();
}
async function CoveringFireact(){//これはノーマルスキル扱いってことで... 弱点把握状態もやりたいけど枠がねぇ....あ、スキルを獲得制にすれば......!?
    document.getElementById('log').textContent = 'え、援護します...'
    CoveringFire.num -= 1;
    await delay(1000);
    x = Math.ceil(enemymaxhealth*0.60);
    if(enemyhealth < x){x = enemyhealth};
    enemyhealth -= x
    tekiou();
    document.getElementById('log').textContent = enemyname+'に'+x+'のダメージ！';
    await delay(1000);
    if(enemyhealth <= 0){
        document.getElementById('log').textContent = 'わ、私のことはお気になさらずに...';
        window.setTimeout(killedenemy, 1000)
    }else{enemyorplayer();}
}
function Bombact(){
    enemyhealth = 0;
    tekiou();
    document.getElementById('log').textContent = '爆発オチなんてサイテー！！';
    Bomb.num -= 1;
    window.setTimeout(killedenemy, 1000)
}
function Redcardact() {
    turn = 3;
    document.getElementById('log').textContent = 'カードを仕込みました!';
    Redcard.num -= 1;
    window.setTimeout(playerturn, 1000)
}
function Bluecardact() {
    x = playerhealth / playermaxhealth;
    y = enemyhealth / enemymaxhealth;
    enemyhealth = (enemymaxhealth * x);
    playerhealth = (playermaxhealth * y);
    tekiou();
    document.getElementById('log').textContent = '体力を交換しました！';
    Bluecard.num -= 1;
    window.setTimeout(playerturn, 1000)
}
const Greenrandombuffs = ['poison1','burn1','powerdown1','shelldown1']
function Greencardact() {
    x = Greenrandombuffs[Math.floor(Math.random() * Greenrandombuffs.length)];
    y = Greenrandombuffs[Math.floor(Math.random() * Greenrandombuffs.length)];
    while (y == x) {y = Greenrandombuffs[Math.floor(Math.random() * Greenrandombuffs.length)];}
    buffadd('enemydebuff',x,3);buffadd('enemydebuff',y,3);
    Greencard.num -= 1;
    document.getElementById('log').textContent = enemyname+'にバフを二個つけました！！';
    window.setTimeout(playerturn, 1000)
}
function Blackcardact() {
    buffadd('enemybuff','poison1',3);
    buffadd('enemybuff','burn1',3);
    buffadd('enemybuff','powerdown1',3);
    buffadd('enemybuff','shelldown1',3);
    Blackcard.num -= 1;
    document.getElementById('log').textContent = 'バフを四個つけました！';
    window.setTimeout(playerturn, 1000)
}


let Splithealth = 0;
let Splitmaxhealth = 0;
let PlayerTurret = 0;
let PlayerTurretattack = 0;
let clowngambling = ['0','0','2','2','2','4'];
let hertaEXvoice = ['こんな大きなダイアモンド見たことないでしょ？あげるね～','あなた…それじゃあダメだよ','ちょっとは静かになさい！','私が誰だか知ってるの？']
// skillの手続き
async function skillact() {
    if(phase == 1){
    if (skillcooldown == 100){
        if(playerEX == 'split'){
        if(playerbuff.includes('spliting') == false){
            if(playerhealth > Math.floor(playermaxhealth * 0.5)){
            buffadd('playerbuff','spliting',7);
            x = Math.floor(playermaxhealth * 0.5);
            playerhealth -= x;
            document.getElementById('PlayerFriendFront').innerHTML = '<br><br><b><font color="#2EFE2E">'+playername+'のコピー</font></b>  <br><span id="SplitHealth">0</span>/<span id="SplitMaxHealth">0</span>';
            Splitmaxhealth = x;
            Splithealth = x;
            Splittekiou()
            document.getElementById('log').textContent = playername+'は分裂した!!';
            tekiou()
            } else {document.getElementById('log').textContent = 'tairyoku ga sukunai desu...';}
        }
    } else if(playerEX == 'placeturret'){
        document.getElementById('PlayerFriendBack').innerHTML = '<br><br><b><font color="#DF0101">turret</font><span id="PlayerTurret"></span></b>';
        PlayerTurret += 1;
        PlayerTurrettekiou()
        PlayerTurretattack = Math.round(playerattack * 0.5);
        document.getElementById('Skillbutton').innerHTML = '';
        document.getElementById('log').textContent = playername+'はturretを設置した!';
        skillcooldown = 0;
        document.getElementById('Skillbutton').innerHTML = '<button id="SkillCoolDown" class="button" onclick="skillact()"></button>'
        document.getElementById("SkillCoolDown").textContent = skillcooldown + '%';
    } else if(playerEX == 'trickyvariables'){
        phase = 0; disappear();
        document.getElementById('log').textContent = playername+'は爆弾を投げた...';
        document.getElementById('Skillbutton').innerHTML = '';
        window.setTimeout(Trickybomb, 1000)
        skillcooldown = 0;
        document.getElementById('Skillbutton').innerHTML = '<button id="SkillCoolDown" class="button" onclick="skillact()"></button>'
        document.getElementById("SkillCoolDown").textContent = skillcooldown + '%';
    } else if(playerEX == 'bigdiamond'){
        phase = 0; disappear(); skillcooldown = 0;
        document.getElementById('log').textContent = hertaEXvoice[Math.floor(Math.random() * hertaEXvoice.length)];//そのうち消える
        await delay(1000);
        x = (playerattack * playerpower * 2 + weaponpower); x -= (enemydefense);    
        y = (x * [Math.random() *0.1]); y *= [Math.random() < 0.5 ? -1 : 1]; x += y;
        x = Math.ceil(x);
        if(x < 0){x = 0}; if(x > enemyhealth){x = enemyhealth};
        enemyhealth -= x;
        document.getElementById('log').textContent = enemyname + 'に' + x + 'のダメージ!';
        tekiou();   
        buffadd('enemydebuff','freeze',4);
        skillcooldown = 0;
        document.getElementById('Skillbutton').innerHTML = '<button id="SkillCoolDown" class="button" onclick="skillact()"></button>'
        document.getElementById("SkillCoolDown").textContent = skillcooldown + '%';
        window.setTimeout(enemyorplayer, 1000)
    } else if(playerEX == '50%heal'){
        x = playerhealth;
        playerhealth += Math.floor(playermaxhealth * 0.5);
        if (playerhealth > playermaxhealth){playerhealth = playermaxhealth;}
        x = playerhealth - x;
        if(x > 0){
            document.getElementById('log').textContent = '体力が' + x + '回復した!';
            skillcooldown = 0;
            document.getElementById('Skillbutton').innerHTML = '<button id="SkillCoolDown" class="button" onclick="skillact()"></button>'
            document.getElementById("SkillCoolDown").textContent = skillcooldown + '%';
        } else {
            document.getElementById('log').textContent = 'health is already full...';
        }
    }
    } else {document.getElementById('log').textContent = 'skill is not ready...';}

    } else if(phase == 5){//これはすきるじゃないです
        disappear()
        playermaxhealth += Math.floor(Math.random() * 21) + 5;
        playerhealth = playermaxhealth;
        document.getElementById('PlayerHealth').textContent = playerhealth;
        document.getElementById('PlayerMaxHealth').textContent = playermaxhealth;
        document.getElementById('log').textContent = '体力が増えた!';
        window.setTimeout(nextenemy, 1000)
    }
}
function Splittekiou(){
    document.getElementById('SplitHealth').textContent = Splithealth;
    document.getElementById('SplitMaxHealth').textContent = Splitmaxhealth;
    }
function Splitbreak(){
    buffremove('playerdebuff','spliting')
    x = Math.floor(Splitmaxhealth * 0.7);
    playerhealth += x;
    if (playerhealth > playermaxhealth){playerhealth = playermaxhealth;}
    document.getElementById('PlayerFriendFront').innerHTML = '';
    Splitmaxhealth = 0;
    Splithealth = 0;
    document.getElementById('log').textContent = playername+'のコピーは倒された...';
    skillcooldown = 0;
    document.getElementById('Skillbutton').innerHTML = '<button id="SkillCoolDown" class="button" onclick="skillact()"></button>'
    document.getElementById("SkillCoolDown").textContent = skillcooldown + '%';
}
function PlayerTurrettekiou(){
    document.getElementById('PlayerTurret').textContent = 'x' + PlayerTurret;
    }
function PlayerTurretbreak(){
    document.getElementById('PlayerFriendBack').innerHTML = '';
    PlayerTurret = 0;
    PlayerTurretattack = 0;
}
function Trickybomb(){
    x = Math.floor(Math.random() * 6);
    if (x == 0){
        document.getElementById('log').textContent = 'しかし不発弾だった!!';
        phase = 1; window.setTimeout(enemyorplayer, 1000);//これによる効果とかもあっていいかも
    } else if(x == 5){
        document.getElementById('log').textContent = 'Lucky! 爆弾は焼夷弾だった!!!';
        window.setTimeout(Trickybombexplosion, 1000)
    } else if (x == 4){
        document.getElementById('log').textContent = '爆弾は花火だった!';
        window.setTimeout(Trickybombexplosion, 1000)
    } else if (x == 3){
        document.getElementById('log').textContent = '爆弾は毒ガス入りだった!!';
        buffadd('enemydebuff','poison1',3) // 毒ガス入りだった場合
        window.setTimeout(Trickybombexplosion, 1000)
    } else if (x == 2){
        document.getElementById('log').textContent = '爆弾はスライム入りだった!!';
        buffadd('enemydebuff','onslime',2) // スライム入りだった場合
        window.setTimeout(Trickybombexplosion, 1000)
    } else if (x == 1){
        document.getElementById('log').textContent = '爆発した..だがただの特殊な薬品だった!!';
        window.setTimeout(Trickybombexplosion, 1000)
    }
}
async function Trickybombexplosion(){
    await enemydamaged(x,4);
    if (enemyhealth == 0){window.setTimeout(killedenemy,1000);}
    else {phase = 1; window.setTimeout(enemyorplayer, 1000)};
}



// enemieturnまでの道のり
async function enemyorplayer(){
    await playercontidmg();
    if(PlayerTurret > 0){
        document.getElementById('log').textContent = 'turretの攻撃!';
        await delay(1000);
        x = (PlayerTurretattack * PlayerTurret);
        x -= (enemydefense);
        y = (x * [Math.random() *0.1]);
        y *= [Math.random() < 0.5 ? -1 : 1];
        x += y; //ムラ発生機,ここにも登場！
        x = Math.ceil(x);
        if(x < 0){x = 0};
        if(x > enemyhealth){x = enemyhealth};
        enemyhealth -= x;
        tekiou()
        document.getElementById('log').textContent = enemyname+'に'+x+'のダメージ！';
        await delay(1000);
    };
    await enemycontidmg();
    
    if(turn == 1){
        y = 1;
        if (playerbuff.includes('luck')){y = Math.floor(Math.random() * 5);}//luck
        if (playerbuff.includes('greakluck')){y = Math.floor(Math.random() * 3);}//greak luck
        if (y == 0){
            document.getElementById('log').textContent = 'Lucky♪';
            window.setTimeout(playerturn, 1000)
        }else{
        if(enemydebuff.includes('freeze')){
            if(Math.floor(Math.random() * 3) == 0){
                document.getElementById('log').textContent = '氷が溶けた!';
                buffremove('enemydebuff','freeze');
                enemieturn();
            }else{
                document.getElementById('log').textContent = enemyname + 'は凍っている...';
                await delay(1000); 
                turncountincrease(); NSaction();
            }
        } else {
            enemieturn();//これは、luckにもならずfreezeでもないやつの末路
        }   
        }
    }else if(turn == 3){
            document.getElementById('log').textContent = 'スキップ!!!';
            window.setTimeout(playerturn, 1000);
            turncountincrease();
            turn = 1;
    }else if(turn == 2){
            document.getElementById('log').textContent = 'error....';
            window.setTimeout(playerturn, 1000)
    }
}


// enemyの手続き
async function enemieturn(){
    if (enemyhealth == 0){killedenemy();}
    else {
    turn = 2;
    document.getElementById('log').textContent = '敵のターンです!';
    window.setTimeout(Enemyattack, 1000);
    }
}
async function Enemyattack(){
    w = 1;
    x = enemyattack;
    x -= (playerdefense * playershell + armorshell);
    if(x < 0){x = 0};
    z = Math.floor(Math.random() * 35); // 1/35
    if(z == 0){x += (playerdefense * playershell + armorshell); x *= 3; document.getElementById('log').textContent = '痛恨の一撃!'; await delay(1000);};
    y = (x * [Math.random() *0.1]);
    y *= [Math.random() < 0.5 ? -1 : 1]; //1か-1を出力する装置
    x += y; //ムラ発生機
    x = Math.ceil(x);
    if (x < 0){x = 0;};
    if (enemydebuff.includes('onslime')){x = 0;};
    if (playerSS == 'enemy10%stan'){w = Math.floor(Math.random() * 7);}; //1/7
    if (w == 0){x = 0;};//スタン用
    if (playerbuff.includes('spliting')){Splithealth -= x; if(Splithealth < 0){Splithealth = 0}; Splittekiou(); Splithealth = Math.floor(Splithealth); if(Splithealth == 0){Splitbreak(); await delay(1000)};}
    else {playerhealth -= x;tekiou();if(playerhealth <= 0){playerhealth = 0;turn = 0;defeat();return;}};//これが通常
    if(w == 0){document.getElementById('log').textContent = enemyname + 'はスタンした!!';}
    else if (x == 0){document.getElementById('log').textContent = 'miss! ' + playername + 'にダメージを与えられない!';}
    else {document.getElementById('log').textContent = playername + 'に' + x + 'のダメージ!';};
    if (enemydebuff.includes('onslime')){await delay(1000);buffremove('enemydebuff','onslime');document.getElementById('log').textContent = enemyname + 'からスライムが剥がれた!';};
    if (turn == 2){
    if (enemyhealth < 0){enemyhealth = 0}
    if (enemyhealth == 0){window.setTimeout(killedenemy, 1000)}
    else {
        await delay(1000);
        turncountincrease();
        NSaction();
    }
}
}

//毒、火傷の動きまとめ
async function enemycontidmg(){
    if (enemydebuff.includes('poison1')||enemydebuff.includes('poison2')){
        if(enemydebuff.includes('poison2')){
            x = enemyhealth;
            enemyhealth -= Math.floor(enemymaxhealth * 0.1);
            if(enemyhealth < 0){enemyhealth = 0};
            y = x - enemyhealth;
        }else if(enemydebuff.includes('poison1')){
            x = enemyhealth;
            enemyhealth -= Math.floor(enemymaxhealth * 0.05)
            if (enemyhealth < 0){enemyhealth = 0}
            y = x - enemyhealth;
        }
        document.getElementById('log').textContent = enemyname + 'は毒で' + y + 'のダメージ!';
        tekiou()
        await delay(1000);
    };
    if(enemydebuff.includes('burn1')||enemydebuff.includes('burn2')||enemydebuff.includes('burn3')){
        if(enemydebuff.includes('burn3')){
            x = enemyhealth;
            enemyhealth -= 40
            if (enemyhealth < 0){enemyhealth = 0}
            y = x - enemyhealth;
        }else if(enemydebuff.includes('burn2')){
            x = enemyhealth;
            enemyhealth -= 25
            if (enemyhealth < 0){enemyhealth = 0}
            y = x - enemyhealth;
        }else if(enemydebuff.includes('burn1')){
            x = enemyhealth;
            enemyhealth -= 10
            if (enemyhealth < 0){enemyhealth = 0}
            y = x - enemyhealth;
        }
        document.getElementById('log').textContent = enemyname + 'は燃えて' + y + 'のダメージ!';
        tekiou();
        await delay(1000);
    };
}
async function playercontidmg(){
    if (playerdebuff.includes('poison1')||playerdebuff.includes('poison2')){
        if(playerdebuff.includes('poison2')){
            x = playerhealth;
            playerhealth -= Math.floor(playermaxhealth * 0.1);
            if(playerhealth < 0){playerhealth = 0};
            y = x - playerhealth;
        }else if(playerdebuff.includes('poison1')){
            x = playerhealth;
            playerhealth -= Math.floor(playermaxhealth * 0.05)
            if (playerhealth < 0){playerhealth = 0}
            y = x - playerhealth;
        }
        document.getElementById('log').textContent = playername + 'は毒で' + y + 'のダメージ!';
        tekiou()
        await delay(1000);
    };
    if(playerdebuff.includes('burn1')||playerdebuff.includes('burn2')||playerdebuff.includes('burn3')){
        if(playerdebuff.includes('burn3')){
            x = playerhealth;
            playerhealth -= 40
            if (playerhealth < 0){playerhealth = 0}
            y = x - playerhealth;
        }else if(playerdebuff.includes('burn2')){
            x = playerhealth;
            playerhealth -= 25
            if (playerhealth < 0){playerhealth = 0}
            y = x - playerhealth;
        }else if(playerdebuff.includes('burn1')){
            x = playerhealth;
            playerhealth -= 10
            if (playerhealth < 0){playerhealth = 0}
            y = x - playerhealth;
        }
        document.getElementById('log').textContent = playername + 'は燃えて' + y + 'のダメージ!';
        tekiou();
        await delay(1000);
    };
}
// ゲームの判定のお話
async function killedenemy() {
    turn = 0;
    x = playerexp
    document.getElementById('log').textContent = enemyname + 'を倒した!';
    await delay(1000);
    z = Math.floor(Math.random() * 15) + 5;
    money += z;
    document.getElementById('log').textContent =  z + '€を獲得した!';
    window.setTimeout(expget, 1000)
}
function expget(){
    playerexp += enemylevel;
    y = playerexp - x;
    document.getElementById('log').textContent = y + 'の経験値を奪った!';
    if(playerexp >= playerlevel){
        document.getElementById('log').textContent = 'レベルアップ!!';
        window.setTimeout(playerlevelup,1000);
    }else{
        window.setTimeout(nextenemy, 1000)
    }
}
let i;
function playerlevelup(){
        playerexp -= playerlevel;
        playerlevel += 1; 
        learnedmagic += 1;
        document.getElementById('PlayerLevel').textContent = playerlevel;
        if(playerexp >= playerlevel){window.setTimeout(playerlevelup, 1000)}
        else{window.setTimeout(playersutefuri, 1000)}
}
async function nextenemy() {
    buffclear('enemybuff');
    buffclear('enemydebuff');
    z = Math.floor(Math.random() * 2);// 0~1
   z += Math.floor(Math.random() * 2);// 0~1
    enemylevel += z
    if(z !== 0){
        document.getElementById('log').textContent = '敵は'+z+'レベル上がった!';
        await delay(1000);
        for(i = 0; i < z; i++){
        y = Math.floor(Math.random() * 3) + 1;
        switch(y){
            case 1: enemymaxhealth += Math.floor(Math.random() * 11)+5; document.getElementById('log').textContent = '敵は体力が増えた!';    await delay(800); break;
            case 2: enemyattack    += Math.floor(Math.random()*3)+4;    document.getElementById('log').textContent = '敵の攻撃力が上がった!'; await delay(800); break;
            case 3: enemydefense   += Math.floor(Math.random()*3)+4;    document.getElementById('log').textContent = '敵の防御力が上がった!'; await delay(800); break;
        }}
    }
    
    playermp = playermaxmp;
    playerpower = 1;
    playershell = 1;
    x = 0;
    PlayerTurretbreak();
    if(playerSS == 'enemy50%pursuit'){hertaenelgy = 1;};

    //ここで何が起きるかの抽選会
    x = Math.floor(Math.random()*5)+1;//   3/5敵 1/5 イベント 1/5 休憩所
    if(x == 1||x == 2||x == 3){//敵登場！！
    turncount = 0;
    document.getElementById('TurnCount').textContent = turncount;
    enemyhealth = enemymaxhealth; document.getElementById('EnemyMaxHealth').textContent = enemymaxhealth; tekiou();
    if (enemylevel < 1){enemylevel = 1}
    x = Math.floor(Math.random() * 10);
    if(x !== 0){
        DesideEnemyName();
        document.getElementById("EnemyName").textContent = enemyname;
        document.getElementById('log').textContent = enemyname + 'が現れた!';
        document.getElementById('EnemyLevel').textContent = enemylevel;
        tekiou();
        window.setTimeout(playerturn, 750);
        turncountincrease();

    } else {//強敵登場！
        enemyname = eliteenemynames[Math.floor(Math.random() * eliteenemynames.length)]; // 敵の名前を決めます
        document.getElementById('log').textContent = '注意！何かが来ている......!!';
        await delay(1000);
        document.getElementById("EnemyName").textContent = enemyname;
        document.getElementById('EnemyLevel').textContent = enemylevel;
        document.getElementById('log').textContent = enemyname + 'が現れた!!';
        tekiou();
        window.setTimeout(playerturn, 750);
        turncountincrease();
    }
    } else if(x == 4){//何かしらのイベント
        x = Math.floor(Math.random() * 2) + 1;
        eventoccur(x);
    } else if(x == 5){//休憩所
        document.getElementById('GameScene').style.display = 'none';
        Camparea();
    }
}   

function playersutefuri(){
    document.getElementById('log').textContent = 'どの能力を上げますか?';
    document.getElementById('select1').textContent = 'attack';
    document.getElementById('select2').textContent = 'defense';
    document.getElementById('select3').textContent = 'magic';
    document.getElementById('back').textContent = 'mp';
    document.getElementById('Skillbutton').innerHTML = '<button id="SkillCoolDown"  class="button" onclick="skillact()">health</button>'
    phase = 5;
}

function defeat() {
    if(playerlevel < 3){saydefeats = ['あはは..負けちゃいましたね....防御力を上げると良いですよ!', 'あはは..負けちゃいましたね....double slashは運要素も少ないので強いですよ!', 'あはは..負けちゃいましたね....魔法にターン数制限はありません!いっぱい使っちゃいましょう!','あはは..負けちゃいましたね....mechanicは防御全振りで戦うと良いですよ!','あはは..負けちゃいましたね....zombieは生き返ることができるのでそれで慣れると良いですよ!','あれ〜？負けちゃったんですか〜？？おにいさんよわいね〜'];}
    else{saydefeats = [playername + 'は力尽きた...残念でしたね！にはははは〜！', playername + 'は..まけました', '残念だったね!すごい惜しかったね!!', 'まけちゃったか..ねぇ、もう一回、やってみない?','あれあれ〜？まけちゃったんですか〜？？よっわw','ほら、負けを認めてください？'];}
    document.getElementById('log').textContent = saydefeats[Math.floor(Math.random() * saydefeats.length)];
    window.setTimeout(begin, 2000)
}
async function errorcheck(){if(playerattack==Infinity||playerdefense==Infinity||playerhealth==Infinity||playermaxhealth==Infinity||playerlevel==Infinity||playerpower==Infinity||playermaxmp==Infinity||playershell==Infinity||isNaN(playerhealth)||isNaN(playermaxhealth)||isNaN(playerattack)||isNaN(playerdefense)||isNaN(playermaxmp)||isNaN(playerpower)||isNaN(playershell)||isNaN(playerlevel)||Potion.num==Infinity||money==Infinity||Bomb.num==Infinity||Redcard.num==Infinity||isNaN(Potion.num)||isNaN(money)||isNaN(Bomb.num)||isNaN(Redcard.num)){document.getElementById('log').textContent='error100が発生しました。';awaitdelay(1000);document.getElementById('log').textContent='リブートを開始します。';await delay(1000);open('about:blank','_self').close();}}//おっとこれは...?}
function StatusAppear() {
    document.getElementById('StatusAppearDisappear').innerHTML = '<button class="button" id="StatusButton" onclick="StatusDisappear()">status</button>';
    document.getElementById('Status').innerHTML = '攻撃力:' + playerattack + '   防御力:' + playerdefense + '   魔力:' + playermp + '<br>' + '   経験値:' + playerexp + '   お金' + money + '€';
}
function StatusDisappear() {
    document.getElementById('StatusAppearDisappear').innerHTML = '<button class="button" id="StatusButton" onclick="StatusAppear()">status</button>';
    document.getElementById('Status').textContent = '';
}

//休憩所の動き
let Camprestper
function Camparea(){
    document.getElementById('CampArea').innerHTML = '<button id="CampRest" onclick="Camprest()"></button><br><button id="CampTrade" onclick="Camptrade()"></button><button id="CampRandomEvent" onclick="Camprandomevent()"></button>'
    document.getElementById('Camplog').textContent = '休憩できそうな場所を見つけた！';
    Camprestper = (Math.floor(Math.random() * 4)+3)/10;
    document.getElementById('CampRest').textContent = '朝まで休む(' + Camprestper*100 + '%回復)';//30のときはスキルカード強化みたいなやつあってもいいかも
    switch(Math.floor(Math.random() * 3)+1){
        case 1:
        if(Math.floor(Math.random() * 3)+1){
                y = 10;document.getElementById('CampTrade').textContent = '放浪武器商人に話しかける';
        }else{  y = 1; document.getElementById('CampTrade').textContent = '武器商人に話しかける';}
        break;
        case 2: y = 2; document.getElementById('CampTrade').textContent = '防具取扱専門家に話しかける'; break;
        case 3: y = 3; document.getElementById('CampTrade').textContent = '道具屋24に話しかける'; break;
    }
    switch(Math.floor(Math.random()*2)+1){
        case 1:
            if(Math.floor(Math.random() * 10)+1 == 1){
                document.getElementById('CampRandomEvent').textContent = 'レアなチェストを開ける';
                z = 10;
            }else{
                document.getElementById('CampRandomEvent').textContent = '普通のチェストを開ける';
                z = 1;
            }
        break;
        case 2:
            document.getElementById('CampRandomEvent').textContent = 'クッキー置き場を見に行く';//グミはもうちょっといい感じの時につかお
            z = 2;
        break;
    }
  }
  async function Camprest(){
    playerhealth += playermaxhealth * Camprestper;
    if(playerhealth > playermaxhealth){playerhealth = playermaxhealth;};
    document.getElementById('Camplog').textContent = '寝ることにした....';//睡眠阻害イベント...はさすがにやめようか..wちょっと隠しイベント多すぎる
    await delay(2000);
    document.getElementById('Camplog').textContent = '起きた！！！！！！！';
    await delay(1000);
    document.getElementById('CampArea').innerHTML = '';
    document.getElementById('Camplog').textContent = '';
    document.getElementById('GameScene').style.display = 'block';
      
    document.getElementById('EnemyLevel').textContent = enemylevel; document.getElementById('PlayerLevel').textContent = playerlevel;
    document.getElementById('EnemyMaxHealth').textContent = enemymaxhealth; document.getElementById('PlayerMaxHealth').textContent = playermaxhealth;
    document.getElementById('PlayerHealth').textContent = playerhealth; tekiou();
    turncount = 0;document.getElementById('TurnCount').textContent = turncount;
    playermp = playermaxmp;playerpower = 1;playershell = 1;
    enemyhealth = enemymaxhealth; document.getElementById('EnemyMaxHealth').textContent = enemymaxhealth; tekiou();
    if (enemylevel < 1){enemylevel = 1}
    enemyprefixe = 0;
    enemyname = enemynames[Math.floor(Math.random() * enemynames.length)]; // 敵の名前を決めます
    y = Math.floor(Math.random() * 3); // 1/3
    if(y == 0){enemyprefixe = enemyprefixes[Math.floor(Math.random() * enemyprefixes.length)]};
    if(enemyprefixe !== 0){enemyname = enemyprefixe + ' ' + enemyname}
    else {enemyname = enemyname}; // 敵に接頭辞を確率で付与します。意味はありません。ひとえに愛だよ
    document.getElementById("EnemyName").textContent = enemyname;
    document.getElementById('EnemyLevel').textContent = enemylevel;
    document.getElementById('log').textContent = enemyname + 'が現れた!';
    tekiou();
    window.setTimeout(playerturn, 750);
    turncountincrease();
  }
  async function Camptrade(){
      if(y == 1){
          document.getElementById('Camplog').textContent = '武器屋に話しかけた！';
          await delay(1000);
          nowshop = 1;
          document.getElementById('Camplog').textContent = 'ここにはこんなものがあるけど、どうする？';
          document.getElementById('CampArea').innerHTML = '<span id="CampMoney"></span><br><br><iframe height="230" width="200" src="assets/shops/weapons.txt"></iframe><br><input type="text" id="ShopInputText" minlength="2" maxlength="2" size="16" placeholder="write number here"><button class="button" onclick="ShopBuyButton()">Buy</button><br><br><button class="button" onclick="CampBye()">Bye</button>';
          
      }else if(y == 2){
          document.getElementById('Camplog').textContent = '防具屋に話しかけた！';
          await delay(1000);
          nowshop = 2;
          document.getElementById('Camplog').textContent = 'うちの店ではこんなものが売ってるよ';
          document.getElementById('CampArea').innerHTML = '<span id="CampMoney"></span><br><br><iframe height="230" width="200" src="assets/shops/armors.txt"></iframe><br><input type="text" id="ShopInputText" minlength="2" maxlength="2" size="16" placeholder="write number here"><button class="button" onclick="ShopBuyButton()">Buy</button><br><br><button class="button" onclick="CampBye()">Bye</button>';
      }else if(y == 3){
          document.getElementById('Camplog').textContent = '道具屋に話しかけた！';
          await delay(1000);
          nowshop = 3;
          document.getElementById('Camplog').textContent = 'いらっしゃいませぇぇぇぇぇ？？ご注文をどうぞ！！！！';
          document.getElementById('CampArea').innerHTML = '<span id="CampMoney"></span><br><br><iframe height="230" width="200" src="assets/shops/tools.txt"></iframe><br><input type="text" id="ShopInputText" minlength="2" maxlength="2" size="16" placeholder="write number here"><button class="button" onclick="ShopBuyButton()">Buy</button><br><br><button class="button" onclick="CampBye()">Bye</button>';
      }else if(y == 10){
          document.getElementById('Camplog').textContent = '武器屋に話しかけた！';
          await delay(1000);
          nowshop = 10;
          document.getElementById('Camplog').textContent = 'ほう..よく来たな。好きに見ていってくれ';
          document.getElementById('CampArea').innerHTML = '<span id="CampMoney"></span><br><br><iframe height="230" width="200" src="assets/shops/rareweapons.txt"></iframe><br><input type="text" id="ShopInputText" minlength="2" maxlength="2" size="16" placeholder="write number here"><button class="button" onclick="ShopBuyButton()">Buy</button><br><br><button class="button" onclick="CampBye()">Bye</button>';
      }
      document.getElementById('CampMoney').textContent = money + '€';
  }
  const Camprandomtool = ['Aspirin','Pablon','Trypsin','ThrowKnife','TrickyVariable','BottleGrenade','Redcard','Bluecard','Greencard'];
  const RareCamprandomtool = ['Lulu','Potion','CoveringFire','Bomb','Blackcard'];
  async function Camprandomevent(){
    if(z == 0){
    }else if(z == 1){
        z = 0;
        document.getElementById('CampRandomEvent').textContent = 'open now';
        document.getElementById('Camplog').textContent = 'チェストを開けた...';
        await delay(1000);
        x = Camprandomtool[Math.floor(Math.random() * Camprandomtool.length)];
        w = eval(x); w.num += 1;
        document.getElementById('Camplog').textContent = x+'を手に入れた！';
        await delay(750);
        x = Camprandomtool[Math.floor(Math.random() * Camprandomtool.length)];
        w = eval(x); w.num += 1;
        document.getElementById('Camplog').textContent = x+'を手に入れた！';
        await delay(750);
        x = Camprandomtool[Math.floor(Math.random() * Camprandomtool.length)];
        w = eval(x); w.num += 1;
        document.getElementById('Camplog').textContent = x+'を手に入れた！';
        await delay(1000);
        document.getElementById('CampRandomEvent').textContent = '(すでに実行済みです)';
    }else if(z == 10){
        z = 0;
        document.getElementById('CampRandomEvent').textContent = 'open now';
        document.getElementById('Camplog').textContent = 'チェストを開けた...';
        await delay(1000);
        x = RareCamprandomtool[Math.floor(Math.random() * RareCamprandomtool.length)];
        w = eval(x); w.num += 1;
        document.getElementById('Camplog').textContent = x+'を手に入れた！';
        await delay(750);
        x = RareCamprandomtool[Math.floor(Math.random() * RareCamprandomtool.length)];
        w = eval(x); w.num += 1;
        document.getElementById('Camplog').textContent = x+'を手に入れた！';
        await delay(750);
        x = RareCamprandomtool[Math.floor(Math.random() * RareCamprandomtool.length)];
        w = eval(x); w.num += 1;
        document.getElementById('Camplog').textContent = x+'を手に入れた！';
        await delay(1000);
        document.getElementById('CampRandomEvent').textContent = '(すでに実行済みです)';
    }else if(z == 2){
        z = 0;
        document.getElementById('Camplog').textContent = 'クッキーを食べたみた...';//これはお助け的イベントだから上昇量は少なめ
        await delay(1000);
        switch(Math.floor(Math.random()*3)+1){
            case 1:
                playerattack += 3;
                x = '熱い！焼きたてだぜ！！';
                break;
            case 2:
                playerdefense += 3;
                x = '硬い！凍ってたかもしんねぇ！！';
                break;
            case 3:
                playermaxhealth += 10;
                playerhealth = playermaxhealth;
                x = 'うまい！！';//体力増える..のあじが思いつかなすぎた これはしゃーない
                break;
            case 4:
                playermaxmp += 3;
                x = '甘い！砂糖マシマシだー！！';
                break;
            case 5:
                playercritdmg += 0.2;//当たり枠(会心ダメージ増加はぶっ壊れてる..たぶん)
                x = 'はっ..!?これは....ジャム入りだ.....!!!!';//ちなみにコッペくんはジャムが上に乗ったタルト生地のクッキーが好物です マカロンと張るくらい好き
                break;
        }
        document.getElementById('Camplog').textContent = x;
        await delay(1000);
        document.getElementById('CampRandomEvent').textContent = '(すでに実行済みです)';
    }
  }
//shop
// #region My Custom Region
let nowshop = 0;
let haveweapons = [];
let havearmors = [];
let equipweapon = 0;
let equiparmor = 0;
let equiptool1 = Potion;
let equiptool2 = Bomb;
let equiptool3 = Redcard;
let weaponpower = 0;
let armorshell = 0;
function ShopBuyButton(){
    shopinputtext = document.getElementById('ShopInputText').value;
    switch(shopinputtext){
        case '01':
        if(nowshop == 1){
        if(haveweapons.includes("木の棒")){document.getElementById('Camplog').textContent = 'you already have a it!';}
        else{
        if(money >= 10){money -= 10; haveweapons.push('木の棒');document.getElementById('Camplog').textContent = '木の棒を購入しました!';}
        else{document.getElementById('Camplog').textContent = 'not enough money..';};
        }
        break;
        } else if(nowshop == 2){
        if(havearmors.includes("マスク")){document.getElementById('Camplog').textContent = 'you already have a it!';}
        else{
        if(money >= 1){money -= 1; havearmors.push('マスク');document.getElementById('Camplog').textContent = 'マスクを購入しました!';}
        else{document.getElementById('Camplog').textContent = 'not enough money..';};
        }
        break;
        } else if(nowshop == 3){
        if(money >= 20){money -= 20; Aspirin.num += 1;document.getElementById('Camplog').textContent = 'アスピリンを購入しました!';}
        else{document.getElementById('Camplog').textContent = 'not enough money..';};
        break;
        } else if(nowshop == 10){
        if(haveweapons.includes("ジェン・ソルテ")){document.getElementById('Camplog').textContent = 'you already have a it!';}
        else{
        if(money >= 150){money -= 150; haveweapons.push('ジェン・ソルテ');document.getElementById('Camplog').textContent = 'ジェン・ソルテを購入しました!';}
        else{document.getElementById('Camplog').textContent = 'not enough money..';};
        }
        break;
        }
        case '02':
        if(nowshop == 1){
        if(haveweapons.includes("木刀")){document.getElementById('Camplog').textContent = 'you already have a it!';}
        else{
        if(money >= 20){money -= 20; haveweapons.push('木刀');document.getElementById('Camplog').textContent = '木刀を購入しました!';}
        else{document.getElementById('Camplog').textContent = 'not enough money..';};
        }
        break;
        } else if(nowshop == 2){
        if(havearmors.includes("薄めの本")){document.getElementById('Camplog').textContent = 'you already have a it!';}
        else{
        if(money >= 5){money -= 5; havearmors.push('薄めの本');document.getElementById('Camplog').textContent = '薄い本を購入しました!ダメ!!死刑!!!';}
        else{document.getElementById('Camplog').textContent = 'not enough money..';};
        }
        break;
        } else if(nowshop == 3){
        if(money >= 40){money -= 40; Pablon.num += 1;document.getElementById('Camplog').textContent = 'パブロンを購入しました!';}
        else{document.getElementById('Camplog').textContent = 'not enough money..';};
        break;
        } else if(nowshop == 10){
        if(haveweapons.includes("timeontarget")){document.getElementById('Camplog').textContent = 'you already have a it!';}
        else{
        if(money >= 150){money -= 150; haveweapons.push('timeontarget');document.getElementById('Camplog').textContent = 'You bought the Time on Target.';}
        else{document.getElementById('Camplog').textContent = 'not enough money..';};
        }
        break;
        }
        case '03':
        if(nowshop == 1){
        if(haveweapons.includes("竹刀")){document.getElementById('Camplog').textContent = 'you already have a it!';}
        else{
        if(money >= 30){money -= 30; haveweapons.push('竹刀');document.getElementById('Camplog').textContent = '竹刀を購入しました!';}
        else{document.getElementById('Camplog').textContent = 'not enough money..';};
        }
        break;
        } else if(nowshop == 2){
        if(havearmors.includes("木の板")){document.getElementById('Camplog').textContent = 'you already have a it!';}
        else{
        if(money >= 20){money -= 20; havearmors.push('木の板');document.getElementById('Camplog').textContent = '木の板を購入しました!';}
        else{document.getElementById('Camplog').textContent = 'not enough money..';};
        }
        break;
        } else if(nowshop == 3){
        if(money >= 60){money -= 60; Trypsin.num += 1;document.getElementById('Camplog').textContent = 'トリプシンを購入しました!';}
        else{document.getElementById('Camplog').textContent = 'not enough money..';};
        break;
        } else if(nowshop == 10){
        if(haveweapons.includes("大博打")){document.getElementById('Camplog').textContent = 'you already have a it!';}
        else{
        if(money >= 150){money -= 150; haveweapons.push('大博打');document.getElementById('Camplog').textContent = '大博打を購入しました!';}
        else{document.getElementById('Camplog').textContent = 'not enough money..';};
        }
        break;
        }
        case '04':
        if(nowshop == 1){
        if(haveweapons.includes("石ころ")){document.getElementById('Camplog').textContent = 'you already have a it!';}
        else{
        if(money >= 50){money -= 50; haveweapons.push('石ころ');document.getElementById('Camplog').textContent = '石ころを購入しました!';}
        else{document.getElementById('Camplog').textContent = 'not enough money..';};
        }
        break;
        } else if(nowshop == 2){
        if(havearmors.includes("テッパン")){document.getElementById('Camplog').textContent = 'you already have a it!';}
        else{
        if(money >= 30){money -= 30; havearmors.push('テッパン');document.getElementById('Camplog').textContent = 'テッパンを購入しました!';}
        else{document.getElementById('Camplog').textContent = 'not enough money..';};
        }
        break;
        } else if(nowshop == 3){
        if(money >= 80){money -= 80; Lulu.num += 1;document.getElementById('Camplog').textContent = 'ルルを購入しました!';}
        else{document.getElementById('Camplog').textContent = 'not enough money..';};
        break;
        } else if(nowshop == 10){
        if(haveweapons.includes("天邪鬼")){document.getElementById('Camplog').textContent = 'you already have a it!';}
        else{
        if(money >= 150){money -= 150; haveweapons.push('天邪鬼');document.getElementById('Camplog').textContent = '天邪鬼を購入しました!こーのーりょーうてーかーらーー！！';}
        else{document.getElementById('Camplog').textContent = 'not enough money..';};
        }
        break;
        }
        case '05':
        if(nowshop == 1){
        if(haveweapons.includes("大きな石")){document.getElementById('Camplog').textContent = 'you already have a it!';}
        else{
        if(money >= 80){money -= 80; haveweapons.push('大きな石');document.getElementById('Camplog').textContent = '大きな石を購入しました!';}
        else{document.getElementById('Camplog').textContent = 'not enough money..';};
        }
        break;
        } else if(nowshop == 2){
        if(havearmors.includes("鍋の蓋")){document.getElementById('Camplog').textContent = 'you already have a it!';}
        else{
        if(money >= 50){money -= 50; havearmors.push('鍋の蓋');document.getElementById('Camplog').textContent = '鍋の蓋を購入しました!';}
        else{document.getElementById('Camplog').textContent = 'not enough money..';};
        }
        break;
        }
        else if(nowshop == 3){
        if(money >= 100){money -= 100; Potion.num += 1; document.getElementById('Camplog').textContent = 'ポーションを購入しました!';}
        else{document.getElementById('Camplog').textContent = 'not enough money..';};
        break;
        }
        case '06':
        if(nowshop == 1){
        if(haveweapons.includes("レンガ")){document.getElementById('Camplog').textContent = 'you already have a it!';}
        else{
        if(money >= 100){money -= 100; haveweapons.push('レンガ');document.getElementById('Camplog').textContent = 'レンガを購入しました!';}
        else{document.getElementById('Camplog').textContent = 'not enough money..';};
        }
        break;
        } else if(nowshop == 2){
        if(havearmors.includes("厚めの本")){document.getElementById('Camplog').textContent = 'you already have a it!';}
        else{
        if(money >= 80){money -= 80; havearmors.push('厚めの本');document.getElementById('Camplog').textContent = '厚めの本を購入しました!';}
        else{document.getElementById('Camplog').textContent = 'not enough money..';};
        }
        break;
        }
        case '07':
        if(nowshop == 1){
        if(haveweapons.includes("薄めの紙")){document.getElementById('Camplog').textContent = 'you already have a it!';}
        else{
        if(money >= 25){money -= 25; haveweapons.push('薄めの紙');document.getElementById('Camplog').textContent = '薄めの紙を購入しました!';}
        else{document.getElementById('Camplog').textContent = 'not enough money..';};
        }
        break;
        } else if(nowshop == 2){
        if(havearmors.includes("ドア")){document.getElementById('Camplog').textContent = 'you already have a it!';}
        else{
        if(money >= 100){money -= 100; havearmors.push('ドア');document.getElementById('Camplog').textContent = 'ドアを購入しました!';}
        else{document.getElementById('Camplog').textContent = 'not enough money..';};
        }
        break;
        }
        case '08':
        if(nowshop == 1){
        if(haveweapons.includes("カード")){document.getElementById('Camplog').textContent = 'you already have a it!';}
        else{
        if(money >= 77){money -= 77; haveweapons.push('カード');document.getElementById('Camplog').textContent = 'カードを購入しました!';}
        else{document.getElementById('Camplog').textContent = 'not enough money..';};
        }
        break;
        } else if(nowshop == 2){
        if(havearmors.includes("扇風機")){document.getElementById('Camplog').textContent = 'you already have a it!';}
        else{
        if(money >= 200){money -= 200; havearmors.push('扇風機');document.getElementById('Camplog').textContent = '扇風機を購入しました!';}
        else{document.getElementById('Camplog').textContent = 'not enough money..';};
        }
        break;
        }
        case '09':
        if(nowshop == 1){
        if(haveweapons.includes("はさみ")){document.getElementById('Camplog').textContent = 'you already have a it!';}
        else{
        if(money >= 200){money -= 200; haveweapons.push('はさみ');document.getElementById('Camplog').textContent = 'はさみを購入しました!';}
        else{document.getElementById('Camplog').textContent = 'not enough money..';};
        }
        break;
        } else if(nowshop == 2){
        if(havearmors.includes("ペロロ様人形")){document.getElementById('Camplog').textContent = 'you already have a it!';}
        else{
        if(money >= 400){money -= 400; havearmors.push('ペロロ様人形');document.getElementById('Camplog').textContent = 'ペロロ様人形を購入しました!ペロロ"様"ですからね？';}
        else{document.getElementById('Camplog').textContent = 'not enough money..';};
        }
        break;
        }
        case '10':
        if(nowshop == 1){
        if(haveweapons.includes("ナイフ")){document.getElementById('Camplog').textContent = 'you already have a it!';}
        else{
        if(money >= 300){money -= 300; haveweapons.push('ナイフ');document.getElementById('Camplog').textContent = 'ナイフを購入しました!';}
        else{document.getElementById('Camplog').textContent = 'not enough money..';};
        }
        break;
        }
        case '11':
        if(nowshop == 3){
        if(money >= 20){money -= 20; ThrowKnife.num += 1;document.getElementById('Camplog').textContent = '投げナイフを購入しました!';}
        else{document.getElementById('Camplog').textContent = 'not enough money..';};
        break;
        } // 4 8 12 30
        case '12':
        if(nowshop == 3){
        if(money >= 40){money -= 40; TrickyVariable.num += 1;document.getElementById('Camplog').textContent = 'トリッキーな変数を購入しました!にはははは〜!!';}
        else{document.getElementById('Camplog').textContent = 'not enough money..';};
        break;
        }
        case '13':
        if(nowshop == 3){
        if(money >= 60){money -= 60; BottleGrenade.num += 1;document.getElementById('Camplog').textContent = 'ボトルグレネードを購入しました!';}
        else{document.getElementById('Camplog').textContent = 'not enough money..'};
        break;
        }
        case '14':
        if(nowshop == 3){
        if(money >= 80){money -= 80; CoveringFire.num += 1;document.getElementById('Camplog').textContent = '援護射撃ライセンスを購入しました!';}
        else{document.getElementById('Camplog').textContent = 'not enough money..'};
        break;
        }
        case '15':
        if(nowshop == 3){
        if(money >= 100){money -= 100;Bomb.num += 1;document.getElementById('Camplog').textContent = '爆弾を購入しました!';}
        else{document.getElementById('Camplog').textContent = 'not enough money..'};
        break;
        }
        case '21':
        if(nowshop == 3){
        if(money >= 35){money -= 35; Redcard.num += 1;document.getElementById('Camplog').textContent = '赤のスキップのカードを購入しました!';}
        else{document.getElementById('Camplog').textContent = 'not enough money..'};
        break;
        }
        case '22':
        if(nowshop == 3){
        if(money >= 35){money -= 35; Bluecard.num += 1;document.getElementById('Camplog').textContent = '青のリバースのカードを購入しました!';}
        else{document.getElementById('Camplog').textContent = 'not enough money..'};
        break;
        }
        case '23':
        if(nowshop == 3){
        if(money >= 35){money -= 35; Greencard.num += 1;document.getElementById('Camplog').textContent = '緑のドロアルのカードを購入しました!';}
        else{document.getElementById('Camplog').textContent = 'not enough money..'};//イーアルサンスーのやつ
        break;
        }
        case '24':
        if(nowshop == 3){
        if(money >= 70){money -= 70; Blackcard.num += 1;document.getElementById('Camplog').textContent = '黒のドロスーのカードを購入しました!';}
        else{document.getElementById('Camplog').textContent = 'not enough money..'};
        break;
        }
        default:
        document.getElementById('Camplog').textContent = 'id doesnt exist...';
        break;
    }
    document.getElementById('CampMoney').textContent = money + '€';
    document.getElementById('ShopInputText').value = '';
}
function CampBye(){
    document.getElementById('Camplog').textContent = 'ついでに装備を変えていこうかな？';
    document.getElementById('CampArea').innerHTML = '<button class="button"onclick="GoToEquip()">そうしよう！</button><br><button class="button"onclick="Campback()">いや、やめとこう</button>';
}
function Campback(){
    document.getElementById('CampArea').innerHTML = '<button id="CampRest" onclick="Camprest()"></button><br><button id="CampTrade" onclick="Camptrade()"></button><br><button id="CampRandomEvent" onclick="Camprandomevent()"></button>'
    document.getElementById('CampRest').textContent = '朝まで休む(' + Camprestper*100 + '%回復)';//30のときはスキルカード強化みたいなやつあってもいいかも
    switch(y){
        case 1: document.getElementById('CampTrade').textContent = '武器商人に話しかける';      break;
        case 2: document.getElementById('CampTrade').textContent = '防具取扱専門家に話しかける'; break;
        case 3: document.getElementById('CampTrade').textContent = '道具屋24に話しかける';      break;
        case 10:document.getElementById('CampTrade').textContent = '放浪武器商人に話しかける';   break;
    }
    switch(z){
        case 0: document.getElementById('CampRandomEvent').textContent = '(すでに実行済みです)'; break;
        case 1: document.getElementById('CampRandomEvent').textContent = '普通のチェストを開ける'; break;
        case 10:document.getElementById('CampRandomEvent').textContent = 'レアなチェストを開ける'; break;
        case 2: document.getElementById('CampRandomEvent').textContent = 'クッキー置き場を見に行く'; break;
    }
}
let appearweapons = '';
let appeararmors = '';
let appeartools = '';
function GoToEquip(){
    document.getElementById('CampArea').innerHTML = '<button class="button"onclick="GoToEquipWeapon()">Equip Weapon</button>  <button class="button"onclick="GoToEquipArmor()">Equip Armor</button>  <button class="button"onclick="GoToEquipTool()">Equip Tool</button><br><br><button class="button"onclick="Campback()">Leave</button>'
}
function GoToEquipWeapon(){
    nowshop = 4;
    document.getElementById('CampArea').innerHTML = '<span id="AppearShops"></span><br><br><input type="text" id="ShopInputText" minlength="2" maxlength="2" size="16" placeholder="write number here"><button class="button" onclick="ShopEquipButton()">Equip</button><br><br><button class="button" onclick="GoToEquip()">Back</button>';
    appearweapons = '';
    x = 0;
    if(haveweapons.includes("木の棒")){x += 1;}
    if(haveweapons.includes("木刀")){x += 10;}
    if(haveweapons.includes("竹刀")){x += 100;}
    if(haveweapons.includes("石ころ")){x += 1000;}
    if(haveweapons.includes("大きな石")){x += 10000;}
    if(haveweapons.includes("レンガ")){x += 100000;}
    if(haveweapons.includes("薄めの紙")){x += 1000000;}
    if(haveweapons.includes("カード")){x += 10000000;}
    if(haveweapons.includes("はさみ")){x += 100000000;}
    if(haveweapons.includes("ナイフ")){x += 1000000000;}
    if(haveweapons.includes("ジェン・ソルテ")){x += 10000000000;}
    if(haveweapons.includes("timeontarget")){x += 100000000000;}
    if(haveweapons.includes("大博打")){x += 1000000000000;}
    if(haveweapons.includes("天邪鬼")){x += 10000000000000;}
    if(x >= 10000000000000){x -= 10000000000000; appearweapons = '14 天邪鬼'}
    if(x >= 1000000000000){x -= 1000000000000; appearweapons = '13 大博打'+ '<br>' + appearweapons;}
    if(x >= 100000000000){x -= 100000000000; appearweapons = '12 time on target'+ '<br>' + appearweapons;}
    if(x >= 10000000000){x -= 10000000000; appearweapons = '11 ジェン・ソルテ'+ '<br>' + appearweapons;}
    if(x >= 1000000000){x -= 1000000000; appearweapons = '10 ナイフ'+ '<br>' + appearweapons;}
    if(x >= 100000000){x -= 100000000; appearweapons = '09 はさみ'+ '<br>' + appearweapons;}
    if(x >= 10000000){x -= 10000000; appearweapons = '08 カード'+ '<br>' + appearweapons;}
    if(x >= 1000000){x -= 1000000; appearweapons = '07 薄めの紙'+ '<br>' + appearweapons;}
    if(x >= 100000){x -= 100000; appearweapons = '06 レンガ' + '<br>' + appearweapons;}
    if(x >= 10000){x -= 10000; appearweapons = '05 大きな石' + '<br>' + appearweapons;}
    if(x >= 1000){x -= 1000; appearweapons = '04 石ころ' + '<br>' + appearweapons;}
    if(x >= 100){x -= 100; appearweapons = '03 竹刀' + '<br>' + appearweapons;}
    if(x >= 10){x -= 10; appearweapons = '02 木刀' + '<br>' + appearweapons;}
    if(x >= 1){x -= 1; appearweapons = '01 木の棒' + '<br>' + appearweapons;}
    document.getElementById('AppearShops').innerHTML = appearweapons;
    }
function GoToEquipArmor(){
    nowshop = 5;
    document.getElementById('CampArea').innerHTML = '<span id="AppearShops"></span><br><br><input type="text" id="ShopInputText" minlength="2" maxlength="2" size="16" placeholder="write number here"><button class="button" onclick="ShopEquipButton()">Equip</button><br><br><button class="button" onclick="GoToEquip()">Back</button>';
    appeararmors = '';
    x = 0;
    if(havearmors.includes("マスク")){x += 1;}
    if(havearmors.includes("薄めの本")){x += 10;}
    if(havearmors.includes("木の板")){x += 100;}
    if(havearmors.includes("テッパン")){x += 1000;}
    if(havearmors.includes("鍋の蓋")){x += 10000;}
    if(havearmors.includes("厚めの本")){x += 100000;}
    if(havearmors.includes("ドア")){x += 1000000;}
    if(havearmors.includes("扇風機")){x += 10000000;}
    if(havearmors.includes("ペロロ様人形")){x += 100000000;}
    if(x >= 100000000){x -= 100000000; appeararmors = '11 ペロロ様人形';}
    if(x >= 10000000){x -= 10000000; appeararmors = '10 扇風機'+ '<br>' + appeararmors;}
    if(x >= 1000000){x -= 1000000; appeararmors = '07 ドア'+ '<br>' + appeararmors;}
    if(x >= 100000){x -= 100000; appeararmors = '06 厚めの本'+ '<br>' + appeararmors;}
    if(x >= 10000){x -= 10000; appeararmors = '05 鍋の蓋'+ '<br>' + appeararmors;}
    if(x >= 1000){x -= 1000; appeararmors = '04 テッパン'+ '<br>' + appeararmors;}
    if(x >= 100){x -= 100; appeararmors = '03 木の板'+ '<br>' + appeararmors;}
    if(x >= 10){x -= 10; appeararmors = '02 薄めの本'+ '<br>' + appeararmors;}
    if(x >= 1){x -= 1; appeararmors = '01 マスク'+ '<br>' + appeararmors;}
    document.getElementById('AppearShops').innerHTML = appeararmors;
    }
function ShopEquipButton(){
    shopinputtext = document.getElementById('ShopInputText').value;
    switch(shopinputtext){
    case '01':
        if(nowshop == 4){
        if(haveweapons.includes("木の棒")){
        document.getElementById('Camplog').textContent = 'あなたは木の棒を装備しました！';
        equipweapon = 1;
        weaponpower = 2;
        }else{document.getElementById('Camplog').textContent = 'you dont have it!'};
        break;
        } else if(nowshop == 5){
        if(havearmors.includes("マスク")){
        document.getElementById('Camplog').textContent = 'あなたはマスクを装備しました！';
        equiparmor = 1;
        armorshell = 0;
        }else{document.getElementById('Camplog').textContent = 'you dont have it!'};
        break;
        };
    case '02':
        if(nowshop == 4){
        if(haveweapons.includes("木刀")){
        document.getElementById('Camplog').textContent = 'あなたは木刀を装備しました！';
        equipweapon = 2;
        weaponpower = 4;
        }else{document.getElementById('Camplog').textContent = 'you dont have it!'};
        break;
        } else if(nowshop == 5){
        if(havearmors.includes("薄めの本")){
        document.getElementById('Camplog').textContent = 'あなたは薄い本を装備しました！';
        equiparmor = 2;
        armorshell = 1;
        }else{document.getElementById('Camplog').textContent = 'you dont have it!'};
        break;
        };
    case '03':
        if(nowshop == 4){
        if(haveweapons.includes("竹刀")){
            document.getElementById('Camplog').textContent = 'あなたは竹刀を装備しました！';
            equipweapon = 3;
        weaponpower = 6;
        }else{document.getElementById('Camplog').textContent = 'you dont have it!'};
        }
        else if(nowshop == 5){
        if(havearmors.includes("木の板")){
        document.getElementById('Camplog').textContent = 'あなたは木の板を装備しました！';
        equiparmor = 3;
        armorshell = 5;
        }else{document.getElementById('Camplog').textContent = 'you dont have it!'};
        break;
        };
    case '04':
        if(nowshop == 4){
        if(haveweapons.includes("石ころ")){
            document.getElementById('Camplog').textContent = 'あなたは石ころを装備しました！';
            equipweapon = 4;
            weaponpower = 8;
        }else{document.getElementById('Camplog').textContent = 'you dont have it!'};
        } 
        else if(nowshop == 5){
        if(havearmors.includes("テッパン")){
        document.getElementById('Camplog').textContent = 'あなたはテッパンを装備しました！';
        equiparmor = 4;
        armorshell = 10;
        }else{document.getElementById('Camplog').textContent = 'you dont have it!'};
        break;
        };
    case '05':
        if(nowshop == 4){
        if(haveweapons.includes("大きな石")){
            document.getElementById('Camplog').textContent = 'あなたは大きな石を装備しました！';
            equipweapon = 5;
            weaponpower = 10;
        }else{document.getElementById('Camplog').textContent = 'you dont have it!'};
        }
        else if(nowshop == 5){
        if(havearmors.includes("鍋の蓋")){
        document.getElementById('Camplog').textContent = 'あなたは鍋の蓋を装備しました！';
        equiparmor = 5;
        armorshell = 15;
        }else{document.getElementById('Camplog').textContent = 'you dont have it!'};
        break;
        };
    case '06':
        if(nowshop == 4){
        if(haveweapons.includes("レンガ")){
            document.getElementById('Camplog').textContent = 'あなたはレンガを装備しました！';
            equipweapon = 6;
            weaponpower = 20;
        }else{document.getElementById('Camplog').textContent = 'you dont have it!'};
        }
    else if(nowshop == 5){
        if(havearmors.includes("厚めの本")){
        document.getElementById('Camplog').textContent = 'あなたは厚めの本を装備しました！';
        equiparmor = 6;
        armorshell = 20;
        }else{document.getElementById('Camplog').textContent = 'you dont have it!'};
        break;
        };
    case '07':
        if(nowshop == 4){
        if(haveweapons.includes("薄めの紙")){
            document.getElementById('Camplog').textContent = 'あなたは薄めの紙を装備しました！';
            equipweapon = 7;
            weaponpower = 1;//鋭利系は会心率高いとかあってもいいかも。
        }else{document.getElementById('Camplog').textContent = 'you dont have it!'};
        }
        else if(nowshop == 5){
        if(havearmors.includes("ドア")){
            document.getElementById('Camplog').textContent = 'あなたはドアを装備しました！';
            equiparmor = 7;
            armorshell = 25;
        }else{document.getElementById('Camplog').textContent = 'you dont have it!'};
        break;
        };
    case '08':
        if(nowshop == 4){
        if(haveweapons.includes("カード")){
            document.getElementById('Camplog').textContent = 'あなたはカードを装備しました！';
            equipweapon = 8;
            weaponpower = 0;//1~13増える、という感じの動きにしましょうか。if(equipweapon == 8){weaponpower = Math.floor(Math.random() * 13)+1;}でok
        }else{document.getElementById('Camplog').textContent = 'you dont have it!'};
        }
        else if(nowshop == 5){
        if(havearmors.includes("扇風機")){
            document.getElementById('Camplog').textContent = 'あなたは扇風機を装備しました！';
            equiparmor = 7;
            armorshell = 30;
        }else{document.getElementById('Camplog').textContent = 'you dont have it!'};
        break;
        };
    case '09':
        if(nowshop == 4){
        if(haveweapons.includes("はさみ")){
            document.getElementById('Camplog').textContent = 'あなたははさみを装備しました！';
            equipweapon = 9;
            weaponpower = 25;
        }else{document.getElementById('Camplog').textContent = 'you dont have it!'};
            break;
        }
        else if(nowshop == 5){
        if(havearmors.includes("ペロロ様人形")){
            document.getElementById('Camplog').textContent = 'あなたはペロロ様人形を持ちました！ペロロ様の出番です！';//こちらはヒフミさんのセリフ。良き
            equiparmor = 7;
            armorshell = 30;
        }else{document.getElementById('Camplog').textContent = 'you dont have it!'};
        break;
        };
    case '10':
        if(nowshop == 4){
        if(haveweapons.includes("ナイフ")){
            document.getElementById('Camplog').textContent = 'あなたはナイフを装備しました！';
            equipweapon = 10;
            weaponpower = 40;
        }else{document.getElementById('Camplog').textContent = 'you dont have it!'};
            break;
        };
    case '11':
        if(nowshop == 4){
        if(haveweapons.includes("ジェン・ソルテ")){ //由来は、中国語の"針"、'ジェン'とイタリア語の"吸収"、'アッソルベンテ'(三単現の表現)を合わせたやつ｡
            document.getElementById('Camplog').textContent = 'あなたはジェン・ソルテを装備しました！';
            equipweapon = 11;
            weaponpower = 15;//攻撃時与ダメの1/4を回復する。
        }else(document.getElementById('Camplog').textContent = 'you dont have it!');
            break;
        };
    case '12':
        if(nowshop == 4){
        if(haveweapons.includes("timeontarget")){
            document.getElementById('Camplog').textContent = 'あなたはtime on targetを装備しました！';
            equipweapon = 12;
            weaponpower = 20;//slash時に相手の防御力を下げるやつ。
        }else{document.getElementById('Camplog').textContent = 'you dont have it!'};
            break;
        };
    case '13':
        if(nowshop == 4){
        if(haveweapons.includes("大博打")){
            document.getElementById('Camplog').textContent = 'あなたは大博打を装備しました！';
            equipweapon = 13;
            weaponpower = 0;//1~100増える、という感じの動きにしましょうか。if(equipweapon == 13){weaponpower = Math.floor(Math.random() * 100)+1;}でok
        }else{document.getElementById('Camplog').textContent = 'you dont have it!'};
            break;
        };
    case '14':
        if(nowshop == 4){
        if(haveweapons.includes("天邪鬼")){
            document.getElementById('Camplog').textContent = 'あなたは天邪鬼を装備しました！';
            equipweapon = 14;
            weaponpower = 80;//これだけ見るとまじで異常指数やね 会心の動きに加えて、if(equipweapon == 14){if((Math.floor(Math.random()+ playercrit)) >= 1){x += (enemydefense); x *= 0.05; document.getElementById('Camplog').textContent = '会心の一撃！'; await delay(1000);}}else{...}で
        }else{document.getElementById('Camplog').textContent = 'you dont have it!'};
            break;
        };
    }
    document.getElementById('ShopInputText').value = '';
}
function GoToEquipTool(){
    nowshop = 6;
    localStorage.setItem('Aspirin', Aspirin.num);
    localStorage.setItem('Pablon', Pablon.num);
    localStorage.setItem('Trypsin', Trypsin.num);
    localStorage.setItem('Lulu', Lulu.num);
    localStorage.setItem('Potion', Potion.num);
    localStorage.setItem('ThrowKnife', ThrowKnife.num);
    localStorage.setItem('TrickyVariable', TrickyVariable.num);
    localStorage.setItem('CoveringFire', CoveringFire.num);
    localStorage.setItem('BottleGrenade', BottleGrenade.num);
    localStorage.setItem('Bomb', Bomb.num);
    localStorage.setItem('Redcard', Redcard.num);
    localStorage.setItem('Bluecard', Bluecard.num);
    localStorage.setItem('Greencard', Greencard.num);
    localStorage.setItem('Blackcard', Blackcard.num);

    document.getElementById('CampArea').innerHTML = '<iframe src="appeartools.html" width="100%" height="100%" frameborder="0"></iframe><br><div id="Camptoolequip"><button id="Campequipedtool1" class="button" onclick="Campequiptool(1)"> </button>　<button id="Campequipedtool2" class="button" onclick="Campequiptool(2)"> </button>　<button id="Campequipedtool3" class="button" onclick="Campequiptool(3)"> </button></div><br><br><button class="button" onclick="GoToEquip()">Back</button>'; //持ってないやつも登録できるようにしたら処理楽かな？
    document.getElementById('Campequipedtool1').textContent = equiptool1.name;
    document.getElementById('Campequipedtool2').textContent = equiptool2.name;
    document.getElementById('Campequipedtool3').textContent = equiptool3.name;
    document.getElementById('Camplog').textContent = 'どうしようかな...?';
    }
function Campequiptool(code){
    x = code;
    document.getElementById('Camplog').textContent = '何を持とう？';
    document.getElementById('Camptoolequip').innerHTML = '<i>Item一覧</i><br>' +'<button id="CampselectTool01" class="button" onclick="Campselecttool(Aspirin)">アスピリン</button>' +'<button id="CampselectTool02" class="button" onclick="Campselecttool(Pablon)">パブロン</button>' +'<button id="CampselectTool03" class="button" onclick="Campselecttool(Trypsin)">トリプシン</button>' +'<button id="CampselectTool04" class="button" onclick="Campselecttool(Lulu)">ルル</button>' +'<button id="CampselectTool05" class="button" onclick="Campselecttool(Potion)">ポーション</button><br>' +'<button id="CampselectTool11" class="button" onclick="Campselecttool(ThrowKnife)">投げナイフ</button>' +'<button id="CampselectTool12" class="button" onclick="Campselecttool(TrickyVariable)">トリッキーな変数</button>' +'<button id="CampselectTool13" class="button" onclick="Campselecttool(CoveringFire)">援護射撃</button>' +'<button id="CampselectTool14" class="button" onclick="Campselecttool(BottleGrenade)">ボトルグレネード</button>' +'<button id="CampselectTool15" class="button" onclick="Campselecttool(Bomb)">爆弾</button><br>' +'<button id="CampselectTool21" class="button" onclick="Campselecttool(Redcard)">赤のスキップ</button>' +'<button id="CampselectTool22" class="button" onclick="Campselecttool(Bluecard)">青のリバース</button>' +'<button id="CampselectTool23" class="button" onclick="Campselecttool(Greencard)">緑のドロアル</button>' +'<button id="CampselectTool24" class="button" onclick="Campselecttool(Blackcard)">黒のドロスー</button>';
    }
function Campselecttool(code){
    let equiptoolVar;
    switch(code){
    case Aspirin:
        equiptoolVar = 'アスピリン';
        break;
    case Pablon:
        equiptoolVar = 'パブロン';
        break;
    case Trypsin:
        equiptoolVar = 'トリプシン';
        break;
    case Lulu:
        equiptoolVar = 'ルル';
        break;
    case Potion:
        equiptoolVar= 'ポーション';
        break;
    case ThrowKnife:
        equiptoolVar = '投げナイフ';
        break;
    case TrickyVariable:
        equiptoolVar = 'トリッキーな変数';
        break;
    case CoveringFire:
        equiptoolVar = '援護射撃';
        break;
    case BottleGrenade:
        equiptoolVar = 'ボトルグレネード';
        break;
    case Bomb:
        equiptoolVar = '爆弾';
        break;
    case Redcard:
        equiptoolVar = '赤のスキップ';
        break;
    case Bluecard:
        equiptoolVar = '青のリバース';
        break;
    case Greencard:
        equiptoolVar = '緑のドロアル';
        break;
    case Blackcard:
        equiptoolVar = '黒のドロスー';
    }
    eval('equiptool' + x + ' = code');
    document.getElementById('Camptoolequip').innerHTML = '<button id="Campequipedtool1" class="button" onclick="Campequiptool(1)"> </button>　<button id="Campequipedtool2" class="button" onclick="Campequiptool(2)"> </button>　<button id="Campequipedtool3" class="button" onclick="Campequiptool(3)"> </button>';
    document.getElementById('Campequipedtool1').textContent = equiptool1.name;
    document.getElementById('Campequipedtool2').textContent = equiptool2.name;
    document.getElementById('Campequipedtool3').textContent = equiptool3.name;
    document.getElementById('Camplog').textContent = equiptoolVar+'を持つことにした！';
}
// #endregion

async function eventoccur(num){
    document.getElementById('GameScene').style.display = 'none';
    document.getElementById('EventArea').style.display = 'block';
    switch(num){
        case 1:
            y = [];//デバフによって初期からたくさんあるってのもありかも
            document.getElementById('EventArea').innerHTML = '<button class="button" onclick="Candytake()">あめを取る</button>　<button class="button" onclick="Candyleave()">逃げる</button><br><span id="log"></span>';
            document.getElementById('Eventlog').textContent = 'あめの置かれた台を見つけた！';
            break;
        case 2:
            document.getElementById('EventArea').innerHTML = '<button class="button" onclick="HopeButtonact(`push`)">押す</button>　<button class="button" onclick="HopeButtonact(`leave`)">逃げる</button><br><span id="log"></span>';
            document.getElementById('Eventlog').textContent = '救いのボタンを見つけた！！';  

    }
}
// candystand
// #region My Custom Region

let kari = {
    attack:0,
    defense:0,
    health:0
}
async function Candytake() {
    document.getElementById('Eventlog').textContent = 'あめを食べた...';
    await delay(1000);
    x = Math.floor(Math.random() * 20) + 1;
    if (!y.includes(x)) {
        y.push(x);
        Candycorrect();
    } else {
        y = [1];
        Candymissed();
    }
}

async function Candycorrect(){
    document.getElementById('Eventlog').textContent = '甘い！';
    x = Math.floor(Math.random() * 3)+1;
    switch(x){
        case 1:
            kari.attack += Math.floor(Math.random() * 8) + 5;if(playerattack < 1){playerattack = 1};
            document.getElementById('Eventlog').textContent = '攻撃力が上がった！';
            await delay(800);
            break;
        case 2:
            kari.defense += Math.floor(Math.random() * 4) + 3;if(playerdefense < 0){playerdefense = 0};
            document.getElementById('Eventlog').textContent = '防御力が上がった！';
            await delay(800);
            break;
        case 3:
            kari.health += Math.floor(Math.random() * 11) + 10;if(playermaxhealth < 1){playermaxhealth = 1};
            document.getElementById('Eventlog').textContent = '体力が増えた！';
            await delay(800);
            break;
    }
    await delay(800);
    document.getElementById('どうする？')
}
async function Candymissed(){
    document.getElementById('Eventlog').textContent = 'これは..消しゴムだ....!!';
    await delay(800);
    x = Math.floor(Math.random() * 3)+1;
    switch(x){
        case 1:
            playerattack -= Math.floor(Math.random() * 8) + 5;if(playerattack < 1){playerattack = 1};
            document.getElementById('Eventlog').textContent = '攻撃力が下がった！';
            await delay(800);
            break;
        case 2:
            playerdefense -= Math.floor(Math.random() * 4) + 3;if(playerdefense < 0){playerdefense = 0};
            document.getElementById('Eventlog').textContent = '防御力が下がった！';
            await delay(800);
            break;
        case 3:
            playermaxhealth -= Math.floor(Math.random() * 11) + 10;if(playermaxhealth < 1){playermaxhealth = 1};
            if(playerhealth > playermaxhealth){playerhealth = playermaxhealth};
            document.getElementById('Eventlog').textContent = '体力が減った！';
            await delay(800);
            break;
    }
    kari.attack = 0; kari.defense = 0; kari.health = 0;
    document.getElementById('PlayerMaxHealth').textContent = playermaxhealth;
}
async function Candyleave(){
    document.getElementById('Eventlog').textContent = '逃げることにした！';
    playerattack += kari.attack; playerdefense += kari.defense; playermaxhealth += kari.health;

    document.getElementById('GameScene').style.display = 'block';
    document.getElementById('EventArea').innreHTML = '';
    document.getElementById('Eventlog').textContent = '';
    document.getElementById('EventArea').style.display = 'none';
    await delay(800);
    turncount = 0;
    document.getElementById('TurnCount').textContent = turncount;
    playermp = playermaxmp;playerpower = 1;playershell = 1;
    enemyhealth = enemymaxhealth; document.getElementById('EnemyMaxHealth').textContent = enemymaxhealth; tekiou();
    if (enemylevel < 1){enemylevel = 1}
    DesideEnemyName();
    document.getElementById("EnemyName").textContent = enemyname;
    document.getElementById('EnemyLevel').textContent = enemylevel;
    document.getElementById('log').textContent = enemyname + 'が現れた!';
    tekiou();
    window.setTimeout(playerturn, 750);
    turncountincrease();
}
// #endregion

//hopeful button
// #region My Custom Region
async function HopeButtonact(code){
    switch(code){
        case 'push':
            document.getElementById('Eventlog').textContent = 'ボタンを押した....';
            await delay(1000);
            if(Math.floor(Math.random() * 2) == 0){
                document.getElementById('Eventlog').textContent = '甘い！！';
                buffclear('playerdebuff');
            } else {
                document.getElementById('Eventlog').textContent = 'ボタンが溶けて手がやられた！';
                buffadd('playerdebuff','shelldown1',3);
                if(playerdebuff.includes('powerdown1')){buffremove('playerdebuff','powerdown1');}
                buffadd('playerdebuff','powerdown2',3);
            }
            break;
        case 'leave':
            document.getElementById('Eventlog').textContent = 'こんなもんは所詮罠だ！俺は先に下山させてもらうぜ';
            break;
    }
    await delay(1000);

    document.getElementById('GameScene').style.display = 'block';
    document.getElementById('EventArea').innreHTML = '';
    document.getElementById('Eventlog').textContent = '';
    document.getElementById('EventArea').style.display = 'none';
    turncount = 0;document.getElementById('TurnCount').textContent = turncount;
    playermp = playermaxmp;playerpower = 1;playershell = 1;
    enemyhealth = enemymaxhealth; document.getElementById('EnemyMaxHealth').textContent = enemymaxhealth; tekiou();
    if (enemylevel < 1){enemylevel = 1}
    DesideEnemyName();
    document.getElementById("EnemyName").textContent = enemyname;
    document.getElementById('EnemyLevel').textContent = enemylevel;
    document.getElementById('log').textContent = enemyname + 'が現れた!';
    tekiou();
    window.setTimeout(playerturn, 750);
    turncountincrease();
}
// #endregion


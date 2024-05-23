let playername = 'player';
let playernametrick = 0;
let money = 0;
let bankmoney = 0;
let playerhealth = 0;
let playermaxhealth = 0;
let playerattack = 1;
let playerattackincrease = 0;
let playerattackincreasebefore = 0;
let playerdefense = 0;
let playerdefenseincrease = 0;
let playerdefenseincreasebefore = 0;
let playerexp = 0;
let playerbuff = 0;
let playerskillbuff = 0;
let playerskilldebuff = 0;
let playerpower = 1;
let playershell = 1;
let playermp = 0;
let playermaxmp = 10;
let enemyhealth = 0;
let enemymaxhealth = 0;
let enemydebuff = 0;
let enemyskilldebuff = 0;
let enemyskillbuff = 0;
let playerlevel = 1;
let enemylevel = 1;
let turn = 0;
let turncount = 0;
let phase = 0;
let w = 0;
let x = 0;
let y = 0;
let z = 0;
let damage = 0;
let magic1 = 0;
let magic2 = 0;
let magic3 = 0;
let learnedmagic = 0;
let learnmagic = 0;
let potion = 3;
let bomb = 3;
let skipcard = 3;
let enemyname = 0;
let enemynames =  ["ピンクな先輩", "ブルーな後輩", "過激派のハッカー", "反旗を翻したアンドロイド", "腐敗した落武者", "アスピリン中毒者",
                   "彷徨わない亡霊", "地上の月兎", "悠々自適なクラス委員", "大胆不敵な問題児", "兎角のシルバージャグラー", "デスブリンガー・ナース",
                   "古書館の魔術師", "トラブルメーカーな天才少女", "誰もが恐れる風紀委員長", "自称清楚系超天才病弱美少女ハッカー",'黒服',
                   "大量発生中のツインテ", "ああああ"];
                   // 名前の元!紹介! 1行目-cybercodeonline 2行目-東方ロストワード 3行目-ブルーアーカイブ 4行目-スプラトゥーン3 & 勇者あるある
let enemyprefixe1 = 0;
let enemyprefixe2 = 0;
let enemyprefixes1 = ['コッペパン好きな','猫耳の','メイド服を着た','かっこいい','ボカロ好きの','頭のおかしくなった','マカロンが好きな','ダークモカチップクリームフラペチーノを持った','猫になった'
                     ,'ドンファイのマスターフルコンを目指す','どっちかっていうと猫派な','犬が嫌いな','借り暮らしの','その日暮らしの','手に何か持ってないと落ち着かない','元','課題に追われる','白水色が好きな','承認欲求高めの'
                     ,'「ぼっち・ざ・ろっく」が好きな', '「よふかしのうた」が好きな','「らき☆すた」が好きな','Minecraftが好きな','弾幕ゲームが好きな','ブルーアーカイブが好きな','第五人格が好きな','プロセカが好きな','#コンパスが好きな'
                     ,];
let enemyprefixes2 = ['Discord信者','勇者','魔王','ゾンビ','先生','ドクター','マスター','西の高校生探偵','東の高校生探偵'
                     ,'ツインテ狩り','モス通い','ルフレ使い','真のヒロイン','バカ','天才','戦犯','這い寄る脅威'
                     ,'Mac依存症','ぬいぐるみ依存症','レモンティー依存症','ヘッドフォン依存症','ZEPETO依存症','つぶグミ依存症','黒ピンク依存症','白水色依存症','モバイルバッテリー依存症']
let saydefeats = 0;
let NStimeout = 0;
let skillcooldown = 0;
function tekiou(){
    document.getElementById('EnemyHealth').textContent = enemyhealth;
    document.getElementById('PlayerHealth').textContent = playerhealth;
}
function bufftekiou(){
    if(enemydebuff == 0){document.getElementById('EnemyDebuff').textContent = '';}
    if(enemydebuff == 1){document.getElementById('EnemyDebuff').textContent = 'poison';}
    if(enemydebuff == 2){document.getElementById('EnemyDebuff').textContent = 'deadly poison';}
    if(playerbuff == 0){document.getElementById('PlayerBuff').textContent = '';}
    if(playerbuff == 1){document.getElementById('PlayerBuff').textContent = 'power';}
    if(playerbuff == 2){document.getElementById('PlayerBuff').textContent = 'morepower';}
    if(playerbuff == 3){document.getElementById('PlayerBuff').textContent = 'shell';}
    if(playerbuff == 4){document.getElementById('PlayerBuff').textContent = 'moreshell';}
    if(playerbuff == 5){document.getElementById('PlayerBuff').textContent = 'luck';}
    if(playerbuff == 6){document.getElementById('PlayerBuff').textContent = 'great luck';}
    if(enemyskilldebuff == 0){document.getElementById('EnemySkillDebuff').textContent = '';}
    if(enemyskilldebuff == 1){document.getElementById('EnemySkillDebuff').textContent = 'onslimed';}
    if(playerskillbuff == 0){document.getElementById('PlayerSkillBuff').textContent = '';}
    if(playerskillbuff == 1){document.getElementById('PlayerSkillBuff').textContent = 'spliting';}
    if(playerskillbuff == 2){document.getElementById('PlayerSkillBuff').textContent = 'throw wrench';}
    if(playerskillbuff == 3){document.getElementById('PlayerSkillBuff').textContent = 'gambling';}
    if(playerskillbuff == 4){document.getElementById('PlayerSkillBuff').textContent = 'highing';}
    if(playerskillbuff == 5){document.getElementById('PlayerSkillBuff').textContent = 'motivated';}   
    if(playerskilldebuff == 1){document.getElementById('PlayerSkillDebuff').textContent = 'stucking slime ';}
}
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
} // 遅延やってみたかったの

// beginで名前とか全部やります
function begin(){
    if (document.getElementById('NameInputText').value !== ''){playername = document.getElementById('NameInputText').value;}
    document.getElementById('PlayerName').textContent = playername;
    if (playername == 'greenslime'){
        playernametrick = 1;
        document.getElementById('Skillbutton').innerHTML = '<button class="button" onclick="skillact()">skill</button>';
        document.getElementById('ButtonStyle').textContent = '.button{border: 2px solid #4da856;padding: 2px 3px;background: #bfffc5;cursor: pointer;}';
        //"greenslime"
        // EX 体力を消費して自分のコピーを出し、ダメージを代わりに受けさせる。コピーが倒されると少し回復する。
        // NS 3の倍数のターンの時、敵にスライムを被せる。スライムが被さると攻撃が当たらなくなる。
        // PS 攻撃時、たまに2回ヒットする。
    } else if (playername == 'mechanic'){
        playernametrick = 1;
        document.getElementById('Skillbutton').innerHTML = '<button class="button" onclick="skillact()">skill</button>';
        document.getElementById('ButtonStyle').textContent = '.button{border: 2px solid #ff7373;padding: 2px 3px;background: #fcffc0;cursor: pointer;}';
        // "mechanic"
        // EX タレットを後ろに設置し、追加で攻撃力の0.5倍(四捨五入)のダメージを与える。重複設置可能。
        // NS 2の倍数のターンの時、レンチを投げる。(攻撃力が2倍に)
        // PS 敵の攻撃時、たまにスタンさせて攻撃を無効化する。
    } else if (playername == 'clown'){
        playernametrick = 1;
        document.getElementById('Skillbutton').innerHTML = '<button class="button" onclick="skillact()">skill</button>';
        document.getElementById('ButtonStyle').textContent = '.button{border: 2px solid #FFACF9;padding: 2px 3px;background: #ACF8FF;cursor: pointer;}';
        // "clown"
        // EX 攻撃力の0~5の倍率のダメージを与える爆弾を敵に投げる。
        // NS 3の倍数のターンの時、攻撃の倍率を0倍/2倍/4倍にする。
        // PS slash of lightの当たる確率が下がるが、ダメージは9倍になる。
    } else if (playername == 'zombie'){
        playernametrick = 1;
        document.getElementById('Skillbutton').innerHTML = '<button class="button" onclick="skillact()">skill</button>';
        document.getElementById('ButtonStyle').textContent = '.button{border: 2px solid #6D8346;padding: 2px 3px;background: #32C7D1;cursor: pointer;}';
        // "zombie"
        // EX 敵の体力が半分以下ならば、そのまま味方にすることができる。重複した場合、古い方は消滅する。
        // NS 4の倍数のターンの時、敵を毒にする。
        // PS 死んだ際、1度生き返る。potionを使うと復活回数が増加する。
    } else if(playername == 'touzoku'){
        playernametrick = 1;
        document.getElementById('Skillbutton').innerHTML = '<button class="button" onclick="skillact()">skill</button>';
        document.getElementById('ButtonStyle').textContent = '.button{border: 2px solid #D1B89A;padding: 2px 3px;background: #E4E280;cursor: pointer;}';
        // "touzoku"
        // EX ansatusyaになる。この時にslashを当てると1/2の確率で即死させる。
        // NS 3の倍数のターンの時、2回行動できる。
        // PS doubleslashが確率で4回攻撃になる。
    } else if(playername == 'bomer'){
        playernametrick = 1;
        document.getElementById('Skillbutton').innerHTML = '<button class="button" onclick="skillact()">skill</button>';
        document.getElementById('ButtonStyle').textContent = '.button{border: 2px solid #ff7373;padding: 2px 3px;background: #CBCBCB;cursor: pointer;}';
        document.getElementById('AdditionalPlayerPoint').innerHTML = '<br><i>テンション:</i><i id="BomerTension"></i>';
        bomertekiou()
        // "bomer"
        // EX テンションが10以上あれば、bombを作成できる。テンションは0になる。
        // NS 3の倍数のターンの時、やる気が湧く(1ターン継続)。この状態の時に敵を倒すとテンションが3上がる。
        // PS 敵を倒すとテンションが2上がり、bombを使うとテンションが5上がる。
    } else if(playername == 'zomusan'){
        playernametrick = 1;
        document.getElementById('Skillbutton').innerHTML = '<button class="button" onclick="skillact()">skill</button>';
        document.getElementById('ButtonStyle').textContent = '.button{border: 2px solid #000000;padding: 2px 3px;background: #50C878;cursor: pointer;}';
        // "zomusan"    
        // EX 相手の残り体力の半分を減らす。ひっさつまえば
        // NS 4の倍数のターンの時、強制的にエレキギターで殴る。攻撃力の3倍のダメージを与える。
        // PS slashoflightを使った際、当たれば5倍だが、外れれば自分にダメージを与える。
    } else if(playername == 'shaosan'){
        playernametrick = 1;
        document.getElementById('Skillbutton').innerHTML = '<button class="button" onclick="skillact()">skill</button>';
        document.getElementById('ButtonStyle').textContent = '.button{border: 2px solid #ff7373;padding: 2px 3px;background: #fcffc0;cursor: pointer;}';
        // "shaosan"
        // EX 攻撃力を上げるが、相手のレベル(攻撃力)も上がる。
        // NS 5の倍数のターンの時、攻撃力を上げる。
        // PS ダメージを受けた時、攻撃力が上がる。
        // SS 5ターン経過時、攻撃力(増加したやつ)を0にする。
    }
    document.getElementById('Thisdisappearsafterthegamestartbegin').innerHTML = ' ';
    document.getElementById('Thisdisappearsafterthegamestartnameinput').innerHTML = ' ';
    document.getElementById('BackButtonDesu').innerHTML = '<button align="center" class="button" onclick="GoToCity()">Back</button>';
    reset()
}
function reset() {
    money = 0;
    turn = 0;
    turncount = 0;
    bossbattlenow = 0;
    playerhealth = 0;
    playermaxhealth = 0;
    playerattack = 1;
    playerdefense = 0;
    playerexp = 0;
    playerpower = 1;
    playershell = 1;
    enemyhealth = 0;
    enemymaxhealth = 0;
    playerlevel = 1;
    enemylevel = 1;
    x = 0;
    y = 0;
    magic1 = 0;
    magic2 = 0;
    magic3 = 0;
    learnedmagic = 0;
    potion = 3;
    bomb = 3;
    skipcard = 3;
    skillcooldown = 0;
    SkillCooldownDecrease()
    zombieresurrections = 1; //ゾンビの復活回数です。
    bomertension = 0; // ボマーのテンションです。
    zomupower = 1; //ゾムの攻撃強化です。
    shaopower = 0; //シャオさんの攻撃強化です。
    tekiou()
    document.getElementById('log').textContent = 'ゲーム開始です！！';
    window.setTimeout(start,1000);
    if(playerskillbuff == 1){greenslimecopybreak();};
    if(playername == 'mechanic'){mechanicturretbreak();};
}
function restart(){document.getElementById('PlayerName').textContent = playername;SkillCooldownDecrease();zombieresurrections = 1;bomertension = 0;zomupower = 1;tekiou();document.getElementById('log').textContent = 'バトル再開です！';if(playerskillbuff == 1){greenslimecopybreak();};if(playername == 'mechanic'){mechanicturretbreak();};window.setTimeout(nextenemy,500);}
function start(){
    playerhealth = 10;
    playermaxhealth = 10;
    playermp = playermaxmp;
    enemyhealth = 5;
    enemymaxhealth = 5;
    enemyname = enemynames[Math.floor(Math.random() * enemynames.length)];
    document.getElementById("EnemyName").textContent = enemyname;
    playerbuff = 0;
    playerskillbuff = 0;
    enemydebuff = 0;
    enemyskilldebuff = 0;
    if(playername == 'greenslime'){playermaxmp = 8; playermp = playermaxmp;}
    if(playername == 'mechanic'){playerhealth = 5; playermaxhealth = 5;}
    if(playername == 'zombie'){playermaxmp = 5; playermp = playermaxmp;}
    if(playername == 'touzoku'){playerhealth = 3; playermaxhealth = 3;}
    if(playername == 'bomer'){playermaxmp = 7; playermp = playermaxmp; document.getElementById('Skillbutton').innerHTML = '';}
    document.getElementById('EnemyLevel').textContent = enemylevel;
    document.getElementById('PlayerLevel').textContent = playerlevel;
    document.getElementById('PlayerMaxHealth').textContent = playermaxhealth;
    document.getElementById('EnemyMaxHealth').textContent = enemymaxhealth;
    tekiou();
    bufftekiou();
    turncountincrease();
    playerturn();
}
let lowedplayerattack = 0; let lowedplayerdefense = 0; let lowedplayermaxmp = 0; let lowedplayermaxhealth = 0; let lowedplayerlevel = 0;
function GoToBattle(){document.getElementById('BattleScene').innerHTML = '<span>turn:</span><span id="TurnCount">0</span><br><b id="EnemyName">enemy</b>   <i>Lv.</i><i id="EnemyLevel">1</i>   <u id="EnemyDebuff"></u>   <u id="EnemySkillDebuff"></u><br><span id="EnemyHealth">0</span>/<span id="EnemyMaxHealth">0</span><span id="PlayerFriendFront"></span><br><br><b id="PlayerName">player</b>   <i>Lv.</i><i id="PlayerLevel">1</i>   <u id="PlayerBuff"></u>   <u id="PlayerSkillBuff"></u><span id="AdditionalPlayerPoint"></span><br><span id="PlayerHealth">0</span>/<span id="PlayerMaxHealth">0</span><span id="PlayerFriendBack"></span><br><br><br><button class="button" id="select1" onclick="select1()">attack</button>  <button class="button" id="select2" onclick="select2()">magic</button>  <button class="button" id="select3" onclick="select3()">tools</button>  <button class="button" id="back" onclick="back()">pass</button>  <br><span id="Skillbutton"> </span><br><br><span align="center" id="log">pless "reset" to game start</span><br><span id="StatusAppearDisappear"><button class="button" id="StatusButton" onclick="StatusAppear()">status</button></span><br><span id="Status"> </span><br><br><br><br><span id="BackButtonDesu"><button align="center" class="button" onclick="GoToCity()">Back</button></span>'; document.getElementById('EnemyLevel').textContent = enemylevel;document.getElementById('PlayerLevel').textContent = playerlevel;document.getElementById('PlayerMaxHealth').textContent = playermaxhealth;document.getElementById('EnemyMaxHealth').textContent = enemymaxhealth;tekiou(); bufftekiou(); disappear(); restart();}
function turncountincrease(){turncount += 1; document.getElementById('TurnCount').textContent = turncount;}
function SkillCooldownDecrease(){
    if(playernametrick == 1){
    if (skillcooldown > 0){skillcooldown -= 1;};
    if (skillcooldown == 0){document.getElementById('Skillbutton').innerHTML = '<button class="button" onclick="skillact()">skill</button>';};
    if (skillcooldown == 'bomernull'){if(bomertension >= 10){document.getElementById('Skillbutton').innerHTML = '<button class="button" onclick="skillact()">skill</button>';}};
    }
}
async function NSaction(){
    if ((turncount % 3) == 0 && playername == 'greenslime'){
        if(enemyskilldebuff !== 1){
        enemyskilldebuff = 1;
        bufftekiou();
        document.getElementById('log').textContent = enemyname + 'にスライムが覆い被さった!';
        NStimeout = 1;
        };
    } else if ((turncount % 4) == 0 && playername == 'mechanic'){
        playerskillbuff = 2;
        bufftekiou();
        document.getElementById('log').textContent = 'wrenchを投げる準備ができた!';
        NStimeout = 1;
    } else if ((turncount % 3) == 0 && playername == 'clown'){
        playerskillbuff = 3;
        bufftekiou();
        document.getElementById('log').textContent = 'さあ、ギャンブルの時間だ!!';
        NStimeout = 1;
    } else if((turncount % 4) == 0 && playername == 'zombie'){
        enemydebuff = 1;
        bufftekiou();
        document.getElementById('log').textContent = enemyname + 'は毒になった!';
        NStimeout = 1;
    } else if((turncount % 3) == 0 && playername == 'touzoku'){
        playerskillbuff = 4;
        turn = 3;
        document.getElementById('log').textContent = 'ちょっとハイになった!';
        NStimeout = 1;
    } else if((turncount % 3) == 0 && playername == 'bomer'){
        playerskillbuff = 5;
        document.getElementById('log').textContent = 'やる気が湧いてきた!!';
        NStimeout = 1;
    } else if((turncount % 4) == 0 && playername == 'zomusan'){
        disappear();
        x = enemyhealth;
        y = enemyhealth;
        z = (playerattack * playerpower * zomupower * 2);
        x -= z;
        x = Math.ceil(x);
        damage = y - x;
        if(damage < 0){damage = 0};
        if(damage > y){damage = y};
        enemyhealth -= damage;
        document.getElementById('log').textContent = zomuNSvoice[Math.floor(Math.random() * zomuNSvoice.length)];
        await delay(1000);
        document.getElementById('log').textContent = 'zomusanはエレキギターで' + enemyname + 'を殴った!';
        await delay(1000);
        tekiou();
        document.getElementById('log').textContent = enemyname + 'に' + damage + 'のダメージ!';
        if(enemyhealth <= 0){enemyhealth = 0; tekiou();};
        if (enemyhealth == 0){window.setTimeout(killedenemy,1000);}
        else {window.setTimeout(enemieturn,1000);}
    } else if((turncount % 5) == 0 && playername == 'shaosan'){
        shaopower += 1;
        document.getElementById('log').textContent = shaoNSvoice[Math.floor(Math.random() * shaoNSvoice.length)];
        NStimeout = 1;
    }
}
async function playerturn() {
    w = 0;
    if(playerskilldebuff == 1){
        x = Math.floor(Math.random() * 3);
        if(x !== 0){playerskilldebuff = 0; bufftekiou(); document.getElementById('log').textContent = 'なんとかスライムを取り払った!!'}
        else {document.getElementById('log').textContent = 'スライムが邪魔して動けない!!'; w = 1;}; 
    }
    if(w == 0){
    if (NStimeout == 1){await delay(1000); NStimeout = 0;};
    if(playername == 'mechanic'){mechanicturretattack = Math.round(playerattack * 0.5);};
    if(playername == 'touzoku'){touzokufourthslash = Math.floor(Math.random() * 4);}; //1/4でdoubleslashがfourthslashになります 
    if(playername == 'shaosan' && turncount == 6){shaopower = 0; document.getElementById('log').textContent = '疲れた!!';};
    if (turn !== 3){turn = 1;};
    phase = 1;
    document.getElementById('log').textContent = 'あなたのターンです！';
    document.getElementById('select1').textContent = 'attack';
    document.getElementById('select2').textContent = 'magic';
    document.getElementById('select3').textContent = 'tools';
    document.getElementById('back').textContent = 'pass';
    document.getElementById('BackButtonDesu').innerHTML = '<button align="center" class="button" onclick="GoToCity()">Back</button>';
    errorcheck();
    } else if(w == 1){window.setTimeout(enemyorplayer, 1000)}
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
        document.getElementById('log').textContent = playername + 'の攻撃!';
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
        if (potion > 0) {
            document.getElementById('log').textContent = playername + 'はpotionを使用した!!';
            window.setTimeout(Potion, 1000)
        } else {
            document.getElementById('log').textContent = 'not enough potion...';
            window.setTimeout(playerturn, 1000)
        }
    } else if (phase == 5){
        disappear()
        playerattack += 1;
        document.getElementById('log').textContent = '攻撃力が上がった!';
        if(bossbattlenow == 1){window.setTimeout(GoToCity,1000)}
        else window.setTimeout(nextenemy,1000)
    } else if (phase == 6){
        disappear()
        document.getElementById('log').textContent = magic1 + 'を忘れ、' + learnmagic + 'を覚えた!!';
        magic1 = learnmagic
        if(bossbattlenow == 1){window.setTimeout(GoToCity,1000)}
        else window.setTimeout(nextenemy,1000)
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
        document.getElementById('log').textContent = playername + 'の攻撃!!';
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
        if (bomb > 0) {
            document.getElementById('log').textContent = playername + 'はbombを使用した!!';
            window.setTimeout(Bomb, 1000)
        } else {
            document.getElementById('log').textContent = 'not enough bomb...';
            window.setTimeout(playerturn, 1000)
        }
        
    } else if (phase == 5){
        disappear()
        phase = 0;
        playerdefense += 1;
        document.getElementById('log').textContent = '防御力が上がった!';
        if(bossbattlenow == 1){window.setTimeout(GoToCity,1000)}
        else window.setTimeout(nextenemy, 1000)
    } else if (phase == 6){
        disappear()
        document.getElementById('log').textContent = magic2 + 'を忘れ、' + learnmagic + 'を覚えた!!';
        magic2 = learnmagic
        if(bossbattlenow == 1){window.setTimeout(GoToCity,1000)}
        else window.setTimeout(nextenemy, 1000)
    }
}
function select3(){
    if (phase == 1) {
        document.getElementById('log').textContent = 'どうやって攻撃する？';
        document.getElementById('select1').textContent = 'potion x' + potion;
        document.getElementById('select2').textContent = 'bomb x' + bomb;
        document.getElementById('select3').textContent = 'skipcard x' + skipcard;
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
        if (skipcard > 0) {
            document.getElementById('log').textContent = playername + 'はskipcardを使用した!!';
            window.setTimeout(Skipcard, 1000)
        } else {
            document.getElementById('log').textContent = 'not enough skipcard...';
            window.setTimeout(playerturn, 1000)
        }
    } else if (phase == 5){
        phase = 0;
        if (learnedmagic == 1){learnmagic = 'heal'}
        else if (learnedmagic == 2){learnmagic = 'power'}
        else if (learnedmagic == 3){learnmagic = 'shell'}
        else if (learnedmagic == 4){learnmagic = 'poison'}
        else if (learnedmagic == 5){learnmagic = 'healer than'}
        else if (learnedmagic == 6){learnmagic = 'luck'}
        else if (learnedmagic == 7){learnmagic = 'more power'}
        else if (learnedmagic == 8){learnmagic = 'more shell'}
        else if (learnedmagic == 9){learnmagic = 'deadly poison'}
        else if (learnedmagic == 10){learnmagic = 'the healest'}
        else if (learnedmagic == 11){learnmagic = 'greatluck'}
        else {
            learnmagic = 'random'
            document.getElementById('log').textcontent = '魔法は見つからなかった...しかしrandomを思いついた!';
            playersutefuri()
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
        if(bossbattlenow == 1){window.setTimeout(GoToCity,1000)}
        else window.setTimeout(nextenemy, 1000)
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
    disappear()
        phase = 0;
        enemylevel += 1
        document.getElementById('log').textContent = '敵のレベルが上がった!';
        window.setTimeout(nextenemy, 1000)
    } else if(phase == 6){
        window.setTimeout(enemyorplayer, 1000)
    }
    
}
function disappear(){
    document.getElementById('select1').textContent = ' ';
    document.getElementById('select2').textContent = ' ';
    document.getElementById('select3').textContent = ' ';
    document.getElementById('back').textContent = '';
    document.getElementById('BackButtonDesu').innerHTML = '';
    phase = 'null';
}
// playerの攻撃たち
// playerの斬撃攻撃
async function slash() {
    x = enemyhealth;
    y = enemyhealth;
    x -= (playerattack * playerpower + weaponpower * zomupower + shaopower);
    x = Math.ceil(x);
    damage = y - x;
    if(playerskillbuff == 2){damage = damage * 2; playerskillbuff = 0; bufftekiou();};
    if(playerskillbuff == 3){z = clowngambling[Math.floor(Math.random() * clowngambling.length)]; damage = damage * z; playerskillbuff = 0; bufftekiou(); document.getElementById('log').textContent = 'ダメージは' + z + '倍になった!!'; await delay(1000);};
    if(playername == 'touzoku' && touzokuansatusya == 1){z = Math.floor(Math.random() * 2); if(z == 0){damage = enemyhealth;if(bossbattlenow == 1){damage = (Math.floor(enemymaxhealth * 0.1))} document.getElementById('log').textContent = 'ansatusyaの這い寄る一撃!!'; await delay(1000); document.getElementById('PlayerName').textContent = 'touzoku'; touzokuansatusya = 0;}else{damage = 0; document.getElementById('log').textContent = 'ansatusyaは攻撃する前に気づかれた!!'; await delay(1000); document.getElementById('PlayerName').textContent = 'touzoku'; touzokuansatusya = 0;}}
    if(damage < 0){damage = 0};
    if(damage > y){damage = y};
    enemyhealth -= damage;
    document.getElementById('log').textContent = enemyname + 'に' + damage + 'のダメージ!';
    if (enemyhealth < 0){enemyhealth = 0};
    tekiou();
    x = Math.floor(Math.random() * 5); // 1/5の確率
    if (enemyhealth == 0){
        window.setTimeout(killedenemy, 1000);
    }else   if(playername == 'greenslime' && x == 0){
            await delay(1000)
            document.getElementById('log').textContent = 'greenslimeは頑張った!';
            await delay(500)
            x = enemyhealth;
            y = enemyhealth;
            x -= (playerattack * playerpower);
            x = Math.ceil(x);
            damage = y - x;
            if(damage < 0){damage = 0};
            if(damage > y){damage = y};
            enemyhealth -= damage;
            document.getElementById('log').textContent = enemyname + 'に' + damage + 'のダメージ!';
            if (enemyhealth < 0){enemyhealth = 0 }
            tekiou();
            if (enemyhealth == 0){window.setTimeout(killedenemy, 1000)}
            else{
                await delay(1000)
                x = enemyhealth;
                y = enemyhealth;
                x -= (playerattack * playerpower);
                x = Math.ceil(x);
                damage = y - x;
                if(damage < 0){damage = 0};
                if(damage > y){damage = y};
                enemyhealth -= damage;
                document.getElementById('log').textContent = enemyname + 'に' + damage + 'のダメージ!';
                if (enemyhealth < 0){enemyhealth = 0 }
                tekiou();
                if (enemyhealth == 0){window.setTimeout(killedenemy, 1000)}
                else {window.setTimeout(enemyorplayer, 1000)}
                };
    } else {window.setTimeout(enemyorplayer, 1000)};
}
async function doubleslash() {
    x = Math.floor(Math.random() * 3);
        if (x == 0){
            damage = 0
        } else {
            x = enemyhealth;
            y = enemyhealth;
            x -= (playerattack * playerpower + weaponpower * zomupower + shaopower);
            x = Math.ceil(x);
            damage = y - x;
            if(playerskillbuff == 2){damage = damage * 2; playerskillbuff = 0; bufftekiou();}
            if(playerskillbuff == 3){z = clowngambling[Math.floor(Math.random() * clowngambling.length)]; damage = damage * z; playerskillbuff = 0; bufftekiou(); document.getElementById('log').textContent = 'ダメージは' + z + '倍になった!!'; await delay(1000);};
            if(damage < 0){damage = 0};
            if(damage > y){damage = y};
            enemyhealth -= damage;
        }
    if (damage == 0){
        document.getElementById('log').textContent = 'miss! ダメージを与えられない!';
    } else {
    document.getElementById('log').textContent = enemyname + 'に' + damage + 'のダメージ!';
    if (enemyhealth < 0){
        enemyhealth = 0
    }
    }
    tekiou();
    if (enemyhealth == 0){
        window.setTimeout(killedenemy, 1000)
    } else {
        x = Math.floor(Math.random() * 3);
        if (x == 0){
            damage = 0
        } else {
            x = enemyhealth;
            y = enemyhealth;
            x -= (playerattack * playerpower + weaponpower * zomupower + shaopower);
            x = Math.ceil(x);
            damage = y - x;
            if(playerskillbuff == 2){damage = damage * 2; playerskillbuff = 0; bufftekiou();}
            if(playerskillbuff == 3){z = clowngambling[Math.floor(Math.random() * clowngambling.length)]; damage = damage * z; playerskillbuff = 0; bufftekiou(); document.getElementById('log').textContent = 'ダメージは' + z + '倍になった!!'; await delay(1000);};
            if(damage < 0){damage = 0};
            if(damage > y){damage = y};
            enemyhealth -= damage;
        }
        if (damage == 0){
            await delay(1000);
            document.getElementById('log').textContent = 'miss! ダメージを与えられない!';
        } else {
            await delay(1000);
            document.getElementById('log').textContent = enemyname + 'に' + damage + 'のダメージ!';
                if (enemyhealth < 0){
                    enemyhealth = 0
                }
                if (enemyhealth == 0){
                    window.setTimeout(killedenemy, 1000)
                }   
                tekiou();
        }
        if(playername == 'touzoku' && touzokufourthslash == 1){
            touzokufourthslash == 0;
            await delay(1000);
            document.getElementById('log').textContent = 'touzokuは頑張った!!';
            window.setTimeout(doubleslash, 1000)
        } else
        window.setTimeout(enemyorplayer, 1000)
    }
}
async function slashoflight() {
    if(playername == 'zomusan'){
    x = Math.floor(Math.random() * 3);
    if(x == 0){
        x = enemyhealth;
        y = enemyhealth;
        z = (playerattack * playerpower + weaponpower * 5 * zomupower + shaopower);
        x -= z
        x = Math.ceil(x);
        damage = y - x;
        if(damage < 0){damage = 0};
        if(damage > y){damage = y};
        enemyhealth -= damage;
        tekiou();
        document.getElementById('log').textContent = enemyname + 'に' + damage + 'のダメージ!';
        if (enemyhealth < 0){enemyhealth = 0}
        if (enemyhealth == 0){window.setTimeout(killedenemy, 1000)}
        else{window.setTimeout(enemyorplayer, 1000)};
    } else {
    x = playerhealth;
    y = playerhealth;
    z = (playerattack * playerpower); //流石に5倍のダメージ与えたら死んじゃうからね、掛け算が少ないのは私の優しさなのだ
    x -= z
    x = Math.ceil(x);
    damage = y - x;
    if(damage < 0){damage = 0};
    if(damage > y){damage = y};
    playerhealth -= damage;
    tekiou();
    document.getElementById('log').textContent = 'zomusanに' + damage + 'のダメージ!';
    if (playerhealth < 0){playerhealth = 0}
    if (playerhealth == 0){window.setTimeout(defeat, 1000)}
    else{window.setTimeout(enemyorplayer, 1000)};
    } // zomusanのslash of lightの様子だね。賭けすぎるかな 
    } else{
    x = Math.floor(Math.random() * 3); // 1/3です
    if (playername == 'clown'){x = Math.floor(Math.random() * 5);} // 1/5です。
    if (x == 0) {
        x = enemyhealth;
        y = enemyhealth;
        x -= (playerattack * 3 * playerpower * zomupower + shaopower);
        x = Math.ceil(x);
        damage = y - x;
        if(playerskillbuff == 2){damage = damage * 2; playerskillbuff = 0; bufftekiou();}
        if(playerskillbuff == 3){z = clowngambling[Math.floor(Math.random() * clowngambling.length)]; damage = damage * z; playerskillbuff = 0; bufftekiou(); document.getElementById('log').textContent = 'ダメージは' + z + '倍になった!!'; await delay(1000);};
        if(playername == 'clown'){damage = damage * 3;} //こちら最高倍率36倍の台です(4x9)
        if(damage < 0){damage = 0};
        if(damage > y){damage = y};
        enemyhealth -= damage;
        document.getElementById('log').textContent = enemyname + 'に' + damage + 'のダメージ!';
        if (enemyhealth < 0){
            enemyhealth = 0
        }
        if (enemyhealth == 0){
            window.setTimeout(killedenemy, 1000)
        }
        tekiou();   
    } else {
        document.getElementById('log').textContent = 'miss! ダメージを与えられない!';
    }
    window.setTimeout(enemyorplayer, 1000)
    }
}
// playerの魔法
// 魔法の一覧です
// heal　20%回復
// power　attack 1.5倍 code:1
// shell　defence 1.5倍 code:3
// poison　敵に毒を付与　毎ターン5%ダメージ code:1
// healerthan　40%回復
// luck　ターン終了時、1/5の確率でターン継続 code:5
// morepower　attack 2倍 code:2
// moreshell defence 2倍 code:4
// deadlypoison　敵に毒を付与　毎ターン10%ダメージ code:2
// thehealest　60%回復
// greatluck　ターン終了後、1/2の確率でターン継続 code:6
// random ランダムな魔法を使用する
function magic() {
    if (playermp > 0){
    if (z == 'heal') {Heal();}
    else if (z == 'power') {Power();}
    else if (z == 'shell') {Shell();}
    else if (z == 'poison') {Poison();}
    else if (z == 'healer than') {Healerthan();}
    else if (z == 'luck') {Luck();}
    else if (z == 'more power') {Morepower();}
    else if (z == 'more shell') {Moreshell();}
    else if (z == 'deadly poison') {Deadlypoison();}
    else if (z == 'the healest') {Thehealest();}
    else if (z == 'greatluck') {Greatluck();}
    else if (z == 'random') {Random();};
    playermp -= 1;
    } else {
        document.getElementById('log').textContent = 'not enough mp...';
        window.setTimeout(playerturn, 1000)
    };
}
function Heal() {
    x = playerhealth
    playerhealth += Math.round(playermaxhealth * 0.2)
    y = playerhealth - x;
    document.getElementById('log').textContent = playername + 'はhealを唱え、' + y + '回復した!';
    if (playerhealth > playermaxhealth) {
        playerhealth = playermaxhealth;
    }
    tekiou();
    window.setTimeout(enemyorplayer, 1000)
}
function Power() {
    playerbuff = 1
    playerpower = 1.5
    bufftekiou()
    document.getElementById('log').textContent = playername + 'はpowerを唱えた!';
    window.setTimeout(enemyorplayer, 1000)
}
function Shell() {
    playerbuff = 3
    playershell = 1.5
    bufftekiou()
    document.getElementById('log').textContent = playername + 'はshellを唱えた!';
    window.setTimeout(enemyorplayer, 1000)
}
function Poison() {
    enemydebuff = 1
    bufftekiou()
    document.getElementById('log').textContent = playername + 'はpoisonを唱えた!';
    window.setTimeout(enemyorplayer, 1000)
}
function Healerthan() {
    x = playerhealth
    playerhealth += Math.round(playermaxhealth * 0.4)
    y = playerhealth - x;
    document.getElementById('log').textContent = playername + 'はhealer thanを唱え、' + y + '回復した!!';
    if (playerhealth > playermaxhealth) {
        playerhealth = playermaxhealth;
    }
    tekiou();
    window.setTimeout(enemyorplayer, 1000)
}
function Luck() {
    playerbuff = 5
    bufftekiou()
    document.getElementById('log').textContent = playername + 'はluckを唱えた!';
    window.setTimeout(enemyorplayer, 1000)
}
function Morepower() {
    playerbuff = 2
    playerpower = 2
    bufftekiou()
    document.getElementById('log').textContent = playername + 'はmore powerを唱えた!';
    window.setTimeout(enemyorplayer, 1000)
}
function Moreshell() {
    playerbuff = 4
    playershell = 2
    bufftekiou()
    document.getElementById('log').textContent = playername + 'はmore shellを唱えた!';
    window.setTimeout(enemyorplayer, 1000)
}
function Deadlypoison() {
    enemydebuff = 2
    bufftekiou()
    document.getElementById('log').textContent = playername + 'はdeadly poisonを唱えた!';
    window.setTimeout(enemyorplayer, 1000)
}
function Thehealest() {
    x = playerhealth
    playerhealth += Math.round(playermaxhealth * 0.6)
    y = playerhealth - x;
    document.getElementById('log').textContent = playername + 'はthe healestを唱え、' + y + '回復した!!!';
    if (playerhealth > playermaxhealth) {
        playerhealth = playermaxhealth;
    }
    tekiou();
    window.setTimeout(enemyorplayer, 1000)
}
function Greatluck() {
    playerbuff = 6
    bufftekiou()
    document.getElementById('log').textContent = playername + 'はgreatluckを唱えた!';
    window.setTimeout(enemyorplayer, 1000)
}
async function Random(){
    document.getElementById('log').textContent = '.........';
    await delay(1000);
    x = Math.floor(Math.random() * 11)
    if (x == 0){
        document.getElementById('log').textContent = 'healが出た!';
        window.setTimeout(Heal, 1000)
    } else if (x == 1){
        document.getElementById('log').textContent = 'powerが出た!';
        window.setTimeout(Power, 1000)
    } else if (x == 2){
        document.getElementById('log').textContent = 'shellが出た!';
        window.setTimeout(Shell, 1000)
    } else if (x == 3){
        document.getElementById('log').textContent = 'poisonが出た!';
        window.setTimeout(Poison, 1000)
    } else if (x == 4){
        document.getElementById('log').textContent = 'healer thanが出た!';
        window.setTimeout(Healerthan, 1000)
    } else if (x == 5){
        document.getElementById('log').textContent = 'luckが出た!';
        window.setTimeout(Luck, 1000)
    } else if (x == 6){
        document.getElementById('log').textContent = 'more powerが出た!';
        window.setTimeout(Morepower, 1000)
    } else if (x == 7){
        document.getElementById('log').textContent = 'more shellが出た!';
        window.setTimeout(Moreshell, 1000)
    } else if (x == 8){
        document.getElementById('log').textContent = 'deadly poisonが出た!';
        window.setTimeout(Deadlypoison, 1000)
    } else if (x == 9){
        document.getElementById('log').textContent = 'the healestが出た!';
        window.setTimeout(Thehealest, 1000)
    } else if (x == 10){
        document.getElementById('log').textContent = 'greatluckが出た!';
        window.setTimeout(Greatluck, 1000)
    }
}

// playerの道具
function Potion() {
    playerhealth = playermaxhealth
    tekiou();
    document.getElementById('log').textContent = '　　　全　　　回　　　復　　　';
    if(playername == 'zombie'){zombieresurrections += 1 };
    potion -= 1;
    window.setTimeout(playerturn, 1000)
}
function Bomb() {
    if(bossbattlenow == 0){enemyhealth = 0;}
    else {enemyhealth -= Math.floor(enemyhealth * 0.2)}
    tekiou();
    if(bossbattlenow == 0){document.getElementById('log').textContent = '私のファイナルエターナルラストアタック!!相手は死ぬ!!!';}
    else {document.getElementById('log').textContent = 'あんまりくらわなさそうだけどいいや!いけ!!クリーパー!!!';};
    bomb -= 1;
    if(playername == 'bomer'){bomerbombused = 1;};
    if(bossbattlenow == 0)window.setTimeout(killedenemy, 1000)
    else window.setTimeout(enemyorplayer, 1000)
}
function Skipcard() {
    turn = 3;
    document.getElementById('log').textContent = 'カードを仕込みました!';
    skipcard -= 1;
    window.setTimeout(playerturn, 1000)
}
let greenslimecopyhealth = 0;
let greenslimecopymaxhealth = 0;
let mechanicturret = 0;
let mechanicturretattack = 0;
let clowngambling = ['0','0','2','2','2','4'];
let zombieresurrections = 0;
let zombiefriendname = 0;
let zombiefriendlevel = 0;
let zombiefriendhealth = 0;
let zombiefriendmaxhealth = 0;
let touzokuansatusya = 0;
let touzokufourthslash = 0;
let bomertension = 0;
let bomerbombused = 0;
let zomupower = 1;
let zomuEXvoice = ['死にたくなったら言ってください。助けるんで','出てこいよ、そんなところで芋ってないでさ！','箪笥の中に隠れちゃダメっすよぉw','ま､見えない敵に怯えてな','俺がなんとかするからな'];
let zomuNSvoice = ['ぶしゅしゅしゅしゅ！！','お前の考えなんて読めるんだよ','かまってぇや、マジで','雑魚がよぉ','クソ王子、あなたの目はクソですか','正義は為された'];
let shaopower = 1;
let shaoEXvoice = ['甘いぜオイ、雑魚乙','雑魚乙','お前ぶっ殺すぞ！？','夢見んなよクソ視聴者'];
let shaoNSvoice = ['俺が人狼だよ、かかってこいよテメェら！','パーティの始まりだぜ！！','煽りキャラ返せこの野郎！！','夢の橋を渡ってください'];
let shaoPSvoice = ['目が合うエビ','ルエビル','落ちた仲間やろ来いや','もうこれでもなんでしょうもないや','フェアにはならんのや','お前待て待てお前なんで','感じなっそうなんですけどおい']
// skillの手続き
async function skillact() {
    if(phase == 1){
    if (skillcooldown == 0){
        if(playername == 'greenslime'){
        if(playerhealth > Math.floor(playermaxhealth * 0.5)){
        playerskillbuff = 1;
        bufftekiou()
        x = Math.floor(playermaxhealth * 0.5);
        playerhealth -= x;
        document.getElementById('PlayerFriendFront').innerHTML = '<br><br><b><font color="#2EFE2E">greenslimeのコピー</font></b>  <br><span id="GreenSlimeCopyHealth">0</span>/<span id="GreenSlimeCopyMaxHealth">0</span>';
        greenslimecopymaxhealth = x;
        greenslimecopyhealth = x;
        greenslimecopytekiou()
        document.getElementById('log').textContent = 'greenslimeは分裂した!!';
        tekiou()
        document.getElementById('Skillbutton').innerHTML = '';
        } else {document.getElementById('log').textContent = 'tairyoku ga sukunai desu...';}
    } else if(playername == 'mechanic'){
        document.getElementById('PlayerFriendBack').innerHTML = '<br><br><b><font color="#DF0101">turret</font><span id="MechanicTurret"></span></b>';
        mechanicturret += 1;
        mechanicturrettekiou()
        mechanicturretattack = Math.round(playerattack * 0.5);
        document.getElementById('Skillbutton').innerHTML = '';
        document.getElementById('log').textContent = 'mechacicはturretを設置した!';
        skillcooldown = 3;
    } else if(playername == 'clown'){
        phase = 0;
        disappear();
        document.getElementById('log').textContent = 'clownは爆弾を投げた...';
        document.getElementById('Skillbutton').innerHTML = '';
        window.setTimeout(clownbomb, 1000)
        skillcooldown = 3;
    } else if (playername == 'zombie'){
        if (enemyhealth <= Math.floor(enemymaxhealth * 0.5)){
        if(bossbattlenow == 1){if (enemyhealth <= Math.floor(enemymaxhealth * 0.1)){
        disappear();
        zombiefriendbreak();
        document.getElementById('PlayerFriendFront').innerHTML = '<br><br><b><font id="ZombieFriendName" color="#6D8346"></font></b>   <u>zombied</u>  <br><span id="ZombieFriendHealth">0</span>/<span id="ZombieFriendMaxHealth">0</span>';
        zombiefriendname = enemyname;
        zombiefriendlevel = enemylevel;
        document.getElementById('ZombieFriendName').textContent = zombiefriendname;
        zombiefriendhealth = enemyhealth;
        zombiefriendmaxhealth = enemyhealth;
        enemyhealth = 0;
        tekiou()
        zombiefriendtekiou()
        document.getElementById('log').textContent = 'zombieは' + enemyname + 'に噛みつき、仲間にした!';
        document.getElementById('Skillbutton').innerHTML = '';
        skillcooldown = 4;
        window.setTimeout(killedenemy,1000)
        }}}
    } else if(playername == 'touzoku'){
        touzokuansatusya = 1;
        document.getElementById('PlayerName').textContent = 'ansatusya';
        document.getElementById('log').textContent = 'touzokuはansatusyaになった!!';
        document.getElementById('Skillbutton').innerHTML = '';
        skillcooldown = 8;
    } else if(playername == 'bomer'){
        if(bomertension >= 10){
        bomertension = 0;
        document.getElementById('log').textContent = 'bomerはbombを作成した!!';
        bomertekiou()
        bomb += 1;
        skillcooldown = 'bomernull';
        } else {document.getElementById('log').textContent = 'まだテンションが低い...!!'; skillcooldown = 'bomernull';document.getElementById('Skillbutton').innerHTML = ''}
    } else if (playername == 'zomusan'){
        disappear();
        document.getElementById('log').textContent = zomuEXvoice[Math.floor(Math.random() * zomuEXvoice.length)];
        document.getElementById('Skillbutton').innerHTML = ''; 
        skillcooldown = 3;
        await delay(1000);
        x = Math.ceil(enemyhealth * 0.5)
        enemyhealth -= x;
        document.getElementById('log').textContent = enemyname + 'に' + x + 'のダメージを与えた!';
        tekiou()
        zomupower = 2;
        window.setTimeout(enemyorplayer, 1000) 
    } else if(playername == 'shaosan'){
        document.getElementById('log').textContent = 'ここに煽りセリフを入力してください';
        document.getElementById('Skillbutton').innerHTML = '';
        skillcooldown = 3;
        await delay(1000);
        shaopower += 2;
        enemylevel += 2;
        document.getElementById('EnemyLevel').textContent = enemylevel;
        await delay(1000);
        window.setTimeout(playerturn, 1000)
    }
    }else {document.getElementById('log').textContent = 'skill is not ready...';}
}
}
function greenslimecopytekiou(){
    document.getElementById('GreenSlimeCopyHealth').textContent = greenslimecopyhealth;
    document.getElementById('GreenSlimeCopyMaxHealth').textContent = greenslimecopymaxhealth;
    }
function greenslimecopybreak(){
    playerskillbuff = 0;
    bufftekiou()
    x = Math.floor(greenslimecopymaxhealth * 0.7);
    playerhealth += x;
    if (playerhealth > playermaxhealth){playerhealth = playermaxhealth;}
    document.getElementById('PlayerFriendFront').innerHTML = ' ';
    greenslimecopymaxhealth = 0;
    greenslimecopyhealth = 0;
    skillcooldown = 5;
    document.getElementById('log').textContent = 'greenslimeのコピーは倒された...';
}
function mechanicturrettekiou(){
    document.getElementById('MechanicTurret').textContent = 'x' + mechanicturret;
    }
function mechanicturretbreak(){
    document.getElementById('PlayerFriendBack').innerHTML = '';
    mechanicturret = 0;
    mechanicturretattack = 0;
}
function clownbomb(){
    x = Math.floor(Math.random() * 6);
    if (x == 0){
        document.getElementById('log').textContent = 'しかし不発弾だった!!';
        phase = 1; window.setTimeout(playerturn, 1000);
    } else if(x == 5){
        document.getElementById('log').textContent = 'Lucky! 爆弾は焼夷弾だった!!!';
        window.setTimeout(clownbombexplosion, 1000)
    } else if (x == 4){
        document.getElementById('log').textContent = '爆弾は花火だった!';
        window.setTimeout(clownbombexplosion, 1000)
    } else if (x == 3){
        document.getElementById('log').textContent = '爆弾は毒ガス入りだった!!';
        enemydebuff = 1; // 毒ガス入りだった場合
        bufftekiou();
        window.setTimeout(clownbombexplosion, 1000)
    } else if (x == 2){
        document.getElementById('log').textContent = '爆弾はスライム入りだった!!';
        enemyskilldebuff = 1; // スライム入りだった場合
        bufftekiou();
        window.setTimeout(clownbombexplosion, 1000)
    } else if (x == 1){
        document.getElementById('log').textContent = '爆発した..だがただの特殊な薬品だった!!';
        window.setTimeout(clownbombexplosion, 1000)
    }
}
function clownbombexplosion(){
    y = Math.floor(x * playerattack);
    if(y > enemyhealth){y = enemyhealth;};
    enemyhealth -= y;
    if (enemyhealth < 0){enemyhealth = 0};
    tekiou();
    document.getElementById('log').textContent = '敵に' + y + 'のダメージを与えた!';
    if (enemyhealth == 0){window.setTimeout(killedenemy,1000);;}
    else {phase = 1; window.setTimeout(enemyorplayer, 1000)};
}
function zombiefriendtekiou(){
    document.getElementById('ZombieFriendHealth').textContent = zombiefriendhealth;
    document.getElementById('ZombieFriendMaxHealth').textContent = zombiefriendmaxhealth;
}
function zombiefriendbreak(){
    zombiefriendname = 0;
    document.getElementById('PlayerFriendFront').innerHTML = '';
}
function bomertekiou(){
    document.getElementById('BomerTension').textContent = bomertension;
}


// enemieturnまでの道のり
function enemyorplayer(){
    if (turn == 1){
        y = 1;
        if (playerbuff == 5){y = Math.floor(Math.random() * 5);}
        if (playerbuff == 6){y = Math.floor(Math.random() * 3);}
        if (y == 0){
            document.getElementById('log').textContent = 'Lucky♪';
            window.setTimeout(playerturn, 1000)
        } else if(bossbattlenow == 0){enemieturn()}else{bossenemyturn()}
        } else if (turn == 3){
            document.getElementById('log').textContent = 'スキップ!!!';
            window.setTimeout(playerturn, 1000)
            turn = 1;
        }
}
// enemyの手続き
async function enemieturn() {
    if(playername == 'mechanic' && mechanicturret > 0){
        document.getElementById('log').textContent = 'turretの攻撃!';
        await delay(1000);
        x = enemyhealth;
        y = enemyhealth;
        x -= (mechanicturretattack * mechanicturret);
        x = Math.floor(x);
        damage = y - x;
        if(damage < 0){damage = 0};
        if(damage > y){damage = y};
            enemyhealth -= damage;
        document.getElementById('log').textContent = enemyname + 'に' + damage + 'のダメージ!!';
        if (enemyhealth < 0){enemyhealth = 0};
        tekiou();
        await delay(1000);
        }
    if (enemyhealth == 0){killedenemy();}
    else {
    turn = 2;
    document.getElementById('log').textContent = '敵のターンです!';
    window.setTimeout(Enemyattack, 1000);
    }
}
async function Enemyattack() {
    w = 1;
    x = playerhealth;
    y = playerhealth;
    x -= enemylevel;
    x += (playerdefense * playershell + armorshell);
    damage = playerhealth - x;
    if (damage < 0){damage = 0;};
    if (enemyskilldebuff == 1){damage = 0;};
    if (playername == 'mechanic'){w = Math.floor(Math.random() * 5);}; // mechanicのPSのスタンの動き(1/5)
    if (w == 0){damage = 0;};
    if (playerskillbuff == 1){y = greenslimecopyhealth; greenslimecopyhealth -= damage; if(greenslimecopyhealth < 0){greenslimecopyhealth = 0} greenslimecopytekiou(); greenslimecopyhealth = Math.floor(greenslimecopyhealth); z = y - greenslimecopyhealth; if(greenslimecopyhealth == 0){greenslimecopybreak(); await delay(1000)};}
    else if (zombiefriendname !== 0){y = zombiefriendhealth; zombiefriendhealth -= damage; if(zombiefriendhealth < 0){zombiefriendhealth = 0} zombiefriendtekiou(); zombiefriendhealth = Math.floor(zombiefriendhealth); z = y - zombiefriendhealth; if(zombiefriendhealth == 0){zombiefriendbreak(); await delay(1000)};}
    else {playerhealth -= damage; playerhealth = Math.floor(playerhealth); z = y - playerhealth;};
    if(w == 0){document.getElementById('log').textContent = enemyname + 'はスタンした!!';}
    else if (z == 0){document.getElementById('log').textContent = 'miss! ' + playername + 'にダメージを与えられない!';}
    else {
        if(playername == 'bomer' && bomertension > 0){bomertension -= 1; bomertekiou()}; // bomerのtensionを下げる動き
        document.getElementById('log').textContent = playername + 'に' + z + 'のダメージ!';
        if(playername == 'shaosan'){tekiou(); await delay(1000); shaopower += 1; shaopower = Math.floor(shaopower * 10) / 10; document.getElementById('log').textContent = shaoPSvoice[Math.floor(Math.random() * shaoPSvoice.length)];};// shaosanのpowerを上げる動き
    };
    if (playerhealth < 0){playerhealth = 0};
    if (playerhealth == 0){defeat();turn = 0;}
    tekiou();
    if (enemyskilldebuff == 1){await delay(1000);enemyskilldebuff = 0;bufftekiou();document.getElementById('log').textContent = enemyname + 'からスライムが剥がれた!';};
    if (turn == 2){
    if (enemydebuff == 1) {
        x = enemyhealth;
        enemyhealth -= enemymaxhealth * 0.05
        enemyhealth = Math.floor(enemyhealth)
        if (enemyhealth < 0){enemyhealth = 0}
        y = x - enemyhealth;
    } else if (enemydebuff == 2) {
        x = enemyhealth;
        enemyhealth -= enemymaxhealth * 0.1
        enemyhealth = Math.floor(enemyhealth)
        if (enemyhealth < 0){enemyhealth = 0}
        y = x - enemyhealth;
    } 
    if (enemydebuff == 1 || enemydebuff == 2) {await delay(1000);document.getElementById('log').textContent = enemyname + 'は毒で' + y + 'のダメージ!';};
    tekiou();
    if (enemyhealth < 0){enemyhealth = 0}
    if (enemyhealth == 0){window.setTimeout(killedenemy, 1000)}
    else {
        if(playerskillbuff == 5){await delay(1000); playerskillbuff = 0; document.getElementById('log').textContent = 'やる気が落ち着いた!';}
        await delay(1000);
        playerturn()
        turncountincrease()
        SkillCooldownDecrease()
        NSaction()
    }
}
}
// ゲームの判定のお話
async function killedenemy() {
    if(bossbattlenow == 1){killedbossenemy();}
    else{
    turn = 0;
    x = playerexp
    playerexp += enemylevel;
    y = playerexp - x;
    document.getElementById('log').textContent = enemyname + 'を倒した!';
    if(playername == 'bomer'){z = 0; z += 2; if(playerskillbuff == 5){z += 1; playerskillbuff = 0; bufftekiou();}; if(bomerbombused == 1){z += 3; bomerbombused = 0;}; await delay(1000); bomertension += z; document.getElementById('log').textContent =  'bomerはテンションが' + z + '上がった!'; bomertekiou();};
    if(playername == 'zomusan'){zomupower = 1;};
    //if(playername == 'shaosan'){shaopower = 0;};
    await delay(1000);
    z = Math.floor(Math.random() * 11) + 1;
    money += z;
    document.getElementById('log').textContent =  z + '€を獲得した!';
    window.setTimeout(expget, 1000)
    }
}
function expget(){
    document.getElementById('log').textContent = y + 'の経験値を奪った!';
    window.setTimeout(playerlevelup, 1000)
}
function playerlevelup(){
    if (playerexp >= playerlevel){
        playerlevel += 1;
        playerexp = 0;
        learnedmagic += 1
        playermaxhealth += 1;
        playerhealth = playermaxhealth;
        document.getElementById('PlayerLevel').textContent = playerlevel;
        document.getElementById('PlayerHealth').textContent = playerhealth;
        document.getElementById('PlayerMaxHealth').textContent = playermaxhealth;
        document.getElementById('log').textContent = 'レベルアップ!!';
        window.setTimeout(playersutefuri, 1000)
    } else nextenemy();
}
function nextenemy() {
    turncount = 0;
    document.getElementById('TurnCount').textContent = turncount;
    playermp = playermaxmp;
    playerbuff = 0;
    playerpower = 1;
    playershell = 1;
    x = 0;
    if (playerskillbuff == 1){x = 1}
    playerskillbuff = 0;
    if (x == 1){playerskillbuff = 1}
    enemydebuff = 0;
    enemyskilldebuff = 0;
    bufftekiou()
    mechanicturretbreak();
    enemylevel += (Math.floor(Math.random() * 3) - 1); // -1 ~ +1 
    if (playernametrick = 1){enemylevel += (Math.floor(Math.random() * 2));} // 0 ~ +1} // 名前付きのつよつよplayerのためのセプテット(?)(level)
    if (enemylevel < 1){enemylevel = 1}
    enemymaxhealth += 1;
    if (playernametrick = 1){enemymaxhealth += (Math.floor(Math.random() * 2)); enemymaxhealth += (Math.floor(Math.random() * 2));} // 0 ~ +2} // 名前付きのつよつよplayerのためのセプテット(?)(health)
    enemyhealth = enemymaxhealth;
    enemyname = 0;
    enemyprefixe1 = 0;
    enemyprefixe2 = 0;
    enemyname = enemynames[Math.floor(Math.random() * enemynames.length)]; // 敵の名前を決めます
    y = Math.floor(Math.random() * 3); // 1/2
    if(y !== 0){enemyprefixe1 = enemyprefixes1[Math.floor(Math.random() * enemyprefixes1.length)]}
    y = Math.floor(Math.random() * 3); // 1/2
    if(y !== 0){enemyprefixe2 = enemyprefixes2[Math.floor(Math.random() * enemyprefixes2.length)]}
    if(enemyprefixe1 !== 0 && enemyprefixe2 !== 0){enemyname = enemyprefixe1 + ' ' + enemyprefixe2 + ' ' + enemyname} // これが理想の幻想郷(?)
    else if (enemyprefixe1 !== 0 && enemyprefixe2 == 0){enemyname = enemyprefixe1 + ' ' + enemyname}
    else if (enemyprefixe1 == 0 && enemyprefixe2 !== 0){enemyname = enemyname}
    else {enemyname = enemyname}; // 敵に接頭辞を確率で付与します。意味はありません。じゃあなんでつけるんって思うよね。それはね、おもしろいからだよ　ひとえに愛だよ
    document.getElementById("EnemyName").textContent = enemyname;
    document.getElementById('log').textContent = enemyname + 'が現れた!';
    document.getElementById('EnemyLevel').textContent = enemylevel;
    document.getElementById('EnemyMaxHealth').textContent = enemymaxhealth;
    tekiou();
    window.setTimeout(playerturn, 750)
    turncountincrease()
}   
function playersutefuri(){
    document.getElementById('log').textContent = 'どの能力を上げますか?';
    document.getElementById('select1').textContent = 'attack';
    document.getElementById('select2').textContent = 'defense';
    document.getElementById('select3').textContent = 'magic';
    document.getElementById('back').textContent = 'enemy';
    phase = 5;
}
function defeat() {
    if (playername == 'zombie' && zombieresurrections > 0){
        zombieresurrections -= 1;
        document.getElementById('log').textContent = 'zombieはなんとか復活しました!!';
        playerhealth = Math.floor(playermaxhealth * 0.5)
        window.setTimeout(playerturn, 1000);}
    else
    if (playerlevel < 3){saydefeats = ['あはは..負けちゃいましたね....防御力を上げると良いですよ!', 'あはは..負けちゃいましたね....double slashは運要素も少ないので強いですよ!', 'あはは..負けちゃいましたね....魔法にターン数制限はありません!いっぱい使っちゃいましょう!','あはは..負けちゃいましたね....mechanicは防御全振りで戦うと良いですよ!','あはは..負けちゃいましたね....zombieは生き返ることができるのでそれで慣れると良いですよ!'];}
    else {saydefeats = [playername + 'は力尽きた...残念でしたね！にはははは〜！', playername + 'は..まけました', '残念だったね!すごい惜しかったね!!', 'まけちゃったか..ねぇ、もう一回、やってみない?','あれあれ〜？まけちゃったんですか〜？？よっわw'];}
    document.getElementById('log').textContent = saydefeats[Math.floor(Math.random() * saydefeats.length)];
    window.setTimeout(reset, 2000)
}
async function errorcheck(){if(playerattack == Infinity || playerdefense == Infinity || playerhealth == Infinity ||  playermaxhealth == Infinity || playerlevel == Infinity || playerpower == Infinity || playermaxmp == Infinity || playershell == Infinity || isNaN(playerhealth) || isNaN(playermaxhealth) || isNaN(playerattack) || isNaN(playerdefense) || isNaN(playermaxmp) || isNaN(playerpower) || isNaN(playershell) || isNaN(playerlevel)){document.getElementById('log').textContent = 'error100が発生しました。'; await delay(1000); document.getElementById('log').textContent = 'リブートを開始します。'; await delay(1000); open('about:blank', '_self').close();}} //おっとこれは...?}
function StatusAppear() {
    document.getElementById('StatusAppearDisappear').innerHTML = '<button class="button" id="StatusButton" onclick="StatusDisappear()">status</button>';
    document.getElementById('Status').innerHTML = '攻撃力:' + playerattack + '   防御力:' + playerdefense + '   魔力:' + playermp + '<br>' + '   経験値:' + playerexp + '   お金' + money + '€';
}
function StatusDisappear() {
    document.getElementById('StatusAppearDisappear').innerHTML = '<button class="button" id="StatusButton" onclick="StatusAppear()">status</button>';
    document.getElementById('Status').textContent = '';
}
// こっからcityとかbossとかのやつです
function GoToCity(){
    document.getElementById('BattleScene').innerHTML = '<button class="button" id="GoToBattle" onclick="GoToBattle()">Go To Battle</button><br><br><br><button class="button" id="GoToBossBattle" onclick="GoToBossBattle()">Go To Boss Battle</button><br><br><br><button class="button" id="GoToCityBattle" onclick="GoToShop()">Go To Shop</button><br><br><br>';
} // document.getElementById("LevelPlate").src = 'level_plate_' + x + '.png';
let nowshop = 0;
let haveweapons = [];
let havearmors = [];
let havetools = [];
let equipweapon = 0;
let equiparmor = 0;
let equiptool1 = 0;
let equiptool2 = 0;
let equiptool3 = 0;
let weaponpower = 0;
let armorshell = 0;
function GoToShop(){
    nowshop = 0;
    document.getElementById('BattleScene').innerHTML = '<span id="InShopScene"><button class="button" id="ShopBuyWeapons" onclick="ShopBuyWeapons()">Buy Weapons</button><br><br><button class="button" id="ShopBuyArmors" onclick="ShopBuyArmors()">Buy Armors</button><br><br><button class="button" id="ShopBuyTools" onclick="ShopBuyTools()">Buy Tools</button><br><br><button class="button" id="ShopEquip" onclick="GoToEquip()">Equip Center</button></span><br><br><br><br><button class="button" id="BackToCity" onclick="GoToCity()">Back To City</button>';
}
function ShopBuyWeapons(){
    nowshop = 1;
    document.getElementById('BattleScene').innerHTML = '<span id="InShopScene"><span id="SHOPMONEY"></span><p>ここにはこんなものがあるけど、どうする？<br><iframe height="230" width="200" src="https://koppepan-orange-game.github.io/game_daisuki/clicker_of_mugen_shop_weapons.txt"></iframe><br><input type="text" id="ShopInputText" minlength="2" maxlength="2" size="16" placeholder="write number here"><button class="button" onclick="ShopBuyButton()">Buy</button><br><span id="SHOPlog"></span></p><button class="button" id="BakcToShop" onclick="GoToShop()">Back To Shop</button></span>';
    SHOPmoneytekiou();
}
function ShopBuyArmors(){
    nowshop = 2;
    document.getElementById('BattleScene').innerHTML = '<span id="InShopScene"><span id="SHOPMONEY"></span><p>うちの店ではこんなものが売ってるよ<br><iframe height="230" width="200" src="https://koppepan-orange-game.github.io/game_daisuki/clicker_of_mugen_shop_armors.txt"></iframe><br><input type="text" id="ShopInputText" minlength="2" maxlength="2" size="16" placeholder="write number here"><button class="button" onclick="ShopBuyButton()">Buy</button><br><span id="SHOPlog"></span></p><button class="button" id="BakcToShop" onclick="GoToShop()">Back To Shop</button></span>';
    SHOPmoneytekiou();
}
function ShopBuyTools(){
    nowshop = 3;
    document.getElementById('BattleScene').innerHTML = '<span id="InShopScene"><span id="SHOPMONEY"></span><p>いらっしゃいませぇぇぇぇぇ？？ご注文をどうぞ！！！！<br><iframe height="230" width="200" src="https://koppepan-orange-game.github.io/game_daisuki/clicker_of_mugen_shop_tools.txt"></iframe><br><input type="text" id="ShopInputText" minlength="2" maxlength="2" size="16" placeholder="write number here"><button class="button" onclick="ShopBuyButton()">Buy</button><br><span id="SHOPlog"></span></p><br><br><br><br><button class="button" id="BackToShop" onclick="GoToShop()">Back To Shop</button></span>';
    SHOPmoneytekiou();
}
function ShopBuyButton(){
    shopinputtext = document.getElementById('ShopInputText').value;
    switch(shopinputtext){
      case '01':
        if(nowshop == 1){
        if(haveweapons.includes("木の棒")){document.getElementById('SHOPlog').textContent = 'you already have a it!';}
        else{
        if(money >= 20){money -= 20; haveweapons.push('木の棒');document.getElementById('SHOPlog').textContent = '木の棒を購入しました!';}
        else{document.getElementById('SHOPlog').textContent = 'not enough money..';};
        }
        break;
        } else if(nowshop == 2){
        if(havearmors.includes("マスク")){document.getElementById('SHOPlog').textContent = 'you already have a it!';}
        else{
        if(money >= 10){money -= 10; havearmors.push('マスク');document.getElementById('SHOPlog').textContent = 'マスクを購入しました!';}
        else{document.getElementById('SHOPlog').textContent = 'not enough money..';};
        }
        break;
        } else if(nowshop == 3){
        if(money >= 30){money -= 30; havetools.push('アスピリン');document.getElementById('SHOPlog').textContent = 'アスピリンを購入しました!';}
        else{document.getElementById('SHOPlog').textContent = 'not enough money..';};
        break;
        }
      case '02':
        if(nowshop == 1){
        if(haveweapons.includes("木刀")){document.getElementById('SHOPlog').textContent = 'you already have a it!';}
        else{
        if(money >= 50){money -= 50; haveweapons.push('木刀');document.getElementById('SHOPlog').textContent = '木刀を購入しました!';}
        else{document.getElementById('SHOPlog').textContent = 'not enough money..';};
        }
        break;
        } else if(nowshop == 2){
        if(havearmors.includes("薄めの本")){document.getElementById('SHOPlog').textContent = 'you already have a it!';}
        else{
        if(money >= 20){money -= 20; havearmors.push('薄めの本');document.getElementById('SHOPlog').textContent = '薄い本を購入しました!';}
        else{document.getElementById('SHOPlog').textContent = 'not enough money..';};
        }
        break;
        } else if(nowshop == 3){
        if(money >= 50){money -= 50; havetools.push('パブロン');document.getElementById('SHOPlog').textContent = 'パブロンを購入しました!';}
        else{document.getElementById('SHOPlog').textContent = 'not enough money..';};
        break;
        }
      case '03':
        if(nowshop == 1){
        if(haveweapons.includes("竹刀")){document.getElementById('SHOPlog').textContent = 'you already have a it!';}
        else{
        if(money >= 100){money -= 100; haveweapons.push('竹刀');document.getElementById('SHOPlog').textContent = '竹刀を購入しました!';}
        else{document.getElementById('SHOPlog').textContent = 'not enough money..';};
        }
        break;
        } else if(nowshop == 2){
        if(havearmors.includes("木の板")){document.getElementById('SHOPlog').textContent = 'you already have a it!';}
        else{
        if(money >= 50){money -= 50; havearmors.push('木の板');document.getElementById('SHOPlog').textContent = '木の板を購入しました!';}
        else{document.getElementById('SHOPlog').textContent = 'not enough money..';};
        }
        break;
        } else if(nowshop == 3){
        if(money >= 100){money -= 100; havetools.push('トリプシン');document.getElementById('SHOPlog').textContent = 'トリプシンを購入しました!';}
        else{document.getElementById('SHOPlog').textContent = 'not enough money..';};
        break;
        }
      case '04':
        if(nowshop == 1){
        if(haveweapons.includes("石ころ")){document.getElementById('SHOPlog').textContent = 'you already have a it!';}
        else{
        if(money >= 200){money -= 200; haveweapons.push('石ころ');document.getElementById('SHOPlog').textContent = '石ころを購入しました!';}
        else{document.getElementById('SHOPlog').textContent = 'not enough money..';};
        }
        break;
        } else if(nowshop == 2){
        if(havearmors.includes("テッパン")){document.getElementById('SHOPlog').textContent = 'you already have a it!';}
        else{
        if(money >= 100){money -= 100; havearmors.push('テッパン');document.getElementById('SHOPlog').textContent = 'テッパンを購入しました!';}
        else{document.getElementById('SHOPlog').textContent = 'not enough money..';};
        }
        break;
        } else if(nowshop == 3){
        if(money >= 500){money -= 500; havetools.push('ルル');document.getElementById('SHOPlog').textContent = 'ルルを購入しました!';}
        else{document.getElementById('SHOPlog').textContent = 'not enough money..';};
        break;
        }
      case '05':
        if(nowshop == 1){
        if(haveweapons.includes("大きな石")){document.getElementById('SHOPlog').textContent = 'you already have a it!';}
        else{
        if(money >= 300){money -= 300; haveweapons.push('大きな石');document.getElementById('SHOPlog').textContent = '大きな石を購入しました!';}
        else{document.getElementById('SHOPlog').textContent = 'not enough money..';};
        }
        break;
        } else if(nowshop == 2){
        if(havearmors.includes("鍋の蓋")){document.getElementById('SHOPlog').textContent = 'you already have a it!';}
        else{
        if(money >= 300){money -= 300; havearmors.push('鍋の蓋');document.getElementById('SHOPlog').textContent = '鍋の蓋を購入しました!';}
        else{document.getElementById('SHOPlog').textContent = 'not enough money..';};
        }
        break;
        }
      case '06':
        if(nowshop == 1){
        if(haveweapons.includes("レンガ")){document.getElementById('SHOPlog').textContent = 'you already have a it!';}
        else{
        if(money >= 500){money -= 500; haveweapons.push('レンガ');document.getElementById('SHOPlog').textContent = 'レンガを購入しました!';}
        else{document.getElementById('SHOPlog').textContent = 'not enough money..';};
        }
        break;
        } else if(nowshop == 2){
        if(havearmors.includes("厚めの本")){document.getElementById('SHOPlog').textContent = 'you already have a it!';}
        else{
        if(money >= 500){money -= 500; havearmors.push('厚めの本');document.getElementById('SHOPlog').textContent = '厚めの本を購入しました!';}
        else{document.getElementById('SHOPlog').textContent = 'not enough money..';};
        }
        break;
        }
      case '07':
        if(nowshop == 1){
        if(haveweapons.includes("薄めの紙")){document.getElementById('SHOPlog').textContent = 'you already have a it!';}
        else{
        if(money >= 20){money -= 20; haveweapons.push('薄めの紙');document.getElementById('SHOPlog').textContent = '薄めの紙を購入しました!';}
        else{document.getElementById('SHOPlog').textContent = 'not enough money..';};
        }
        break;
        } else if(nowshop == 2){
        if(havearmors.includes("ドア")){document.getElementById('SHOPlog').textContent = 'you already have a it!';}
        else{
        if(money >= 1000){money -= 1000; havearmors.push('ドア');document.getElementById('SHOPlog').textContent = 'ドアを購入しました!';}
        else{document.getElementById('SHOPlog').textContent = 'not enough money..';};
        }
        break;
        }
      case '08':
        if(nowshop == 1){
        if(haveweapons.includes("カード")){document.getElementById('SHOPlog').textContent = 'you already have a it!';}
        else{
        if(money >= 77){money -= 77; haveweapons.push('カード');document.getElementById('SHOPlog').textContent = 'カードを購入しました!';}
        else{document.getElementById('SHOPlog').textContent = 'not enough money..';};
        }
        break;
      }
      case '09':
        if(nowshop == 1){
        if(haveweapons.includes("ハサミ")){document.getElementById('SHOPlog').textContent = 'you already have a it!';}
        else{
        if(money >= 600){money -= 600; haveweapons.push('はさみ');document.getElementById('SHOPlog').textContent = 'はさみを購入しました!';}
        else{document.getElementById('SHOPlog').textContent = 'not enough money..';};
        }
        break;
        }
      case '10':
        if(nowshop == 1){
        if(haveweapons.includes("ナイフ")){document.getElementById('SHOPlog').textContent = 'you already have a it!';}
        else{
        if(money >= 1000){money -= 1000; haveweapons.push('ナイフ');document.getElementById('SHOPlog').textContent = 'ナイフを購入しました!';}
        else{document.getElementById('SHOPlog').textContent = 'not enough money..';};
        }
        break;
        }
      case '11':
        if(nowshop == 3){
        if(money >= 40){money -= 40; havetools.push('投げナイフ');document.getElementById('SHOPlog').textContent = '投げナイフを購入しました!';}
        else{document.getElementById('SHOPlog').textContent = 'not enough money..';};
        break;
        } // 4 8 12 30
      case '12':
        if(nowshop == 3){
        if(money >= 80){money -= 80; havetools.push('トリッキーな変数');document.getElementById('SHOPlog').textContent = 'トリッキーな変数を購入しました!にはははは〜!!';}
        else{document.getElementById('SHOPlog').textContent = 'not enough money..';};
        break;
        }
      case '13':
        if(nowshop == 3){
        if(money >= 120){money -= 120; havetools.push('援護射撃');document.getElementById('SHOPlog').textContent = '援護射撃ライセンスを購入しました!';}
        else{document.getElementById('SHOPlog').textContent = 'not enough money..';};
        break;
        }
      case '14':
        if(nowshop == 3){
        if(money >= 300){money -= 300; havetools.push('ガラスの破片');document.getElementById('SHOPlog').textContent = 'ガラスの破片を購入しました!';}
        else{document.getElementById('SHOPlog').textContent = 'not enough money..';};
        break;
        }
      default:
        document.getElementById('SHOPlog').textContent = 'id doesnt exist...';
        break;
    }
    SHOPmoneytekiou();
    document.getElementById('ShopInputText').value = '';
  }
  function SHOPmoneytekiou(){
    document.getElementById('SHOPMONEY').textContent = money + '€';
  }
let appearweapons = '';
let appeararmors = '';
let appeartools = '';
function GoToEquip(){
    document.getElementById('BattleScene').innerHTML = '<span id="InShopScene"><p><button class="button"onclick="GoToEquipWeapon()">Equip Weapon</button><br><br><button class="button"onclick="GoToEquipArmor()">Equip Armor</button><br><br><button class="button"onclick="GoToEquipTool()">Equip Tool</button></p><br><br><br><br><button class="button" id="BakcToShop" onclick="GoToShop()">Back To Shop</button></span>'
}
function GoToEquipWeapon(){
    nowshop = 4;
    document.getElementById('BattleScene').innerHTML = '<span id="InShopScene"><p><span id="AppearShops"></span><br><br><input type="text" id="ShopInputText" minlength="2" maxlength="2" size="16" placeholder="write number here"><button class="button" onclick="ShopEquipButton()">Equip</button></p><br><br><span id="SHOPlog"></span><br><br><br><button class="button" id="BakcToShop" onclick="GoToShop()">Back To Shop</button></span>';
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
    if(x >= 1000000000){x -= 1000000000; appearweapons = '10 ナイフ';}
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
    appeararmors = '';
    x = 0;
    if(havearmors.includes("マスク")){x += 1;}
    if(havearmors.includes("薄めの本")){x += 10;}
    if(havearmors.includes("木の板")){x += 100;}
    if(havearmors.includes("テッパン")){x += 1000;}
    if(havearmors.includes("鍋の蓋")){x += 10000;}
    if(havearmors.includes("厚めの本")){x += 100000;}
    if(havearmors.includes("ドア")){x += 1000000;}
    if(x >= 1000000){x -= 1000000; appeararmors = '07 ドア'+ '<br>' + appeararmors;}
    if(x >= 100000){x -= 100000; appeararmors = '06 厚めの本'+ '<br>' + appeararmors;}
    if(x >= 10000){x -= 10000; appeararmors = '05 鍋の蓋'+ '<br>' + appeararmors;}
    if(x >= 1000){x -= 1000; appeararmors = '04 テッパン'+ '<br>' + appeararmors;}
    if(x >= 100){x -= 100; appeararmors = '03 木の板'+ '<br>' + appeararmors;}
    if(x >= 10){x -= 10; appeararmors = '02 薄めの本'+ '<br>' + appeararmors;}
    if(x >= 1){x -= 1; appeararmors = '01 マスク'+ '<br>' + appeararmors;}
    document.getElementById('AppearShops').innerHTML = appeararmors;
  }
  function GoToEquipTool(){
    nowshop = 6;
    document.getElementById('BattleScene').innerHTML = '<span>えーっと...開発期間が短かったです！テスト期間と重なってたし<br>なのでもうちょい待ってね〜<br>magicの動きを応用すればすぐにできるから<br>あ、メモwebのネタ帳に"もはやただのあれ"を追加したから、暇だったらみてね<br>配信者さんはguraさんしかみないのです</span><br><br><button onclick="GoToCity()">Back</button><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><a href="https://scratch.mit.edu/projects/1000452587/">wait....what?!</a>'; //この文たちは消しといてね
  }
function ShopEquipButton(){
  shopinputtext = document.getElementById('ShopInputText').value;
  switch(shopinputtext){
    case '01':
      if(nowshop == 4){
      if(haveweapons.includes("木の棒")){
        document.getElementById('SHOPlog').textContent = 'あなたは木の棒を装備しました！';
        equipweapon = 1;
        weaponpower = 1;
      }
      else{document.getElementById('SHOPlog').textContent = 'you dont have it!';}
      break;
      } else if(nowshop == 5){
      if(havearmors.includes("マスク")){
        document.getElementById('SHOPlog').textContent = 'あなたはマスクを装備しました！';
        equiparmor = 1;
        armorshell = 0;
      }
      else{document.getElementById('SHOPlog').textContent = 'you dont have it!';}
      break;
      };
    case '02':
      if(nowshop == 4){
      if(haveweapons.includes("木刀")){
        document.getElementById('SHOPlog').textContent = 'あなたは木刀を装備しました！';
        equipweapon = 2;
        weaponpower = 2;
      }
      else{document.getElementById('SHOPlog').textContent = 'you dont have it!';}
      break;
      } else if(nowshop == 5){
      if(havearmors.includes("薄めの本")){
        document.getElementById('SHOPlog').textContent = 'あなたは薄い本を装備しました！';
        equiparmor = 2;
        armorshell = 0;
      }
      else{document.getElementById('SHOPlog').textContent = 'you dont have it!';}
      break;
      };
    case '03':
      if(nowshop == 4){
        if(haveweapons.includes("竹刀")){
          document.getElementById('SHOPlog').textContent = 'あなたは竹刀を装備しました！';
          equipweapon = 3;
        weaponpower = 3;
        }
        }
      else if(nowshop == 5){
      if(havearmors.includes("木の板")){
        document.getElementById('SHOPlog').textContent = 'あなたは木の板を装備しました！';
        equiparmor = 3;
        armorshell = 1;
      }
      else{document.getElementById('SHOPlog').textContent = 'you dont have it!';}
      break;
      };
    case '04':
      if(nowshop == 4){
        if(haveweapons.includes("石ころ")){
          document.getElementById('SHOPlog').textContent = 'あなたは石ころを装備しました！';
          equipweapon = 4;
          weaponpower = 4;
        } 
        } 
      else if(nowshop == 5){
      if(havearmors.includes("テッパン")){
        document.getElementById('SHOPlog').textContent = 'あなたはテッパンを装備しました！';
        equiparmor = 4;
        armorshell = 2;
      }
      else{document.getElementById('SHOPlog').textContent = 'you dont have it!';}
      break;
      };
    case '05':
      if(nowshop == 4){
        if(haveweapons.includes("大きな石")){
          document.getElementById('SHOPlog').textContent = 'あなたは大きな石を装備しました！';
          equipweapon = 5;
          weaponpower = 5;
        }
        }
      else if(nowshop == 5){
      if(havearmors.includes("鍋の蓋")){
        document.getElementById('SHOPlog').textContent = 'あなたは鍋の蓋を装備しました！';
        equiparmor = 5;
        armorshell = 3;
      }
      else{document.getElementById('SHOPlog').textContent = 'you dont have it!';}
      break;
      };
    case '06':
      if(nowshop == 4){
        if(haveweapons.includes("レンガ")){
          document.getElementById('SHOPlog').textContent = 'あなたはレンガを装備しました！';
          equipweapon = 6;
          weaponpower = 6;
        }

        }
    else if(nowshop == 5){
      if(haveweapons.includes("厚めの本")){
        document.getElementById('SHOPlog').textContent = 'あなたは厚めの本を装備しました！';
        equiparmor = 6;
        armorshell = 4;
      }
      else{document.getElementById('SHOPlog').textContent = 'you dont have it!';}
      break;
      };
    case '07':
      if(nowshop == 4){
        if(haveweapons.includes("薄めの紙")){
          document.getElementById('SHOPlog').textContent = 'あなたは薄めの紙を装備しました！';
          equipweapon = 7;
          weaponpower = 1;
        }
        }
      else if(nowshop == 5){
        if(haveweapons.includes("ドア")){
          document.getElementById('SHOPlog').textContent = 'あなたはドアを装備しました！';
          equiparmor = 7;
          armorshell = 5;
        }
        else{document.getElementById('SHOPlog').textContent = 'you dont have it!';}
        break;
        };
    case '08':
      if(nowshop == 4){
        if(haveweapons.includes("カード")){
          document.getElementById('SHOPlog').textContent = 'あなたはカードを装備しました！';
          equipweapon = 8;
          weaponpower = 1;
        }
          break;
        };
    case '09':
      if(nowshop == 4){
        if(haveweapons.includes("はさみ")){
          document.getElementById('SHOPlog').textContent = 'あなたははさみを装備しました！';
          equipweapon = 9;
          weaponpower = 7;
        }
          break;
        };
    case '10':
      if(nowshop == 4){
        if(haveweapons.includes("ナイフ")){
          document.getElementById('SHOPlog').textContent = 'あなたはナイフを装備しました！';
          equipweapon = 10;
          weaponpower = 8;
        }
          break;
        };
    }
    document.getElementById('ShopInputText').value = '';
}
function GoToBossBattle(){
    document.getElementById('BattleScene').innerHTML = '<button class="button" onclick="TenBossBattleStart()">10LV Boss</button><br><br><br><br><button class="button" id="GoToCity" onclick="BackToCityFromBossBattle()">Go To City</button>';
}
let bossbattlenow = 0; // killenemyとかの動きをなんとかするようですね。scratchでもやってたわこれ
let bossbattlenumber = 0;
let bossenemyprefixes1 = ['とても','めっちゃ'];
let bossenemyprefixe1 = 0;
let bossenemyprefixes2 = ['強い','頭のおかしい'];
let bossenemyprefixe2 = 0;
function TenBossBattleStart(){
    document.getElementById('BattleScene').innerHTML = '<span>turn:</span><span id="TurnCount">0</span><br><b id="EnemyName">enemy</b>   <i>Lv.</i><i id="EnemyLevel">20</i>   <u id="EnemyDebuff"></u>   <u id="EnemySkillDebuff"></u>   <u id="EnemySkillBuff"></u><br><span id="EnemyHealth">0</span>/<span id="EnemyMaxHealth">0</span><span id="EnemyFriendFront"></span><span id="PlayerFriendFront"></span><br><br><b id="PlayerName">player</b>   <i>Lv.</i><i id="PlayerLevel">1</i>   <u id="PlayerBuff"></u>   <u id="PlayerSkillBuff"></u>   <u id="PlayerSkillDebuff"></u><span id="AdditionalPlayerPoint"></span><br><span id="PlayerHealth">0</span>/<span id="PlayerMaxHealth">0</span><span id="PlayerFriendBack"></span><br><br><br><button class="button" id="select1" onclick="select1()">attack</button>  <button class="button" id="select2" onclick="select2()">magic</button>  <button class="button" id="select3" onclick="select3()">tools</button>  <button class="button" id="back" onclick="back()">pass</button>  <br><span id="Skillbutton"> </span><br><br><span align="center" id="log">lets kill boss!</span><br><span id="StatusAppearDisappear"><button class="button" id="StatusButton" onclick="StatusAppear()">status</button></span><br><span id="Status"> </span><br><br><br><br><span id="BackButtonDesu"><button align="center" class="button" onclick="GoToCity()">Back</button></span>';
    turncount = 0;document.getElementById('TurnCount').textContent = turncount;playermp = playermaxmp;playerbuff = 0;playerpower = 1; playershell = 1;x = 0;if (playerskillbuff == 1){x = 1}playerskillbuff = 0;if (x == 1){playerskillbuff = 1};enemydebuff = 0;enemyskilldebuff = 0;bufftekiou();mechanicturretbreak();
    bossbattlenow = 1;bossbattlenumber = 1;enemymaxhealth = 80 + (playerattack * 5);enemyhealth = enemymaxhealth;enemylevel = 10;enemyhealth = enemymaxhealth;
    bossenemyprefixe1 = 0;bossenemyprefixe2 = 0;enemyname = 'blueslime';y = Math.floor(Math.random() * 3);if(y !== 0){bossenemyprefixe1 = bossenemyprefixes1[Math.floor(Math.random() * bossenemyprefixes1.length)]}y = Math.floor(Math.random() * 3);if(y !== 0){bossenemyprefixe2 = bossenemyprefixes2[Math.floor(Math.random() * bossenemyprefixes2.length)]}if(bossenemyprefixe1 !== 0 && bossenemyprefixe2 !== 0){enemyname = bossenemyprefixe1 + bossenemyprefixe2 + ' ' + enemyname}else if (bossenemyprefixe1 !== 0 && bossenemyprefixe2 == 0){enemyname = bossenemyprefixe1 + ' ' + enemyname}else if (bossenemyprefixe1 == 0 && bossenemyprefixe2 !== 0){enemyname = enemyname}else {enemyname = enemyname};document.getElementById("EnemyName").textContent = enemyname;document.getElementById('log').textContent = enemyname + 'を見つけた!';document.getElementById('EnemyLevel').textContent = enemylevel;document.getElementById('EnemyMaxHealth').textContent = enemymaxhealth;tekiou();// ほぼ普通の戦闘と同じなので短縮です
    document.getElementById('PlayerMaxHealth').textContent = playermaxhealth;
    window.setTimeout(playerturn, 750);turncountincrease();
}
async function bossenemyturn(){
    if(playerskilldebuff == 1){playerskilldebuff = 0;bufftekiou();document.getElementById('log').textContent = playername + 'からスライムが剥がれた!';await delay(1000);};
    if(playername == 'mechanic' && mechanicturret > 0){document.getElementById('log').textContent = 'turretの攻撃!';await delay(1000);x = enemyhealth;y = enemyhealth;x -= (mechanicturretattack * mechanicturret);x = Math.floor(x);damage = y - x;if(damage < 0){damage = 0};if(damage > y){damage = y};enemyhealth -= damage;document.getElementById('log').textContent = enemyname + 'に' + damage + 'のダメージ!!';if (enemyhealth < 0){enemyhealth = 0};tekiou();await delay(1000);}if (enemyhealth == 0){killedenemy();}
    else {turn = 2;document.getElementById('log').textContent = '敵のターンです!';window.setTimeout(Bossenemyattack, 1000);}
}
async function Bossenemyattack(){
    w = 'null';
    if (playername == 'mechanic'){w = Math.floor(Math.random() * 5);};
    if (enemyskilldebuff == 1){w = 10;};
    z = Math.floor(Math.random() * 3);
    if(z == 0){
    x = playerhealth;
    y = playerhealth;
    x -= enemylevel;
    x += playerdefense * playershell;
    damage = playerhealth - x;
    if (damage < 0){damage = 0;};
    if (w == 0 || w == 10){damage = 0;};
    if (playerskillbuff == 1){y = greenslimecopyhealth; greenslimecopyhealth -= damage; if(greenslimecopyhealth < 0){greenslimecopyhealth = 0} greenslimecopytekiou(); greenslimecopyhealth = Math.floor(greenslimecopyhealth); z = y - greenslimecopyhealth; if(greenslimecopyhealth == 0){greenslimecopybreak(); await delay(1000)};}
    else if (zombiefriendname !== 0){y = zombiefriendhealth; zombiefriendhealth -= damage; if(zombiefriendhealth < 0){zombiefriendhealth = 0} zombiefriendtekiou(); zombiefriendhealth = Math.floor(zombiefriendhealth); z = y - zombiefriendhealth; if(zombiefriendhealth == 0){zombiefriendbreak(); await delay(1000)};}
    else {playerhealth -= damage; playerhealth = Math.floor(playerhealth); z = y - playerhealth;};
    if(w == 0){document.getElementById('log').textContent = enemyname + 'はスタンした!!';}
    else if(w == 10){document.getElementById('log').textContent = 'blueslimeはくっついたスライムを吸収した!'; enemyskilldebuff = 0; bufftekiou(); await delay(1000);}
    else if (z == 0){document.getElementById('log').textContent = 'miss! ' + playername + 'にダメージを与えられない!';}
    else {
        if(playername == 'bomer' && bomertension > 0){bomertension -= 1; bomertekiou()}; // bomerのtensionを下げる動き
        if(playername == 'shaosan'){shaopower += 0.2; document.getElementById('log').textContent = '何やっとんねん チンピラどもーーーーッ';};// shaosanのpowerを上げる動き
        document.getElementById('log').textContent = playername + 'に' + z + 'のダメージ!';
    };
    if (playerhealth < 0){playerhealth = 0};
    if (playerhealth == 0){defeat();turn = 0;}
    tekiou();
    if (enemyskilldebuff == 1){await delay(1000);enemyskilldebuff = 0;bufftekiou();document.getElementById('log').textContent = enemyname + 'からスライムが剥がれた!';};
    } //bossの通常攻撃ですこちら
    else if (z == 1){if(bossbattlenumber==1){
        if(w == 10){document.getElementById('log').textContent = 'blueslimeはくっついたスライムを吸収した!'; enemyskilldebuff = 0; bufftekiou(); await delay(1000);}
        if(w == 0){document.getElementById('log').textContent = enemyname + 'はスタンした!!';}
        else
        document.getElementById('log').textContent = 'blueslimeは' + playername + 'にスライムをくっつけてきた！';
        playerskilldebuff = 1; bufftekiou();
        if(playername == 'greenslime'){await delay(1000);playerskilldebuff = 0; bufftekiou();document.getElementById('log').textContent = 'greenslimeはスライムを吸収した!';};
        await delay(1000);
        document.getElementById('log').textContent = playername + 'に' + 2 + 'のダメージ！';
        x = (Math.floor(playerhealth*0.05));if(x==0){x=1};
        playerhealth -= x;
        if(playerhealth <= 0){playerhealth = 0; defeat();turn = 0;};
        if(playername == 'bomer' && bomertension > 0){bomertension -= 1; bomertekiou()}; // bomerのtensionを下げる動き
        if(playername == 'shaosan'){shaopower += 0.2; document.getElementById('log').textContent = '何やっとんねん チンピラどもーーーーッ';};// shaosanのpowerを上げる動き
        tekiou();
    } // こちらはスタン+固定2
    } else if (z == 2){if(bossbattlenumber == 1){
        if(w == 10){document.getElementById('log').textContent = 'blueslimeはくっついたスライムを吸収した!'; enemyskilldebuff = 0; bufftekiou(); await delay(1000);}
        if(w == 0){document.getElementById('log').textContent = enemyname + 'はスタンした!!';}
        else
        playerdefense -= 1; lowedplayerdefense += 1;
        if(playerdefense < 0){playerdefense = 0; lowedplayerdefense -= 1;}
        document.getElementById('log').textContent = 'blueslimeは' + playername + 'の防御力を下げてきた!';
        if(playername == 'shaosan'){shaopower += 0.2; document.getElementById('log').textContent = '何やっとんねん チンピラどもーーーーッ';};// shaosanのpowerを上げる動き
    }// こちらは防御下げ
    }
    if (turn == 2){
    if (enemydebuff == 1) {
        x = enemyhealth;
        enemyhealth -= enemymaxhealth * 0.05
        enemyhealth = Math.floor(enemyhealth)
        if (enemyhealth < 0){enemyhealth = 0}
        y = x - enemyhealth;
    } else if (enemydebuff == 2) {
        x = enemyhealth;
        enemyhealth -= enemymaxhealth * 0.1
        enemyhealth = Math.floor(enemyhealth)
        if (enemyhealth < 0){enemyhealth = 0}
        y = x - enemyhealth;
    } 
    if (enemydebuff == 1 || enemydebuff == 2) {await delay(1000);document.getElementById('log').textContent = enemyname + 'は毒で' + y + 'のダメージ!';};
    tekiou();
    if (enemyhealth < 0){enemyhealth = 0}
    if (enemyhealth == 0){window.setTimeout(killedenemy, 1000)}
    else {
        if(playerskillbuff == 5){await delay(1000); playerskillbuff = 0; document.getElementById('log').textContent = 'やる気が落ち着いた!';}
        await delay(1000);
        playerturn()
        turncountincrease()
        SkillCooldownDecrease()
        NSaction()
    }
}
}
async function killedbossenemy(){
    turn = 0;
    x = playerexp
    playerexp += (enemylevel * 0.5 + 5 * 2);
    y = playerexp - x;
    document.getElementById('log').textContent = enemyname + 'を倒した!やったね!!';
    if(playername == 'bomer'){z = 0; z += 2; if(playerskillbuff == 5){z += 1; playerskillbuff = 0; bufftekiou();}; if(bomerbombused == 1){z += 3; bomerbombused = 0;}; await delay(1000); bomertension += z; document.getElementById('log').textContent =  'bomerはテンションが' + z + '上がった!'; bomertekiou();};
    if(playername == 'zomusan'){zomupower = 1;};
    await delay(1000);
    z = Math.floor(Math.random() * 11) + 5;
    z *= (enemylevel * 0.5 + 5);
    z = Math.floor(z);
    money += z;
    document.getElementById('log').textContent =  z + '€を獲得した!!';
    await delay(1000);
    document.getElementById('log').textContent = y + 'の経験値を奪った!';
    window.setTimeout(playersutefuri, 1000)
}
function BackToCityFromBossBattle(){
    playerattack += lowedplayerattack;
    playerdefense += lowedplayerdefense;
    playermaxmp += lowedplayermaxmp;
    playermaxhealth += lowedplayermaxhealth;
    playerlevel += lowedplayerlevel;
    document.getElementById('BattleScene').innerHTML = '<button class="button" id="GoToBattle" onclick="GoToBattle()">Go To Battle</button><br><br><br><button class="button" id="GoToBossBattle" onclick="GoToBossBattle()">Go To Boss Battle</button><br><br><br><button class="button" id="GoToCityBattle" onclick="GoToShop()">Go To Shop</button><br><br><br>';
} // 色々下げられてたら戻すよっていう動き。戻さない敵とかもいていいかも..っておもったけどそれはさすがにあれか？

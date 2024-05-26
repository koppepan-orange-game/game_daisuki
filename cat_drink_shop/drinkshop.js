let x = 0;
let y = 0;
let z = 0;
let euro = 0;
let difficluty = 0;
let guestvoicehello = ['こんにちは！','こんなとこにドリンク屋あったんだ...','喉乾いた...もう死にそう.....','喉かわいたぁぁぁぁぁ','動いてないのに暑いよ〜','hello! I want something to drink...','あ..すみません....']
let guestvoicehappy = ['']
let guestvoicesad = ['']
let guestorder = ['水','牛乳','お茶','あがり','オレンジジュース','グレープジュース','カルピス','コーヒー','モンスターエネルギードリンク','ビール','ミックスジュース','コーヒー牛乳','フルーツ牛乳','ミックス牛乳','オレピス','グレピス','コヒピス','ミルピス','薄めたお茶','薄めた牛乳','薄めたオレンジジュース','薄めたグレープジュース','薄めたコーヒー','薄めたカルピス','薄めたビール'];
let ordera = 0;
let orderb = 0;
let a = 0;
let b = 0;
let c = 0;
let d = 0;
//あがりはお茶。　(order == 'お茶' || order == 'あがり')にしないといけないからめんどい
function delay(ms) {return new Promise(resolve => setTimeout(resolve, ms));} // いつもの遅延
function tekiou(){document.getElementById('Euro').textContent = euro;}
function appear(){
    document.getElementById('shopscene').innerHTML = '<button onclick="inviteguest()">invite</button>'
}
function start(){
    euro = 0;
    tekiou();
    appear();
}
async function inviteguest(){
    x = guestvoicehello[Math.floor(Math.random() * guestvoicehello.length)];
    document.getElementById('log').textContent = x;
    if(x == 'hello! I want something to drink...'){difficluty = 1;}//English mode
    else if(x == 'あ..すみません....'){difficluty = 2;}//Introvert mode
    else{difficluty = 0;}//Normal mode
    ordera = guestorder[Math.floor(Math.random() * guestorder.length)];
    orderb = guestorder[Math.floor(Math.random() * guestorder.length)];
    if(difficluty == 1){
        switch(ordera){
            case '水':
                a = 'water';
                break;
            case '牛乳':
                a = 'milk';
                break;
            case 'お茶':
                a = 'tea';
                break;
            case 'あがり':
                a = 'soda';
                break;
            case 'オレンジジュース':
                a = 'orange juice';
                break;
            case 'グレープジュース':
                a = 'grape juice';
                break;
            case 'カルピス':
                a = 'calpis';
                break;
            case 'コーヒー':
                a = 'coffee';
                break;
            case 'モンスターエネルギードリンク':
                a = 'monster energy drink';
                break;
            case 'ビール':
                a = 'beer';
                break;
            case 'ミックスジュース':
                a = 'mix juice';
                break;
            case 'コーヒー牛乳':
                a = 'coffee milk';
                break;
            case 'フルーツ牛乳':
                a = 'fruit milk';
                break;
            case 'ミックス牛乳':
                a = 'mix milk';
                break;
            case 'オレピス':
                a = 'orange calpis';
                break;
            case 'グレピス':
                a = 'grape calpis';
                break;
            case 'コヒピス':
                a = 'coffee calpis';
                break;
            case 'ミルピス':
                a = 'milk calpis';
                break;
            case '薄めたお茶':
                a = 'diluted tea';
                break;
            case '薄めた牛乳':
                a = 'diluted milk';
                break;
            case '薄めたオレンジジュース':
                a = 'diluted orange juice';
                break;
            case '薄めたグレープジュース':
                a = 'diluted grape juice';
                break;
            case '薄めたカルピス':
                a = 'diluted calpis';
                break;
            case '薄めたコーヒー':
                a = 'diluted coffee';
                break;
            case '薄めたビール':
                a = 'diluted beer';
                break;
        }
        switch(orderb){
            case '水':
                b = 'water';
                break;
            case '牛乳':
                b = 'milk';
                break;
            case 'お茶':
                b = 'tea';
                break;
            case 'あがり':
                b = 'soda';
                break;
            case 'オレンジジュース':
                b = 'orange juice';
                break;
            case 'グレープジュース':
                b = 'grape juice';
                break;
            case 'カルピス':
                b = 'calpis';
                break;
            case 'コーヒー':
                b = 'coffee';
                break;
            case 'モンスターエネルギードリンク':
                b = 'monster energy drink';
                break;
            case 'ビール':
                b = 'beer';
                break;
            case 'ミックスジュース':
                b = 'mix juice';
                break;
            case 'コーヒー牛乳':
                b = 'coffee milk';
                break;
            case 'フルーツ牛乳':
                b = 'fruit milk';
                break;
            case 'ミックス牛乳':
                b = 'mix milk';
                break;
            case 'オレピス':
                b = 'orange calpis';
                break;
            case 'グレピス':
                b = 'grape calpis';
                break;
            case 'コヒピス':
                b = 'coffee calpis';
                break;
            case 'ミルピス':
                b = 'milk calpis';
                break;
            case '薄めたお茶':
                b = 'diluted tea';
                break;
            case '薄めた牛乳':
                b = 'diluted milk';
                break;
            case '薄めたオレンジジュース':
                b = 'diluted orange juice';
                break;
            case '薄めたグレープジュース':
                b = 'diluted grape juice';
                break;
            case '薄めたカルピス':
                b = 'diluted calpis';
                break;
            case '薄めたコーヒー':
                b = 'diluted coffee';
                break;
            case '薄めたビール':
                b = 'diluted beer';
                break;
        }
        c = ' and,';
        d = ', please.';
    }
    if(difficluty == 2){a = ordera; b = orderb; c = '...と'; d = '...でお願いします' }
    if(difficluty == 0){a = ordera; b = orderb; c = 'と、'; d = 'でお願いします！';};
    await delay(1000);
    y = 1500;
    if(difficluty == 2){y = 500;};
    document.getElementById('log').textContent = a + c;
    await delay(y);
    document.getElementById('log').textContent = b + d;
    await delay(y);
    drinkberopen();
}
function drinkberopen(){
    document.getElementById('shopscene').innerHTML = '<canvas>'
}
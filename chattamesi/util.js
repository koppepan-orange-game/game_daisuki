// util.js

// HTMLエレメントを取得
const chatbox = document.getElementById('chatbox');
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');

// メッセージを送信する関数
function sendMessage() {
  const message = messageInput.value.trim();
  if (message) {
    // サーバーにメッセージを送信する (Ajax通信)
    sendMessageToServer(message);
    messageInput.value = ''; // 入力欄を空にする
  }
}

// サーバーにメッセージを送信する関数 (Ajax通信)
function sendMessageToServer(message) {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'server.php', true);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      // サーバーからの応答を処理する
      console.log(xhr.responseText);
    }
  }
  xhr.send('message=' + encodeURIComponent(message));
}

// サーバーからのメッセージを表示する関数
function displayMessage(message) {
  const messageElement = document.createElement('div');
  messageElement.textContent = message;
  chatbox.appendChild(messageElement);
}

// イベントリスナーを設定する
sendButton.addEventListener('click', sendMessage);
messageInput.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    sendMessage();
  }
});

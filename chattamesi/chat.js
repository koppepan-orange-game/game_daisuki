const chatbox = document.getElementById('chatbox');
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');

// メッセージを送信する関数
function sendMessage() {
  const message = messageInput.value.trim();
  if (message) {
    // メッセージをサーバーに送信する (後述)
    sendMessageToServer(message);
    messageInput.value = '';
  }
}

// サーバーからのメッセージを表示する関数
function displayMessage(message) {
  const messageElement = document.createElement('div');
  messageElement.textContent = message;
  chatbox.appendChild(messageElement);
}

// サーバーとの通信を行う (後述)
function sendMessageToServer(message) {
  // ここでサーバーへの通信を行う
  // 例: XMLHttpRequestまたはFetchAPIを使用してサーバーに送信
  // サーバーからの応答を受け取ったら、displayMessage関数を呼び出す
}

// イベントリスナーを設定する
sendButton.addEventListener('click', sendMessage);
messageInput.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    sendMessage();
  }
});
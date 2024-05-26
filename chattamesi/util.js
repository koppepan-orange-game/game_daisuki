// util.js

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

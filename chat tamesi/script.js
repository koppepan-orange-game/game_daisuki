// script.js

const socket = io();

// メッセージ送信関数
function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value.trim();
    if (message !== '') {
        const data = {
            message: message,
            timestamp: new Date().toISOString()
        };
        socket.emit('message', data);
        messageInput.value = ''; // 入力フィールドをクリア
    }
}

// メッセージ表示関数
function displayMessage(sender, message, timestamp) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message} (${timestamp})`;
    chatBox.appendChild(messageElement);
}

// メッセージ受信イベント
socket.on('message', (data) => {
    displayMessage('User', data.message, data.timestamp);
});

// メッセージ送信ボタンのクリックイベント
document.getElementById('send-button').addEventListener('click', sendMessage);

// テキスト入力フィールドでEnterキーが押されたときのイベント
document.getElementById('message-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

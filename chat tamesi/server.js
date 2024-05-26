// server.js

const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const mysql = require('mysql');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// MySQL接続設定
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'username',
    password: 'password',
    database: 'chatapp'
});

// データベース接続
connection.connect((err) => {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }
    console.log('Connected to database.');
});

// WebSocket接続イベント
io.on('connection', (socket) => {
    console.log('A user connected');

    // メッセージ受信イベント
    socket.on('message', (data) => {
        console.log('Message received: ' + JSON.stringify(data));

        // メッセージをデータベースに保存
        connection.query('INSERT INTO messages SET ?', data, (error, results, fields) => {
            if (error) throw error;
            console.log('Message saved to database.');
        });

        // 全クライアントにメッセージを送信
        io.emit('message', data);
    });

    // 切断イベント
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

server.listen(3000, () => {
    console.log('Server listening on port 3000');
});

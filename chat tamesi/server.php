<?php
// データベースに接続する
$servername = "localhost";
$username = "your_username";
$password = "your_password";
$dbname = "chat_database";

$conn = new mysqli($servername, $username, $password, $dbname);

// 接続に失敗した場合はエラーを表示する
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// クライアントからのメッセージを受け取る
$message = $_POST['message'];

// メッセージをデータベースに保存する
$sql = "INSERT INTO messages (message) VALUES ('$message')";
if ($conn->query($sql) === TRUE) {
    echo "メッセージが送信されました";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
<?php
session_start();
require_once '../db.php';
$data = json_decode(file_get_contents('php://input'), true);
$user = $conn->real_escape_string($data['username']);
$pass = $data['password'];
$sql = $conn->prepare('SELECT password FROM admin WHERE username = ?');
$sql->bind_param('s', $user);
$sql->execute();
$res = $sql->get_result();
if ($res->num_rows === 1) {
  $row = $res->fetch_assoc();
  if (password_verify($pass, $row['password'])) {
    $_SESSION['admin'] = $user;
    echo json_encode(['success' => true]);
    exit;
  }
}
echo json_encode(['success' => false]);
?>
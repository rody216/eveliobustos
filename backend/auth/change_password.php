<?php
session_start();
require_once '../db.php';
if (!isset($_SESSION['admin'])) { http_response_code(403); exit; }
$data = json_decode(file_get_contents('php://input'), true);
$new = password_hash($data['newPassword'], PASSWORD_BCRYPT);
$sql = $conn->prepare('UPDATE admin SET password = ? WHERE username = ?');
$sql->bind_param('ss', $new, $_SESSION['admin']);
$sql->execute();
echo json_encode(['success' => $sql->affected_rows > 0]);
?>
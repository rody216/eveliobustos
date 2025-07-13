<?php
session_start();
require_once '../db.php';
if (!isset($_SESSION['admin'])) { http_response_code(403); exit; }
$id = intval($_GET['id']);
$conn->query("DELETE FROM testimonios WHERE id = $id");
echo json_encode(['success' => true]);
?>
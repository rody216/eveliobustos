<?php
require_once '../db.php';
$author = $_POST['author'];
$quote = $_POST['quote'];
$avatar = 'uploads/default.jpg';
if (!empty($_FILES['avatar']['name'])) {
  $fileTmp = $_FILES['avatar']['tmp_name'];
  $fileName = uniqid() . '_' . basename($_FILES['avatar']['name']);
  $dest = '../uploads/' . $fileName;
  move_uploaded_file($fileTmp, $dest);
  $avatar = 'uploads/' . $fileName;
}
$stmt = $conn->prepare('INSERT INTO testimonios (author, quote, avatar) VALUES (?, ?, ?)');
$stmt->bind_param('sss', $author, $quote, $avatar);
$stmt->execute();
echo json_encode(['success' => $stmt->affected_rows > 0]);
?>
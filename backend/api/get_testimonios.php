<?php
require_once '../db.php';
$res = $conn->query('SELECT id, author, quote, avatar FROM testimonios ORDER BY id DESC');
$data = [];
while ($row = $res->fetch_assoc()) {
  $data[] = $row;
}
echo json_encode($data);
?>
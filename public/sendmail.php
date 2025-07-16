<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = htmlspecialchars(trim($_POST["name"]));
  $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
  $service = htmlspecialchars(trim($_POST["service"]));
  $message = htmlspecialchars(trim($_POST["message"]));

  $to = "eveliobustos@gmail.com";
  $subject = "Nuevo mensaje de contacto desde el sitio web";
  $headers = "From: $name <$email>\r\n";
  $headers .= "Reply-To: $email\r\n";
  $headers .= "Content-Type: text/plain; charset=utf-8\r\n";

  $body = "Has recibido un nuevo mensaje:\n\n";
  $body .= "Nombre: $name\n";
  $body .= "Correo: $email\n";
  $body .= "Servicio: $service\n";
  $body .= "Mensaje:\n$message\n";

  if (mail($to, $subject, $body, $headers)) {
    http_response_code(200);
    echo "Mensaje enviado";
  } else {
    http_response_code(500);
    echo "Error al enviar el mensaje.";
  }
} else {
  http_response_code(403);
  echo "Método no permitido.";
}


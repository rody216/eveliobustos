<?php
header("Content-Type: text/plain; charset=utf-8");

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = htmlspecialchars(trim($_POST["name"] ?? ''));
    $email = filter_var(trim($_POST["email"] ?? ''), FILTER_SANITIZE_EMAIL);
    $service = htmlspecialchars(trim($_POST["service"] ?? ''));
    $message = htmlspecialchars(trim($_POST["message"] ?? ''));

    // Validaciones básicas
    if (!$name || !$email || !$service || !$message) {
        http_response_code(400);
        echo "Faltan datos en el formulario.";
        exit;
    }

    $to = "contacto@eveliobustosapache.com";
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
        echo "success"; // 👈 importante: esto espera React para redirigir
    } else {
        http_response_code(500);
        echo "Error al enviar el correo.";
    }
} else {
    http_response_code(405); // Método no permitido
    echo "Método no permitido.";
}

<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name    = htmlspecialchars(trim($_POST["name"]));
    $email   = filter_var($_POST["email"], FILTER_VALIDATE_EMAIL);
    $service = htmlspecialchars(trim($_POST["service"]));
    $message = htmlspecialchars(trim($_POST["message"]));

    if ($name && $email && $service && $message) {
        $to = "rody216@gmail.com";
        $subject = "Consulta desde el sitio web";
        $headers = "From: $name <$email>\r\n";
        $headers .= "Reply-To: $email\r\n";
        $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

        $body = "Nombre: $name\nCorreo: $email\nServicio: $service\nMensaje:\n$message";

        if (mail($to, $subject, $body, $headers)) {
            http_response_code(200);
            echo "Mensaje enviado con éxito.";
        } else {
            http_response_code(500);
            echo "Hubo un error al enviar el mensaje.";
        }
    } else {
        http_response_code(400);
        echo "Todos los campos son obligatorios.";
    }
} else {
    http_response_code(403);
    echo "Método no permitido.";
}
?>

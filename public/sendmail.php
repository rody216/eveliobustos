<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Requiere los archivos de PHPMailer manualmente (asegúrate que estén en /phpmailer)
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Cargar archivo .env manualmente
function loadEnv($path)
{
    if (!file_exists($path)) return;
    $lines = file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        if (strpos(trim($line), '#') === 0) continue;
        list($key, $value) = explode('=', $line, 2);
        $key = trim($key);
        $value = trim($value);
        putenv("$key=$value");
        $_ENV[$key] = $value;
        $_SERVER[$key] = $value;
    }
}

// Cargar las variables desde .env
loadEnv(__DIR__ . '/.env');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $mail = new PHPMailer(true);

    try {
        // Configuración del servidor SMTP
        $mail->isSMTP();
        $mail->Host = 'smtp.hostinger.com';
        $mail->SMTPAuth = true;
        $mail->Username = $_ENV['SMTP_USERNAME'];
        $mail->Password = $_ENV['SMTP_PASSWORD'];
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        // Correo del remitente y destinatario
        $mail->setFrom($_ENV['SMTP_USERNAME'], 'Formulario Web Apache');
        $mail->addAddress($_ENV['SMTP_USERNAME']); // También puedes poner otro destinatario aquí

        // Datos del formulario
        $name = htmlspecialchars($_POST['name']);
        $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
        $subject = htmlspecialchars($_POST['service']);
        $message = htmlspecialchars($_POST['message']);

        // Cuerpo del mensaje
        $body = "Has recibido un nuevo mensaje:\n\n";
        $body .= "Nombre: $name\n";
        $body .= "Correo: $email\n";
        $body .= "Servicio: $subject\n\n";
        $body .= "Mensaje:\n$message\n";

        $mail->Subject = "Nuevo mensaje de contacto";
        $mail->Body = $body;

        $mail->send();

        // ✅ Redirigir a la página de gracias
        header("Location: /thanks.html");
        exit;

    } catch (Exception $e) {
        http_response_code(500);
        echo "Error al enviar el mensaje: {$mail->ErrorInfo}";
    }
} else {
    http_response_code(403);
    echo "Método no permitido.";
}

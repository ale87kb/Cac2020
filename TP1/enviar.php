<?php
header("Content-type: text/html;charset=\"utf-8\"");
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$titulo = $_POST['asunto'];
$mensaje = $_POST['mensaje'];

$header = "From: " .$email . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$cuerpo = "Este mensaje fue enviado por " . $nombre . ",\r\n";
$cuerpo .= "Su e-mail es: " . $email . "\r\n";
$cuerpo .= "Asunto: " . $titulo . "\r\n";
$cuerpo .= "Mensaje: " . $mensaje .  "\r\n";
$cuerpo .= "Enviado el " . date('d/m/Y', time());

$para = 'alejandrodadde@gmail.com';
$asunto = 'Mensaje de mi sitio web Codo a Codo';

if( mail($para, $asunto, utf8_decode($cuerpo), $header))
    echo "<script type='text/javascript'>alert('Tu mensaje ha sido enviado exitosamente');</script>";
echo "<script type='text/javascript'>window.location.href='index.html';</script>";
?>
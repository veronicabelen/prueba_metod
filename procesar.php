<?php
header('Content-Type: application/json');

$response = ['success' => false, 'mensaje' => ''];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $nombre = filter_input(INPUT_POST, 'nombre', FILTER_SANITIZE_SPECIAL_CHARS);
  $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
  $mensaje = filter_input(INPUT_POST, 'mensaje', FILTER_SANITIZE_SPECIAL_CHARS);

  if ($nombre && $email && $mensaje) {
    // Aquí podrías guardar en base de datos o enviar un correo
    $response['success'] = true;
    $response['mensaje'] = "Gracias <strong>$nombre</strong>, hemos recibido tu mensaje.";
  } else {
    $response['mensaje'] = "Por favor completa todos los campos correctamente.";
  }
} else {
  $response['mensaje'] = "Método de solicitud inválido.";
}

echo json_encode($response);

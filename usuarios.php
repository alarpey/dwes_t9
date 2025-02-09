<?php
// API de Random User (Obtenemos 10 nombres)
$api_url = "https://randomuser.me/api/?results=10";
$response = @file_get_contents($api_url);
$data = json_decode($response, true);

// Si hay datos, extraemos los nombres en un array
$nombres = [];
if ($data !== null && isset($data['results'])) {
    foreach ($data['results'] as $user) {
        $nombres[] = htmlspecialchars($user['name']['first']) . " " . htmlspecialchars($user['name']['last']);
    }
}

// Devolvemos los nombres en formato JSON
header('Content-Type: application/json');
echo json_encode($nombres);
?>

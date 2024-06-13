<?php
$servername = "eferUbuntu";
$username = "efer";
$password = "efertello2002";
$database = "UNIVERSIDAD"; // Nombre de tu base de datos

// Crear conexión
$conn = new mysqli($servername, $username, $password, $database);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}



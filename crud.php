<?php
include 'conexion.php';

// Operación CREATE
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["create"])) {
    $codigo = $_POST["codigo"];
    $nombre = $_POST["nombre"];
    $apellidop = $_POST["apellidop"];
    $apellidm = $_POST["apellidm"];
    $dni = $_POST["dni"];
    $facultad = $_POST["facultad"];

    $sql = "INSERT INTO estudiantes (codigo, nombre, apellidop, apellidm, dni, facultad) 
            VALUES ('$codigo', '$nombre', '$apellidop', '$apellidm', '$dni', '$facultad')";

    if ($conn->query($sql) === TRUE) {
        echo "Estudiante creado correctamente.";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

// Operación READ
$sql = "SELECT * FROM estudiantes";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo "ID: " . $row["id"]. " - Código: " . $row["codigo"]. " - Nombre: " . $row["nombre"]. "<br>";
    }
} else {
    echo "No hay estudiantes.";
}

// Operación UPDATE
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["update"])) {
    $id = $_POST["id"];
    $codigo = $_POST["codigo"];
    $nombre = $_POST["nombre"];
    $apellidop = $_POST["apellidop"];
    $apellidm = $_POST["apellidm"];
    $dni = $_POST["dni"];
    $facultad = $_POST["facultad"];

    $sql = "UPDATE estudiantes 
            SET codigo='$codigo', nombre='$nombre', apellidop='$apellidop', apellidm='$apellidm', dni='$dni', facultad='$facultad' 
            WHERE id=$id";

    if ($conn->query($sql) === TRUE) {
        echo "Estudiante actualizado correctamente.";
    } else {
        echo "Error al actualizar: " . $conn->error;
    }
}

// Operación DELETE
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["delete"])) {
    $id = $_POST["id"];

    $sql = "DELETE FROM estudiantes WHERE id=$id";

    if ($conn->query($sql) === TRUE) {
        echo "Estudiante eliminado correctamente.";
    } else {
        echo "Error al eliminar: " . $conn->error;
    }
}

$conn->close();
?>

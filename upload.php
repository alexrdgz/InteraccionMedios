<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $day = $_POST["day"];
  $image = $_FILES["image"]["name"];

  $targetDir = "./images/programacion/";
  $targetFile = $targetDir . basename($image);

  // Mueve el archivo cargado a la ubicación deseada
  move_uploaded_file($_FILES["image"]["tmp_name"], $targetFile);

  // Obtener el contenido actual del slider desde el archivo JSON
  $jsonData = json_decode(file_get_contents("slider_data.json"), true);

  // Actualizar la imagen del día correspondiente en el array
  foreach ($jsonData as &$item) {
    if ($item["day"] === $day) {
      $item["image"] = $targetFile;
      break;
    }
  }

  // Vuelve a codificar el array como JSON y escribe en el archivo
  file_put_contents("slider_data.json", json_encode($jsonData));

  // Redirecciona a la página de administración del slider
  header("Location: admin.php");
  exit();
}
?>


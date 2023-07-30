<!DOCTYPE html>
<html>
<head>
  <title>Administrar Slider</title>
</head>
<body>
  <h1>Administrar Slider</h1>
  <form action="upload.php" method="post" enctype="multipart/form-data">
    <label for="day">Selecciona el día:</label>
    <select name="day" id="day" required>
      <option value="domingo">Domingo</option>
      <option value="lunes">Lunes</option>
      <option value="martes">Martes</option>
      <option value="miercoles">Miércoles</option>
      <option value="jueves">Jueves</option>
      <option value="viernes">Viernes</option>
      <option value="sabado">Sábado</option>
    </select>
    <label for="image">Selecciona una imagen:</label>
    <input type="file" name="image" id="image" required>
    <button type="submit">Cargar imagen</button>
  </form>
</body>
</html>

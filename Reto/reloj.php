<html>
<head>
<meta http-equiv="refresh" content="1"; url="reloj.php">
</head>
<body>

<?php
$hora = date("H:i:s");
$fecha = date("d-m-y");
$AP = date("A");
echo $fecha." ".$hora." ".$AP;
?>
</body>
<html>
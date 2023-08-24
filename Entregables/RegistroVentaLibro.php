<?php

$PKempresa = "867";

$data = file_get_contents("key.json");
$key = json_decode($data, true);
$usuario = $key[ 'usuario' ];
$password = $key[ 'password' ];
$servidor = $key[ 'servidor' ];
$basededatos = $key[ 'basededatos' ];
$conexion = mysqli_connect($servidor, $usuario, $password, $basededatos) or die ("No se ha podido conectar al servidor de Base de datos");
$db = mysqli_select_db( $conexion, $basededatos ) or die ( "Upps! Pues va a ser que no se ha podido conectar a la base de datos" );

$boolean= TRUE; //no existe
$pk_tipoempresa = -1;
$consulta = "SELECT `compraventa`.*, `codigosdocumentos`.`Archivo` FROM `compraventa`
 LEFT JOIN `a_trabajo`.`codigosdocumentos` ON `compraventa`.`Documento` = `codigosdocumentos`.`PK` 
 WHERE (`codigosdocumentos`.`Archivo` = 1) AND (`compraventa`.`PK_Usuario` = $PKempresa)"; //1 es Venta 2 es Compra
$resultado = mysqli_query( $conexion, $consulta ) or die ( "Algo ha ido mal en la consulta a la base de datos 1er aviso");
// $columna = mysqli_fetch_array( $resultado );

  while ($columna = mysqli_fetch_array( $resultado))
  {
$consulta3 = "INSERT INTO `a_trabajo`.`libro` (`PK`, `FK_empresacliente`, `FECHA`, `TIPO`, 
`NUM`, `CUENTA`, `Sucursal`, `CentroCostos`, `GLOSA`, `DEBE`, `HABER`, `PK_Origen`, `Tabla_Origen`) 
VALUES ('0', '".$PKempresa."', '".$columna['detFchDoc']."', '2', '".$columna['detNroDoc']."', '198',
 NULL, NULL, 'Boleta ".$columna['PK']." Venta', NULL, '".$columna['detMntTotal']."','".$columna['PK']."', '1');";
$resultado3 = mysqli_query( $conexion, $consulta3 ) or die ( "Algo ha ido mal en la consulta a la base de datos 3er aviso");

$consulta4 = "INSERT INTO `a_trabajo`.`libro` (`PK`, `FK_empresacliente`, `FECHA`, `TIPO`, 
`NUM`, `CUENTA`, `Sucursal`, `CentroCostos`, `GLOSA`, `DEBE`, `HABER`, `PK_Origen`, `Tabla_Origen`) 
VALUES ('0', '".$PKempresa."', '".$columna['detFchDoc']."', '2', '".$columna['detNroDoc']."', '5',
 NULL, NULL, 'Boleta ".$columna['PK']." Reflejo', '".$columna['detMntTotal']."', NULL,'".$columna['PK']."', '2');";
$resultado4 = mysqli_query( $conexion, $consulta4 ) or die ( "Algo ha ido mal en la consulta a la base de datos 4to aviso");
      }

echo "<a>registrado</a>";
mysqli_close( $conexion );
?>
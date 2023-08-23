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
$consulta = "SELECT * FROM `honorarios`"; //1 es Venta 2 es Compra
$resultado = mysqli_query( $conexion, $consulta ) or die ( "Algo ha ido mal en la consulta a la base de datos 1er aviso");
// $columna = mysqli_fetch_array( $resultado );

  while ($columna = mysqli_fetch_array( $resultado))
  {
$consulta3 = "INSERT INTO `a_trabajo`.`libro` (`PK`, `FK_empresacliente`, `FECHA`, `TIPO`, 
`NUM`, `CUENTA`, `Sucursal`, `CentroCostos`, `GLOSA`, `DEBE`, `HABER`, `PK_Origen`, `Tabla_Origen`) 
VALUES ('0', '".$PKempresa."', '".$columna['Fecha']."', '2', '".$columna['PK']."', '1',
 NULL, NULL, 'Boleta ".$columna['PK']." Honorarios', '".$columna['Bruto']."', NULL,'".$columna['PK']."', '4');";
$resultado3 = mysqli_query( $conexion, $consulta3 ) or die ( "Algo ha ido mal en la consulta a la base de datos 3er aviso");
if($columna['Pagado']>0){
$consulta3 = "INSERT INTO `a_trabajo`.`libro` (`PK`, `FK_empresacliente`, `FECHA`, `TIPO`, 
`NUM`, `CUENTA`, `Sucursal`, `CentroCostos`, `GLOSA`, `DEBE`, `HABER`, `PK_Origen`, `Tabla_Origen`) 
VALUES ('0', '".$PKempresa."', '".$columna['Fecha']."', '2', '".$columna['PK']."', '1',
 NULL, NULL, 'Boleta ".$columna['PK']." Honorarios Por Pagar', NULL, '".$columna['Pagado']."','".$columna['PK']."', '4');";
$resultado3 = mysqli_query( $conexion, $consulta3 ) or die ( "Algo ha ido mal en la consulta a la base de datos 3er aviso");
}
if($columna['Retenido']>0){
$consulta3 = "INSERT INTO `a_trabajo`.`libro` (`PK`, `FK_empresacliente`, `FECHA`, `TIPO`, 
`NUM`, `CUENTA`, `Sucursal`, `CentroCostos`, `GLOSA`, `DEBE`, `HABER`, `PK_Origen`, `Tabla_Origen`) 
VALUES ('0', '".$PKempresa."', '".$columna['Fecha']."', '2', '".$columna['PK']."', '1',
 NULL, NULL, 'Boleta ".$columna['PK']." Honorarios Retenidos', NULL, '".$columna['Retenido']."','".$columna['PK']."', '4');";
$resultado3 = mysqli_query( $conexion, $consulta3 ) or die ( "Algo ha ido mal en la consulta a la base de datos 3er aviso");
     }
    }

echo "<a>registrado</a>";
mysqli_close( $conexion );
?>
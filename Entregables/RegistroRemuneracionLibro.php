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
$consulta = "SELECT * FROM `remuneraciones` WHERE `PK_Usuario`=$PKempresa"; //1 es Venta 2 es Compra
$resultado = mysqli_query( $conexion, $consulta ) or die ( "Algo ha ido mal en la consulta a la base de datos 1er aviso");
// $columna = mysqli_fetch_array( $resultado );

  while ($columna = mysqli_fetch_array( $resultado))
  {
$consulta3 = "INSERT INTO `libro` (`PK`, `FK_empresacliente`, `FECHA`, `TIPO`, 
`NUM`, `CUENTA`, `Sucursal`, `CentroCostos`, `GLOSA`, `DEBE`, `HABER`, `PK_Origen`, `Tabla_Origen`, `Auxiliar` ) 
VALUES ('0', '".$PKempresa."', '".$columna['FechaCarga']."', '2', '".$columna['PK']."', '158',
 NULL, NULL, '".$columna['PK']." SueldoBase4202-01', '".$columna['SBASE']."', NULL,'".$columna['PK']."', '5', '0');";
$resultado3 = mysqli_query( $conexion, $consulta3 ) or die ( "Algo ha ido mal en la consulta a la base de datos 3er aviso");

$consulta3 = "INSERT INTO `libro` (`PK`, `FK_empresacliente`, `FECHA`, `TIPO`, 
`NUM`, `CUENTA`, `Sucursal`, `CentroCostos`, `GLOSA`, `DEBE`, `HABER`, `PK_Origen`, `Tabla_Origen`, `Auxiliar` ) 
VALUES ('0', '".$PKempresa."', '".$columna['FechaCarga']."', '2', '".$columna['PK']."', '159',
 NULL, NULL, '".$columna['PK']." Gratificaciones4202-02', '".$columna['GRATLEGAL']."', NULL,'".$columna['PK']."', '5', '0');";
$resultado3 = mysqli_query( $conexion, $consulta3 ) or die ( "Algo ha ido mal en la consulta a la base de datos 3er aviso");
//Bonos y Aguinaldos4202-03 no lo encuentro
$consulta3 = "INSERT INTO `libro` (`PK`, `FK_empresacliente`, `FECHA`, `TIPO`, 
`NUM`, `CUENTA`, `Sucursal`, `CentroCostos`, `GLOSA`, `DEBE`, `HABER`, `PK_Origen`, `Tabla_Origen`, `Auxiliar` ) 
VALUES ('0', '".$PKempresa."', '".$columna['FechaCarga']."', '2', '".$columna['PK']."', '163',
 NULL, NULL, '".$columna['PK']." (Conectividad)ASIGNACION DE TELEFONO4202-06', '".$columna['CONECT']."', NULL,'".$columna['PK']."', '5', '0');";
$resultado3 = mysqli_query( $conexion, $consulta3 ) or die ( "Algo ha ido mal en la consulta a la base de datos 3er aviso");
// VIATICOS BENEF LICENCIA SEGURO INVALIDES SEGURO CESANTIA Y MUTUAL DE SEGURIDAD
$consulta3 = "INSERT INTO `libro` (`PK`, `FK_empresacliente`, `FECHA`, `TIPO`, 
`NUM`, `CUENTA`, `Sucursal`, `CentroCostos`, `GLOSA`, `DEBE`, `HABER`, `PK_Origen`, `Tabla_Origen`, `Auxiliar` ) 
VALUES ('0', '".$PKempresa."', '".$columna['FechaCarga']."', '2', '".$columna['PK']."', '162',
 NULL, NULL, '".$columna['PK']." MOVILIZACION4202-05', '".$columna['MOVI']."', NULL,'".$columna['PK']."', '5', '0');";
$resultado3 = mysqli_query( $conexion, $consulta3 ) or die ( "Algo ha ido mal en la consulta a la base de datos 3er aviso");
//EXTRA
$consulta3 = "INSERT INTO `libro` (`PK`, `FK_empresacliente`, `FECHA`, `TIPO`, 
`NUM`, `CUENTA`, `Sucursal`, `CentroCostos`, `GLOSA`, `DEBE`, `HABER`, `PK_Origen`, `Tabla_Origen`, `Auxiliar` ) 
VALUES ('0', '".$PKempresa."', '".$columna['FechaCarga']."', '2', '".$columna['PK']."', '161',
 NULL, NULL, '".$columna['PK']." COLACION4202-04', '".$columna['COLACION']."', NULL,'".$columna['PK']."', '5', '0');";
$resultado3 = mysqli_query( $conexion, $consulta3 ) or die ( "Algo ha ido mal en la consulta a la base de datos 3er aviso");




//HACER DESPUES
//AFP, ISAPRE, FONASA, MUTUAL POR PAGAR, CAJA DE COMPENSACION POR PAGAR, IMPUESTO UNICO TRABAJADIRES, REMUNERACIONES POR PAGAR Y OTROS (NO ESPECIFIC)

$consulta3 = "INSERT INTO `libro` (`PK`, `FK_empresacliente`, `FECHA`, `TIPO`, 
`NUM`, `CUENTA`, `Sucursal`, `CentroCostos`, `GLOSA`, `DEBE`, `HABER`, `PK_Origen`, `Tabla_Origen`, `Auxiliar` ) 
VALUES ('0', '".$PKempresa."', '".$columna['FechaCarga']."', '2', '".$columna['PK']."', '77',
 NULL, NULL, '".$columna['PK']." AFP2108-07', NULL, '".$columna['PREVISION']."','".$columna['PK']."', '4', '0');";
$resultado3 = mysqli_query( $conexion, $consulta3 ) or die ( "Algo ha ido mal en la consulta a la base de datos 3er aviso");

$consulta3 = "INSERT INTO `libro` (`PK`, `FK_empresacliente`, `FECHA`, `TIPO`, 
`NUM`, `CUENTA`, `Sucursal`, `CentroCostos`, `GLOSA`, `DEBE`, `HABER`, `PK_Origen`, `Tabla_Origen`, `Auxiliar` ) 
VALUES ('0', '".$PKempresa."', '".$columna['FechaCarga']."', '2', '".$columna['PK']."', '78',
 NULL, NULL, '".$columna['PK']." ISAPRE2108-08', NULL, '".$columna['SALUD']."','".$columna['PK']."', '4', '0');";
$resultado3 = mysqli_query( $conexion, $consulta3 ) or die ( "Algo ha ido mal en la consulta a la base de datos 3er aviso");
     
$consulta3 = "INSERT INTO `libro` (`PK`, `FK_empresacliente`, `FECHA`, `TIPO`, 
`NUM`, `CUENTA`, `Sucursal`, `CentroCostos`, `GLOSA`, `DEBE`, `HABER`, `PK_Origen`, `Tabla_Origen`, `Auxiliar` ) 
VALUES ('0', '".$PKempresa."', '".$columna['FechaCarga']."', '2', '".$columna['PK']."', '73',
 NULL, NULL, '".$columna['PK']." Impuesto Unico 2108-03', NULL, '".$columna['IMPUNICO']."','".$columna['PK']."', '4', '0');";
$resultado3 = mysqli_query( $conexion, $consulta3 ) or die ( "Algo ha ido mal en la consulta a la base de datos 3er aviso");

$consulta3 = "INSERT INTO `libro` (`PK`, `FK_empresacliente`, `FECHA`, `TIPO`, 
`NUM`, `CUENTA`, `Sucursal`, `CentroCostos`, `GLOSA`, `DEBE`, `HABER`, `PK_Origen`, `Tabla_Origen`, `Auxiliar` ) 
VALUES ('0', '".$PKempresa."', '".$columna['FechaCarga']."', '2', '".$columna['PK']."', '168',
 NULL, NULL, '".$columna['PK']." SEGURO CESANTIA EMPLEADOR4202-11', NULL, '".$columna['SEGCES']."','".$columna['PK']."', '4', '0');";
$resultado3 = mysqli_query( $conexion, $consulta3 ) or die ( "Algo ha ido mal en la consulta a la base de datos 3er aviso");

$consulta3 = "INSERT INTO `libro` (`PK`, `FK_empresacliente`, `FECHA`, `TIPO`, 
`NUM`, `CUENTA`, `Sucursal`, `CentroCostos`, `GLOSA`, `DEBE`, `HABER`, `PK_Origen`, `Tabla_Origen`, `Auxiliar` ) 
VALUES ('0', '".$PKempresa."', '".$columna['FechaCarga']."', '2', '".$columna['PK']."', '165',
 NULL, NULL, '".$columna['PK']." MUTUAL DE SEGURIDAD4202-08', NULL, '".$columna['MUTUAL']."','".$columna['PK']."', '4', '0');";
$resultado3 = mysqli_query( $conexion, $consulta3 ) or die ( "Algo ha ido mal en la consulta a la base de datos 3er aviso");
     }

echo "<a>registrado</a>";
mysqli_close( $conexion );
?>
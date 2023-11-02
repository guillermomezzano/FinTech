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

$consulta = "SELECT * FROM `movimientos` WHERE Ingreso >0 and PK_Usuario = '".$PKempresa."' ORDER BY `Fecha` ASC"; 
$resultado = mysqli_query( $conexion, $consulta ) or die ( "Algo ha ido mal en la consulta a la base de datos 0vo aviso");

while ($columna = mysqli_fetch_array( $resultado))
{
  $consultaB = "SELECT * FROM `libro` WHERE `Tabla_Origen` = '6' and `PK_Origen` = '".$columna['PK']."' ORDER BY `libro`.`FECHA` ASC"; 
  $resultadoB = mysqli_query( $conexion, $consultaB ) or die ( "Algo ha ido mal en la consulta a la base de datos B aviso");

  $row_cnt = $resultadoB->num_rows;
  if($row_cnt == 0){
      $consulta1 = "INSERT INTO `libro` (`PK`, `FK_empresacliente`, `FECHA`, `TIPO`, 
      `NUM`, `CUENTA`, `Sucursal`, `CentroCostos`, `GLOSA`, `DEBE`, `HABER`, `PK_Origen`, `Tabla_Origen`, `Auxiliar` ) 
      VALUES ('0', '".$PKempresa."', '".$columna['Fecha']."', '2', '".$columna['Cuenta']."', '208',
      NULL, NULL, '".$columna['Descripcion']."',  '".$columna['Ingreso']."',NULL,'".$columna['PK']."', '6', '".$columna['Ingreso']."');";
      $resultado1 = mysqli_query( $conexion, $consulta1 ) or die ( "Algo ha ido mal en la consulta a la base de datos 1er aviso");
    
    if ($columna['RUT']!= null) {
      $dineroTotal = $columna['Ingreso'];
      $consultaA = "SELECT `libro`.* FROM `libro` LEFT JOIN `compraventa` ON `compraventa`.`PK` = `libro`.`PK_Origen`
      LEFT JOIN `empresa` ON `compraventa`.`PK_Empresa` = `empresa`.`PK` WHERE `Tabla_Origen` = 1 and `Auxiliar` > 0 
      and `PK_Usuario` = '".$PKempresa."' and `empresa`.`RUT` LIKE '".substr($columna['RUT'],0,-1)."-%' 
      ORDER BY `libro`.`FECHA` ASC"; 
      $resultadoA = mysqli_query( $conexion, $consultaA ) or die ( "Algo ha ido mal en la consulta a la base de datos 1er aviso");
      $columnaA = mysqli_fetch_array( $resultadoA);

    while($columnaA && $dineroTotal>0){
      if ($columnaA['Auxiliar']<=$dineroTotal) {
        $dineroTotal = $dineroTotal - $columnaA['Auxiliar'];
      $consultaD = "INSERT INTO `libro` (`PK`, `FK_empresacliente`, `FECHA`, `TIPO`, 
      `NUM`, `CUENTA`, `Sucursal`, `CentroCostos`, `GLOSA`, `DEBE`, `HABER`, `PK_Origen`, `Tabla_Origen`, `Auxiliar` ) 
      VALUES ('0', '".$PKempresa."', '".$columna['Fecha']."', '2', '".$columna['Cuenta']."', '1',
      NULL, NULL, '".$columnaA['PK']."-deuda que esta pagando', NULL, '".$columnaA['Auxiliar']."','".$columna['PK']."', '6', '0');";
        $resultadoD = mysqli_query( $conexion, $consultaD ) or die ( "Algo ha ido mal en la consulta a la base de datos D1er aviso"); 
    $consultaC = "UPDATE `libro` SET `Auxiliar`=0 WHERE `PK` = '".$columnaA['PK']."'";
        echo "columnaA['Auxiliar']<=dineroTotal".$consultaC;
    $resultadoC = mysqli_query( $conexion, $consultaC ) or die ( "Algo ha ido mal en la consulta a la base de datos C1er aviso"); 
    $columnaA = mysqli_fetch_array( $resultadoA);
  }else{
        
    $consultaD = "INSERT INTO `libro` (`PK`, `FK_empresacliente`, `FECHA`, `TIPO`, 
      `NUM`, `CUENTA`, `Sucursal`, `CentroCostos`, `GLOSA`, `DEBE`, `HABER`, `PK_Origen`, `Tabla_Origen`, `Auxiliar` ) 
      VALUES ('0', '".$PKempresa."', '".$columna['Fecha']."', '2', '".$columna['Cuenta']."', '1',
      NULL, NULL, '".$columnaA['PK']."-deuda que esta pagando', NULL, '".$columnaA['Auxiliar']."','".$columna['PK']."', '6', '0');";
      $resultadoD = mysqli_query( $conexion, $consultaD ) or die ( "Algo ha ido mal en la consulta a la base de datos D1er aviso"); 
        $dineroTotal = $columnaA['Auxiliar']-$dineroTotal;
        $consultaC = "UPDATE `libro` SET `Auxiliar`='".$dineroTotal."' WHERE `PK` = '".$columnaA['PK']."'";
        echo $consultaC;
        $resultadoC = mysqli_query( $conexion, $consultaC ) or die ( "Algo ha ido mal en la consulta a la base de datos C2er aviso"); 
        $dineroTotal=0;
      }
    }
    if ($dineroTotal != $columna['Ingreso']) {
      $consultaC = "UPDATE `libro` SET `Auxiliar`=$dineroTotal, `CUENTA` =2 WHERE `CUENTA` = 208 and `Tabla_Origen`= 6 and PK_Origen = '".$columna['PK']."'";
      $resultadoC = mysqli_query( $conexion, $consultaC ) or die ( "Algo ha ido mal en la consulta a la base de datos C3er aviso"); 
    }
  }
  }
}

echo "<a>registrado</a>";
mysqli_close( $conexion );
?>
<?php

$opts = array(
    'http'=>array(
      'method'=>"GET",
      'header'=>"API-KEY: KKivbrfBakBKD3dytxYUVfff"
    )
  );
  
  $context = stream_context_create($opts);
  $PKempresa = "867";

header('Content-Type: application/json');
$json_ugly = file_get_contents('https://api.cymasuite.com/api/v1/accounts/'.$PKempresa, false, $context);
$json_pretty = json_encode(json_decode($json_ugly), JSON_PRETTY_PRINT);

$decoded_json = json_decode($json_pretty, true);

$data = file_get_contents("key.json");
$key = json_decode($data, true);
$usuario = $key[ 'usuario' ];
$password = $key[ 'password' ];
$servidor = $key[ 'servidor' ];
$basededatos = $key[ 'basededatos' ];
$conexion = mysqli_connect($servidor, $usuario, $password, $basededatos) or die ("No se ha podido conectar al servidor de Base de datos");
$db = mysqli_select_db( $conexion, $basededatos ) or die ( "Upps! Pues va a ser que no se ha podido conectar a la base de datos" );

$boolean= TRUE; //no existe
$pk_tipocuenta = -1;
$pk_banco = -1;
$consulta = "SELECT * FROM `bancos` WHERE Nombre = '".$decoded_json [0][ 'bank' ]['institution_country']."'";
$resultado = mysqli_query( $conexion, $consulta ) or die ( "Algo ha ido mal en la consulta a la base de datos 1er aviso");
// $columna = mysqli_fetch_array( $resultado );
$row_cnt = $resultado->num_rows;
  if ($row_cnt>0)
  {
      $boolean=FALSE;
      $columna = mysqli_fetch_array( $resultado);
      $pk_banco = $columna['PK'] ;
  }
if($boolean){
  $consulta2 = "INSERT INTO `bancos`(`PK`, `Nombre`) VALUES ('0','".$decoded_json [0][ 'bank' ]['institution_country'] ."')";
  $resultado = mysqli_query( $conexion, $consulta2 ) or die ( "Algo ha ido mal en la consulta a la base de datos 1er aviso");
    
  $consulta = "SELECT PK FROM `bancos` ORDER BY `PK` DESC";
  $resultado = mysqli_query( $conexion, $consulta ) or die ( "Algo ha ido mal en la consulta a la base de datos 1er aviso");
  $columna = mysqli_fetch_array( $resultado);
  $pk_banco = $columna['PK'] ;
  $boolean=FALSE;
}
$boolean= TRUE; //no existe
$consulta3 = "SELECT * FROM `tipocuenta` where Nombre ='". $decoded_json [0][ 'name' ]."'";
$resultado3 = mysqli_query( $conexion, $consulta3 ) or die ( "Algo ha ido mal en la consulta a la base de datos 1er aviso");
// $columna = mysqli_fetch_array( $resultado );

$row_cnt = $resultado3->num_rows;
  if ($row_cnt>0)
  {
      $boolean=FALSE;
      while ($columna = mysqli_fetch_array( $resultado3))
      $pk_tipocuenta = $columna['PK'] ;
  }
if($boolean){
    $consulta2 = "INSERT INTO `tipocuenta`(`PK`, `Nombre`) VALUES ('0','".$decoded_json [0][ 'name' ] ."')";
    $resultado = mysqli_query( $conexion, $consulta2 ) or die ( "Algo ha ido mal en la consulta a la base de datos 2do aviso");
    $consulta3 = "SELECT PK FROM `tipocuenta` ORDER BY `PK` DESC";
    $resultado3 = mysqli_query( $conexion, $consulta3 ) or die ( "Algo ha ido mal en la consulta a la base de datos 2do aviso");
    $columna = mysqli_fetch_array( $resultado3 );
    $pk_tipocuenta = $columna['PK'];
    $boolean=FALSE;
}
$consulta3 = "INSERT INTO cuentabanco(PK,Empresa_pk, Banco, Num,Tipo) VALUES ('0','".$PKempresa ."', '".$pk_banco ."', '".$decoded_json [0][ 'bank_id' ] ."','".$pk_tipocuenta ."')";
$resultado3 = mysqli_query( $conexion, $consulta3 ) or die ( "Algo ha ido mal en la consulta a la base de datos 3er aviso");


echo "<a>registrado</a>";
mysqli_close( $conexion );
?>
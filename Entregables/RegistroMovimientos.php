<?php

$mi_temporizador = microtime();
$partes_de_la_hora_actual = explode(' ', $mi_temporizador);
$hora_actual = $partes_de_la_hora_actual[1] + $partes_de_la_hora_actual[0];
$hora_al_empezar = $hora_actual;
set_time_limit(70000); //extender tiempo en que se puede cargar
$opts = array(
    'http'=>array(
      'method'=>"GET",
      'header'=>"API-KEY: KKivbrfBakBKD3dytxYUVfff"
    )
  );
  
  $context = stream_context_create($opts);
  $PKempresa = "867";
  $PKbancoAC = "acc_k6XBljjTG4BAlym3";

header('Content-Type: application/json');
$json_ugly = file_get_contents('https://api.cymasuite.com/api/v1/accounts/'.$PKbancoAC.'/movements?per_page=1&page=1&date=desc&movement_buys=true&movement_sales=true', false, $context);
$json_pretty = json_encode(json_decode($json_ugly), JSON_PRETTY_PRINT);
$decoded_json = json_decode($json_pretty, true);

echo $decoded_json;
$data = file_get_contents("key.json");
$key = json_decode($data, true);
$usuario = $key[ 'usuario' ];
$password = $key[ 'password' ];
$servidor = $key[ 'servidor' ];
$basededatos = $key[ 'basededatos' ];
$conexion = mysqli_connect($servidor, $usuario, $password, $basededatos) or die ("No se ha podido conectar al servidor de Base de datos");
$db = mysqli_select_db( $conexion, $basededatos ) or die ( "Upps! Pues va a ser que no se ha podido conectar a la base de datos" );

$consulta2 = "SELECT * FROM `cuentabanco` WHERE `cuentabanco`.`Empresa_pk` = $PKempresa;"; //temporal porque luego se administra entre varias
$resultado2 = mysqli_query( $conexion, $consulta2 ) or die ( "Algo ha ido mal en la consulta a la base de datos 2er aviso");

echo "decode ".$decoded_json['total_items'];
$columna = mysqli_fetch_array( $resultado2);
$Xpagina = $decoded_json['total_items']-$columna['movRegistrados'];
echo "mov registrados ".$columna['movRegistrados'];
echo "paginas ".$Xpagina;
$consulta = "UPDATE `cuentabanco` SET `movRegistrados` = '".$decoded_json['total_items']."' WHERE `cuentabanco`.`PK` = '".$columna['PK']."';";
$resultado = mysqli_query( $conexion, $consulta ) or die ( "Algo ha ido mal en la consulta a la base de datos 1er aviso");
header('Content-Type: application/json');
$json_ugly = file_get_contents('https://api.cymasuite.com/api/v1/accounts/'.$PKbancoAC.'/movements?per_page='.$decoded_json['total_items'].'&page=1&date=desc&movement_buys=true&movement_sales=true', false, $context);
$json_pretty = json_encode(json_decode($json_ugly), JSON_PRETTY_PRINT);
$decoded_json = json_decode($json_pretty, true);


$num = $decoded_json['data'];
if ($Xpagina>0){
$json_ugly = file_get_contents('https://api.cymasuite.com/api/v1/accounts/'.$PKbancoAC.'/movements?per_page='.$Xpagina.'&page=1&date=desc&movement_buys=true&movement_sales=true', false, $context);
$json_pretty = json_encode(json_decode($json_ugly), JSON_PRETTY_PRINT);
$decoded_json = json_decode($json_pretty, true);
$i=0;
while( $decoded_json['data'][$i][ 'amount' ]) {  //se intento con un if y un While i<num, todo registraba infinitamente

$arr = explode('T',$decoded_json['data'][$i][ 'date' ]);
$fecha_y_m_d = $arr[0];
if ($decoded_json['data'][$i][ 'amount' ]<0) {
  $consulta3 = "INSERT INTO `movimientos`(`PK`, `PK_Usuario`, `PK_Cuenta`,`Fecha`, `Cuenta`, `Descripcion`, `Ingreso`, `Egreso`, `RUT`) 
  VALUES ('0','".$PKempresa."','".$columna['PK']."','".$fecha_y_m_d."','".$decoded_json['data'][$i][ 'bank_bill_id' ]."',
  '".$decoded_json['data'][$i][ 'description' ]."','0','".$decoded_json['data'][$i][ 'amount' ]."'
  ,'".$decoded_json['data'][$i][ 'recipient_account' ][ 'holder_id' ]."')";
}else { //3 temporal porque se debe ver la administracion de distintas cuentas de banco para un solo usuario
$consulta3 = "INSERT INTO `movimientos`(`PK`, `PK_Usuario`, `PK_Cuenta`,`Fecha`, `Cuenta`, `Descripcion`, `Ingreso`, `Egreso`, `RUT`) 
VALUES ('0','".$PKempresa."','".$columna['PK']."','".$fecha_y_m_d."','".$decoded_json['data'][$i][ 'bank_bill_id' ]."',
'".$decoded_json['data'][$i][ 'description' ]."','".$decoded_json['data'][$i][ 'amount' ]."','0'
,'".$decoded_json['data'][$i][ 'sender_account' ][ 'holder_id' ]."')";
}
$resultado3 = mysqli_query( $conexion, $consulta3 ) or die ( "Algo ha ido mal en la consulta a la base de datos 3er aviso");
$i = $i+1;
}
echo "<a>registrado</a>";}
$mi_temporizador = microtime();
$partes_de_la_hora_actual = explode(' ', $mi_temporizador);
$hora_actual = $partes_de_la_hora_actual[1] + $partes_de_la_hora_actual[0];
$hora_al_terminar = $hora_actual;
$tiempo_total_en_segundos = round(($hora_al_terminar - $hora_al_empezar), 4);
echo 'La pagina fue generada en '.$tiempo_total_en_segundos.' segundos.';
mysqli_close( $conexion );
?>
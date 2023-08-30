<?php

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
$json_ugly = file_get_contents('https://api.cymasuite.com/api/v1/accounts/'.$PKbancoAC.'/movements?per_page=10&page=10&date=desc&movement_buys=true&movement_sales=true', false, $context);
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
$num = $decoded_json['data'];
$i=0;
while( $decoded_json['data'][$i][ 'amount' ]) {  //se intento con un if y un While i<num, todo registraba infinitamente

$arr = explode('T',$decoded_json['data'][$i][ 'date' ]);
$fecha_y_m_d = $arr[0];
if ($decoded_json['data'][$i][ 'amount' ]<0) {
  $consulta3 = "INSERT INTO `movimientos`(`PK`, `PK_Usuario`,`Fecha`, `Cuenta`, `Descripcion`, `Ingreso`, `Egreso`) 
  VALUES ('0','".$PKempresa."','".$fecha_y_m_d."','".$decoded_json['data'][$i][ 'bank_bill_id' ]."',
  '".$decoded_json['data'][$i][ 'description' ]."','0','".$decoded_json['data'][$i][ 'amount' ]."')";
}else {
$consulta3 = "INSERT INTO `movimientos`(`PK`, `PK_Usuario`,`Fecha`, `Cuenta`, `Descripcion`, `Ingreso`, `Egreso`) 
VALUES ('0','".$PKempresa."','".$fecha_y_m_d."','".$decoded_json['data'][$i][ 'bank_bill_id' ]."',
'".$decoded_json['data'][$i][ 'description' ]."','".$decoded_json['data'][$i][ 'amount' ]."','0')";
}
$resultado3 = mysqli_query( $conexion, $consulta3 ) or die ( "Algo ha ido mal en la consulta a la base de datos 3er aviso");
$i = $i+1;
}
echo "<a>registrado</a>";
mysqli_close( $conexion );
?>
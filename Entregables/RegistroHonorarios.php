<?php

set_time_limit(3000); //extender tiempo en que se puede cargar
$opts = array(
    'http'=>array(
      'method'=>"GET",
      'header'=>"API-KEY: KKivbrfBakBKD3dytxYUVfff"
    )
  );
  
  $context = stream_context_create($opts);
  $PKempresa = "867";
  $year = "2023";

header('Content-Type: application/json');
$json_ugly = file_get_contents('https://api.cymasuite.com/api/v1/sii/ticket_honoraries?company_id='.$PKempresa.'&year='.$year, false, $context);
$json_pretty = json_encode(json_decode($json_ugly), JSON_PRETTY_PRINT);
$decoded_json = json_decode($json_pretty, true);

// echo  $decoded_json[0]['gross_fee'];
  $a =0;
  // $b =0;
$data = file_get_contents("key.json");
$key = json_decode($data, true);
while ($a < 12) {
  if($decoded_json[$a][ 'current' ]>0){
    $b =0;
    while ($b < $decoded_json[$a][ 'current' ]) {
$usuario = $key[ 'usuario' ];
$password = $key[ 'password' ];
$servidor = $key[ 'servidor' ];
$basededatos = $key[ 'basededatos' ];
$conexion = mysqli_connect($servidor, $usuario, $password, $basededatos) or die ("No se ha podido conectar al servidor de Base de datos");
$db = mysqli_select_db( $conexion, $basededatos ) or die ( "Upps! Pues va a ser que no se ha podido conectar a la base de datos" );

$boolean= TRUE; //no existe
$pk_estadoh = -1;
$consulta = "SELECT * FROM `estadohonorario` where Nombre = '".$decoded_json[$a][ 'ticket_honoraries' ][$b]['state']."'";
$resultado = mysqli_query( $conexion, $consulta ) or die ( "Algo ha ido mal en la consulta a la base de datos 1er aviso");
// $columna = mysqli_fetch_array( $resultado );
$row_cnt = $resultado->num_rows;
if ($row_cnt>0)
{
    $boolean=FALSE;
    $columna = mysqli_fetch_array( $resultado);
    $pk_estadoh = $columna['PK'] ;
}
if($boolean){
    $consulta2 = "INSERT INTO estadohonorario(PK,Nombre) VALUES ('0','".$decoded_json[$a][ 'ticket_honoraries' ][$b]['state'] ."')";
    $resultado = mysqli_query( $conexion, $consulta2 ) or die ( "Algo ha ido mal en la consulta a la base de datos 2do aviso");

    $consulta3 = "SELECT PK FROM `estadohonorario` ORDER BY `PK` DESC";
    $resultado3 = mysqli_query( $conexion, $consulta3 ) or die ( "Algo ha ido mal en la consulta a la base de datos 2do aviso");
    $columna = mysqli_fetch_array( $resultado3 );
    $pk_estadoh = $columna['PK'];
  }
$boolean= TRUE; //no existe
$pk_emisor = -1;
$consulta = "SELECT * FROM `emisor` where RUT = '".$decoded_json[$a][ 'ticket_honoraries' ][$b]['rut']."'";
$resultado = mysqli_query( $conexion, $consulta ) or die ( "Algo ha ido mal en la consulta a la base de datos 1er aviso");
// $columna = mysqli_fetch_array( $resultado );
$row_cnt = $resultado->num_rows;
if ($row_cnt>0)
{
    $boolean=FALSE;
    $columna = mysqli_fetch_array( $resultado);
    $pk_emisor = $columna['PK'] ;
}
if($boolean){
  $socprof = 0;
  if($decoded_json[$a][ 'ticket_honoraries' ][$b]['socprof']!="NO"){
    $socprof = 1;
  }
  // echo "INSERT INTO emisor(PK,RUT ,RazonSocial ,SocProf) VALUES ('0','".$decoded_json[$a][ 'ticket_honoraries' ][$b]['rut'] ."','".$decoded_json[$a][ 'ticket_honoraries' ][$b]['business_name'] ."','".$socprof ."') /n";
    $consulta2 = "INSERT INTO emisor(PK,RUT ,RazonSocial ,SocProf) VALUES ('0','".$decoded_json[$a][ 'ticket_honoraries' ][$b]['rut'] ."','".$decoded_json[$a][ 'ticket_honoraries' ][$b]['business_name'] ."','".$socprof ."')";
    $resultado = mysqli_query( $conexion, $consulta2 ) or die ( "Algo ha ido mal en la consulta a la base de datos 2.2do aviso");
    $consulta3 = "SELECT PK FROM `emisor` ORDER BY `PK` DESC";
    $resultado3 = mysqli_query( $conexion, $consulta3 ) or die ( "Algo ha ido mal en la consulta a la base de datos 2do aviso");
    $columna = mysqli_fetch_array( $resultado3 );
    $pk_emisor = $columna['PK'];
}
// echo str_replace('\/', '-',$decoded_json[$a][ 'ticket_honoraries' ][$b]['date']);
// $date = str_replace('\/', '-',$decoded_json[$a][ 'ticket_honoraries' ][$b]['date']); //D-M-A
// echo getDate(strtotime($date));
// $date = new DateTime($date); //defecto M-D-A
// $fecha_y_m_d = $date->format('Y-m-d'); //cambio de formato eficiente, pero tiene por defecto M-D-A
// echo $date;
$arr = explode('/',$decoded_json[$a][ 'ticket_honoraries' ][$b]['date']);
$fecha_y_m_d = $arr[2].'-'.$arr[1].'-'.$arr[0];
echo $fecha_y_m_d;
$pk_empres = -1;
$bruto = str_replace('.', '', $decoded_json[$a][ 'ticket_honoraries' ][$b]['gross']);
$retenido = str_replace('.', '', $decoded_json[$a][ 'ticket_honoraries' ][$b]['detained']);
$pagado = str_replace('.', '', $decoded_json[$a][ 'ticket_honoraries' ][$b]['paid_out']);
// $consulta3 = "CALL `RegistroHonorarios`($pk_empres,$cfg[$fecha_y_m_d]['DateFormat'],$pk_estadoh,$pk_emisor,$bruto,$retenido,$pagado)";
$consulta3 =  "INSERT INTO `honorarios`(`PK`, `PK_Usuario`, `Fecha`, `Estado`, `FechaAnulacion`, `Emisor`, `Bruto`, `Retenido`, `Pagado` )
VALUES ('0','".$PKempresa."','".$fecha_y_m_d ."', '".$pk_estadoh."',NULL,'".$pk_emisor ."','".str_replace('.', '', $decoded_json[$a][ 'ticket_honoraries' ][$b]['gross']) ."','".str_replace('.', '', $decoded_json[$a][ 'ticket_honoraries' ][$b]['detained']) ."','".str_replace('.', '', $decoded_json[$a][ 'ticket_honoraries' ][$b]['paid_out']) ."')";
$resultado3 = mysqli_query( $conexion, $consulta3 ) or die ( "Algo ha ido mal en la consulta a la base de datos 3er aviso");
echo $consulta3;
echo "<a>registrado</a>";
mysqli_close( $conexion );
$b = $b+1;
      }
    }
    $a = $a+1;
  }
?>
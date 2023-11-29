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
$json_ugly = file_get_contents('https://api.cymasuite.com/api/v1/company?per_page=1&page=1', false, $context);
$json_pretty = json_encode(json_decode($json_ugly), JSON_PRETTY_PRINT);
$decoded_json = json_decode($json_pretty, true);
$total_items=$decoded_json['total_items'];
if($decoded_json['total_items']>1){
  $json_ugly = file_get_contents('https://api.cymasuite.com/api/v1/company?per_page='.$decoded_json['total_items'].'&page=1', false, $context);
  $json_pretty = json_encode(json_decode($json_ugly), JSON_PRETTY_PRINT);
  
  $decoded_json = json_decode($json_pretty, true);
}

$data = file_get_contents("key.json");
$key = json_decode($data, true);
$usuario = $key[ 'usuario' ];
$password = $key[ 'password' ];
$servidor = $key[ 'servidor' ];
$basededatos = $key[ 'basededatos' ];
$conexion = mysqli_connect($servidor, $usuario, $password, $basededatos) or die ("No se ha podido conectar al servidor de Base de datos");
$db = mysqli_select_db( $conexion, $basededatos ) or die ( "Upps! Pues va a ser que no se ha podido conectar a la base de datos" );

for ($i=0; $i < $total_items; $i++) { 

  $consulta = "SELECT * FROM `usuario` where PK = '".$decoded_json ['data'][$i][ 'id' ]."'";
  $resultado = mysqli_query( $conexion, $consulta ) or die ( "Algo ha ido mal en la consulta a la base de datos 1er aviso");

  $row_cnt = $resultado->num_rows;
  if ($row_cnt==0)
  {
    $PKempresa=$decoded_json ['data'][$i][ 'id' ];
    $json_uglyX = file_get_contents('https://api.cymasuite.com/api/v1/sii/company?company_id='.$PKempresa, false, $context);
    $json_prettyX = json_encode(json_decode($json_uglyX), JSON_PRETTY_PRINT);
    
    $decoded_jsonX = json_decode($json_prettyX, true);
    echo  $decoded_jsonX [ 'descripcionError' ];
    echo "\n";
    echo "\n";
    $json_prettyX = json_encode($decoded_jsonX [ 'contribuyente' ], JSON_PRETTY_PRINT);
    $decoded_jsonX = json_decode($json_prettyX, true);

    $pk_empresaUsuario =-1;
    $consultaE = "SELECT * FROM `empresa` where RUT = '".$decoded_jsonX [ 'rut' ] ."-".$decoded_jsonX [ 'dv' ] ."'";
    $resultadoE = mysqli_query( $conexion, $consulta ) or die ( "Algo ha ido mal en la consulta a la base de datos 2 aviso");
  
    $row_cnt = $resultadoE->num_rows;
    if ($row_cnt==0)
    {


      $boolean= TRUE; //no existe
      $pk_tipoempresa = -1;
      $consulta = "SELECT * FROM `tipoempresa` where Nombre = '".$decoded_jsonX [ 'glosaActividad' ]."'";
      $resultado = mysqli_query( $conexion, $consulta ) or die ( "Algo ha ido mal en la consulta a la base de datos 3 aviso");
      // $columna = mysqli_fetch_array( $resultado );
      $row_cnt = $resultado->num_rows;
      if ($row_cnt==0)
      {
          $boolean=FALSE;
          $columna = mysqli_fetch_array( $resultado);
          $pk_tipoempresa = $columna['PK'] ;
      }
      if($boolean){
          $consulta2 = "INSERT INTO tipoempresa(PK,Nombre) VALUES ('0','".$decoded_jsonX [ 'glosaActividad' ] ."')";
          $resultado = mysqli_query( $conexion, $consulta2 ) or die ( "Algo ha ido mal en la consulta a la base de datos 4 aviso");

          $consulta3 = "SELECT PK FROM `tipoempresa` ORDER BY `PK` DESC";
          $resultado3 = mysqli_query( $conexion, $consulta3 ) or die ( "Algo ha ido mal en la consulta a la base de datos 5 aviso");
          $columna = mysqli_fetch_array( $resultado3 );
          $pk_tipoempresa = $columna['PK'];
      }
      $consulta3 = "INSERT INTO empresa(PK,rut, RazonSocial, Tipo) VALUES ('0','".$decoded_jsonX [ 'rut' ] ."-".$decoded_jsonX [ 'dv' ] ."', '".$decoded_jsonX [ 'razonSocial' ] ."', '".$pk_tipoempresa ."')";
      $resultado3 = mysqli_query( $conexion, $consulta3 ) or die ( "Algo ha ido mal en la consulta a la base de datos 6 aviso");

      $consulta3 = "SELECT PK FROM `empresa` ORDER BY `PK` DESC";
      $resultado3 = mysqli_query( $conexion, $consulta3 ) or die ( "Algo ha ido mal en la consulta a la base de datos 7 aviso");
      $columna = mysqli_fetch_array( $resultado3 );
      
      $pk_empresaUsuario =$columna['PK'];
    }else{
      $columna = mysqli_fetch_array( $resultadoE );
      $pk_empresaUsuario =$columna['PK'];
    }
    echo  $PKempresa;
    echo  $pk_empresaUsuario;
      $consulta3 = "INSERT INTO usuario(PK,Empresa_pk, APIKey, SII) VALUES ('".$PKempresa."','".$pk_empresaUsuario."', 'pendiente', 'pendiente')";
      $resultado3 = mysqli_query( $conexion, $consulta3 ) or die ( "Algo ha ido mal en la consulta a la base de datos 8 aviso");

      echo "<a>registrado</a>";
}}
mysqli_close( $conexion );
?>
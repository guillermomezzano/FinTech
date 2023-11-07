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
  $DateMonth = 7;
  $DateYear =2020;
  $ArrDate = ["01","02","03","04","05","06","07","08","09","10","11","12"];
  // "fechaInicioActividades": "2020-04-28 00:00:00.0",
  
  $context = stream_context_create($opts);
  $PKempresa = "867";
  $operation = "VENTA";
  $mes = "10";
  $yr = "2023"; //202309

  $data = file_get_contents("key.json");
  $key = json_decode($data, true);
  $usuario = $key[ 'usuario' ];
  $password = $key[ 'password' ];
  $servidor = $key[ 'servidor' ];
  $basededatos = $key[ 'basededatos' ];
  $conexion = mysqli_connect($servidor, $usuario, $password, $basededatos) or die ("No se ha podido conectar al servidor de Base de datos");
  $db = mysqli_select_db( $conexion, $basededatos ) or die ( "Upps! Pues va a ser que no se ha podido conectar a la base de datos" );
  $archivo = 1;
  // $limitey = date("Y");
  // $limitem = date("m");
  // $mes = $limitem;
  // $yr = $limitey;
  // echo "limites".$limitey." ".$limitem."<\br>";
  // $mes = $ArrDate[$DateMonth];
  // $yr = $DateYear;
// while($limitem>=$mes  || $limitey>$yr){ //RegistroTotalDesdeInicio
  while ($archivo < 3) {
      $pk_doc = -1;
      $pk_docid = -1;
      $consulta = "SELECT * FROM `codigosdocumentos` WHERE `Archivo` = ".$archivo.""; //archivos de tipo de compra
      $resultadoA = mysqli_query( $conexion, $consulta ) or die ( "Algo ha ido mal en la consulta a la base de datos 1er aviso");
    while ($columna2 = mysqli_fetch_array( $resultadoA)){
            $pk_doc = $columna2['Codigo'] ;
            $pk_docid = $columna2['PK'] ;
            // echo $pk_docid;
            // echo = $columna['PK'];
      header('Content-Type: application/json'); echo 'https://api.cymasuite.com/api/v1/sii/get-purchase-detail?company_id='.$PKempresa.'&per_page=10&page=1&date='.$yr.''.$mes.'&cod='.$pk_doc.'&operation='.$operation.'&state=REGISTRO';
      $json_ugly = file_get_contents('https://api.cymasuite.com/api/v1/sii/get-purchase-detail?company_id='.$PKempresa.'&per_page=10&page=1&date='.$yr.''.$mes.'&cod='.$pk_doc.'&operation='.$operation.'&state=REGISTRO', false, $context);
      $json_pretty = json_encode(json_decode($json_ugly), JSON_PRETTY_PRINT);
      // echo $json_pretty;
      $decoded_json = json_decode($json_pretty, true);
      echo $decoded_json [ 'total_items' ];
      if($decoded_json [ 'total_items' ]>0){
          $a =0;
        while ($a < $decoded_json [ 'total_items' ]) {
        
          $consulta3 = "SELECT * FROM `compraventa` where PK_Usuario = $PKempresa and detNroDoc = '".$decoded_json [ 'data' ][$a] [ 'detNroDoc']."'";
          $resultado3 = mysqli_query( $conexion, $consulta3 ) or die ( "Algo ha ido mal en la consulta a la base de datos 2.3do aviso");
          // $columna = mysqli_fetch_array( $resultado );
          $row_cnt = $resultado3->num_rows;
          if ($row_cnt==0){
            $boolean= TRUE; //no existe
            $pk_emp =-1;
            $consulta3 = "SELECT * FROM `empresa` where rut = '".$decoded_json [ 'data' ][$a] [ 'detRutDoc']."-".$decoded_json [ 'data' ][$a] [ 'detDvDoc']."'";
            $resultado3 = mysqli_query( $conexion, $consulta3 ) or die ( "Algo ha ido mal en la consulta a la base de datos 2do aviso");
            // $columna = mysqli_fetch_array( $resultado );
            $row_cnt = $resultado3->num_rows;
            if ($row_cnt>0)
            {
                $boolean=FALSE;
                $columna = mysqli_fetch_array( $resultado3);
                $pk_emp = $columna['PK'] ;
            }
            if($boolean){
                $consulta2 = "INSERT INTO empresa(PK,RUT ,RazonSocial ,Tipo) VALUES ('0','".$decoded_json [ 'data' ][$a] [ 'detRutDoc']."-".$decoded_json [ 'data' ][$a] [ 'detDvDoc'] ."','".$decoded_json [ 'data' ][$a] [ 'detRznSoc'] ."',null)";
                $resultado2 = mysqli_query( $conexion, $consulta2 ) or die ( "Algo ha ido mal en la consulta a la base de datos 2.2do aviso");
                
                $consulta3 = "SELECT PK FROM `empresa` ORDER BY `PK` DESC";
                $resultado3 = mysqli_query( $conexion, $consulta3 ) or die ( "Algo ha ido mal en la consulta a la base de datos 2do aviso");
                $columna = mysqli_fetch_array( $resultado3 );
                $pk_emp = $columna['PK'];
                $boolean=FALSE;
            }
            $boolean= TRUE; //no existe
            $pk_tip =-1;
            $consulta3 = "SELECT * FROM `tipomovimiento` where Nombre = '".$decoded_json[ 'data' ][$a] [ 'descTipoTransaccion']."'";
            $resultado3 = mysqli_query( $conexion, $consulta3 ) or die ( "Algo ha ido mal en la consulta a la base de datos 2.3do aviso");
            // $columna = mysqli_fetch_array( $resultado );
            $row_cnt = $resultado3->num_rows;
            if ($row_cnt>0)
            {
                $boolean=FALSE;
                $columna = mysqli_fetch_array( $resultado3);
                $pk_tip = $columna['PK'] ;
            }
            if($boolean){
              $consulta2 = "INSERT INTO tipomovimiento(PK,Nombre) VALUES ('0','".$decoded_json [ 'data' ][$a] [ 'descTipoTransaccion']."')";
              $resultado2 = mysqli_query( $conexion, $consulta2 ) or die ( "Algo ha ido mal en la consulta a la base de datos 2.4do aviso");
                
                $consulta3 = "SELECT PK FROM `tipomovimiento` ORDER BY `PK` DESC";
                $resultado3 = mysqli_query( $conexion, $consulta3 ) or die ( "Algo ha ido mal en la consulta a la base de datos 2do aviso");
                $columna = mysqli_fetch_array( $resultado3 );
                $pk_tip = $columna['PK'];
                $boolean=FALSE;
            }
            // echo $decoded_json;
            $b="NULL";
            if($decoded_json [ 'data' ][$a] [ 'dcvEstadoContab'] != null){
                $b = "'".$decoded_json [ 'data' ][$a] [ 'dcvEstadoContab']."'";
                }
                $c="NULL";
                if($decoded_json [ 'data' ][$a] [ 'detTipoDoc'] != null){
                $c = "'".$decoded_json [ 'data' ][$a] [ 'detTipoDoc']."'";
                }
                // echo $decoded_json[ 'data' ][$a]['detFchDoc'];
                $arr = explode('/',$decoded_json[ 'data' ][$a]['detFchDoc']);
                $fecha_a = $arr[2].'-'.$arr[1].'-'.$arr[0];
                $fecha_b="NULL";
                if($decoded_json [ 'data' ][$a] [ 'detFecAcuse'] != null){
                    $arr = explode('/',$decoded_json[ 'data' ][$a]['detFecAcuse']);
                    $fecha_b = "'".$arr[2].'-'.$arr[1].'-'.$arr[0]."'";
                }
                $fecha_c="NULL";
                if($decoded_json [ 'data' ][$a] [ 'detFecReclamado'] != null){
                    $arr = explode('/',$decoded_json[ 'data' ][$a]['detFecReclamado']);
                    $fecha_c = "'".$arr[2].'-'.$arr[1].'-'.$arr[0]."'";
                }
                $fecha_d="NULL";
                if($decoded_json [ 'data' ][$a] [ 'detFecRecepcion'] != null){
                    $arr2 = explode(' ',$decoded_json[ 'data' ][$a]['detFecRecepcion']);
                    $arr = explode('/',$arr2[0]);
                    $fecha_d = "'".$arr[2].'-'.$arr[1].'-'.$arr[0]." ".$arr2[1]."'";
                }
                $d="NULL";
                if($decoded_json [ 'data' ][$a] [ 'detMntTotal'] != null){
                $d = "'".$decoded_json [ 'data' ][$a] [ 'detMntTotal']."'";
                }
                $e="NULL";
                if($decoded_json [ 'data' ][$a] [ 'detTasaImp'] != null){
                $e = "'".$decoded_json [ 'data' ][$a] [ 'detTasaImp']."'";
                }
                $f="NULL";
                if($decoded_json [ 'data' ][$a] [ 'detAnulado'] != null){
                $f = "'".$decoded_json [ 'data' ][$a] [ 'detAnulado']."'";
                }
                $g="NULL";
                if($decoded_json [ 'data' ][$a] [ 'detIVARetTotal'] != null){
                $g = "'".$decoded_json [ 'data' ][$a] [ 'detIVARetTotal']."'";
                }
                $i="NULL";
                if($decoded_json [ 'data' ][$a] [ 'detIVAPropio'] != null){
                $i = "'".$decoded_json [ 'data' ][$a] [ 'detIVAPropio']."'";
                }
                $k="NULL";
                if($decoded_json [ 'data' ][$a] [ 'detLiqRutEmisor'] != null){
                $k = "'".$decoded_json [ 'data' ][$a] [ 'detLiqRutEmisor']."'";
                }
                $l="NULL";
                if($decoded_json [ 'data' ][$a] [ 'detLiqDvEmisor'] != null){
                $l = "'".$decoded_json [ 'data' ][$a] [ 'detLiqDvEmisor']."'";
                }
                $m="NULL";
                if($decoded_json [ 'data' ][$a] [ 'detLiqValComNeto'] != null){
                $m = "'".$decoded_json [ 'data' ][$a] [ 'detLiqValComNeto']."'";
                }
                $n="NULL";
                if($decoded_json [ 'data' ][$a] [ 'detLiqValComExe'] != null){
                $n = "'".$decoded_json [ 'data' ][$a] [ 'detLiqValComExe']."'";
                }
                $o="NULL";
                if($decoded_json [ 'data' ][$a] [ 'detLiqValComIVA'] != null){
                $o = "'".$decoded_json [ 'data' ][$a] [ 'detLiqValComIVA']."'";
                }
                $p="NULL";
                if($decoded_json [ 'data' ][$a] [ 'detIVAFueraPlazo'] != null){
                $p = "'".$decoded_json [ 'data' ][$a] [ 'detIVAFueraPlazo']."'";
                }
                $q="NULL";
                if($decoded_json [ 'data' ][$a] [ 'detFolioDocRef'] != null){
                $q = "'".$decoded_json [ 'data' ][$a] [ 'detFolioDocRef']."'";
                }
                $r="NULL";
                if($decoded_json [ 'data' ][$a] [ 'detExpNumId'] != null){
                $r = "'".$decoded_json [ 'data' ][$a] [ 'detExpNumId']."'";
                }
                $s="NULL";
                if($decoded_json [ 'data' ][$a] [ 'detExpNacionalidad'] != null){
                $s = "'".$decoded_json [ 'data' ][$a] [ 'detExpNacionalidad']."'";
                }
                $t="NULL";
                if($decoded_json [ 'data' ][$a] [ 'detCredEc'] != null){
                $t = "'".$decoded_json [ 'data' ][$a] [ 'detCredEc']."'";
                }
                $u="NULL";
                if($decoded_json [ 'data' ][$a] [ 'detLey18211'] != null){
                $u = "'".$decoded_json [ 'data' ][$a] [ 'detLey18211']."'";
                }
                $v="NULL";
                if($decoded_json [ 'data' ][$a] [ 'detDepEnvase'] != null){
                $v = "'".$decoded_json [ 'data' ][$a] [ 'detDepEnvase']."'";
                }
                $w="NULL";
                if($decoded_json [ 'data' ][$a] [ 'detIndSinCosto'] != null){
                $w = "'".$decoded_json [ 'data' ][$a] [ 'detIndSinCosto']."'";
                }
                $x="NULL";
                if($decoded_json [ 'data' ][$a] [ 'detIndServicio'] != null){
                $x = "'".$decoded_json [ 'data' ][$a] [ 'detIndServicio']."'";
                }
                $y="NULL";
                if($decoded_json [ 'data' ][$a] [ 'detMntNoFact'] != null){
                $y = "'".$decoded_json [ 'data' ][$a] [ 'detMntNoFact']."'";
                }
                $z="NULL";
                if($decoded_json [ 'data' ][$a] [ 'detMntPeriodo'] != null){
                $z = "'".$decoded_json [ 'data' ][$a] [ 'detMntPeriodo']."'";
                }
                $aa="NULL";
                if($decoded_json [ 'data' ][$a] [ 'detPsjNac'] != null){
                $aa = "'".$decoded_json [ 'data' ][$a] [ 'detPsjNac']."'";
                }
                $ab="NULL";
                if($decoded_json [ 'data' ][$a] [ 'detPsjInt'] != null){
                $ab = "'".$decoded_json [ 'data' ][$a] [ 'detPsjInt']."'";
              }
              $ac="NULL";
              if($decoded_json [ 'data' ][$a] [ 'totalDinrMontoIVANoR'] != null){
              $ac = "'".$decoded_json [ 'data' ][$a] [ 'totalDinrMontoIVANoR']."'";
              }
              $ad = 0;
              if($decoded_json[ 'data' ][$a]['emisorAgresivo']!=false){
                $ad = 1;
              }
              $ae="NULL";
              if($decoded_json [ 'data' ][$a] [ 'fechaActivacionAnotacion'] != null){
              $ae = "'".$decoded_json [ 'data' ][$a] [ 'fechaActivacionAnotacion']."'";
              }
              $af="NULL";
              $af = 0;
              if($decoded_json[ 'data' ][$a]['cambiarTipoTran']!=false){
                $af = 1;
              }
              // '".$decoded_json [ 'data' ][$a] [ 'detEventoReceptor']."', '".$decoded_json [ 'data' ][$a] [ 'detEventoReceptorLeyenda']."'

              $ag="NULL";
              if($decoded_json [ 'data' ][$a] [ 'detEventoReceptor'] != null){
              $ag = "'".$decoded_json [ 'data' ][$a] [ 'detEventoReceptor']."'";
              }
              $ah="NULL";
              if($decoded_json [ 'data' ][$a] [ 'detEventoReceptorLeyenda'] != null){
              $ah = "'".$decoded_json [ 'data' ][$a] [ 'detEventoReceptorLeyenda']."'";
              }
              $h="NULL";
              if($decoded_json [ 'data' ][$a] [ 'detIVARetParcial'] != null){
              $h = "'".$decoded_json [ 'data' ][$a] [ 'detIVARetParcial']."'";
              }
              $ai="NULL";
              if($decoded_json [ 'data' ][$a] [ 'detIVATerceros'] != null){
              $ai = "'".$decoded_json [ 'data' ][$a] [ 'detIVATerceros']."'";
              }
              $aj="NULL";
              if($decoded_json [ 'data' ][$a] [ 'detNumInt'] != null){
              $aj = "'".$decoded_json [ 'data' ][$a] [ 'detNumInt']."'";
            }
            $consulta4 = "INSERT INTO `compraventa` 
              (`PK`, `PK_Usuario`, `Documento`, `dhdrCodigo`, `dcvCodigo`, `dcvEstadoContab`, `detCodigo`, `detTipoDoc`, `PK_Empresa`, 
              `detNroDoc`, `detFchDoc`, `detFecAcuse`, `detFecReclamado`, `detFecRecepcion`, `detMntExe`, `detMntNeto`, `detMntActFijo`, 
              `detMntIVAActFijo`, `detMntIVANoRec`, `detMntCodNoRec`, `detMntSinCredito`, `detMntIVA`, `detMntTotal`, `detTasaImp`, 
              `detAnulado`, `detIVARetTotal`, `detIVARetParcial`, `detIVANoRetenido`, `detIVAPropio`, `detIVATerceros`, 
              `detIVAUsoComun`, `detLiqRutEmisor`, `detLiqDvEmisor`, `detLiqValComNeto`, `detLiqValComExe`, `detLiqValComIVA`, 
              `detIVAFueraPlazo`, `detTipoDocRef`, `detFolioDocRef`, `detExpNumId`, `detExpNacionalidad`, `detCredEc`, `detLey18211`, 
              `detDepEnvase`, `detIndSinCosto`, `detIndServicio`, `detMntNoFact`, `detMntPeriodo`, `detPsjNac`, `detPsjInt`, `detNumInt`, 
              `detCdgSIISucur`, `detEmisorNota`, `detTabPuros`, `detTabCigarrillos`, `detTabElaborado`, `detImpVehiculo`, `detTpoImp`, 
              `detTipoTransaccion`, `detEventoReceptor`, `detEventoReceptorLeyenda`, `cambiarTipoTran`, 
              `detPcarga`, `descTipoTransaccion`, `totalDtoiMontoImp`, 
              `totalDinrMontoIVANoR`, `emisorAgresivo`, `fechaActivacionAnotacion`) VALUES 
              ('0', '".$PKempresa."', '".$pk_docid."', '".$decoded_json [ 'data' ][$a] [ 'dhdrCodigo']."', '".$decoded_json [ 'data' ][$a] [ 'dcvCodigo']."',
              ".$b.", '".$decoded_json [ 'data' ][$a] [ 'detCodigo']."', ".$c.", '".$pk_emp."', '".$decoded_json [ 'data' ][$a] [ 'detNroDoc']."',
              '".$fecha_a."', ".$fecha_b.", ".$fecha_c.", ".$fecha_d.", '".$decoded_json [ 'data' ][$a] [ 'detMntExe']."',
              '".$decoded_json [ 'data' ][$a] [ 'detMntNeto']."', '".$decoded_json [ 'data' ][$a] [ 'detMntActFijo']."',
              '".$decoded_json [ 'data' ][$a] [ 'detMntIVAActFijo']."', '".$decoded_json [ 'data' ][$a] [ 'detMntIVANoRec']."',
              '".$decoded_json [ 'data' ][$a] [ 'detMntCodNoRec']."', '".$decoded_json [ 'data' ][$a] [ 'detMntSinCredito']."', 
              '".$decoded_json [ 'data' ][$a] [ 'detMntIVA']."', ".$d.", ".$e.", ".$f.", ".$g.",".$h.", 
              '".$decoded_json [ 'data' ][$a] [ 'detIVANoRetenido']."' , ".$i.", ".$ai.", 
              '".$decoded_json [ 'data' ][$a] [ 'detIVAUsoComun']."', ".$k.", ".$l.", ".$m.", ".$n.", ".$o.", ".$p.",
              '".$decoded_json [ 'data' ][$a] [ 'detTipoDocRef']."', ".$q.", ".$r.", ".$s.", ".$t.", ".$u.", ".$v.", ".$w.", ".$x.",
              ".$y.", ".$z.", ".$aa.", ".$ab.", ".$aj.", '".$decoded_json [ 'data' ][$a] [ 'detCdgSIISucur']."', 
              '".$decoded_json [ 'data' ][$a] [ 'detEmisorNota']."',
              '".$decoded_json [ 'data' ][$a] [ 'detTabPuros']."', '".$decoded_json [ 'data' ][$a] [ 'detTabCigarrillos']."', 
              '".$decoded_json [ 'data' ][$a] [ 'detTabElaborado']."',
              '".$decoded_json [ 'data' ][$a] [ 'detImpVehiculo']."', '".$decoded_json [ 'data' ][$a] [ 'detTpoImp']."', 
              '".$decoded_json [ 'data' ][$a] [ 'detTipoTransaccion']."', ".$ag.", ".$ah."
              , '".$af."', '".$decoded_json [ 'data' ][$a] [ 'detPcarga']."', '".$pk_tip."',
              '".$decoded_json [ 'data' ][$a] [ 'totalDtoiMontoImp']."', ".$ac.", '".$ad."', ".$ae.");";
              echo $consulta4;
            $resultado4 = mysqli_query( $conexion, $consulta4 ) or die ( "Algo ha ido mal en la consulta a la base de datos 3er aviso");
          }
          $a = $a+1;
        }
      }
    }
    $archivo = $archivo+1;
    $operation = "COMPRA";
  }
  echo "<a>registrado</a>";
//   $DateMonth++;
//   if ($DateMonth==12) {
//     $yr++;
//     $DateMonth=0;
//   }
//   $mes = $ArrDate[$DateMonth];
//   $operation = "VENTA";
//   $archivo = 1;
//   // echo $yr." ".$mes."<\br>";
// }
echo "finalizado";
mysqli_close( $conexion );
$mi_temporizador = microtime();
$partes_de_la_hora_actual = explode(' ', $mi_temporizador);
$hora_actual = $partes_de_la_hora_actual[1] + $partes_de_la_hora_actual[0];
$hora_al_terminar = $hora_actual;
$tiempo_total_en_segundos = round(($hora_al_terminar - $hora_al_empezar), 4);
echo 'La pagina fue generada en '.$tiempo_total_en_segundos.' segundos.';
?>
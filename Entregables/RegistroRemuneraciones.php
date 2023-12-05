<?php //se necesita https://github.com/PHPOffice/PHPExcel
//la carpeta descargada debe colocarse dentro de la carpeta donde este este programa
require_once 'PHPExcel-1.8/Classes/PHPExcel.php';
$archivo = "Carga Masiva REM y ejemplo.xlsx";
$inputFileType = PHPExcel_IOFactory::identify($archivo);
$objReader = PHPExcel_IOFactory::createReader($inputFileType);
$objPHPExcel = $objReader->load($archivo);
$sheet = $objPHPExcel->getSheet(1); 
$highestRow = $sheet->getHighestRow(); 
$highestColumn = $sheet->getHighestColumn(); //no se usa pero para tenerlo en cuenta si es necesario

$data = file_get_contents("key.json");
$key = json_decode($data, true);
$usuario = $key[ 'usuario' ];
$password = $key[ 'password' ];
$servidor = $key[ 'servidor' ];
$basededatos = $key[ 'basededatos' ];
$PKempresa = "867";
$a =0;
$conexion = mysqli_connect($servidor, $usuario, $password, $basededatos) or die ("No se ha podido conectar al servidor de Base de datos");
$db = mysqli_select_db( $conexion, $basededatos ) or die ( "Upps! Pues va a ser que no se ha podido conectar a la base de datos" );

for ($row = 2; $row <= $highestRow; $row++){ 
$boolean= TRUE; //no existe
$pk_depto = -1;
while($boolean){
$consulta = "SELECT * FROM `departamento`";
$resultado = mysqli_query( $conexion, $consulta ) or die ( "Algo ha ido mal en la consulta a la base de datos 1er aviso");
// $columna = mysqli_fetch_array( $resultado );

while ($columna = mysqli_fetch_array( $resultado))
{
    $IDC = $columna['Nombre'] ;
    if($IDC == $sheet->getCell("B".$row)->getValue()){
    $boolean=FALSE;
    $pk_depto = $columna['PK'] ;
    }
}
if($boolean){
  $consulta2 = "INSERT INTO departamento(PK,Nombre) VALUES ('0','".$sheet->getCell("B".$row)->getValue() ."')";
  $resultado = mysqli_query( $conexion, $consulta2 ) or die ( "Algo ha ido mal en la consulta a la base de datos 2do aviso");
}}
$boolean= TRUE; //no existe
$pk_trab = -1;
while($boolean){
$consulta = "SELECT * FROM `trabajadores`";
$resultado = mysqli_query( $conexion, $consulta ) or die ( "Algo ha ido mal en la consulta a la base de datos 1er aviso");
// $columna = mysqli_fetch_array( $resultado );

while ($columna = mysqli_fetch_array( $resultado))
{
    $IDC = $columna['RUT'] ;
    if($IDC == $sheet->getCell("D".$row)->getValue()){
    $boolean=FALSE;
    $pk_trab = $columna['PK'] ;
    }
}
if($boolean){
    echo "no lo encontro";
    $pk_trab = '1' ;
}}
$consulta3 =  "INSERT INTO `remuneraciones` (`PK`,`PK_Usuario`,`FechaCarga`, `Depto`, `Cod`, `Trabajador`, 
`DT`, `SBASE`, `GRATLEGAL`, `VALOR IMP`, `TOTAL IMP`, `ASIG FAM`, `CONECT`, `MOVI`, 
`COLACION`, `TOTAL NO IMP`, `TOT HABERES`, `PREVISION`, `SALUD`, `IMPUNICO`, `SEGCES`, 
`ADIC ISAPRE`, `TOT DESCLEG`, `RET SII`, `TOTDESC`, `LIQUIDO`, `SIS`, `AFC`, `MUTUAL`, 
`COSTO EMPRESA`) VALUES ('0', '".$PKempresa."', '" . date("Y-m-d") . "','".$pk_depto."','".$sheet->getCell("C".$row)->getValue()."', 
'".$pk_trab."', '".$sheet->getCell("F".$row)->getValue()."', '".$sheet->getCell("G".$row)->getValue()."',
 '".$sheet->getCell("H".$row)->getValue()."', '".$sheet->getCell("I".$row)->getValue()."', 
 '".$sheet->getCell("J".$row)->getValue()."', '".$sheet->getCell("K".$row)->getValue()."',
  '".$sheet->getCell("L".$row)->getValue()."', '".$sheet->getCell("M".$row)->getValue()."', 
  '".$sheet->getCell("N".$row)->getValue()."', '".$sheet->getCell("O".$row)->getValue()."', 
  '".$sheet->getCell("P".$row)->getValue()."', '".$sheet->getCell("Q".$row)->getValue()."',
   '".$sheet->getCell("R".$row)->getValue()."', '".$sheet->getCell("S".$row)->getValue()."', 
   '".$sheet->getCell("T".$row)->getValue()."', '".$sheet->getCell("U".$row)->getValue()."', 
   '".$sheet->getCell("V".$row)->getValue()."', '".$sheet->getCell("W".$row)->getValue()."',
    '".$sheet->getCell("X".$row)->getValue()."', '".$sheet->getCell("Y".$row)->getValue()."', 
    '".$sheet->getCell("Y".$row)->getValue()."', '".$sheet->getCell("Z".$row)->getValue()."',
     '".$sheet->getCell("AA".$row)->getValue()."', '".$sheet->getCell("AB".$row)->getValue()."');";
$resultado3 = mysqli_query( $conexion, $consulta3 ) or die ( "Algo ha ido mal en la consulta a la base de datos 3er aviso");

echo "<a>registrado</a>";
    }
    
mysqli_close( $conexion );
  
?>
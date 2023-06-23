-- phpMyAdmin SQL Dump
-- version 4.2.7.1
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-06-2023 a las 21:45:52
-- Versión del servidor: 5.6.20
-- Versión de PHP: 5.5.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `a_trabajo`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `archivo`
--

CREATE TABLE IF NOT EXISTS `archivo` (
`PK` int(11) NOT NULL,
  `Nombre` varchar(3) NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Volcado de datos para la tabla `archivo`
--

INSERT INTO `archivo` (`PK`, `Nombre`) VALUES
(1, 'IEV'),
(2, 'IEC');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `codigosdocumentos`
--

CREATE TABLE IF NOT EXISTS `codigosdocumentos` (
`id` int(11) NOT NULL,
  `Codigo` int(11) NOT NULL,
  `Nombre` varchar(100) NOT NULL,
  `Archivo` int(11) NOT NULL,
  `TipoDocumento` int(11) NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=63 ;

--
-- Volcado de datos para la tabla `codigosdocumentos`
--

INSERT INTO `codigosdocumentos` (`id`, `Codigo`, `Nombre`, `Archivo`, `TipoDocumento`) VALUES
(1, 30, 'Factura', 1, 1),
(2, 32, 'Factura de ventas y servicios no afectos o exentos de IVA', 1, 1),
(3, 33, 'Factura Electrónica ', 1, 1),
(4, 34, 'Factura no Afecta o Exenta Electrónica', 1, 1),
(7, 35, 'Total operaciones del mes, con boleta (afecta)', 1, 1),
(8, 38, 'Total operaciones del mes con boleta no afecta o exenta', 1, 1),
(9, 39, 'Total operaciones del mes, con boleta electrónica ', 1, 1),
(10, 40, 'Liquidación factura', 1, 1),
(11, 41, 'Total operaciones del mes, con boleta no afecta o exenta electrónica', 1, 1),
(12, 43, 'Liquidación-Factura Electrónica', 1, 1),
(13, 45, 'Factura de Compra', 1, 1),
(14, 46, 'Factura de Compra electrónica. ', 1, 1),
(15, 55, 'Nota de débito', 1, 1),
(16, 56, 'Nota de débito electrónica', 1, 1),
(17, 60, 'Nota de Crédito', 1, 1),
(18, 61, 'Nota de crédito electrónica', 1, 1),
(19, 101, 'Factura de exportación', 1, 1),
(20, 102, 'Factura de venta exenta a zona franca primaria (Res. Ex. N° 601 de 07.05.82)', 1, 1),
(21, 103, 'Liquidación', 1, 1),
(22, 104, 'Nota de débito de exportación', 1, 1),
(23, 105, 'Boleta liquidación (Res. Ex. N° 1423 del 23.12.76)', 1, 1),
(24, 106, 'Nota de Crédito de exportación', 1, 1),
(25, 108, 'SRF Solicitud Registro de Factura ', 1, 1),
(26, 109, 'Factura a turista (Res. Ex. N° 6428 de 06.12.93)', 1, 1),
(27, 110, 'Factura de Exportación Electrónica', 1, 1),
(28, 111, 'Nota de Débito de Exportación Electrónica ', 1, 1),
(29, 112, 'Nota de Crédito de Exportación Electrónica', 1, 1),
(30, 901, 'Factura de ventas a empresas del territorio preferencial ( Res. Ex. N°1057, del 25.04.85)', 1, 1),
(31, 902, 'Conocimiento de Embarque (Marítimo o aéreo) ', 1, 1),
(32, 903, 'Documento único de Salida (DUS)', 1, 1),
(33, 919, 'Resumen ventas de nacionales pasajes sin Factura', 1, 1),
(34, 920, 'Otros registros no documentados Aumenta débito', 1, 1),
(35, 922, 'Otros registros. Disminuye débito', 1, 1),
(36, 924, 'Resumen ventas de internacionales pasajes sin Factura', 1, 1),
(37, 30, 'Factura ', 2, 2),
(38, 32, 'Factura de ventas y servicios no afectos o exentos de IVA', 2, 2),
(39, 33, 'Factura Electrónica', 2, 2),
(40, 34, 'Factura no Afecta o Exenta Electrónica', 2, 2),
(41, 40, 'Liquidación Factura', 2, 2),
(42, 43, 'Liquidación Factura Electrónica', 2, 2),
(43, 45, 'Factura de Compra', 2, 2),
(44, 46, 'Factura de Compra electrónica', 2, 2),
(45, 55, 'Nota de Débito', 2, 2),
(46, 56, 'Nota de débito electrónica', 2, 2),
(47, 60, 'Nota de Crédito', 2, 2),
(48, 61, 'Nota de crédito electrónica', 2, 2),
(49, 108, 'SRF Solicitud de Registro de Factura', 2, 2),
(50, 901, 'Factura de ventas a empresas del territorio preferencial ( Res. Ex. N° 1057, del 25.04.85)', 2, 2),
(51, 914, 'Declaración de Ingreso (DIN)', 2, 2),
(52, 911, 'Declaración de Ingreso a Zona Franca Primaria', 2, 2),
(53, 904, 'Factura de Traspaso', 1, 3),
(54, 905, 'Factura de Reexpedición', 1, 3),
(55, 906, 'Boletas Venta Módulos ZF (todas)', 1, 3),
(56, 907, 'Facturas Venta Módulo ZF (todas)', 1, 3),
(57, 904, 'Factura de Traspaso', 2, 4),
(58, 909, 'Facturas Venta Módulo ZF', 2, 4),
(59, 910, 'Solicitud Traslado Zona Franca (Z)', 2, 4),
(60, 911, 'Declaración de Ingreso a Zona Franca Primaria', 2, 4),
(61, 922, 'Ajuste aumento Tipo de Cambio (código 500): a utilizar cuando la paridad (moneda extranjera)/(moneda', 1, 5),
(62, 924, 'Ajuste disminución Tipo de Cambio (código 501): a utilizar cuando la paridad (moneda extranjera)/(mo', 1, 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `compras`
--

CREATE TABLE IF NOT EXISTS `compras` (
  `PK` int(11) NOT NULL,
  `documento` int(11) NOT NULL,
  `Empresa_pk` int(11) NOT NULL,
  `proveedor_pk` int(11) NOT NULL,
  `tipo` int(11) NOT NULL,
  `folio` int(11) NOT NULL,
  `fecha_docto` date NOT NULL,
  `fecha_recep` datetime NOT NULL,
  `fecha_acuse:recib` datetime NOT NULL,
  `Monto_exent` int(11) DEFAULT NULL,
  `MontoNeto` int(11) NOT NULL,
  `MontoIvaRECUP` int(11) NOT NULL,
  `MontoIvaNORECUP` int(11) DEFAULT NULL,
  `CODIG IVA NO REC` int(11) DEFAULT NULL,
  `MontoTotal` int(11) NOT NULL,
  `MONTO NETO ACTIVO` int(11) DEFAULT NULL,
  `IVA ACTIVO FIJO` int(11) DEFAULT NULL,
  `IVA USO COMUN` int(11) DEFAULT NULL,
  `IMPTO SIN DER` int(11) DEFAULT NULL,
  `IVA NO RETEN` int(11) NOT NULL,
  `TABACOS PUROS` int(11) DEFAULT NULL,
  `TABACOS CIGARR` int(11) DEFAULT NULL,
  `TABACOS ELAB` int(11) DEFAULT NULL,
  `NCE O NDE` int(11) NOT NULL,
  `CODIGO OTRO` int(11) DEFAULT NULL,
  `VALOR OTRO` int(11) DEFAULT NULL,
  `TASA OTRO` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cuentas`
--

CREATE TABLE IF NOT EXISTS `cuentas` (
`PK` int(11) NOT NULL,
  `Codigo` varchar(7) NOT NULL,
  `Nombre` varchar(30) NOT NULL,
  `Atributo` varchar(3) NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=221 ;

--
-- Volcado de datos para la tabla `cuentas`
--

INSERT INTO `cuentas` (`PK`, `Codigo`, `Nombre`, `Atributo`) VALUES
(1, '1101-01', 'CAJA', ''),
(2, '1101-02', 'BANCO', ''),
(3, '1102-01', 'DEPOSITO A PLAZO', ''),
(4, '1103-01', 'ACCIONES', ''),
(5, '1104-01', 'DEUDORES CLIENTES', 'AUX'),
(6, '1104-02', 'CLIENTES BOLETAS', ''),
(7, '1105-01', 'LETRAS EN CARTERA', ''),
(8, '1105-10', 'CHEQUE POR COBRAR', ''),
(9, '1105-17', 'DOCUMENTOS PROTESTADOS', ''),
(10, '1106-01', 'ANTICIPO DE SUELDOS', ''),
(11, '1106-02', 'DEUDORES VARIOS', ''),
(12, '1106-03', 'PRESTAMOS TRABAJADORES', ''),
(13, '1106-05', 'EMPRESAS RELACIONADAS', ''),
(14, '1106-07', 'FONDOS A RENDIR', ''),
(15, '1107-01', 'DEUDORES INCOBRABLES', ''),
(16, '1108-01', 'PAGOS PROVISIONALES', ''),
(17, '1108-02', 'IVA CREDITO FISCAL', ''),
(18, '1108-03', 'REMANENTE CREDITO FISCAL', ''),
(19, '1108-04', 'CREDITO ART. 33 BIS', ''),
(20, '1108-06', 'CREDITO SENCE', ''),
(21, '1109-01', 'MERCADERIAS', ''),
(22, '1109-02', 'MATERIAS PRIMAS', ''),
(23, '1109-03', 'MERCADERIA EN TRANSITO', ''),
(24, '1109-04', 'PRODUCTOS FABRICADOS', ''),
(25, '1109-05', 'PRODUCTOS EN PROCESO', ''),
(26, '1109-06', 'ENVASES', ''),
(27, '1110-01', 'COMERCIO EXTERIOR', ''),
(28, '1110-02', 'INTERESES PAGADOS POR', ''),
(29, '1110-03', 'SEGUROS', ''),
(30, '1110-04', 'ANTICIPO DE PROVEEDORES', 'AUX'),
(31, '1110-05', 'FLUCT. CREDITOS LARGO PLAZO', ''),
(32, '1110-06', 'REMODELACION LOCALES', ''),
(33, '1110-07', 'ORG. Y PUESTA EN MARCHA', ''),
(34, '1111-01', 'RETIRO SOCIOS', ''),
(35, '1111-02', 'RETIROS REINVERSION', ''),
(36, '1112-01', 'GASTOS REORGANIZACION', ''),
(37, '1113-01', 'CUENTAS OBLIGADAS SOCIOS', ''),
(38, '1115-01', 'GASTOS TRIBUTARIOS', ''),
(39, '1117-01', 'CTA. IMPORTACIONES', ''),
(40, '1118-01', 'GASTOS RECHAZADOS', ''),
(41, '1201-01', 'EQUPOS COMPUTACIONALES', ''),
(42, '1202-01', 'BIENES RAICES', ''),
(43, '1203-01', 'MUEBLES Y UTILES', ''),
(44, '1204-01', 'VEHICULO', ''),
(45, '1205-01', 'MAQUINARIAS', ''),
(46, '1207-01', 'DEP ACUM EQUIPOS', ''),
(47, '1207-02', 'DEP ACUM MAQUINARIAS Y', ''),
(48, '1207-03', 'DEP ACUM MUEBLES Y UTILES', ''),
(49, '1208-01', 'DEPRECIACION EJERCICIO (-)', ''),
(50, '1209-01', 'MUEBLES UTILES E', ''),
(51, '1209-02', 'HERRAMIENTAS Y ENSERES', ''),
(52, '1301-01', 'DERECHOS OTRAS EMPRESAS', ''),
(53, '1303-01', 'DERECHOS DE LLAVES', ''),
(54, '1305-01', 'FLUCTUACIONES DE VALORES', ''),
(55, '1306-01', 'MARCAS COMERCIALES', ''),
(56, '1903-01', 'BOLETAS DE GARANTIA', ''),
(57, '1904-01', 'LETRAS DESCONTADAS', ''),
(58, '1905-01', 'DOCUMENTOS EN GARANTIAS', ''),
(59, '1906-01', 'ACCIONES SUSCRITAS', ''),
(60, '2101-01', 'PRESTAMO BANCARIO', ''),
(61, '2101-12', 'LINEA DE CREDITO', ''),
(62, '2104-01', 'DIVIDENDOS POR PAGAR', ''),
(63, '2105-01', 'FACTURA POR PAGAR', 'AUX'),
(64, '2105-02', 'REMUNERACIONES POR PAGAR', ''),
(65, '2105-03', 'GRATIFICACIONES POR PAGAR', ''),
(66, '2105-04', 'HONORARIOS POR PAGAR', 'HON'),
(67, '2105-05', 'FINIQUITOS POR PAGAR', 'AUX'),
(68, '2106-01', 'LETRAS POR PAGAR', ''),
(69, '2106-03', 'CREDITOS DOCUMENTARIOS', ''),
(70, '2107-04', 'OTROS ACREEDORES VARIOS', ''),
(71, '2108-01', 'PROCISION PPM', ''),
(72, '2108-02', 'IVA DEBITO FISCAL', ''),
(73, '2108-03', 'IMPUESTO UNICO', ''),
(74, '2108-04', 'RETENCION PROFESIONALES', ''),
(75, '2108-05', 'IVA POR PAGAR', ''),
(76, '2108-06', 'IVA POSTERGADO', ''),
(77, '2108-07', 'AFP', ''),
(78, '2108-08', 'ISAPRE', ''),
(79, '2108-09', 'FONASA', ''),
(80, '2108-10', 'MUTUAL POR PAGAR', ''),
(81, '2108-24', 'INST.NORMALIZA.PREVISIONAL', ''),
(82, '2109-01', 'PROV. IMPUESTO RENTA', ''),
(83, '2110-02', 'OTRO INGR. ADELANTADOS', ''),
(84, '2110-04', 'ANTICIPO CLIENTES', ''),
(85, '2111-55', 'TRASPASOS ENTRE BANCOS', ''),
(86, '2111-57', 'TRASPASOS REAPERTURA', ''),
(87, '2111-58', 'TRASPASOS CAJAS', ''),
(88, '2111-59', 'TRASPASOS POR DISTRIBUIR', ''),
(89, '2111-80', 'CANJES', ''),
(90, '2111-90', 'TRASPASOS VARIOS', ''),
(91, '2112-01', 'APORTES TRANSITORIOS', ''),
(92, '2112-02', 'DIST. UTILIDADES SOCIOS', ''),
(93, '2116-01', 'FACTURAS POR PAGAR', 'AUX'),
(94, '2201-01', 'CREDITOS LARGO PLAZO', ''),
(95, '2202-01', 'D ADUANA DIFERIDOS', ''),
(96, '2203-01', 'DOC. POR PAGAR L PLAZO', ''),
(97, '2206-01', 'INDEMNIZ. AÑOS SERVICIO', ''),
(98, '2207-01', 'MUTUOS REAJUSTABLES', ''),
(99, '2301-01', 'CAPITAL', ''),
(100, '2302-02', 'REVALORIZAC CAPITAL PROPIO', ''),
(101, '2302-03', 'OTRAS REVALORIZACIONES', ''),
(102, '2304-01', 'FLUCTUACION DE VALORES', ''),
(103, '2305-04', 'PERDIDAS ACUMULADAS (-)', ''),
(104, '2305-05', 'UTILIDAD (PERDIDA) EJEC.', ''),
(105, '2305-06', 'UTILIDADES ACUMULADAS', ''),
(106, '2903-01', 'RESOINS. BOLETAS GARANTIA', ''),
(107, '2904-01', 'RESP. LETRAS DESCONTADAS', ''),
(108, '2905-01', 'RESP. DOCUMENTOS EN', ''),
(109, '2906-01', 'ACCIONES CAPITAL SUSCRITO', ''),
(110, '4101-01', 'COSTO DE VENTA', ''),
(111, '4101-02', 'COSTO M PRIMAS Y MATERIALES', ''),
(112, '4101-03', 'COMBUSTIBLES Y LUBRICANTES', ''),
(113, '4101-04', 'LUZ Y FUERZA', ''),
(114, '4101-05', 'ETIQUETAS Y ENVASES', ''),
(115, '4101-08', 'FLETES Y GASTOS DE DESPACHO', ''),
(116, '4101-09', 'OTROS GASTOS DE', ''),
(117, '4101-10', 'MANTENCION MAQUINARIAS', ''),
(118, '4101-12', 'SEGUROS', ''),
(119, '4101-15', 'GASTOS BODEGA', ''),
(120, '4101-16', 'GASTOS FABRICA', ''),
(121, '4101-17', 'GASTOS LABORATORIO', ''),
(122, '4101-18', 'GASTOS COMERCIO EXTERIOR', ''),
(123, '4101-22', 'MERMA Y EXCEDENTES', ''),
(124, '4201-01', 'SERVICIOS DE ASESORIAS Y', ''),
(125, '4201-02', 'HONORARIOS PROFESIONALES', ''),
(126, '4201-03', 'LEYES SOCIALES', ''),
(127, '4201-04', 'GASTOS DE OFICINA', ''),
(128, '4201-05', 'IMPUESTOS Y PATENTES', ''),
(129, '4201-06', 'MANT VEHICULOS Y EQ TRANSP', ''),
(130, '4201-07', 'MANTENC. EQUIP. Y EDIFICIOS', ''),
(131, '4201-08', 'GASTOS GENERALES', ''),
(132, '4201-09', 'REPRESENTACION Y VIATICOS', ''),
(133, '4201-10', 'GASTOS BANCARIOS', ''),
(134, '4201-11', 'INTERESES Y MULTAS', ''),
(135, '4201-12', 'LEGALES Y NOTARIALES', ''),
(136, '4201-13', 'BIENESTAR SOCIAL', ''),
(137, '4201-14', 'GRATIFICACIONES', ''),
(138, '4201-15', 'INDEMNIZACIONES', ''),
(139, '4201-16', 'ARRIENDO MAQUINAS Y', ''),
(140, '4201-17', 'GASTOS PROPIESTAS', ''),
(141, '4201-18', 'SEGUROS', ''),
(142, '4201-19', 'GASTOS CAPACIT. PERSONAL', ''),
(143, '4201-20', 'GASTO IVA', ''),
(144, '4201-21', 'TAG Y PEAJES', ''),
(145, '4201-22', 'OTROS IMPUESTOS', ''),
(146, '4201-23', 'SALA CUNA', ''),
(147, '4201-25', 'LUZ GAS AGUA ASEO', ''),
(148, '4201-26', 'LOCOMOCION Y COLACION', ''),
(149, '4201-28', 'SINIESTROS', ''),
(150, '4201-30', 'ARRIENDO Y GASTOS COMUNES', ''),
(151, '4201-31', 'TELEFONOS CORREO', ''),
(152, '4201-32', 'SUSCRIPCIONES Y', ''),
(153, '4201-37', 'SERVICIOS COMPUTACIONALES', ''),
(154, '4201-39', 'GASTOS RECHAZADOS', ''),
(155, '4201-40', 'DONACIONES', ''),
(156, '4201-41', 'GASTO DE VIAJES', ''),
(157, '4201-42', 'GASTO ESTACIONAMIENTO', ''),
(158, '4202-01', 'SUELDO BASE', ''),
(159, '4202-02', 'GRATIFICACION', ''),
(160, '4202-03', 'BONOS Y AGUINALDO', ''),
(161, '4202-04', 'COLACION', ''),
(162, '4202-05', 'MOVILIZACION', ''),
(163, '4202-06', 'ASIGNACION DE TELEFONO', ''),
(164, '4202-07', 'SEGURO DE INVALIDEZ Y', ''),
(165, '4202-08', 'MUTUAL DE SEGURIDAD', ''),
(166, '4202-09', 'FINIQUITO', ''),
(167, '4202-10', 'VACACIONES PROPORCIONALES', ''),
(168, '4202-11', 'SEGURO CESANTIA EMPEADOR', ''),
(169, '4202-12', 'COTIZACION EN SUSPENSION', ''),
(170, '4204-01', 'FLUCTUACION DE CAMBIOS', ''),
(171, '4205-01', 'INTERESES Y REAJUSTES', ''),
(172, '4205-02', 'INTS PRORROGA PROVEEDORES', ''),
(173, '4205-04', 'REAJUSTES', ''),
(174, '4291-01', 'CASTIGOS Y AMONESTACIONES', ''),
(175, '4292-01', 'CASTIGOS DEUDORES MOROSOS', ''),
(176, '4301-01', 'COMISIONES VENDEDORES', ''),
(177, '4301-02', 'GASTOS COBRANZA', ''),
(178, '4301-03', 'PUBLICIDAD', ''),
(179, '4301-05', 'OTROS GASTOS VENTAS', ''),
(180, '4401-01', 'INTERERSES PAGADOS', ''),
(181, '4401-02', 'REMUNERACIONES DIRECTORES', ''),
(182, '4401-03', 'SUELDO EMPRESARIAL', ''),
(183, '4404-01', 'COSTO VTAS ACTIVO FIJO', ''),
(184, '4405-01', 'REAJUSTE CRED. FISCAL', ''),
(185, '4501-01', 'CAPITAL PROPIO INICIAL', ''),
(186, '4501-02', 'AUMENTOS DE CAPITAL', ''),
(187, '4501-03', 'DISMINUCIONES DE CAPITAL', ''),
(188, '4501-04', 'IMPUESTO PROVISIONAL', ''),
(189, '4501-05', 'ACTIVO INMOVILIZADO', ''),
(190, '4501-06', 'EXISTENCIAS', ''),
(191, '4501-07', 'DEUDA MONEDA EXTRANJERA', ''),
(192, '4501-08', 'GASTOS DIFERIDOS', ''),
(193, '4501-09', 'DEUDAS REAJUSTABLES', ''),
(194, '4501-10', 'ACCIONES', ''),
(195, '4501-11', 'GASTOS RECHAZADOS', ''),
(196, '4501-12', 'OTROS ACTIVOS', ''),
(197, '4701-01', 'IMPTO PRIMERA CATEGORIA', ''),
(198, '5101-01', 'VENTAS AFECTAS', ''),
(199, '5101-02', 'VENTAS EXENTAS', ''),
(200, '5101-03', 'COMISIONES PERCIBIDAS', ''),
(201, '5201-01', 'FLUCTUACIONES DE CAMBIOS', ''),
(202, '5201-02', 'DIVIDENDOS PERCIBIDOS', ''),
(203, '5201-03', 'OTRAS ENTRADAS', ''),
(204, '5201-04', 'INTERESES GANADOS', ''),
(205, '5201-05', 'VENTAS ACTIVO FIJO', ''),
(206, '5201-07', 'INDEMNIZ SEGUROS', ''),
(207, '5202-01', 'REAJUSTE DE PPM', ''),
(208, '5203-01', 'REAJUSTE REMANENTE', ''),
(209, '5501-01', 'REAJUSTE C PROPIO INICIAL', ''),
(210, '5501-02', 'REAJUSTE AUMENTOS CAPITAL', ''),
(211, '5501-03', 'REAJUSTE DISMINUC CAPITAL', ''),
(212, '5501-04', 'REAJUSTE IMPTO PROVISIONAL', ''),
(213, '5501-05', 'REAJUSTE ACTIVO FIJO', ''),
(214, '5501-06', 'REAJUSTE EXISTENCIAS', ''),
(215, '5501-07', 'REAJUSTE DEUDAS', ''),
(216, '5501-08', 'REAJUSTE GASTOS DIFERIDOS', ''),
(217, '5501-09', 'REAJUSTE DEUDAS', ''),
(218, '5501-10', 'REAJUSTE ACCIONES', ''),
(219, '5501-11', 'REAJUSTE GASTOS', ''),
(220, '5512', 'REAJUSTE OTROS ACTIVOS', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `documento`
--

CREATE TABLE IF NOT EXISTS `documento` (
`PK` int(11) NOT NULL,
  `Nombre` varchar(50) NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Volcado de datos para la tabla `documento`
--

INSERT INTO `documento` (`PK`, `Nombre`) VALUES
(1, 'Documentos de Ventas'),
(2, 'Documentos de Compras'),
(3, 'Información Electrónica de Ventas'),
(4, 'Información Electrónica de Compras'),
(5, 'Códigos de Ajuste de tipo de Cambio');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empresa`
--

CREATE TABLE IF NOT EXISTS `empresa` (
`PK` int(11) NOT NULL,
  `rut` varchar(11) NOT NULL,
  `RazonSocial` varchar(50) NOT NULL,
  `Tipo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `libro`
--

CREATE TABLE IF NOT EXISTS `libro` (
`PK` int(11) NOT NULL,
  `FK_empresacliente` int(11) NOT NULL,
  `FECHA` date NOT NULL,
  `TIPO` int(11) NOT NULL,
  `NUM` int(11) NOT NULL,
  `SECUENCIA` int(11) NOT NULL,
  `CUENTA` int(11) NOT NULL,
  `GLOSA` varchar(50) NOT NULL,
  `DEBE` int(11) DEFAULT NULL,
  `HABER` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipoempresa`
--

CREATE TABLE IF NOT EXISTS `tipoempresa` (
`PK` int(11) NOT NULL,
  `Nombre` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo libro`
--

CREATE TABLE IF NOT EXISTS `tipo libro` (
  `PK` int(11) NOT NULL,
  `NOMBRE` varchar(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipoventa`
--

CREATE TABLE IF NOT EXISTS `tipoventa` (
  `PK` int(11) NOT NULL,
  `Nombre` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ventas`
--

CREATE TABLE IF NOT EXISTS `ventas` (
  `PK` int(11) NOT NULL,
  `documento` int(11) NOT NULL,
  `Empresa_pk` int(11) NOT NULL,
  `cliente_pk` int(11) NOT NULL,
  `tipo` int(11) NOT NULL,
  `folio` int(11) NOT NULL,
  `fecha_docto` date NOT NULL,
  `fecha_recep` datetime NOT NULL,
  `fecha_acuse:recib` datetime NOT NULL,
  `fecha_reclamo` datetime DEFAULT NULL,
  `Monto_exent` int(11) DEFAULT NULL,
  `MontoNeto` int(11) NOT NULL,
  `MontoIva` int(11) NOT NULL,
  `MontoTotal` int(11) NOT NULL,
  `IVA RETEN TOTAL` int(11) NOT NULL,
  `IVA RETEN PARCIAL` int(11) NOT NULL,
  `IVA NO RETEN` int(11) NOT NULL,
  `IVA PROPIO` int(11) NOT NULL,
  `IVA 3ROS` int(11) NOT NULL,
  `RUT EMISOR` varchar(11) DEFAULT NULL,
  `NETO COMIS` int(11) NOT NULL,
  `EXCENTO COMIS` int(11) NOT NULL,
  `IVA COMISION` int(11) NOT NULL,
  `IVA FUERA PLAZO` int(11) NOT NULL,
  `TIPO DCTO` int(11) DEFAULT NULL,
  `FOLIO DCTO` int(11) DEFAULT NULL,
  `NUM. IDENT` int(11) DEFAULT NULL,
  `NACIONALIDAD` int(11) DEFAULT NULL,
  `CREDIT EMPRES` int(11) NOT NULL,
  `IMPTO ZONA` int(11) DEFAULT NULL,
  `GARANT DEP ENVAS` int(11) NOT NULL,
  `INDIC VENTA` int(11) NOT NULL,
  `INDIC SERCIVIO` int(11) NOT NULL,
  `MONTO NO FACTUR` int(11) NOT NULL,
  `TOTAL MONTO` int(11) NOT NULL,
  `VENTA PASAJE NAC` int(11) DEFAULT NULL,
  `VENTA PASAJE INTERN` int(11) DEFAULT NULL,
  `NUMERO INTERNO` int(11) DEFAULT NULL,
  `CODIGO SUCURSAL` int(11) NOT NULL,
  `NCE O NDE` int(11) DEFAULT NULL,
  `CODIGO OTRO` int(11) DEFAULT NULL,
  `VALOR OTRO IMP` int(11) DEFAULT NULL,
  `TASA OTRO IMP` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `archivo`
--
ALTER TABLE `archivo`
 ADD PRIMARY KEY (`PK`);

--
-- Indices de la tabla `codigosdocumentos`
--
ALTER TABLE `codigosdocumentos`
 ADD PRIMARY KEY (`id`), ADD KEY `CD_ibfk_1` (`Archivo`), ADD KEY `CD_ibfk_2` (`TipoDocumento`);

--
-- Indices de la tabla `cuentas`
--
ALTER TABLE `cuentas`
 ADD PRIMARY KEY (`PK`);

--
-- Indices de la tabla `documento`
--
ALTER TABLE `documento`
 ADD PRIMARY KEY (`PK`);

--
-- Indices de la tabla `empresa`
--
ALTER TABLE `empresa`
 ADD PRIMARY KEY (`PK`);

--
-- Indices de la tabla `libro`
--
ALTER TABLE `libro`
 ADD PRIMARY KEY (`PK`);

--
-- Indices de la tabla `tipoempresa`
--
ALTER TABLE `tipoempresa`
 ADD PRIMARY KEY (`PK`);

--
-- Indices de la tabla `tipo libro`
--
ALTER TABLE `tipo libro`
 ADD PRIMARY KEY (`PK`);

--
-- Indices de la tabla `tipoventa`
--
ALTER TABLE `tipoventa`
 ADD PRIMARY KEY (`PK`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `archivo`
--
ALTER TABLE `archivo`
MODIFY `PK` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT de la tabla `codigosdocumentos`
--
ALTER TABLE `codigosdocumentos`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=63;
--
-- AUTO_INCREMENT de la tabla `cuentas`
--
ALTER TABLE `cuentas`
MODIFY `PK` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=221;
--
-- AUTO_INCREMENT de la tabla `documento`
--
ALTER TABLE `documento`
MODIFY `PK` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT de la tabla `empresa`
--
ALTER TABLE `empresa`
MODIFY `PK` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `libro`
--
ALTER TABLE `libro`
MODIFY `PK` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `tipoempresa`
--
ALTER TABLE `tipoempresa`
MODIFY `PK` int(11) NOT NULL AUTO_INCREMENT;
--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `codigosdocumentos`
--
ALTER TABLE `codigosdocumentos`
ADD CONSTRAINT `CD_ibfk_1` FOREIGN KEY (`Archivo`) REFERENCES `archivo` (`PK`),
ADD CONSTRAINT `CD_ibfk_2` FOREIGN KEY (`TipoDocumento`) REFERENCES `documento` (`PK`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

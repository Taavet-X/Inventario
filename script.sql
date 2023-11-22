-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               8.0.34 - MySQL Community Server - GPL
-- Server OS:                    Win64
-- HeidiSQL Version:             12.5.0.6677
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for inventario_ohlala
DROP DATABASE IF EXISTS `inventario_ohlala`;
CREATE DATABASE IF NOT EXISTS `inventario_ohlala` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `inventario_ohlala`;

-- Dumping structure for table inventario_ohlala.cliente
CREATE TABLE IF NOT EXISTS `cliente` (
  `identificacion` bigint NOT NULL DEFAULT (0),
  `tipo_identificacion` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `nombre_cliente` varchar(50) NOT NULL DEFAULT '',
  `celular` bigint NOT NULL DEFAULT (0),
  `direccion` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `correo` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`identificacion`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table inventario_ohlala.cliente: ~4 rows (approximately)
INSERT INTO `cliente` (`identificacion`, `tipo_identificacion`, `nombre_cliente`, `celular`, `direccion`, `correo`) VALUES
	(1070626163, 'CC', 'Nicolas Victoria', 3132487210, NULL, 'nicolasvr24137@gmail.com'),
	(1070626166, 'CC', 'Sebastian Barona', 3132487208, NULL, 'nicolasvr24137@gmail.com'),
	(1070634566, 'CC', 'Manuel Castro', 3132487209, NULL, 'nicolasvr24137@gmail.com'),
	(12312312312, 'CC', 'maria', 213123124555, NULL, 'nicolasvr24137@gmail.com');

-- Dumping structure for table inventario_ohlala.detalle_producto
CREATE TABLE IF NOT EXISTS `detalle_producto` (
  `id_detalle_producto` int NOT NULL AUTO_INCREMENT,
  `fecha_detalle` date DEFAULT NULL,
  `cantidad_usada` double DEFAULT NULL,
  `id_inventario` int DEFAULT NULL,
  `id_insumos` int DEFAULT NULL,
  `id_pedido` int DEFAULT NULL,
  `id_producto` int DEFAULT NULL,
  PRIMARY KEY (`id_detalle_producto`) USING BTREE,
  KEY `FK_detalle_producto_inventario` (`id_inventario`),
  KEY `FK_detalle_producto_insumos` (`id_insumos`),
  KEY `FK_detalle_producto_pedido` (`id_pedido`),
  KEY `FK_detalle_producto_productos` (`id_producto`),
  CONSTRAINT `FK_detalle_producto_insumos` FOREIGN KEY (`id_insumos`) REFERENCES `insumos` (`id_insumos`),
  CONSTRAINT `FK_detalle_producto_inventario` FOREIGN KEY (`id_inventario`) REFERENCES `inventario` (`id_lote`),
  CONSTRAINT `FK_detalle_producto_pedido` FOREIGN KEY (`id_pedido`) REFERENCES `pedido` (`id_pedido`),
  CONSTRAINT `FK_detalle_producto_productos` FOREIGN KEY (`id_producto`) REFERENCES `productos` (`id_producto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table inventario_ohlala.detalle_producto: ~0 rows (approximately)

-- Dumping structure for table inventario_ohlala.devolucion
CREATE TABLE IF NOT EXISTS `devolucion` (
  `id_devolucion` int NOT NULL AUTO_INCREMENT,
  `id_pedido` int DEFAULT NULL,
  `id_producto` int DEFAULT NULL,
  `tipo_devolucion` varchar(50) DEFAULT NULL,
  `hora_devolucion` datetime DEFAULT NULL,
  `observacion` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`id_devolucion`),
  KEY `FK_devolucion_productos` (`id_producto`),
  KEY `FK_devolucion_pedido` (`id_pedido`) USING BTREE,
  CONSTRAINT `FK_devolucion_pedidos` FOREIGN KEY (`id_pedido`) REFERENCES `pedido` (`id_pedido`),
  CONSTRAINT `FK_devolucion_productos` FOREIGN KEY (`id_producto`) REFERENCES `productos` (`id_producto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table inventario_ohlala.devolucion: ~0 rows (approximately)

-- Dumping structure for table inventario_ohlala.estado
CREATE TABLE IF NOT EXISTS `estado` (
  `id_estado` int NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(70) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`id_estado`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='se cambió el nombre de id_estado_pedido a solo id_estado y la tabla tambien se cambió el nombre de estado_pedido a estado, entonces el id_estado va a estar de llave foranea en otras tablas con el nombre id_estado_pedido pero es la misma.';

-- Dumping data for table inventario_ohlala.estado: ~4 rows (approximately)
INSERT INTO `estado` (`id_estado`, `descripcion`) VALUES
	(1, 'Pendiente'),
	(2, 'Realizado'),
	(3, 'Finalizado'),
	(4, 'Cancelado');

-- Dumping structure for table inventario_ohlala.excepciones
CREATE TABLE IF NOT EXISTS `excepciones` (
  `id_excepciones` int NOT NULL AUTO_INCREMENT,
  `id_insumos` int NOT NULL DEFAULT '0',
  `numero_pedido` int NOT NULL DEFAULT '0',
  `cantidad` int DEFAULT NULL,
  PRIMARY KEY (`id_excepciones`),
  KEY `FK_excepciones_insumos` (`id_insumos`),
  KEY `FK_excepciones_pedido` (`numero_pedido`),
  CONSTRAINT `FK_excepciones_insumos` FOREIGN KEY (`id_insumos`) REFERENCES `insumos` (`id_insumos`),
  CONSTRAINT `FK_excepciones_pedido` FOREIGN KEY (`numero_pedido`) REFERENCES `pedido` (`numero_pedido`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table inventario_ohlala.excepciones: ~0 rows (approximately)

-- Dumping structure for table inventario_ohlala.insumos
CREATE TABLE IF NOT EXISTS `insumos` (
  `id_insumos` int NOT NULL AUTO_INCREMENT,
  `nombre_insumo` varchar(45) DEFAULT NULL,
  `cantidad` int DEFAULT NULL,
  PRIMARY KEY (`id_insumos`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table inventario_ohlala.insumos: ~8 rows (approximately)
INSERT INTO `insumos` (`id_insumos`, `nombre_insumo`, `cantidad`) VALUES
	(1, 'Aguacates', NULL),
	(2, 'Salchichas', NULL),
	(3, 'Lechuga', 25),
	(4, 'Platano Maduro', NULL),
	(5, 'Mortadela Zenú', NULL),
	(6, 'Huevos', NULL),
	(8, 'Yogurt', NULL),
	(13, 'test mod', NULL);

-- Dumping structure for table inventario_ohlala.inventario
CREATE TABLE IF NOT EXISTS `inventario` (
  `id_lote` int NOT NULL AUTO_INCREMENT,
  `id_insumos` int DEFAULT NULL,
  `cantidad` double DEFAULT NULL,
  `unidad` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `fecha_ingreso` date DEFAULT NULL,
  `fecha_caducidad` date DEFAULT NULL,
  `id_proovedor` int DEFAULT NULL,
  PRIMARY KEY (`id_lote`) USING BTREE,
  KEY `FK_inventario_insumos` (`id_insumos`),
  KEY `FK_inventario_proovedor` (`id_proovedor`),
  CONSTRAINT `FK_inventario_insumos` FOREIGN KEY (`id_insumos`) REFERENCES `insumos` (`id_insumos`),
  CONSTRAINT `FK_inventario_proovedor` FOREIGN KEY (`id_proovedor`) REFERENCES `proveedores` (`id_proveedor`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table inventario_ohlala.inventario: ~2 rows (approximately)
INSERT INTO `inventario` (`id_lote`, `id_insumos`, `cantidad`, `unidad`, `fecha_ingreso`, `fecha_caducidad`, `id_proovedor`) VALUES
	(1, 6, 12, 'unidades', '2023-11-08', NULL, NULL),
	(2, 6, 24, 'unidades', '2023-11-08', NULL, NULL);

-- Dumping structure for table inventario_ohlala.mesa
CREATE TABLE IF NOT EXISTS `mesa` (
  `id_mesa` int NOT NULL AUTO_INCREMENT,
  `capacidad` int NOT NULL,
  `numero_mesa` int DEFAULT NULL,
  PRIMARY KEY (`id_mesa`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table inventario_ohlala.mesa: ~3 rows (approximately)
INSERT INTO `mesa` (`id_mesa`, `capacidad`, `numero_mesa`) VALUES
	(2, 6, 5),
	(3, 3, 7),
	(4, 5, 8);

-- Dumping structure for table inventario_ohlala.pedido
CREATE TABLE IF NOT EXISTS `pedido` (
  `id_pedido` int NOT NULL AUTO_INCREMENT,
  `numero_pedido` int NOT NULL,
  `id_estado` int DEFAULT NULL,
  `id_mesa` int DEFAULT NULL,
  PRIMARY KEY (`id_pedido`),
  KEY `FK_pedido_mesa` (`id_mesa`),
  KEY `FK_pedido_estado_pedido` (`id_estado`) USING BTREE,
  KEY `numero_pedido` (`numero_pedido`),
  CONSTRAINT `FK_pedido_estado` FOREIGN KEY (`id_estado`) REFERENCES `estado` (`id_estado`),
  CONSTRAINT `FK_pedido_mesa` FOREIGN KEY (`id_mesa`) REFERENCES `mesa` (`id_mesa`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table inventario_ohlala.pedido: ~0 rows (approximately)

-- Dumping structure for table inventario_ohlala.productos
CREATE TABLE IF NOT EXISTS `productos` (
  `id_producto` int NOT NULL AUTO_INCREMENT,
  `nombre_producto` varchar(45) NOT NULL,
  `precio` double NOT NULL DEFAULT (0),
  `descripcion` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_producto`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table inventario_ohlala.productos: ~2 rows (approximately)
INSERT INTO `productos` (`id_producto`, `nombre_producto`, `precio`, `descripcion`) VALUES
	(1, 'Arroz con Pollo ', 15000, 'Arroz con Pollo y papas a la francesa'),
	(2, 'Salchipapa', 15000, 'papa, salchicha, chorizo');

-- Dumping structure for table inventario_ohlala.productos_pedido
CREATE TABLE IF NOT EXISTS `productos_pedido` (
  `id_producto` int NOT NULL,
  `id_pedido` int NOT NULL,
  `cantidad` int DEFAULT NULL,
  PRIMARY KEY (`id_producto`,`id_pedido`),
  KEY `FK_pedido` (`id_pedido`),
  KEY `FK_producto` (`id_producto`),
  CONSTRAINT `FK_pedido` FOREIGN KEY (`id_pedido`) REFERENCES `pedido` (`id_pedido`),
  CONSTRAINT `FK_producto` FOREIGN KEY (`id_producto`) REFERENCES `productos` (`id_producto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table inventario_ohlala.productos_pedido: ~0 rows (approximately)

-- Dumping structure for table inventario_ohlala.proveedores
CREATE TABLE IF NOT EXISTS `proveedores` (
  `id_proveedor` int NOT NULL AUTO_INCREMENT,
  `NIT` bigint DEFAULT NULL,
  `nombre_proveedor` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `celular` bigint DEFAULT NULL,
  `direccion` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id_proveedor`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table inventario_ohlala.proveedores: ~1 rows (approximately)
INSERT INTO `proveedores` (`id_proveedor`, `NIT`, `nombre_proveedor`, `celular`, `direccion`) VALUES
	(1, 355464666, 'Andrés Lopez', 3132487205, 'Calle 1A # 8-85 Buenos Aires ');

-- Dumping structure for table inventario_ohlala.requisitos_productos
CREATE TABLE IF NOT EXISTS `requisitos_productos` (
  `id_requisitos` int NOT NULL AUTO_INCREMENT,
  `id_producto` int DEFAULT NULL,
  `id_insumos` int DEFAULT NULL,
  `cantidad` int DEFAULT NULL,
  PRIMARY KEY (`id_requisitos`),
  KEY `FK_requisitos_productos_productos` (`id_producto`),
  KEY `FK_requisitos_productos_insumos` (`id_insumos`),
  CONSTRAINT `FK_requisitos_productos_insumos` FOREIGN KEY (`id_insumos`) REFERENCES `insumos` (`id_insumos`),
  CONSTRAINT `FK_requisitos_productos_productos` FOREIGN KEY (`id_producto`) REFERENCES `productos` (`id_producto`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table inventario_ohlala.requisitos_productos: ~2 rows (approximately)
INSERT INTO `requisitos_productos` (`id_requisitos`, `id_producto`, `id_insumos`, `cantidad`) VALUES
	(1, 1, 5, 3),
	(2, 1, 6, 4);

-- Dumping structure for table inventario_ohlala.reserva
CREATE TABLE IF NOT EXISTS `reserva` (
  `id_reserva` int NOT NULL AUTO_INCREMENT,
  `hora_reserva` datetime NOT NULL,
  `identificacion` bigint DEFAULT NULL,
  `id_mesa` int DEFAULT NULL,
  `estado` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT 'Pendiente',
  PRIMARY KEY (`id_reserva`),
  KEY `FK_reserva_mesa` (`id_mesa`),
  KEY `FK_reserva_cliente` (`identificacion`),
  CONSTRAINT `FK_reserva_cliente` FOREIGN KEY (`identificacion`) REFERENCES `cliente` (`identificacion`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_reserva_mesa` FOREIGN KEY (`id_mesa`) REFERENCES `mesa` (`id_mesa`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table inventario_ohlala.reserva: ~4 rows (approximately)
INSERT INTO `reserva` (`id_reserva`, `hora_reserva`, `identificacion`, `id_mesa`, `estado`) VALUES
	(26, '2023-11-16 00:04:00', 1070626166, 3, 'Realizado'),
	(28, '2023-11-16 00:13:00', 1070626163, 2, 'Pendiente'),
	(29, '2023-11-16 02:17:00', 12312312312, 3, 'Cancelado'),
	(30, '2023-11-16 15:23:00', 1070634566, 4, 'Finalizada');

-- Dumping structure for table inventario_ohlala.venta
CREATE TABLE IF NOT EXISTS `venta` (
  `numero_etiqueta` int NOT NULL AUTO_INCREMENT,
  `fecha_venta` date DEFAULT NULL,
  `identificacion` bigint DEFAULT NULL,
  `numero_pedido` int DEFAULT NULL,
  PRIMARY KEY (`numero_etiqueta`),
  KEY `FK_venta_pedido` (`numero_pedido`),
  KEY `FK_venta_cliente` (`identificacion`) USING BTREE,
  CONSTRAINT `FK_venta_cliente` FOREIGN KEY (`identificacion`) REFERENCES `cliente` (`identificacion`),
  CONSTRAINT `FK_venta_pedido` FOREIGN KEY (`numero_pedido`) REFERENCES `pedido` (`numero_pedido`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Aqui va las ventas y el historial de ventas que se le agrega el mes de algún producto o plato de comida vendido';

-- Dumping data for table inventario_ohlala.venta: ~0 rows (approximately)

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;

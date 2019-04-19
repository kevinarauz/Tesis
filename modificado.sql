-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 27-03-2019 a las 00:10:06
-- Versión del servidor: 10.1.34-MariaDB
-- Versión de PHP: 7.2.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tesis`
--
CREATE DATABASE IF NOT EXISTS `tesis` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE `tesis`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bibliografias`
--

DROP TABLE IF EXISTS `bibliografias`;
CREATE TABLE `bibliografias` (
  `id` int(11) NOT NULL,
  `título` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `tipo_de_publicación` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `sitio web` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `bibliografias`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `encuestas`
--

DROP TABLE IF EXISTS `encuestas`;
CREATE TABLE `encuestas` (
  `id` int(11) NOT NULL,
  `edad` varchar(11) COLLATE utf8_unicode_ci NOT NULL,
  `genero` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `nivel_ed` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `n_pers` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `zon_urb` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `cons_con` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `norm_con` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `cen_sal` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `inst_med` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `cost_mar` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `carr_trans` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `atrp_esc` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `terr_noc` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `cond_end` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `cont_cad` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `serv_bas` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `des_alim` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `hac_san` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `lluvias` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `estc_agua` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `fam_muer` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `replicas` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `enf_pre` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `fam_vict` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `encuestas`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `factores`
--

DROP TABLE IF EXISTS `factores`;
CREATE TABLE `factores` (
  `id` int(11) NOT NULL,
  `factor` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `descripcion` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `factores`
--

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `bibliografias`
--
ALTER TABLE `bibliografias`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `encuestas`
--
ALTER TABLE `encuestas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `factores`
--
ALTER TABLE `factores`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `factores`
--
ALTER TABLE `factores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

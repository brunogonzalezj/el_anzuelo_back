-- CreateTable
CREATE TABLE `pedidos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fecha_creacion` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `estado` ENUM('PENDIENTE', 'PREPARANDO', 'LISTO', 'ENTREGADO') NOT NULL DEFAULT 'PENDIENTE',
    `tipo_pedido` ENUM('MESA', 'DELIVERY') NOT NULL,
    `mesa_id` INTEGER NULL,
    `mesero_id` INTEGER NULL,
    `nombre_cliente` VARCHAR(191) NULL,
    `direccion_cliente` VARCHAR(191) NULL,
    `telefono_cliente` VARCHAR(191) NULL,
    `repartidor_id` INTEGER NULL,
    `total` DOUBLE NOT NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `detalles_pedido` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pedido_id` INTEGER NOT NULL,
    `plato_id` INTEGER NOT NULL,
    `cantidad` INTEGER NOT NULL,
    `subtotal` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `detalles_extra` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `detalle_pedido_id` INTEGER NOT NULL,
    `extra_id` INTEGER NOT NULL,
    `cantidad` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mesas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `numero` INTEGER NOT NULL,
    `sector` ENUM('A', 'B', 'C') NOT NULL,
    `estado` ENUM('DISPONIBLE', 'RESERVADA', 'OCUPADA') NOT NULL DEFAULT 'DISPONIBLE',
    `capacidad` INTEGER NOT NULL,

    UNIQUE INDEX `mesas_numero_key`(`numero`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `reservas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre_cliente` VARCHAR(191) NOT NULL,
    `telefono` VARCHAR(191) NOT NULL,
    `fecha` DATETIME(3) NOT NULL,
    `hora` VARCHAR(191) NOT NULL,
    `cant_personas` INTEGER NOT NULL,
    `mesa_id` INTEGER NULL,
    `sector_preferido` ENUM('A', 'B', 'C') NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `inventario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `categoria` ENUM('PESCADOS', 'MARISCOS', 'EXTRAS', 'INSUMOS', 'LIMPIEZA', 'VERDURAS') NOT NULL,
    `stock_actual` DOUBLE NOT NULL,
    `stock_minimo` DOUBLE NOT NULL,
    `unidad_medida` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `usuarios` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `apellido` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `rol` ENUM('ENCARGADO', 'MESERO', 'CAJERO', 'CHEF', 'REPARTIDOR') NOT NULL,
    `estado` ENUM('ACTIVO', 'INACTIVO') NOT NULL DEFAULT 'ACTIVO',

    UNIQUE INDEX `usuarios_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `extras` ADD CONSTRAINT `extras_id_fkey` FOREIGN KEY (`id`) REFERENCES `inventario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `pedidos` ADD CONSTRAINT `pedidos_mesa_id_fkey` FOREIGN KEY (`mesa_id`) REFERENCES `mesas`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `pedidos` ADD CONSTRAINT `pedidos_mesero_id_fkey` FOREIGN KEY (`mesero_id`) REFERENCES `usuarios`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `pedidos` ADD CONSTRAINT `pedidos_repartidor_id_fkey` FOREIGN KEY (`repartidor_id`) REFERENCES `usuarios`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `detalles_pedido` ADD CONSTRAINT `detalles_pedido_pedido_id_fkey` FOREIGN KEY (`pedido_id`) REFERENCES `pedidos`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `detalles_pedido` ADD CONSTRAINT `detalles_pedido_plato_id_fkey` FOREIGN KEY (`plato_id`) REFERENCES `platos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `detalles_extra` ADD CONSTRAINT `detalles_extra_detalle_pedido_id_fkey` FOREIGN KEY (`detalle_pedido_id`) REFERENCES `detalles_pedido`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `detalles_extra` ADD CONSTRAINT `detalles_extra_extra_id_fkey` FOREIGN KEY (`extra_id`) REFERENCES `extras`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `reservas` ADD CONSTRAINT `reservas_mesa_id_fkey` FOREIGN KEY (`mesa_id`) REFERENCES `mesas`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

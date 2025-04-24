-- CreateTable
CREATE TABLE `platos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `descripcion` VARCHAR(191) NOT NULL,
    `precio` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `extras_platos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_plato` INTEGER NOT NULL,
    `id_extra` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `extras` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `extras_platos` ADD CONSTRAINT `extras_platos_id_plato_fkey` FOREIGN KEY (`id_plato`) REFERENCES `platos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `extras_platos` ADD CONSTRAINT `extras_platos_id_extra_fkey` FOREIGN KEY (`id_extra`) REFERENCES `extras`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

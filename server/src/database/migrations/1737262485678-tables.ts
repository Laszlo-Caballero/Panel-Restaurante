import { MigrationInterface, QueryRunner } from "typeorm";

export class Tables1737262485678 implements MigrationInterface {
    name = 'Tables1737262485678'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`catergorias\` (\`idCategoria\` int NOT NULL AUTO_INCREMENT, \`categoria\` varchar(50) NOT NULL, PRIMARY KEY (\`idCategoria\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`imagen\` (\`idImagen\` int NOT NULL AUTO_INCREMENT, \`imagenPath\` varchar(255) NOT NULL, PRIMARY KEY (\`idImagen\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`comida\` (\`idComida\` int NOT NULL AUTO_INCREMENT, \`nombre\` varchar(255) NOT NULL, \`precio\` float NOT NULL, \`estado\` tinyint NOT NULL DEFAULT 1, \`descripcion\` text NOT NULL, \`vendidos\` int NOT NULL DEFAULT '0', UNIQUE INDEX \`IDX_031c0f43d91e276311753a3cf2\` (\`nombre\`), PRIMARY KEY (\`idComida\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user\` (\`idUser\` int NOT NULL AUTO_INCREMENT, \`nombre\` varchar(25) NOT NULL, \`email\` varchar(255) NOT NULL, \`tipo\` varchar(50) NOT NULL DEFAULT 'empleado', \`contraseña\` varchar(500) NOT NULL, \`imagen\` varchar(255) NULL, UNIQUE INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` (\`email\`), PRIMARY KEY (\`idUser\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`categoriaComida\` (\`idComida\` int NOT NULL, \`idCategoria\` int NOT NULL, INDEX \`IDX_1e0181de6c98a55e0d7e61b43c\` (\`idComida\`), INDEX \`IDX_afc9568027db2d304220ec7d35\` (\`idCategoria\`), PRIMARY KEY (\`idComida\`, \`idCategoria\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`imagenComida\` (\`idComida\` int NOT NULL, \`idImagen\` int NOT NULL, INDEX \`IDX_4c977477c6e9a3d216e2a46998\` (\`idComida\`), INDEX \`IDX_537754ad1479d69f5f2211df3f\` (\`idImagen\`), PRIMARY KEY (\`idComida\`, \`idImagen\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`categoriaComida\` ADD CONSTRAINT \`FK_1e0181de6c98a55e0d7e61b43cd\` FOREIGN KEY (\`idComida\`) REFERENCES \`comida\`(\`idComida\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`categoriaComida\` ADD CONSTRAINT \`FK_afc9568027db2d304220ec7d35c\` FOREIGN KEY (\`idCategoria\`) REFERENCES \`catergorias\`(\`idCategoria\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`imagenComida\` ADD CONSTRAINT \`FK_4c977477c6e9a3d216e2a469989\` FOREIGN KEY (\`idComida\`) REFERENCES \`comida\`(\`idComida\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`imagenComida\` ADD CONSTRAINT \`FK_537754ad1479d69f5f2211df3f6\` FOREIGN KEY (\`idImagen\`) REFERENCES \`imagen\`(\`idImagen\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`imagenComida\` DROP FOREIGN KEY \`FK_537754ad1479d69f5f2211df3f6\``);
        await queryRunner.query(`ALTER TABLE \`imagenComida\` DROP FOREIGN KEY \`FK_4c977477c6e9a3d216e2a469989\``);
        await queryRunner.query(`ALTER TABLE \`categoriaComida\` DROP FOREIGN KEY \`FK_afc9568027db2d304220ec7d35c\``);
        await queryRunner.query(`ALTER TABLE \`categoriaComida\` DROP FOREIGN KEY \`FK_1e0181de6c98a55e0d7e61b43cd\``);
        await queryRunner.query(`DROP INDEX \`IDX_537754ad1479d69f5f2211df3f\` ON \`imagenComida\``);
        await queryRunner.query(`DROP INDEX \`IDX_4c977477c6e9a3d216e2a46998\` ON \`imagenComida\``);
        await queryRunner.query(`DROP TABLE \`imagenComida\``);
        await queryRunner.query(`DROP INDEX \`IDX_afc9568027db2d304220ec7d35\` ON \`categoriaComida\``);
        await queryRunner.query(`DROP INDEX \`IDX_1e0181de6c98a55e0d7e61b43c\` ON \`categoriaComida\``);
        await queryRunner.query(`DROP TABLE \`categoriaComida\``);
        await queryRunner.query(`DROP INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` ON \`user\``);
        await queryRunner.query(`DROP TABLE \`user\``);
        await queryRunner.query(`DROP INDEX \`IDX_031c0f43d91e276311753a3cf2\` ON \`comida\``);
        await queryRunner.query(`DROP TABLE \`comida\``);
        await queryRunner.query(`DROP TABLE \`imagen\``);
        await queryRunner.query(`DROP TABLE \`catergorias\``);
    }

}

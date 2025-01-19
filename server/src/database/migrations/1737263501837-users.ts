import { MigrationInterface, QueryRunner } from 'typeorm';

export class Users1737263501837 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(
      'INSERT INTO user (nombre, email, contraseña, tipo) VALUES ("admin", "admin@admin.com", "$2b$10$89lNl6kfhrOFn6SON5cfJeBDBOVqHFxjiSKDDB.DLAknOQv7fHhUm", "admin")',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query('DELETE FROM USER WHERE email = "admin@admin.com"');
  }
}

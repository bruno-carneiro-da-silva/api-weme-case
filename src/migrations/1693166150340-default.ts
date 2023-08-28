import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1693166150340 implements MigrationInterface {
    name = 'Default1693166150340'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "passwords" ADD "name" text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "passwords" DROP COLUMN "name"`);
    }

}

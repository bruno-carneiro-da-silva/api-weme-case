import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1692894671772 implements MigrationInterface {
    name = 'Default1692894671772'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "passwords" ALTER COLUMN "security_code" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "passwords" ALTER COLUMN "security_code" SET NOT NULL`);
    }

}

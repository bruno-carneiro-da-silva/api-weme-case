import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1692907414997 implements MigrationInterface {
    name = 'Default1692907414997'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "passwords" DROP CONSTRAINT "FK_32d16fa06d45d1573dea164b637"`);
        await queryRunner.query(`ALTER TABLE "passwords" RENAME COLUMN "registersId" TO "user_id"`);
        await queryRunner.query(`ALTER TABLE "passwords" ADD CONSTRAINT "FK_72ee375de524a1d87396f4f2a02" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "passwords" DROP CONSTRAINT "FK_72ee375de524a1d87396f4f2a02"`);
        await queryRunner.query(`ALTER TABLE "passwords" RENAME COLUMN "user_id" TO "registersId"`);
        await queryRunner.query(`ALTER TABLE "passwords" ADD CONSTRAINT "FK_32d16fa06d45d1573dea164b637" FOREIGN KEY ("registersId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}

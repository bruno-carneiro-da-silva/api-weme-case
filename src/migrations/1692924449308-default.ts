import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1692924449308 implements MigrationInterface {
    name = 'Default1692924449308'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "userPassword" ("user_id" integer NOT NULL, "allDetails" integer NOT NULL, CONSTRAINT "PK_1baf7d033e6afe026f255141a4b" PRIMARY KEY ("user_id", "allDetails"))`);
        await queryRunner.query(`CREATE INDEX "IDX_59594d4f1de2ec4281f389b2cd" ON "userPassword" ("user_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_672f713d029af2ff4017348c8e" ON "userPassword" ("allDetails") `);
        await queryRunner.query(`ALTER TABLE "userPassword" ADD CONSTRAINT "FK_59594d4f1de2ec4281f389b2cd4" FOREIGN KEY ("user_id") REFERENCES "subjects"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "userPassword" ADD CONSTRAINT "FK_672f713d029af2ff4017348c8ee" FOREIGN KEY ("allDetails") REFERENCES "passwords"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "userPassword" DROP CONSTRAINT "FK_672f713d029af2ff4017348c8ee"`);
        await queryRunner.query(`ALTER TABLE "userPassword" DROP CONSTRAINT "FK_59594d4f1de2ec4281f389b2cd4"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_672f713d029af2ff4017348c8e"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_59594d4f1de2ec4281f389b2cd"`);
        await queryRunner.query(`DROP TABLE "userPassword"`);
    }

}

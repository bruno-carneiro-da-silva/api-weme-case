import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1693008107918 implements MigrationInterface {
    name = 'Default1693008107918'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" text NOT NULL, "password" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "subjects" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_1a023685ac2b051b4e557b0b280" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "passwords" ("id" SERIAL NOT NULL, "user" text NOT NULL, "email" text NOT NULL, "password" character varying NOT NULL, "website" character varying NOT NULL, "security_code" text, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "user_id" integer, CONSTRAINT "UQ_d0a10460f043698b886b0bd97bf" UNIQUE ("email"), CONSTRAINT "PK_c5629066962a085dea3b605e49f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "userPassword" ("user_id" integer NOT NULL, "allDetails" integer NOT NULL, CONSTRAINT "PK_1baf7d033e6afe026f255141a4b" PRIMARY KEY ("user_id", "allDetails"))`);
        await queryRunner.query(`CREATE INDEX "IDX_59594d4f1de2ec4281f389b2cd" ON "userPassword" ("user_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_672f713d029af2ff4017348c8e" ON "userPassword" ("allDetails") `);
        await queryRunner.query(`ALTER TABLE "passwords" ADD CONSTRAINT "FK_72ee375de524a1d87396f4f2a02" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "userPassword" ADD CONSTRAINT "FK_59594d4f1de2ec4281f389b2cd4" FOREIGN KEY ("user_id") REFERENCES "subjects"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "userPassword" ADD CONSTRAINT "FK_672f713d029af2ff4017348c8ee" FOREIGN KEY ("allDetails") REFERENCES "passwords"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "userPassword" DROP CONSTRAINT "FK_672f713d029af2ff4017348c8ee"`);
        await queryRunner.query(`ALTER TABLE "userPassword" DROP CONSTRAINT "FK_59594d4f1de2ec4281f389b2cd4"`);
        await queryRunner.query(`ALTER TABLE "passwords" DROP CONSTRAINT "FK_72ee375de524a1d87396f4f2a02"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_672f713d029af2ff4017348c8e"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_59594d4f1de2ec4281f389b2cd"`);
        await queryRunner.query(`DROP TABLE "userPassword"`);
        await queryRunner.query(`DROP TABLE "passwords"`);
        await queryRunner.query(`DROP TABLE "subjects"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}

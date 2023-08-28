import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1693232484641 implements MigrationInterface {
    name = 'Default1693232484641'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "passwords_resets" ("id" SERIAL NOT NULL, "email" text NOT NULL, "token" text NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_eea59423d10545a1248b0b154f4" UNIQUE ("token"), CONSTRAINT "PK_c01e7c8fa5c692ed7bad47fad5a" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "passwords_resets"`);
    }

}

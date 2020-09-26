import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class setupTables1601116327053 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const usersTable = new Table({
      name: 'users',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isGenerated: true,
        },
        {
          name: 'first_name',
          type: 'varchar',
        },
        {
          name: 'last_name',
          type: 'varchar',
        },
      ],
    });

    await queryRunner.createTable(usersTable, false);

    const rolesTable = new Table({
      name: 'roles',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isGenerated: true,
        },
        {
          name: 'name',
          type: 'varchar',
        },
      ],
    });

    await queryRunner.createTable(rolesTable, false);

    const programsTable = new Table({
      name: 'programs',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isGenerated: true,
        },
        {
          name: 'name',
          type: 'varchar',
        },
        {
          name: 'description',
          type: 'varchar',
        },
        {
          name: 'content',
          type: 'json',
        },
      ],
    });

    await queryRunner.createTable(programsTable, false);

    const user_entities = new Table({
      name: 'users_entities',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isGenerated: true,
        },
        {
          name: 'user_id',
          type: 'int',
        },
        {
          name: 'role_id',
          type: 'int',
        },
        {
          name: 'program_id',
          type: 'int',
        },
      ],
    });

    await queryRunner.createTable(user_entities, true);

    const userForeing = new TableForeignKey({
      columnNames: ['user_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'users',
      onDelete: 'CASCADE',
    });

    await queryRunner.createForeignKey('users_entities', userForeing);

    const roleForeing = new TableForeignKey({
      columnNames: ['role_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'roles',
      onDelete: 'CASCADE',
    });

    await queryRunner.createForeignKey('users_entities', roleForeing);

    const programForeing = new TableForeignKey({
      columnNames: ['program_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'programs',
      onDelete: 'CASCADE',
    });

    await queryRunner.createForeignKey('users_entities', programForeing);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('users_entities');
    const userForeignKey = table.foreignKeys.find(
      fk => fk.columnNames.indexOf('user_id') !== -1,
    );
    const roleForeignKey = table.foreignKeys.find(
      fk => fk.columnNames.indexOf('role_id') !== -1,
    );
    const programForeignKey = table.foreignKeys.find(
      fk => fk.columnNames.indexOf('program_id') !== -1,
    );
    await queryRunner.dropForeignKey('users_entities', userForeignKey);
    await queryRunner.dropForeignKey('users_entities', roleForeignKey);
    await queryRunner.dropForeignKey('users_entities', programForeignKey);
    await queryRunner.dropTable('users');
    await queryRunner.dropTable('roles');
    await queryRunner.dropTable('programs');
    await queryRunner.dropTable('users_entities');
  }
}

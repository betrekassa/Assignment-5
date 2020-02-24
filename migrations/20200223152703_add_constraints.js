// for applying migration 
exports.up = async knex => {
  
    await knex.schema.dropTableIfExists('tbl_cition');
    await knex.schema.createTable('tbl_cition', table => {
      table.increments();
      table.integer('officer_id').notNullable(),
      table.integer('driver_id').notNullable(),
      table.integer('violation_id').notNullable(),
      table.timestamp('date_citited').defaultTo(knex.fn.now()).notNullable();
      table.timestamp('created_date').defaultTo(knex.fn.now());
      table.timestamp('updated_date').defaultTo(knex.fn.now());
    });

    await knex.schema.dropTableIfExists('tbl_officer');
    await knex.schema.createTable('tbl_officer', table => {
      table.increments();
      table.string('title', 100).notNullable();
      table.string('phone_number',10).notNullable();
      table.integer('person_id').notNullable();
      table.timestamp('date_hired').defaultTo(knex.fn.now()).notNullable();
      table.timestamp('created_date').defaultTo(knex.fn.now());
      table.timestamp('updated_date').defaultTo(knex.fn.now());
    });
  
    await knex.schema.dropTableIfExists('tbl_driver');
    await knex.schema.createTable('tbl_driver', table => {
      table.increments();
      table.integer('person_id');
      table.string('licence_number', 100).notNullable();
      table.string('phone_number',10).notNullable();
      table.timestamp('date_issued').defaultTo(knex.fn.now()).notNullable();
      table.timestamp('created_date').defaultTo(knex.fn.now());
      table.timestamp('updated_date').defaultTo(knex.fn.now());
    });
    
    
    await knex.schema.dropTableIfExists('tbl_person');
    await knex.schema.createTable('tbl_person', table => {
      table.increments();
      table.string('first_name', 25).notNullable();
      table.string('last_name', 25).notNullable();
      table.string('gender', 5).notNullable();
      table.timestamp('date_of_birth').defaultTo(knex.fn.now());
      table.timestamp('created_date').defaultTo(knex.fn.now());
      table.timestamp('updated_date').defaultTo(knex.fn.now());
  
    });
  
  
  
    await knex.schema.dropTableIfExists('tbl_lov_violation');
    await knex.schema.createTable('tbl_lov_violation', table => {
      table.increments();
      table.string('violation_desc', 150).notNullable();
      table.float('fee_amout', 5, 2)
      table.timestamp('created_date').defaultTo(knex.fn.now());
      table.timestamp('updated_date').defaultTo(knex.fn.now());
  
    });
  
     await knex.schema.table('tbl_driver',table =>{
        table.foreign('person_id')
        .references('tbl_person.id')
        .onDelete('cascade');
        });

   await knex.schema.table('tbl_officer',table =>{
        table.foreign('person_id')
        .references('tbl_person.id')
        .onDelete('cascade');
        });
     
    await knex.schema.table('tbl_cition',table =>{
        table.foreign('officer_id')
               .references('tbl_officer.id')
               .onDelete('cascade');
        table.foreign('driver_id')
               .references('tbl_driver.id')
               .onDelete('cascade');  
        table.foreign('violation_id')
               .references('tbl_lov_violation.id')
               .onDelete('cascade');  
     
        }); 
    
    
    };
  
  
// for reverse migration
  exports.down = async knex => {
    await knex.schema.dropTableIfExists('tbl_cition');
    await knex.schema.dropTableIfExists('tbl_officer');
    await knex.schema.dropTableIfExists('tbl_driver');
    await knex.schema.dropTableIfExists('tbl_person');
    await knex.schema.dropTableIfExists('tbl_lov_violation');
  
  
};
  
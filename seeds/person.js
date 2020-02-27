exports.seed = async knex => {

  
/*   knex.raw('truncate table tbl_cition');
  knex.raw('truncate table tbl_officer');
  knex.raw('truncate table tbl_driver');
  knex.raw('truncate table tbl_person');
  knex.raw('truncate table tbl_lov_violation'); */
  await knex.raw('TRUNCATE TABLE tbl_cition RESTART IDENTITY CASCADE');
  await knex.raw('TRUNCATE TABLE tbl_officer RESTART IDENTITY CASCADE');
  await knex.raw('TRUNCATE TABLE tbl_driver RESTART IDENTITY CASCADE');
  await knex.raw('TRUNCATE TABLE tbl_lov_violation RESTART IDENTITY CASCADE');
  await knex.raw('TRUNCATE TABLE tbl_person RESTART IDENTITY CASCADE');


/*
  knex.raw('ALTER TABLE tbl_person AUTO_INCREMENT = 1');
  knex.raw('ALTER TABLE tbl_officer AUTO_INCREMENT = 1');
  knex.raw('ALTER TABLE tbl_driver AUTO_INCREMENT = 1');
  
 */  await knex('tbl_person').insert([
    {
      first_name: 'Abera',
      last_name: 'Shena',
      gender: 'M',
      date_of_birth: '1987-01-01'
    },
    {
      first_name: 'Almaz',
      last_name: 'Golla',
      gender: 'F',
      date_of_birth: '1997-01-01'
    },
    {
      first_name: 'Sofia',
      last_name: 'Abegaze',
      gender: 'F',
      date_of_birth: '1980-01-01'
    },
    {
      first_name: 'Abebe',
      last_name: 'Bikela',
      gender: 'M',
      date_of_birth: '1990-01-01'
    },
    {
      first_name: 'Aberashe',
      last_name: 'Shena',
      gender: 'F',
      date_of_birth: '1978-01-01'
    }
    ,
    {
      first_name: 'Maza',
      last_name: 'Buzayehu',
      gender: 'F',
      date_of_birth: '1970-01-01'
    },
    {
      first_name: 'Tezeta',
      last_name: 'Tariku',
      gender: 'F',
      date_of_birth: '1978-01-01'
    }
    ,
    {
      first_name: 'Peter',
      last_name: 'Sean',
      gender: 'M',
      date_of_birth: '1998-01-01'
    }
    ,
    {
      first_name: 'Addis',
      last_name: 'Girma',
      gender: 'F',
      date_of_birth: '1998-01-01'
    },
      {
        first_name: 'Zeta',
        last_name: 'Ariku',
        gender: 'F',
        date_of_birth: '1978-01-01'
      }
      ,
      {
        first_name: 'Aster',
        last_name: 'Sean',
        gender: 'M',
        date_of_birth: '1998-01-01'
      }
      ,
      {
        first_name: 'Tdis',
        last_name: 'Girma',
        gender: 'F',
        date_of_birth: '1998-01-01'
      }
      ,
      {
        first_name: 'Baho',
        last_name: 'Johon',
        gender: 'F',
        date_of_birth: '1990-02-01'
      },
      {
      first_name: 'Aricho',
      last_name: 'Stone',
      gender: 'F',
      date_of_birth: '1990-02-01'
    }
    
  ]);
    //await knex('tbl_person');
   await knex('tbl_person')
    .where(1, '=', 1);

    await knex('tbl_driver').insert([
    { licence_number: 'A00010', phone_number: '8980135467' ,date_issued:'2008-01-01',person_id:1},
    { licence_number: 'A00011', phone_number: '5980135467' ,date_issued:'2008-02-01',person_id:3},
    { licence_number: 'A00012', phone_number: '6980135467' ,date_issued:'2008-03-01',person_id:5},
    { licence_number: 'A00013', phone_number: '9980135467' ,date_issued:'2008-04-01',person_id:7},
    { licence_number: 'A00014', phone_number: '3980135467' ,date_issued:'2008-07-01',person_id:9},
    { licence_number: 'A00015', phone_number: '5880135467' ,date_issued:'2009-01-01',person_id:11},
  ]);
  
  await knex('tbl_officer').insert([
    { title: 'First Class', phone_number: '8980135467' ,date_hired:'2008-01-01',person_id:2},
    { title: 'Lutenate', phone_number: '5980135467' ,date_hired:'2008-02-01',person_id:4},
    { title: 'Sharife', phone_number: '6980135467' ,date_hired:'2008-03-01',person_id:6},
    { title: 'First Class', phone_number: '9980135467' ,date_hired:'2008-04-01',person_id:8},
    { title: 'Lutenate', phone_number: '3980135467' ,date_hired:'2008-07-01',person_id:10},
    { title: 'First Class', phone_number: '5880135467' ,date_hired:'2009-01-01',person_id:12},
  ]); 


};

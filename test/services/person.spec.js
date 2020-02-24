import { expect } from 'chai';
import {addperson, removeperson, searchperson,updateperson,getpersonbyid} from '../../src/services/person'; 
import knex from '../../src/database'

describe('Traffic Violation services', () => {
  
  // Removing test
  describe('removeperson', () => {
     it('Removes person record whose ID = 2', async () => {
      await removeperson(2);
      expect(await knex('tbl_person')
        .where({ id: 2 })).to.be.empty 
      expect(await knex('tbl_officer')
        .where({person_id: 2 })).to.be.empty 
    });
    
  });

  // Search an with an existing ID happy path
  describe('getpersonbyid', () => {
    it('Get person whose ID = 1', async () => {
     //const {person} = await getpersonbyid(20);
      expect(await getpersonbyid(1)).to.have.length(1); 
    });
  });

  // Search with non-existing ID unhappy path
  describe('getpersonbyid', () => {
    it('Get person whose ID = 20', async () => {
     //const {person} = await getpersonbyid(20);
      expect(await getpersonbyid(20)).to.be.length(1); 
    });
  });

  // Happy Path Test 
  describe('updateperson', async () => {
    it('updates the person first_name to "Alex"', async () => 
    {
      await updateperson({pk_person_id: 4 , first_name: 'Alex', last_name:'Abera', gender:'M', date_of_birth:'2000-01-02'});
      const person = await knex('tbl_person')
        .where({ id: 4 });
      
      expect(person.first_name).to.equal('Alex');
    });
  });

});
  //});

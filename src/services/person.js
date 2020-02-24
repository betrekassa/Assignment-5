import db from '../database'
import { text } from 'express';
//import bodyParser from 'body-parser';

export const addperson = async (person) => 
  {
   
      const ids = await db('tbl_person').insert(person).returning('id');//.then(function(data)
      return ids; 
  };

  // Remove person given id as input
  export const removeperson = async id => {
    await db('tbl_person').delete().where({id : id});
    return 'Sucessfully Removed.'; 
  };
  
  // Get person profile given id as input
  export const getpersonbyid = async id => {
    return await db('tbl_person').where({id : id}); 
  };
  
  // Search by texting contains 
  export const searchperson = async text => {
    return await db('tbl_person').where('first_name','like', `%${text}%`);
  };

  // Update person given all id, first_name last_name gender date_of_birth
  export const updateperson = async person => {
    await db('tbl_person')
    .where('id', person.pk_person_id)
    .update({
        first_name: person.first_name,
        last_name:person.last_name,
        gender: person.gender,
        date_of_birth: person.date_of_birth  
    })
    .then(function(data) 
    { 
      //response.json({ success: true });
      return({success: true});
      //response.json(data);
    });
  };
  

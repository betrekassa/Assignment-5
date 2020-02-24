import express from 'express';
import db from './database';
import bodyParser from 'body-parser';
import {addperson, removeperson, searchperson,updateperson,getpersonbyid} from './services/person';

  const app = express();

  app.use(express.json());

  // to be able route static files from public folder 
  app.use(express.static('public'));
  
  // create json parser
  var jsonParser = bodyParser.json()

  // create urlencoded parser
  var urlencodedParser = bodyParser.urlencoded({ extended: false })

   
  // route home page
  const home_view = async (request, response) => {
        response.sendFile('index.html');  
  };
  app.get('/', home_view);

  // route remove person page
  const remove_view = async (request, response) => {
        response.sendFile('remove_person.html');  
      };
  app.get('/remove_person.html', remove_view);
    
  // route add person page
  const add_view = async (request, response) => {
        response.sendFile('add_person.html');  
      };
  app.get('/add_person.html', add_view);

  // route update person page
  const update_view = async (request, response) => {
        response.sendFile('update_person.html');  
      };
  app.get('/update_person.html', update_view);


  // route search person page
  const search_view = async (request, response) => {
        response.sendFile('search_person.html');  
  };
  app.get('/search_person.html', search_view);

  // Calling Add person to insert new person record
  app.post('/add_person.html',urlencodedParser,async(request,response) =>{ 
    
  const person = request.body;
  let new_person_id = await addperson(person);
      response.send("The new Person Added got "+new_person_id+" as ID!");
    //});
    });

    app.post('/remove_person.html',urlencodedParser,async(request,response) =>{ 
      const pk_id = request.body.pk_person_id;
      const result = await removeperson(pk_id);
      response.send(result + " is sucesfully removed");
  });


   app.post('/search_person.html',urlencodedParser,async(request,response) =>{ 
   // const text = request.body.searh_text;

   response.json(await searchperson(request.body.searchtext));
    // await db('tbl_person')
    // .where('first_name','like', `%${request.body.searchtext}%`)
    // .then(function(data) 
    // { 
    //   response.send(data);
    // });
  });
   
  app.post('/update_person.html',urlencodedParser,async(request,response) =>{ 
      
    const person = request.body;
    await updateperson(person);
    response.json(person);
  });

  app.post('/search_result.html',urlencodedParser,async(request,response) =>{
    const person = await getpersonbyid(parseFloat(request.body.id));
    response.json(person);
  });

  app.post('/search_result_by_text.html',urlencodedParser,async(request,response) =>{
    const person = await searchperson(request.body.searchtext);
    response.json(person);
  });


export default app;
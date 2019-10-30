const express = require('express');
const app = express();
const data = require('./data.json');

/** Verbos HTTP
 * GET: Receber dados de um Resource
 * POST: Enviar dados ou informações 
 * PUT: Atualizar os dados
 * DELETE: Deletar os dados
 */


 // Informando ao Express a utilização do JSON
app.use(express.json());

app.get('/clients', function (request, response) {
response.json(data);
});


app.get('/clients/:id', function (request, response) {
  const { id } = request.params;
  const client = data.find(cli => cli.id == id);


  if(!client) return response.status(204).json();

  response.json(client);

});

app.post('/clients', function (request, response) {
  const {name,email} = request.body;

  response.json({name, email});
;

});

// DELETE em desenvolvimento

/*app.delete('/clients/:id', function (request, response) {
  const { id } = request.params;
  const clientsFiltered = data.filter(client => client.id =  id);

  if(!client) return response.status(204).json();


});
*/

app.put('/clients/:id', function (request, response) {
  const { id } = request.params;
  const client = data.find(cli => cli.id == id);

  if(!client) return response.status(204).json();

  const { name } = request.body;

  client.name = name;

  response.json(client);

});



app.listen(3000, function () {
  console.log('Server is running');
});
const express = require('express'); // Pacote
const cors = require('cors');
const { errors } = require('celebrate')
const routes = require('./routes'); // Arquivo

const app = express();

app.use(cors(
     {origin: '*'}
));
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;
/**
 * Rota / Recurso
 */

 /**
  * Métodos HTTP
  * GET:    Buscar/Listar uma Informação do back-end
  * POST:   Criar uma informação no back-end
  * PUT    Alterar uma informação no back-end
  * DELETE  Apagar uma informação no back-end
  */

  /**
   * Tipos de parâmetros:
   * 
   * Query Params: Parâmetros nomeados enviados na rota após "?"(filtros, paginação)
   * Route Params: Parâmetros utilizados para identificar recurso
   * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
   */

   /**
    * SQL: MySQl, SQLite, PostgreSQl, Oracle, MSSQL
    * No SQL: MOnogoDB, CouchDB, etc
    */

    /**
     * Driver: SELECT * FROM users;
     * Query Builder: table('users').select('*').where() KNEX.JS
     */





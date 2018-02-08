import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import bodyParser from 'body-parser';
import schema from './schema.js';
const server = express();

server.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql'
}));

server.use('/graphql', bodyParser.json(), graphqlExpress({schema}));

server.listen(process.env.PORT, () => {
    console.log('listening on port '+ process.env.PORT);
});
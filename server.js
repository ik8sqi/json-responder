const fastify = require('fastify')({ logger: false });
const fs = require('fs');

const jsonPayload = JSON.parse(fs.readFileSync('./data.json', 'utf8'));

fastify.all('/*', async (request, reply) => {
  reply
    .header('Content-Type', 'application/json')
    .code(200)
    .send(jsonPayload);
});

const port = process.env.PORT || 10000;
fastify.listen({ port, host: '0.0.0.0' }).catch(err => {
  fastify.log.error(err);
  process.exit(1);
});

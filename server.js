const fastify = require('fastify')({ logger: false });
const fs = require('fs');

const jsonPayload = fs.readFileSync('./data.json', 'utf8')

const handler = async (request, reply) => {
  reply
    .header('Content-Type', 'application/json')
    .code(200)
    .send(jsonPayload);
};

fastify.get('/', handler);
fastify.get('/*', handler);
fastify.post('/*', handler);
fastify.put('/*', handler);
fastify.delete('/*', handler);
fastify.patch('/*', handler);
fastify.options('/*', handler);

const port = process.env.PORT || 10000;
fastify.listen({ port, host: '0.0.0.0' }).catch(err => {
  fastify.log.error(err);
  process.exit(1);
});

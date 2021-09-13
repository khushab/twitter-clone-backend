
exports.seed = async function (knex) {

  await knex.raw('TRUNCATE TABLE "users" CASCADE');

  await knex('users').insert([
    {
      id: 1,
      name: 'Khushab',
      email: 'khushabalam7@gmail.com',
      handle: '@khushab',
      password: 'pass123'
    },
    {
      id: 2,
      name: 'Elon Musk',
      email: 'elon@gmail.com',
      handle: '@elon',
      password: 'pass1234'
    },
  ])
};

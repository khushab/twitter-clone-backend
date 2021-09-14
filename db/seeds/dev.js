
exports.seed = async function (knex) {

  await knex.raw('TRUNCATE TABLE "users" CASCADE');

  await knex('users').insert([
    {
      id: 1,
      name: 'Khushab',
      email: 'khushabalam7@gmail.com',
      handle: 'khushab',
      password: 'pass123',
      image: 'https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png'
    },
    {
      id: 2,
      name: 'Elon Musk',
      email: 'elon@gmail.com',
      handle: 'elon',
      password: 'pass1234',
      image: 'https://pbs.twimg.com/profile_images/1423663740344406029/l_-QOIHY_400x400.jpg'
    },
  ])

  await knex('tweets').insert([
    {
      id: 1,
      tweet: 'My first tweet',
      userId: 1,
    },
    {
      id: 2,
      tweet: 'My second tweet',
      userId: 1,
    },
  ])

  await knex('followings').insert([
    {
      id: 1,
      userId: 1,
      followingId: 2
    }
  ])
};

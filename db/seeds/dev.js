
exports.seed = async function (knex) {

  await knex.raw('TRUNCATE TABLE "users" CASCADE');

  await knex('users').insert([
    {
      "id": 3,
      "name": "Mohammed",
      "email": "ka@gmail.com",
      "handle": "alam",
      "password": "$2b$08$zTGWfZ8Q0bPn8XPmcsXruO2rizao5o8VlOONUcIjlzELF.YUSEmgO",
      "image": "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png",
      "created_at": "2021-09-14T11:17:40.476Z",
      "updated_at": "2021-09-14T11:17:40.476Z"
    },
    {
      "id": 4,
      "name": "Brad Traversy",
      "email": "traversy@gmail.com",
      "handle": "traversymedia",
      "password": "$2b$08$DvNwwCl1mYRdzvxLXULqS.AjrgnFuYHR844F5jFb6cm/6iSzCEjTu",
      "image": "https://pbs.twimg.com/profile_images/856983737426423809/6jebtwP-_400x400.jpg",
      "created_at": "2021-09-14T15:55:42.400Z",
      "updated_at": "2021-09-14T15:55:42.400Z"
    },
    {
      "id": 5,
      "name": "Marques Brownlee",
      "email": "mkbhd@gmail.com",
      "handle": "mkbhd",
      "password": "$2b$08$deqeJ1tEuYrdrakeVmf6GeJt/NaQ7/26OzwqNYRzw7SuZsNKApCn2",
      "image": "https://pbs.twimg.com/profile_images/1364264349204959235/fJPgOBd2_400x400.jpg",
      "created_at": "2021-09-15T06:41:37.537Z",
      "updated_at": "2021-09-15T06:41:37.537Z"
    },
    {
      "id": 6,
      "name": "Adrian Twarog",
      "email": "adrian@gmail.com",
      "handle": "adrian_twarog",
      "password": "$2b$08$n8tbmQRQeFYvGIwZASh90.4YfqZiHnJPo6AAzB7heDxQS.5D6gIuG",
      "image": "https://pbs.twimg.com/profile_images/1268445996192632834/Ufosoga3_400x400.jpg",
      "created_at": "2021-09-15T06:43:44.395Z",
      "updated_at": "2021-09-15T06:43:44.395Z"
    },
    {
      "id": 7,
      "name": "Web Dev Simplified",
      "email": "webdev@gmail.com",
      "handle": "DevSimplified",
      "password": "$2b$08$nfKKNLUWOVNe0SmsbXMFHO3AsSJEyNVkpPeBQSyHv6kSuu81bZn5.",
      "image": "https://pbs.twimg.com/profile_images/1086003406488113153/XBSj69e5_400x400.jpg",
      "created_at": "2021-09-15T06:44:48.003Z",
      "updated_at": "2021-09-15T06:44:48.003Z"
    },
    {
      "id": 8,
      "name": "Shreyansh",
      "email": "shrey@gmail.com",
      "handle": "shrey",
      "password": "$2b$08$5mlELHiRJjs6tmRQ9Zk2QOxJy5.VS.mS0r3OikJKER82ZpT1TFUZC",
      "image": "https://cdn.dribbble.com/users/2878951/screenshots/14013747/media/603f0b853c409547dfa51cba996f375c.png?compress=1&resize=400x300",
      "created_at": "2021-09-15T09:12:47.419Z",
      "updated_at": "2021-09-15T09:12:47.419Z"
    }
  ])

  await knex('tweets').insert([
    {
      "id": 1,
      "tweet": "My first tweet",
      "userId": 3,
      "user": {
        "id": 3,
        "name": "Mohammed",
        "email": "ka@gmail.com",
        "handle": "alam",
        "password": "$2b$08$zTGWfZ8Q0bPn8XPmcsXruO2rizao5o8VlOONUcIjlzELF.YUSEmgO",
        "image": "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png",
        "created_at": "2021-09-14T11:17:40.476Z",
        "updated_at": "2021-09-14T11:17:40.476Z"
      }
    },
    {
      "id": 2,
      "tweet": "This is my tweet",
      "userId": 3,
      "user": {
        "id": 3,
        "name": "Mohammed",
        "email": "ka@gmail.com",
        "handle": "alam",
        "password": "$2b$08$zTGWfZ8Q0bPn8XPmcsXruO2rizao5o8VlOONUcIjlzELF.YUSEmgO",
        "image": "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png",
        "created_at": "2021-09-14T11:17:40.476Z",
        "updated_at": "2021-09-14T11:17:40.476Z"
      }
    },
    {
      "id": 3,
      "tweet": "tweet from Brad Traversy",
      "userId": 4,
      "user": {
        "id": 4,
        "name": "Brad Traversy",
        "email": "traversy@gmail.com",
        "handle": "traversymedia",
        "password": "$2b$08$DvNwwCl1mYRdzvxLXULqS.AjrgnFuYHR844F5jFb6cm/6iSzCEjTu",
        "image": "https://pbs.twimg.com/profile_images/856983737426423809/6jebtwP-_400x400.jpg",
        "created_at": "2021-09-14T15:55:42.400Z",
        "updated_at": "2021-09-14T15:55:42.400Z"
      }
    },
    {
      "id": 4,
      "tweet": "My name is Khushab",
      "userId": 3,
      "user": {
        "id": 3,
        "name": "Mohammed",
        "email": "ka@gmail.com",
        "handle": "alam",
        "password": "$2b$08$zTGWfZ8Q0bPn8XPmcsXruO2rizao5o8VlOONUcIjlzELF.YUSEmgO",
        "image": "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png",
        "created_at": "2021-09-14T11:17:40.476Z",
        "updated_at": "2021-09-14T11:17:40.476Z"
      }
    },
    {
      "id": 5,
      "tweet": "Hey! what is going on?",
      "userId": 4,
      "user": {
        "id": 4,
        "name": "Brad Traversy",
        "email": "traversy@gmail.com",
        "handle": "traversymedia",
        "password": "$2b$08$DvNwwCl1mYRdzvxLXULqS.AjrgnFuYHR844F5jFb6cm/6iSzCEjTu",
        "image": "https://pbs.twimg.com/profile_images/856983737426423809/6jebtwP-_400x400.jpg",
        "created_at": "2021-09-14T15:55:42.400Z",
        "updated_at": "2021-09-14T15:55:42.400Z"
      }
    },
    {
      "id": 6,
      "tweet": "The new iPhone is out!!",
      "userId": 5,
      "user": {
        "id": 5,
        "name": "Marques Brownlee",
        "email": "mkbhd@gmail.com",
        "handle": "mkbhd",
        "password": "$2b$08$deqeJ1tEuYrdrakeVmf6GeJt/NaQ7/26OzwqNYRzw7SuZsNKApCn2",
        "image": "https://pbs.twimg.com/profile_images/1364264349204959235/fJPgOBd2_400x400.jpg",
        "created_at": "2021-09-15T06:41:37.537Z",
        "updated_at": "2021-09-15T06:41:37.537Z"
      }
    },
    {
      "id": 7,
      "tweet": "Helloo",
      "userId": 6,
      "user": {
        "id": 6,
        "name": "Adrian Twarog",
        "email": "adrian@gmail.com",
        "handle": "adrian_twarog",
        "password": "$2b$08$n8tbmQRQeFYvGIwZASh90.4YfqZiHnJPo6AAzB7heDxQS.5D6gIuG",
        "image": "https://pbs.twimg.com/profile_images/1268445996192632834/Ufosoga3_400x400.jpg",
        "created_at": "2021-09-15T06:43:44.395Z",
        "updated_at": "2021-09-15T06:43:44.395Z"
      }
    },
    {
      "id": 8,
      "tweet": "Hello this is Shreyansh",
      "userId": 8,
      "user": {
        "id": 8,
        "name": "Shreyansh",
        "email": "shrey@gmail.com",
        "handle": "shrey",
        "password": "$2b$08$5mlELHiRJjs6tmRQ9Zk2QOxJy5.VS.mS0r3OikJKER82ZpT1TFUZC",
        "image": "https://cdn.dribbble.com/users/2878951/screenshots/14013747/media/603f0b853c409547dfa51cba996f375c.png?compress=1&resize=400x300",
        "created_at": "2021-09-15T09:12:47.419Z",
        "updated_at": "2021-09-15T09:12:47.419Z"
      }
    },
    {
      "id": 9,
      "tweet": "Hello, this app is now completed",
      "userId": 3,
      "user": {
        "id": 3,
        "name": "Mohammed",
        "email": "ka@gmail.com",
        "handle": "alam",
        "password": "$2b$08$zTGWfZ8Q0bPn8XPmcsXruO2rizao5o8VlOONUcIjlzELF.YUSEmgO",
        "image": "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png",
        "created_at": "2021-09-14T11:17:40.476Z",
        "updated_at": "2021-09-14T11:17:40.476Z"
      }
    },
    {
      "id": 10,
      "tweet": "Hello, this app is now completed",
      "userId": 3,
      "user": {
        "id": 3,
        "name": "Mohammed",
        "email": "ka@gmail.com",
        "handle": "alam",
        "password": "$2b$08$zTGWfZ8Q0bPn8XPmcsXruO2rizao5o8VlOONUcIjlzELF.YUSEmgO",
        "image": "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png",
        "created_at": "2021-09-14T11:17:40.476Z",
        "updated_at": "2021-09-14T11:17:40.476Z"
      }
    },
    {
      "id": 11,
      "tweet": "test",
      "userId": 3,
      "user": {
        "id": 3,
        "name": "Mohammed",
        "email": "ka@gmail.com",
        "handle": "alam",
        "password": "$2b$08$zTGWfZ8Q0bPn8XPmcsXruO2rizao5o8VlOONUcIjlzELF.YUSEmgO",
        "image": "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png",
        "created_at": "2021-09-14T11:17:40.476Z",
        "updated_at": "2021-09-14T11:17:40.476Z"
      }
    }
  ])

  await knex('followings').insert([
    {
      "id": 4,
      "userId": 4,
      "followingId": 7
    },
    {
      "id": 5,
      "userId": 3,
      "followingId": 5
    },
    {
      "id": 6,
      "userId": 6,
      "followingId": 5
    },
    {
      "id": 7,
      "userId": 8,
      "followingId": 3
    },
    {
      "id": 8,
      "userId": 8,
      "followingId": 5
    },
    {
      "id": 11,
      "userId": 3,
      "followingId": 7
    },
    {
      "id": 12,
      "userId": 3,
      "followingId": 4
    },
    {
      "id": 14,
      "userId": 3,
      "followingId": 8
    },
    {
      "id": 15,
      "userId": 4,
      "followingId": 6
    },
    {
      "id": 16,
      "userId": 4,
      "followingId": 5
    },
    {
      "id": 17,
      "userId": 4,
      "followingId": 3
    }
  ])
};

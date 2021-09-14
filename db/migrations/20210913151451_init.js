
exports.up = function (knex) {
    return knex.schema.createTable('users', (table) => {
        table.increments();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('handle').notNullable();
        table.string('password').notNullable();
        table.string('image');
        table.timestamps(true, true);
    })
        .createTable('tweets', (table) => {
            table.increments().notNullable();
            table.string('tweet');
            table.integer('userId').notNullable().references('id').inTable('users');
        })
        .createTable('followings', (table) => {
            table.increments().notNullable();
            table.integer('userId').notNullable().references('id').inTable('users');
            table.integer('followingId')
        })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('users').dropTableIfExists('tweets').dropTableIfExists('followings')
};

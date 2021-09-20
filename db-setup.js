const knex = require('knex');
const knexfile = require('./knexfile')
const { Model } = require('objection');

function dbSetup() {
    const env = process.env.DB_ENV || 'development'
    const db = knex(knexfile[env]);
    Model.knex(db)
}

module.exports = dbSetup;


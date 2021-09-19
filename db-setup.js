const knex = require('knex');
const knexfile = require('./db/knexfile')
const { Model } = require('objection');

function dbSetup() {
    if(process.env.NODE_ENV === "production"){
        const db = knex(knexfile.production);
    } else{
        const db = knex(knexfile.development);
    }
    Model.knex(db)
}

module.exports = dbSetup;


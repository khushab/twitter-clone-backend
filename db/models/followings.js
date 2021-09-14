const { Model } = require('objection');

class Followings extends Model {
    static get tableName() {
        return 'followings'
    }
}

module.exports = Followings
const { Model } = require('objection');

class Tweets extends Model {
    static get tableName() {
        return 'tweets'
    }

    static get relationMappings() {
        const Users = require('./users');
        return {
            user: {
                relation: Model.BelongsToOneRelation,
                modelClass: Users,
                join: {
                    from: 'tweets.userId',
                    to: 'users.id',
                },
            },
        };
    }
}

module.exports = Tweets

// join related, graphfetched, modifiers, graph join and graphfetched difference
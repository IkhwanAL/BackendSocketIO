const { Sequelize, DataTypes, Model } = require('sequelize');
const { sq } = require('../conn');

console.log(sq);
class User extends Model { };
User.init({
    user: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        unique: true,
        validate: {
            is: /^[/w/d\_\+\$#@!%&|?]+$/gi,
            not: /^[<>,."':;}\]{\[*~`()\/\\]$/g,
            notNull: true,

        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [8, 255]
        }
    }
}, {
    createdAt: true,
    updatedAt: true,
    sequelize: sq,
    modelName: 'User',
    tableName: 'Users',
});

module.exports = { User };
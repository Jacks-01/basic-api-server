'use strict';

module.exports = (db, DataTypes) => {
    return db.define('people', {
        type: DataTypes.STRING,
        allowNull: false,
    },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false,
    },
        pronouns: {
            type: DataTypes.ENUM,
            values: ['they/them', 'she/her', 'he/him'],
            allowNull: false,
        }
    );
};
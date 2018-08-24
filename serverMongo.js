var mongojs = require('mongojs')
var db = mongojs('myTest', ['users']);



// db.users.save({ username: 'Patrick' });


db.users.find({}, function(error, result) {

    if (error) {
        console.log('Oops, error occurs');
    } else {
        console.log('Data: ', result[0]);
    }
});

// db 
    // C R U D

    // .save() = Create
    // .find() = Read
    // .update() = Update
    // .drop() = Delete
    

/*

    2 types of Database

    Relational Database 
        - MySQL
        - Postgress
        - MariaDB

    Non-Relation Database
        - MongoDB
        - DynamoDB  


    Collection
         A group of MongoDB Documents
    Documents



*/ 
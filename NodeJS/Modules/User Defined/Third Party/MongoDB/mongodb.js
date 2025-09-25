//! before installing any third party module, we need to have  a file named "package.json" file in the project directory 

//~ to create command is --> "npm init -y" (open terminal with the correct path , i.e, path of  the project directory/folder)

//! once the "package.json" file is created, we can install the third-party modules using this command

//$ "npm install/i <name of the module>" 
//$ all modules name are lowercase, if multiple the seperated by "-"

//$ npm i mongodb
//$ npm i MongoDB (wrong)
//$ npm i mongo-db (wrong)

//~ there will be three changes --> 1) package.json , (2) node_modules (3) package-lock.json

//TODO

//! mongodb://localhost:27017/

//! use the module by importing it 

import mongodb from 'mongodb'
// console.log(mongodb.MongoClient);
//~ MongoClient class helps to create a connection with NodejS project and database


async function connectDB() {
    //! use connect('url') to connect with database
    let client = await mongodb.MongoClient.connect('mongodb://localhost:27017/')
    // console.log(client.db);
    //! create a database using , using  db("database-name")
    let database = client.db('NodeDB')
    // console.log(database.createCollection);
    //! create a collection using createCollection("collection-name")
    let collection = await database.createCollection('nodeCollection')
    // console.log(collection);

    //# create --> add a document
    collection.insertOne({
        name:'abc',
        age:23
    });
    console.log("data added");
    
    
}
connectDB();
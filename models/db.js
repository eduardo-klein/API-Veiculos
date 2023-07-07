const {MongoClient,ObjectId}  = require("mongodb");

let singleton;

let connect = async () => {
    if(singleton) return singleton

    const client = new MongoClient("mongodb+srv://Klein:mYxLgoOLyE3I0v6q@api-veiculos.cximbot.mongodb.net/");

    await client.connect();

    singleton = client.db("Loja");

    return singleton;
}

let findAll = async (collection)=>{
    const db = await connect();
    return await db.collection(collection).find().toArray();
};

let findOne = async (collection, key) => {
    const db = await connect();
    return await db.collection(collection).findOne({_id:key}); 
}

let insertOne = async (collection, object) => {
    const db = await connect();
    return await db.collection(collection).insertOne(object);
}

let deleteOne = async (collection, object)=>{
    const db = await connect();
    return await db.collection(collection).deleteOne(object);
}

let updateOne = async (collection, object, param) =>{
    const db = await connect();
    let result = await db.collection(collection).updateOne(param, {$set:object});
    return result;
}

module.exports = {
    findAll, 
    insertOne, 
    findOne,
    deleteOne,
    updateOne
};

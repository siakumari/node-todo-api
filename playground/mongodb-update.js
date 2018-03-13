//const MongoClient = require('mongodb').MongoClient;
const {MongoClient , ObjectID } = require('mongodb');
//var obj = new ObjectID();
//console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err , client)=>{
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }

  console.log('connected to MongoDB server');
const db = client.db('TodoApp')

// db.collection('Todos').findOneAndUpdate({
//   _id: new ObjectID("5aa7bca047e8a12e9a75e2dd")
// } , {
//   $set :{
//     completed: false
//   }
// } , {
//   returnOriginal : false
// }).then((result)=>{
//   console.log(result);
// });

db.collection('Users').findOneAndUpdate({
  _id : new ObjectID("5aa7cc9147e8a12e9a75e7f5")
},{
  $set : { name : 'dean'}
    , $inc:{
            age: 5
            }
 },{
  returnOriginal:false
}).then((results)=>{
  console.log(results);
});

//client.close();
});

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

// db.collection('Todos').deleteMany({text :"eat lunch"}).then((result)=>{
//   console.log(result);
// });

// db.collection('Todos').deleteOne({text : 'something to do'}).then((result) =>{
//   console.log(result);
// })

// db.collection('Todos').findOneAndDelete({completed : true}).then((result)=>{
//   console.log(result);
// });

//db.collection('Users').deleteMany({ name:'dean'});

db.collection('Users').findOneAndDelete({
  _id : new ObjectID("5aa690bea4ceeb238cfe2579")
}).then((results)=>{
  console.log(JSON.stringify(results , undefined , 2))
});


//client.close();
});

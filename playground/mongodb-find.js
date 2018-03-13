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

// db.collection('Todos').find({
//   _id: new ObjectID('5aa68ec8088b7426248bf1c0')
// }).toArray().then((docs)=>{
//   console.log('Todos');
//   console.log(JSON.stringify(docs , undefined , 2));
// } , (err)=>{
//   console.log('Unable to fetch todos' , err);
// });

// db.collection('Todos').find().count().then((count)=>{
//   console.log(`Todos count :${count}`);
// } , (err)=>{
//   console.log('Unable to fetch todos' , err);
// });

// db.collection('Users').find({name : "dean"}).count().then((count)=>{
//   console.log(`Users count :${count}`);
// } , (err)=>{
//   console.log('Unable to fetch todos' , err);
// });
db.collection('Users').find({name:'dean'}).toArray().then((docs)=>{
  console.log(JSON.stringify(docs , undefined  ,2));
});

//client.close();
});

const{ObjectID}= require('mongodb');

const{mongoose} = require('./../server/db/mongoose');
const{Todo}= require('./../server/models/todo');
const{User} = require('./../server/models/user');


// Todo.remove({}).then((result)=>{
// console.log(result);
// });

// Todo.findOneAndRemove({_id:'5abf985b491f31833bdd417b'}).then((todo)=>{
//
// });

Todo.findByIdAndRemove('5abf9ac4491f31833bdd4232').then((todo)=>{
  console.log(todo);
});

var mongoose = require('mongoose');



var User = mongoose.model('User' , {
  email:{
    type: String,
    required: true,
    trim: true,
    minlength:1
  }
});

// var user = new User({
//   email:'shalinikumari2598@gmail.com'
// });
// user.save().then((doc)=>{
//   console.log('user saved', doc);
// },(e)=>{
//   console.log('unable to save user',e);
// });

module.exports = { User};

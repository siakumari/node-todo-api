var mongoose = require('mongoose');


var Todo = mongoose.model('Todo' , {
  text:{
    type: String,
    required : true,
    minlength: 1,
    trim: true
  },
  completed:{
    type: Boolean ,
    default: false
  },
  compltedAt:{
    type : Number,
    default : null
  }
});

module.exports = { Todo };

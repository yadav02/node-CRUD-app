const mongoose = require('mongoose');

mongoose.connect('Add database url',{useNewUrlParser:true},(err)=>{
  if(!err){console.log('MongoDB connection succeeded.');
}else {
  console.log(`Error in DB connection:${err}`);
}
});
require('./employee');

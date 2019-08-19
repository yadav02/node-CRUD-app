const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/employe',{useNewUrlParser:true},(err)=>{
  if(!err){console.log('MongoDB connection succeeded.');
}else {
  console.log(`Error in DB connection:${err}`);
}
});
require('./employee');

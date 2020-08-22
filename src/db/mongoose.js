const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify: false
},()=>{
    console.log('Connected to db');
});


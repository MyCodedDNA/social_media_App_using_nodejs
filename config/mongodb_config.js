const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/social_media_app', {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we're connected to db");
});


module.exports=db;
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://10.74.17.0:27017', { useNewUrlParser: true },function (err, client) {
  if (err) throw err;

  var db = client.db('vzjob');

  db.collection('userinfo').find({}).toArray(function(err, items) {
    if(err) throw err;    
    console.log(items);
    client.close();
  });
}); 